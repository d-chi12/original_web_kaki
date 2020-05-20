//============= header ============//

class MobileMenu {
    constructor() {
        this.DOM = {};
        this.DOM.btn = document.querySelector('.mobile-menu__btn');
        this.DOM.cover = document.querySelector('.mobile-menu__cover');
        this.DOM.container = document.querySelector('#globle-container');
        this.eventType = this._getEventType();
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

$(document).ready(function () {
    hsize = $(window).height();
    $(".hed_img").outerHeight("height", hsize + "100%");
});
    

//=========== end of top ===========//

// ===============Scroll trigger==============//

const header = document.querySelector('.hed');
const _navAnimation = function(el, inview) {
    if(inview) {
        header.classList.remove('triggered');
    } else {
        header.classList.add('triggered');
    }
}
const so3 = new ScrollObserver('.nav-trigger', _navAnimation, {once: false});

// =========== end-of-header ==============//
