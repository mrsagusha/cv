import updateMainSlideSrc from './updateMainSlideSrc.js';
import updateMainSlideNum from './updateMainSlideSrc.js';
import projectDiscriptions from '../data/projectDiscriptions.js';

export default function toggleImageByLeftClick(
  mainSlideImage,
  leftSlideImage,
  leftSlideNum,
  rightSlideNum,
  mainSlideNum,
  mainProjectName,
  mainProjectTechonologies
) {
  mainSlideImage.src = leftSlideImage.src;

  if (leftSlideNum === 0) {
    leftSlideNum = 6;
    rightSlideNum = 1;
  } else if (leftSlideNum === 6) {
    leftSlideNum -= 1;
    rightSlideNum = 0;
  } else {
    leftSlideNum -= 1;
    rightSlideNum = leftSlideNum + 2;
  }

  updateMainSlideSrc(
    leftSlideImage,
    leftSlideImage,
    leftSlideNum,
    rightSlideNum
  );

  updateMainSlideNum(mainSlideNum, leftSlideNum);

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
}
