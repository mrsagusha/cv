export default function setCompetencesInfoField(
  competencesList,
  competenceInfoField,
  levelBand,
  levelBandCompetence
) {
  competencesList.forEach((competence) => {
    competence.addEventListener('click', () => {
      competenceInfoField.firstElementChild.innerHTML = competence.innerHTML;
      if (levelBandCompetence) levelBand.classList.remove(levelBandCompetence);
      levelBand.classList.add(competence.innerHTML.replace(/\./g, ''));
      levelBandCompetence = competence.innerHTML.replace(/\./g, '');
    });
  });
}
