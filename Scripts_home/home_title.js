function animateTitles() {
    const myText1 = new SplitType('#Title1');
    const myText2 = new SplitType('#Title2');

    gsap.to('.char', {
        y: 0,
        stagger: 0.05,
        delay: 0.2,
        duration: 0.1,
    });
}
