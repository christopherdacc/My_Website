const text_inimage = "Hello, I'm Christopher Daccache";
const delayinimage = 100; 
const containerinimage = document.getElementById("image-text1");

let indexinimage = 0;
function animateTextinimage() {
  containerinimage.textContent = text_inimage.substring(0, indexinimage);
  indexinimage++;
  if (indexinimage > text_inimage.length) {
    clearInterval(timerinimage);
  }
}

const timerinimage = setInterval(animateTextinimage, delayinimage);