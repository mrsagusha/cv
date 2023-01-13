import { competencesList } from './competencesList.js';

const competencesHTMLTemplate = `
<div class="main__competences-wrapper">
  <div class="main__competence-field">
    <p class="main__competence-text">Press competence button</p>
    <div class="level-band"></div>
  </div>
  <div class="main__competences">${competencesList
    .map((competence) => {
      return `<button class="main__competence">${competence}</button>`;
    })
    .join('</br>')}</div>
</>
`;

export default competencesHTMLTemplate;
