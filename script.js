$(document).ready(function() {

    $(".UV-List").change(function() {
        const selectedVal = $(this).val();
        $(".UV-value").text(selectedVal);
    });

    let currentIndex = 0;
    const $slides = $('.slider ul li');
    const totalSlides = $slides.length;

    function showNextSlide() {
        $slides.eq(currentIndex).removeClass('active-slider');
        currentIndex = (currentIndex + 1) % totalSlides;
        $slides.eq(currentIndex).addClass('active-slider');
    }

    setInterval(showNextSlide, 3000);
});