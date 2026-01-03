/**
 * BMad Phase Transition Hook
 * 
 * Auto-suggests next phase when a phase completes.
 * Listens for phase completion events and suggests appropriate next steps.
 */

module.exports = {
  /**
   * Called after a prompt finishes execution
   * @param {Object} event - The event data
   * @param {Object} context - The execution context
   * @returns {Object|undefined} - Modified data or undefined
   */
  onPromptFinished: async (event, context) => {
    const { result, artifacts } = event;
    
    // Check if this was a BMad phase command
    const lastCommand = context?.lastCommand || '';
    const isBmadCommand = lastCommand.startsWith('/bmad-');
    
    if (!isBmadCommand) {
      return undefined;
    }
    
    // Determine current phase and suggest next
    const phaseSuggestions = {
      '/bmad-analyze': {
        nextPhase: 'planning',
        nextCommand: '/bmad-plan',
        message: 'Analysis complete! Ready to move to Planning phase? Try `/bmad-plan`'
      },
      '/bmad-plan': {
        nextPhase: 'solutioning',
        nextCommand: '/bmad-solution',
        message: 'Planning complete! Ready to move to Solutioning phase? Try `/bmad-solution`'
      },
      '/bmad-solution': {
        nextPhase: 'implementation',
        nextCommand: '/bmad-implement',
        message: 'Solutioning complete! Ready to move to Implementation phase? Try `/bmad-implement`'
      },
      '/bmad-implement': {
        nextPhase: 'complete',
        nextCommand: null,
        message: 'Implementation complete! You can start a new sprint with `/bmad-sprint`'
      },
      '/bmad-sprint': {
        nextPhase: 'implementation',
        nextCommand: '/bmad-sprint',
        message: 'Sprint planned! Ready to execute stories? Invoke the Developer agent.'
      }
    };
    
    const suggestion = phaseSuggestions[lastCommand];
    if (suggestion) {
      return {
        phaseTransition: {
          currentPhase: lastCommand,
          nextPhase: suggestion.nextPhase,
          suggestedCommand: suggestion.nextCommand,
          message: suggestion.message
        }
      };
    }
    
    return undefined;
  },

  /**
   * Called before a command executes
   * @param {Object} event - The event data
   * @param {Object} context - The execution context
   * @returns {Object|undefined} - Modified data or undefined
   */
  onBeforeCommand: async (event, context) => {
    const { command } = event;
    
    // Validate BMad command prerequisites
    const prerequisites = {
      '/bmad-plan': ['analysis'],
      '/bmad-solution': ['planning', 'architecture'],
      '/bmad-implement': ['solutioning', 'stories'],
      '/bmad-sprint': ['epics']
    };
    
    const prereq = prerequisites[command];
    if (prereq) {
      // Return validation info - actual checking done by agent
      return {
        commandValidation: {
          command,
          prerequisites,
          note: 'Ensure previous phase artifacts exist before proceeding'
        }
      };
    }
    
    return undefined;
  }
};