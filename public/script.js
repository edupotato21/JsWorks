const boton = document.querySelector('#boton');
const menu = document.querySelector('#menu');

boton.addEventListener('click', () => {
    console.log('click')
    menu.classList.toggle('hidden');
});

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: "auto",
    centeredSlides: true,

});