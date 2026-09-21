(() => {
  const scenarios = {
    full: { applications: true, grades: true, procurement: true, rfq: true },
    'grade-only': { applications: false, grades: true, procurement: true, rfq: true },
    'application-only': { applications: true, grades: false, procurement: true, rfq: true },
    none: { applications: false, grades: false, procurement: false, rfq: false }
  };

  let currentScenario = 'full';

  function setScenario(name) {
    const state = scenarios[name];
    if (!state) throw new Error(`Unknown planning scenario: ${name}`);
    currentScenario = name;

    document.querySelectorAll('[data-application-action]').forEach((element) => {
      element.hidden = !state.applications;
    });
    document.querySelectorAll('[data-grade-link]').forEach((element) => {
      element.hidden = !state.grades;
    });
    document.querySelectorAll('[data-grade-plain]').forEach((element) => {
      element.hidden = state.grades;
    });
    document.querySelectorAll('[data-procurement-card]').forEach((element) => {
      element.hidden = !state.procurement;
    });
    document.querySelector('[data-module="M4-PROCUREMENT_PATHS"]').hidden = !state.procurement;
    document.querySelectorAll('[data-body-rfq]').forEach((element) => {
      element.hidden = !state.rfq;
    });
    document.querySelector('[data-module="M5-FINAL-RFQ"]').hidden = !state.rfq;

    const sentence = document.querySelector('[data-route-sentence]');
    if (state.grades && state.applications) {
      sentence.textContent = 'Open a grade page for product information, or explore an application for guidance on what to evaluate.';
    } else if (state.grades) {
      sentence.textContent = 'Open a grade page for product information.';
    } else if (state.applications) {
      sentence.textContent = 'Explore an application for guidance on what to evaluate.';
    } else {
      sentence.textContent = '';
    }
  }

  window.appPlanning = {
    setScenario,
    getScenario: () => currentScenario
  };

  setScenario('full');
})();
