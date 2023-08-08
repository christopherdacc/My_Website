const text = "Christopher Daccache";
const delay = 100; 
const container = document.getElementById("animated-text");

let index = 0;
function animateText() {
  container.textContent = text.substring(0, index);
  index++;
  if (index > text.length) {
    clearInterval(timer123);
  }
}

const timer123 = setInterval(animateText, delay);