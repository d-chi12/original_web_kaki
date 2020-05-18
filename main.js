//============= header ============//
// const selectElement = (s) => document.querySelector(s);

// selectElement('.open').addEventListener('click', () => {
//     selectElement('.nav-list').classList.add('active');
//     console.log("aaaaaaaaaaaa");
// });

// selectElement('.close').addEventListener('click', () => {
//     selectElement('.nav-list').classList.remove('active');
//     console.log("bbbbbbbbbbb");
// })
const header = document.querySelector('.hed');
const _navAnimation = function(el, inview) {
    if(inview) {
        el.classList.remove('triggered');
    } else {
        el.classList.add('triggered');
    }
}
//=========== end-of-header ==============//



//============= top ===============//
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
//=========== end of top ===========//

//========= animation ===========//

// $(function() {
//     new WOW().init();
// });
// $(window).on('load', function () {
//     $("#con-ttl-1").addClass("animated fadeInLeft");
//     $("#home-heading-2").addClass("animated fadeInLeft");
//     $("#home-text").addClass("animated zoomIn");
//     $("#home-btn").addClass("animated zoomIn");
//     $("#arrow-down i").addClass("animated fadeInDown infinite");
// });

//=========== end of animation ==========//

//============= consept =============//
    
//============= end of concept  ==============//