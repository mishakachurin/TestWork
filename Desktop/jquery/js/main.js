/* tabs */

$('.card').on('click', function() {
    let currTab = $(this).parent().index();

    $('.card').removeClass('card-active');
    $(this).addClass('card-active');

    $('.tab-content').removeClass('active');
    $('.tab-content').eq(currTab).addClass('active');
})

/*hamburger*/

$('.hamburger').on('click', function() {
    $('.head__menu').toggle();
})

$('.menu-close').on('click', function() {
    $('.head__menu').hide();
})

let scene = document.getElementById('scene');
let parallaxInstanse = new Parallax(scene);

// SLIDER
const swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    spaceBetween: 50,
    slidesPerView: 3,
    loop: true,
    stopOnLastSlide: false,
    autoplay: {
        delay: 2000
    }
});
