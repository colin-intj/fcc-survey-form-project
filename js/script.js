'use strict';

const projectName = 'survey-form';

const surveyLabels = document.getElementsByTagName('label');

for (const label of surveyLabels) {
  /*
   * Because it's value changes with each iteration, the `inputType` variable
   * doesn't have a constant case name.
   */
  const inputType = document.getElementById(label.getAttribute('for')).type;
  if (!(['radio', 'checkbox'].includes(inputType))) {
    label.style.margin = '1em 0';
  } else {
    label.style.margin = '0.5em 0';
  }
}
