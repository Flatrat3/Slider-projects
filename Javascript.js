//*Getting HTML elements
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const image = document.querySelector(".imageContainer");
const images = document.querySelectorAll("img");

//*Number the images

let currentImg = 

next.addEventListener("click", () => {
  currentImg++;
  console.log(currentImg);
  clearTimeout(timeout);
  updateImg();
});

prev.addEventListener("click", () => {
  currentImg--;
  console.log(currentImg);
  clearTimeout(timeout);
  updateImg();
});

// **We gave negative according to it so that the picture starts from 0 at the beginning.

function updateImg() {
  if (currentImg > images.length) {
    currentImg = 1;
  } else if (currentImg <= 0) {
    currentImg = images.length;
  }
  image.style.transform = `translateX(-${(currentImg - 1) * 700}px)`;
  console.log(image.style.transform);
  timeout = setTimeout(() => {
    currentImg++;
    updateImg();
  }, 4000);
}

updateImg();
