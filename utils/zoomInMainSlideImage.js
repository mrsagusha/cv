export default function zoomInMainSlideImage(mainSlideInlargeButton) {
  if (mainSlideInlargeButton) {
    mainSlideInlargeButton.addEventListener('click', () => {
      document
        .querySelector('.main-slide__image-wrapper')
        .classList.remove('closed');
      document
        .querySelector('.main-slide__image-wrapper')
        .classList.add('opened');
      document
        .querySelector('.main-slide__inlarge-image-button')
        .classList.add('hide');
    });
  }
}
