'use strict';

const projectName = 'survey-form';

const surveyLabels = document.getElementsByTagName('label');

for (const label of surveyLabels) {
  const INPUT_TYPE = document.getElementById(label.getAttribute('for')).type;
  if (!(INPUT_TYPE === 'radio' || INPUT_TYPE === 'checkbox')) {
    label.style.margin = '1em 0';
  } else {
    label.style.margin = '0.5em 0';
  }
}