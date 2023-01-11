import projectDiscriptions from './projectDiscriptions.js';

const projectsHTMLTemplate = `
<div class="main__slider-wrapper">
  <div class="left-slide">
    <img class="slide-image left" src="./assets/images/slider/slide0.png"></img>
  </div>
  <div class="main-slide">
    <div class="main-slide__image-wrapper">
      <img class="slide-image" src="./assets/images/slider/slide1.png"></img>
      <button class="main-slide__inlarge-image-button">
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
    <p class="main-slide__project-name">${projectDiscriptions.slide1.name}</p>
    <p class="main-slide__project-technologies">${projectDiscriptions.slide1.technologies.join(
      ' '
    )}</p>
  </div>
  <div class="right-slide">
    <img class="slide-image right" src="./assets/images/slider/slide2.png"></img>
  </div>
</div>
`;

export default projectsHTMLTemplate;
