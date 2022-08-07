var header = document.querySelector('.header');
header.classList.add('activ');



var logo_img = document.querySelector('.logo_img');
logo_img.classList.add('logo_img__activ');



var intro = document.querySelector('.intro');
intro.classList.add('intro__activ');



var sponsor = document.querySelector('.sponsors__inner');
    window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
        sponsor.classList.add("sponsors__active");
    } 
});


//shop==============================================================================>

var shop = document.querySelector('.shop__inner');
    window.addEventListener('scroll', function () {
    if (window.scrollY > 1000) {
        shop.classList.add("shop__inner-activ");
    } 
});

//future=======================================================================================>

var future = document.querySelector('.future__inner');
    window.addEventListener('scroll', function () {
    if (window.scrollY > 2000) {
        future.classList.add("future__inner-activ");
    } 
});

//castomize===========================================================================================>

var castomize = document.querySelector('.castomize__inner');
    window.addEventListener('scroll', function () {
    if (window.scrollY > 2900) {
        castomize.classList.add("castomize__inner-activ");
    } 
});


var castomizes = document.querySelector('.castomize__img');
    window.addEventListener('scroll', function () {
    if (window.scrollY > 2900) {
        castomizes.classList.add("castomize__img-activ");
    } 
});


//articles===========================================================================================>

var articles__subtitle = document.querySelector('.articles__subtitle');
    window.addEventListener('scroll', function () {
    if (window.scrollY > 4000) {
        articles__subtitle.classList.add("articles__subtitle-activ");
    } 
});




var articles__header = document.querySelector('.articles__header');
    window.addEventListener('scroll', function () {
    if (window.scrollY > 4300) {
        articles__header.classList.add("articles__header-activ");
    } 
});



var articles__block = document.querySelector('.articles__block');
    window.addEventListener('scroll', function () {
    if (window.scrollY > 4300) {
        articles__block.classList.add("articles__block-active");
    } 
});











