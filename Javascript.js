//*Getting HTML elements
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const image = document.querySelector(".imageContainer");

//*Number the images

let currentImg = 1;

next.addEventListener("click", () => {
  currentImg++;
  console.log(currentImg);
  updateImg();
});

// **We gave negative according to it so that the picture starts from 0 at the beginning.

function updateImg() {
  image.style.transform = `translateX(-${(currentImg - 1) * 700}px)`;
  console.log(image.style.transform);
}
