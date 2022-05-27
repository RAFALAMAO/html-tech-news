// Logica para poder esuchar del botton que muestre el menu
document.querySelector('.menu-btn').addEventListener('click', function(){
    document.querySelector('.nav-menu').classList.toggle('show');
})

ScrollReveal().reveal('.hero', { delay: 500 });
ScrollReveal().reveal('.news-cards', { delay: 500 });
ScrollReveal().reveal('.cards-banner-one', { delay: 500 });
ScrollReveal().reveal('.cards-banner-two', { delay: 500 });