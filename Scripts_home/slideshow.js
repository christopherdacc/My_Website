const carousel1 = document.querySelector(".Images"),
firstImg = carousel1.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".image-container i");


let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;



const showHideIcons = () => {
    let scrollWidth = carousel1.scrollWidth - carousel1.clientWidth;
    if(carousel1.scrollLeft == 0){
        arrowIcons[0].style.display = "none";
    }else{
        arrowIcons[0].style.display = "block";
    }
    if(carousel1.scrollLeft == scrollWidth){
        arrowIcons[1].style.display = "none";
    }else{
        arrowIcons[1].style.display = "block";
    }
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", ()=> {
        let firstImgWidth = firstImg.clientWidth + 14;
        if(icon.id == "left"){
            carousel1.scrollLeft -= firstImgWidth;
        }else {
            carousel1.scrollLeft += firstImgWidth;
        }
        setTimeout(() => showHideIcons(), 60);
    });
});

const autoSlide = () => {
    if(carousel1.scrollLeft == (carousel1.scrollWidth - carousel1.clientWidth)) return;
    
    positionDiff = Math.abs(positionDiff);
    let firstImgWidth = firstImg.clientWidth + 14;
    let valDifference = firstImgWidth - positionDiff;
    
    if(carousel1.scrollLeft > prevScrollLeft){
         return carousel1.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
    carousel1.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel1.scrollLeft;
}


const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel1.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel1.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}

const dragStop = () => {
    isDragStart = false;
    carousel1.classList.remove("dragging");
    
    if(!isDragging) return;
    isDragging = false;
    autoSlide();
}

carousel1.addEventListener("mousedown", dragStart);
carousel1.addEventListener("touchstart", dragStart);

carousel1.addEventListener("mousemove", dragging);
carousel1.addEventListener("touchmove", dragging);

carousel1.addEventListener("mouseup", dragStop);
carousel1.addEventListener("mouseleave", dragStop);
carousel1.addEventListener("touchend", dragStop);



