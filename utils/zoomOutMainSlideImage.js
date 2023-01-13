export default function zoomOutMainSlideImage(rightSection) {
  rightSection.addEventListener('click', (e) => {
    if (
      e.target.classList[0] !== 'slide-image' &&
      e.target.classList[0] !== 'main-slide__inlarge-image-button' &&
      e.target.classList[0] !== 'fa-solid' &&
      e.target.classList[0] !== 'navigation-tab' &&
      e.target.classList[0] !== 'navigation-container'
    ) {
      if (document.querySelector('.main-slide__image-wrapper')) {
        document
          .querySelector('.main-slide__image-wrapper')
          .classList.remove('opened');
      }
      if (document.querySelector('.main-slide__image-wrapper')) {
        document
          .querySelector('.main-slide__image-wrapper')
          .classList.add('closed');
      }
      if (document.querySelector('.main-slide__inlarge-image-button')) {
        document
          .querySelector('.main-slide__inlarge-image-button')
          .classList.remove('hide');
      }
    }
  });

  document
    .querySelector('.left-section-content')
    .addEventListener('click', (e) => {
      if (
        e.target.classList[0] !== 'slide-image' &&
        e.target.classList[0] !== 'main-slide__inlarge-image-button'
      ) {
        if (document.querySelector('.main-slide__image-wrapper')) {
          document
            .querySelector('.main-slide__image-wrapper')
            .classList.remove('opened');
        }
        if (document.querySelector('.main-slide__image-wrapper')) {
          document
            .querySelector('.main-slide__image-wrapper')
            .classList.add('closed');
        }
        if (document.querySelector('.main-slide__inlarge-image-button')) {
          document
            .querySelector('.main-slide__inlarge-image-button')
            .classList.remove('hide');
        }
      }
    });
}
