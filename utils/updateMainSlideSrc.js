export default function updateMainSlideSrc(
  leftSlide,
  rightSlide,
  leftSlideNum,
  rightSlideNum
) {
  leftSlide.src = `../assets/images/slider/slide${[leftSlideNum]}.png`;
  rightSlide.src = `../assets/images/slider/slide${[rightSlideNum]}.png`;
}
