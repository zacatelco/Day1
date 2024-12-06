let backArrow = document.getElementById("backward");
let frontArrow = document.getElementById("foward");
let images = document.querySelectorAll("img");
let currentImagesIndex = 0;

backArrow.addEventListener("click", moveBackard);
frontArrow.addEventListener("click", moveFoward);

function moveBackard() {
  images[currentImagesIndex].style.display = "none";
  if (currentImagesIndex == 0) {
    currentImagesIndex = images.length - 1;
  } else {
    currentImagesIndex--;
  }
  images[currentImagesIndex].style.display = "block";
}

function moveFoward() {
  console.log("in the foward function");
  images[currentImagesIndex].style.display = "none";
  if (currentImagesIndex + 1 == images.length) {
    currentImagesIndex = 0;
  } else {
    currentImagesIndex++;
  }
  images[currentImagesIndex].style.display = "block";
}
