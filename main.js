// function toggleNav() {
//     var body = document.body;
//     var hamburger = document.getElementById('js-hamburger');
//     var blackBg = document.getElementById('js-black-bg');

//     hamburger.addEventListener('click', function() {
//     body.classList.toggle('nav-open');
// });
// blackBg.addEventListener('click', function() {
//     body.classList.remove('nav-open');
//     });
// }
// toggleNav(); 

// header //
const selectElement = (s) => document.querySelector(s);

selectElement('.open').addEventListener('click', () => {
    selectElement('.nav-list').classList.add('active');
    console.log("aaaaaaaaaaaa");
});

selectElement('.close').addEventListener('click', () => {
    selectElement('.nav-list').classList.remove('active');
    console.log("bbbbbbbbbbb");
})
// end-of-header //



// top //
var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'vertical',
    loop: true,

    // If we need pagination
    pagination: {
    el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
    el: '.swiper-scrollbar',
    },
})
// top //