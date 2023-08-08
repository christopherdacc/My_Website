document.addEventListener('DOMContentLoaded', () => {
    const container3 = document.getElementById("underdev");
    const section4 = document.getElementById("Section4"); // Assuming this is your section ID

    const text3 = "Under Development ...";
    const delay3 = 100;
    let timer12323;
    let index3 = 0;
    let reverseAnimation = false;

    function animateText3() {
        container3.textContent = text3.substring(0, index3);
        if (reverseAnimation) {
            index3--;
        } else {
            index3++;
        }
        
        if (index3 > text3.length || index3 < 0) {
            clearInterval(timer12323);
            setTimeout(startAnimation, 800); // Start animation again after 2 seconds
            reverseAnimation = !reverseAnimation; // Toggle reverse animation
        }
    }

    function startAnimation() {
        if (reverseAnimation) {
            index3 = text3.length - 1;
        } else {
            index3 = 0;
        }
        timer12323 = setInterval(animateText3, delay3);
    }

    function startAnimationWhenInView() {
        if (isInViewport(section4)) {
            startAnimation();
            window.removeEventListener('scroll', startAnimationWhenInView);
        }
    }

    // Function to check if an element is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }

    // Listen for the scroll event and call startAnimationWhenInView function
    window.addEventListener('scroll', startAnimationWhenInView);

    // Trigger the animation immediately if section 4 is initially in the viewport
    startAnimationWhenInView();
});
