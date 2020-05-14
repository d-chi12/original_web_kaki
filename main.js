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
// document.addEventListener('DOMContentLoaded', function(){
//     const hero = new HeroSlider();
// });

// class HeroSlider {
//     constructor() {
//         this.swiper = new Swiper ('.swiper-container', {
//             // Optional parameters
//             // direction: 'vertical',
//             loop: true,
//             grabCursor: true,
//             effect: 'coverflow',
//             centeredSlides: true,
//             slidesPerViwe: 1,
//             speed: 1000,
//             autoplay: {
//                 delay: 4000,
//                 disableOnInteraction: false
//             }
//         })
//     }
// }


document.addEventListener('DOMContentLoaded', function(){
    const hero = new HeroSlider('.swiper-container');
    hero.start();
});

class HeroSlider {
    constructor(el) {
        this.el = el;
        this.swiper = this._initSwiper();
    }

    _initSwiper() {
        return new Swiper (this.el, {
            // Optional parameters
            // direction: 'vertical',
            loop: true,
            grabCursor: true,
            effect: 'coverflow',
            centeredSlides: true,
            slidesPerViwe: 1,
            speed: 1000,
            autoplay: {
                
            }
        });
    }

    start() {
        this.swiper.params.autoplay = {
            delay: 4000,
            disableOnInteraction: false
        }
        this.swiper.autoplay.start();
    }
    stop() {
        this.swiper.autoplay.stop();
    }
}

// top //