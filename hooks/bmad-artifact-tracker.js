/**
 * BMad Artifact Tracker Hook
 * 
 * Tracks BMad artifacts created during workflow execution.
 * Maintains an index of artifacts by phase and type.
 */

const fs = require('fs');
const path = require('path');

// Artifact patterns by phase
const ARTIFACT_PATTERNS = {
  analysis: [
    '{planning_artifacts}/research/**/*',
    '{planning_artifacts}/product-brief*.md'
  ],
  planning: [
    '{planning_artifacts}/prd.md',
    '{planning_artifacts}/ux-design.md',
    '{planning_artifacts}/tech-spec.md'
  ],
  solutioning: [
    '{planning_artifacts}/architecture.md',
    '{planning_artifacts}/epics/**/*.md',
    '{planning_artifacts}/test-plan.md'
  ],
  implementation: [
    '{implementation_artifacts}/sprint-status.yaml',
    '{implementation_artifacts}/stories/**/*.md',
    '{implementation_artifacts}/dev-agent-record.md'
  ]
};

// Phase order for progression tracking
const PHASE_ORDER = ['analysis', 'planning', 'solutioning', 'implementation'];

module.exports = {
  /**
   * Called when a file is added or modified
   * @param {Object} event - The event data
   * @param {Object} context - The execution context
   * @returns {Object|undefined} - Modified data or undefined
   */
  onFileAdded: async (event, context) => {
    const { filePath, fileContent } = event;
    
    // Check if this is a BMad artifact
    const artifactInfo = identifyArtifact(filePath);
    
    if (artifactInfo) {
      return {
        artifactTracked: {
          path: filePath,
          phase: artifactInfo.phase,
          type: artifactInfo.type,
          timestamp: new Date().toISOString()
        }
      };
    }
    
    return undefined;
  },

  /**
   * Called when a file is read
   * @param {Object} event - The event data
   * @param {Object} context - The execution context
   * @returns {Object|undefined} - Modified data or undefined
   */
  onFileRead: async (event, context) => {
    const { filePath } = event;
    
    // Check if reading a BMad artifact
    const artifactInfo = identifyArtifact(filePath);
    
    if (artifactInfo) {
      return {
        artifactAccess: {
          path: filePath,
          phase: artifactInfo.phase,
          type: artifactInfo.type,
          timestamp: new Date().toISOString()
        }
      };
    }
    
    return undefined;
  },

  /**
   * Get current artifact status for a project
   * @param {Object} event - The event data
   * @param {Object} context - The execution context
   * @returns {Object} - Artifact status summary
   */
  getArtifactStatus: async (event, context) => {
    const { projectRoot } = context || {};
    
    const status = {
      phases: {},
      totalArtifacts: 0,
      phaseProgress: {}
    };
    
    // Calculate progress for each phase
    for (const phase of PHASE_ORDER) {
      const patterns = ARTIFACT_PATTERNS[phase];
      const artifacts = [];
      
      for (const pattern of patterns) {
        const resolvedPath = pattern
          .replace('{planning_artifacts}', path.join(projectRoot || '.', '_bmad-output', 'planning'))
          .replace('{implementation_artifacts}', path.join(projectRoot || '.', '_bmad-output', 'implementation'));
        
        if (fs.existsSync(resolvedPath)) {
          if (fs.statSync(resolvedPath).isDirectory()) {
            const files = findFiles(resolvedPath);
            artifacts.push(...files);
          } else if (fs.existsSync(resolvedPath)) {
            artifacts.push(resolvedPath);
          }
        }
      }
      
      status.phases[phase] = artifacts;
      status.totalArtifacts += artifacts.length;
      status.phaseProgress[phase] = artifacts.length > 0 ? 'complete' : 'pending';
    }
    
    return status;
  }
};

/**
 * Identify if a file path matches BMad artifact patterns
 * @param {string} filePath - The file path to check
 * @returns {Object|null} - Artifact info or null
 */
function identifyArtifact(filePath) {
  const normalizedPath = filePath.toLowerCase();
  
  // Check each phase's patterns
  for (const [phase, patterns] of Object.entries(ARTIFACT_PATTERNS)) {
    for (const pattern of patterns) {
      const regexPattern = pattern
        .replace('{planning_artifacts}', '.*planning.*')
        .replace('{implementation_artifacts}', '.*implementation.*')
        .replace(/\*\*/g, '.*')
        .replace(/\*/g, '[^/]*')
        .replace(/\./g, '\\.')
        .replace(/\{[^}]+\}/g, '[^/]+');
      
      const regex = new RegExp(regexPattern, 'i');
      if (regex.test(normalizedPath)) {
        // Determine artifact type from path
        const type = determineArtifactType(normalizedPath, phase);
        return { phase, type };
      }
    }
  }
  
  return null;
}

/**
 * Determine artifact type from file path
 * @param {string} filePath - The file path
 * @param {string} phase - The phase
 * @returns {string} - The artifact type
 */
function determineArtifactType(filePath, phase) {
  const pathLower = filePath.toLowerCase();
  
  const typeIndicators = {
    'research': ['research', 'analysis'],
    'product-brief': ['product-brief', 'brief'],
    'prd': ['prd', 'requirements'],
    'ux': ['ux', 'design', 'ui'],
    'tech-spec': ['tech-spec', 'technical', 'specification'],
    'architecture': ['architecture', 'arch'],
    'epic': ['epic'],
    'story': ['story'],
    'test-plan': ['test-plan', 'test'],
    'sprint-status': ['sprint-status'],
    'dev-record': ['dev-agent-record', 'record']
  };
  
  for (const [type, indicators] of Object.entries(typeIndicators)) {
    if (indicators.some(ind => pathLower.includes(ind))) {
      return type;
    }
  }
  
  return 'general';
}

/**
 * Find all files in a directory recursively
 * @param {string} dir - The directory to search
 * @returns {string[]} - Array of file paths
 */
function findFiles(dir) {
  const files = [];
  
  if (!fs.existsSync(dir)) {
    return files;
  }
  
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
      files.push(...findFiles(fullPath));
    } else if (entry.isFile()) {
      files.push(fullPath);
    }
  }
  
  return files;
}