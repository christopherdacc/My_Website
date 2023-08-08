document.addEventListener('DOMContentLoaded', () => {
    const section1 = document.getElementById('Section1');
    const options = {
        threshold: 0.5, // Adjust this threshold as needed
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.target === section1 && entry.isIntersecting) {
                animateTitles(); // Call the function to start the animation
            }
        });
    }, options);

    observer.observe(section1);
});
