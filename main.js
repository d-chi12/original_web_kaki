//============= header ============//
class MobileMenu {
    constructor() {
    this.DOM = {};
    this.DOM.btn = document.querySelector('.mobile-menu__btn');
    this.DOM.cover = document.querySelector('.mobile-menu__cover');
    this.DOM.container = document.querySelector('#globle-container');
    this.eventType = window.ontouchstart ? 'touchstart' : 'click';
    this._addEvent();
    }

    _getEventType() {
        return window.ontouchstart ? 'touchstart' : 'click';
    }

    _toggle() {
        this.DOM.container.classList.toggle('menu-open');
    }

    _addEvent() {
        this.DOM.btn.addEventListener('click', this._toggle.bind(this));
        this.DOM.cover.addEventListener('click', this._toggle.bind(this));
    }
}

new MobileMenu();


// ===============Scroll==============//

const hed = document.querySelector('.hed');
const _navAnimation = function(el, inview) {
    if(inview) {
        hed.classList.remove('triggered');
    } else {
        hed.classList.add('triggered');
    }
}

const so3 = new ScrollObserver('.nav-trigger', _navAnimation, {once: false})

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