/**
 * Spec-Driven Development Workflow Hook
 * Enforces: constitution → specify → plan → tasks → implement
 */

const path = require('path');
const fs = require('fs');

module.exports = {
  onPromptSubmitted: async (event, context) => {
    const prompt = event.prompt;
    const projectDir = context.projectDir;

    // Skip if already in SDD workflow
    if (prompt.startsWith('/speckit.')) {
      return;
    }

    // Check if this looks like implementation code generation
    const isImplementationPrompt = /create|implement|build|write code|add feature|fix bug/i.test(prompt) &&
      !/spec|plan|task|constitution/i.test(prompt);

    if (isImplementationPrompt) {
      const constitutionPath = path.join(projectDir, '.specify', 'memory', 'constitution.md');
      const specsDir = path.join(projectDir, 'specs');

      const hasConstitution = fs.existsSync(constitutionPath);
      const hasSpecs = fs.existsSync(specsDir) && fs.readdirSync(specsDir).length > 0;

      if (!hasConstitution || !hasSpecs) {
        context.addWarningMessage('⚠️ Spec-Driven Development: Consider using /speckit commands first');

        const suggestions = [];
        if (!hasConstitution) {
          suggestions.push('/speckit.constitution - Establish project principles');
        }
        if (!hasSpecs) {
          suggestions.push('/speckit.specify - Create feature specification');
        }

        context.addInfoMessage('Suggested workflow:');
        suggestions.forEach(s => context.addInfoMessage(`  • ${s}`));
      }
    }
  },

  onTaskCreated: async (event, context) => {
    const taskName = event.task.name;

    // Suggest SDD naming convention for new tasks
    if (!/^\d{3}-/.test(taskName)) {
      context.addInfoMessage('💡 Tip: Consider using feature branch naming (e.g., "001-user-auth") for SDD tasks');
    }
  }
};