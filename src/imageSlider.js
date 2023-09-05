function initImageSlider() {
  const imageLeft = document.querySelector("#image_left");
  const imageRight = document.querySelector("#image_right");

  imageLeft.addEventListener("click", () => {
    slideLeft();
  });
  imageRight.addEventListener("click", () => {
    slideRight();
  });
}

function slideLeft() {}

function slideRight() {
  const imageTrack = document.querySelector("#image_track");

  if (imageTrack.classList.replace("-translate-x-0", "-translate-x-[100%]")) {
    return;
  }

  if (
    imageTrack.classList.replace("-translate-x-[100%]", "-translate-x-[200%]")
  ) {
    return;
  }

  if (imageTrack.classList.replace("-translate-x-[200%]", "-translate-x-0")) {
    return;
  }
}

export { initImageSlider };
