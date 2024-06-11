$(document).ready(function() {
    const fadeTexts = $(".fade-text");
    let currentIndex = 0;

    function changeText() {
        fadeTexts.eq(currentIndex).fadeOut(1000, function() {
            currentIndex = (currentIndex + 1) % fadeTexts.length;
            fadeTexts.eq(currentIndex).fadeIn(1000);
        });
    }

    setInterval(changeText, 4000);
});
