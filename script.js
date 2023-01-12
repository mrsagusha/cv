import { RSQ1Info, RSQ2Info, UdemyInfo } from './data/coursesInfo.js';
import projectDiscriptions from './data/projectDiscriptions.js';
import createNavigationTab from './utils/createNavigationTab.js';
import createCourseTemplate from './utils/createCourseTemplate.js';
import competencesHTMLTemplate from './data/competencesHTMLTemplate.js';
import projectsHTMLTemplate from './data/projectsHTMLTemplate.js';
import setCompetencesInfoField from './utils/setCompetencesInfoField.js';
import updateMainSlideSrc from './utils/updateMainSlideSrc.js';

const tabsLeftSection = document.querySelectorAll('.tab');
const mainContent = document.querySelector('.main__content');
const mainSlideInlargeButton = document.querySelector(
  '.main-slide__inlarge-image-button'
);
let leftSlideNum = 0;
let rightSlideNum = 2;
let mainSlideNum = 1;

function addMainContent(text) {
  let mainContentInnerHtml;

  if (text === 'courses') {
    mainContentInnerHtml = `<div style="padding-right: 1.5vw">
      ${createCourseTemplate(
        RSQ1Info[0],
        RSQ1Info[1],
        RSQ1Info[2],
        RSQ1Info[3],
        RSQ1Info[4]
      )}
      ${createCourseTemplate(
        RSQ2Info[0],
        RSQ2Info[1],
        RSQ2Info[2],
        RSQ2Info[3],
        RSQ2Info[4]
      )}
      ${createCourseTemplate(
        UdemyInfo[0],
        UdemyInfo[1],
        UdemyInfo[2],
        UdemyInfo[3],
        UdemyInfo[4]
      )}
    </div>`;
    mainContent.innerHTML = mainContentInnerHtml;
  }

  if (text === 'competences') {
    mainContent.innerHTML = competencesHTMLTemplate;
  }

  if (text === 'projects') {
    mainContent.innerHTML = projectsHTMLTemplate;
  }

  const competencesList = document.querySelectorAll('.main__competence');
  const competenceInfoField = document.querySelector('.main__competence-field');
  const levelBand = document.querySelector('.level-band');
  const leftSlide = document.querySelector('.left-slide');
  const mainSlide = document.querySelector('.main-slide');
  const rightSlide = document.querySelector('.right-slide');
  const mainProjectName = document.querySelector('.main-slide__project-name');
  const mainProjectTechonologies = document.querySelector(
    '.main-slide__project-technologies'
  );
  if (mainSlide) {
    const mainSlideImage = mainSlide.firstElementChild.firstElementChild;
  }
  if (leftSlide) {
    const leftSlideImage = leftSlide.firstElementChild;
  }
  if (rightSlide) {
    const rightSlideImage = rightSlide.firstElementChild;
  }
  let levelBandCompetence = '';

  setCompetencesInfoField(
    competencesList,
    competenceInfoField,
    levelBand,
    levelBandCompetence
  );

  leftSlide.addEventListener('click', () => {
    mainSlideImage.src = leftSlideImage.src;
    if (leftSlideNum === 0) {
      leftSlideNum = 6;
      rightSlideNum = 1;
    } else if (leftSlideNum === 6) {
      leftSlideNum -= 1;
      rightSlideNum = 0;
    } else {
      {
        leftSlideNum -= 1;
        rightSlideNum = leftSlideNum + 2;
      }
    }

    updateMainSlideSrc(
      leftSlideImage,
      rightSlideImage,
      leftSlideNum,
      rightSlideNum
    );

    (function updateMainNum() {
      mainSlideNum = leftSlideNum + 1;
    })();

    if (mainSlideNum === 7) {
      mainProjectName.innerHTML = projectDiscriptions.slide0.name;
      mainProjectTechonologies.innerHTML =
        projectDiscriptions.slide0.technologies.join(' ');
    } else {
      mainProjectName.innerHTML = `${
        projectDiscriptions[`slide${mainSlideNum}`].name
      }`;
      mainProjectTechonologies.innerHTML = `${projectDiscriptions[
        `slide${mainSlideNum}`
      ].technologies.join(' ')}`;
    }
  });

  rightSlide.addEventListener('click', () => {
    mainSlideImage.src = rightSlideImage.src;

    if (rightSlideNum === 6) {
      rightSlideNum = 0;
      leftSlideNum = 5;
    } else if (rightSlideNum === 0) {
      leftSlideNum = 6;
      rightSlideNum += 1;
    } else {
      rightSlideNum += 1;
      leftSlideNum = rightSlideNum - 2;
    }

    updateMainSlideSrc(
      leftSlideImage,
      rightSlideImage,
      leftSlideNum,
      rightSlideNum
    );

    (function updateMainNum() {
      mainSlideNum = rightSlideNum - 1;
    })();

    if (mainSlideNum === -1) {
      mainProjectName.innerHTML = projectDiscriptions.slide6.name;
      mainProjectTechonologies.innerHTML =
        projectDiscriptions.slide6.technologies.join(' ');
    } else {
      mainProjectName.innerHTML = `${
        projectDiscriptions[`slide${mainSlideNum}`].name
      }`;
      mainProjectTechonologies.innerHTML = `${projectDiscriptions[
        `slide${mainSlideNum}`
      ].technologies.join(' ')}`;
    }
  });

  mainSlideInlargeButton.addEventListener('click', () => {
    document
      .querySelector('.main-slide__image-wrapper')
      .classList.add('showered');
    document
      .querySelector('.main-slide__inlarge-image-button')
      .classList.add('hide');
  });
}

createNavigationTab('about me');
createNavigationTab('competences');
createNavigationTab('courses');
createNavigationTab('projects');

tabsLeftSection.forEach((tab) => {
  tab.addEventListener('click', () => tab.classList.toggle('pressed'));
});

const navigationTabsList = document.querySelectorAll('.navigation-tab');

navigationTabsList.forEach((tab) => {
  tab.addEventListener('click', () => {
    navigationTabsList.forEach((tab) => {
      if (tab.classList.contains('pressed-navigation-tab')) {
        tab.classList.remove('pressed-navigation-tab');
      }
    });
    tab.classList.add('pressed-navigation-tab');
    addMainContent(tab.textContent);
  });
});
