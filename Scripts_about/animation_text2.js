const text2 = "In this text area i will talk about myself and what motivates me to become a better person and my what is my goal in life.";
const delay2 = 100; 
const container2 = document.getElementById("image-text2");

let index2 = 0;
function animateText2() {
  container2.textContent = text2.substring(0, index2);
  index2++;
  if (index2 > text2.length) {
    clearInterval(timer1232);
  }
}

const timer1232 = setInterval(animateText2, delay2);