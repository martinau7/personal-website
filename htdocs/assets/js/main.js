(function () {
    "use strict";

    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
        el = el.trim()
        if (all) {
            return [...document.querySelectorAll(el)]
        } else {
            return document.querySelector(el)
        }
    }

    /**
     * Easy event listener function
     */
    const on = (type, el, listener, all = false) => {
        let selectEl = select(el, all)

        if (selectEl) {
            if (all) {
                selectEl.forEach(e => e.addEventListener(type, listener))
            } else {
                selectEl.addEventListener(type, listener)
            }
        }
    }

    let skilsContent = select('.skills-content');
    if (skilsContent) {
        new Waypoint({
            element: skilsContent, offset: '50%', handler: function (direction) {
                let progress = select('.progress .progress-bar', true);
                progress.forEach((el) => {
                    el.style.width = el.getAttribute('aria-valuenow') + '%'
                });
            }
        })
    }
    /**
     * Testimonials slider
     */

    new Swiper('.testimonials-slider', {
        speed: 300, loop: true, autoplay: {
            delay: 5000, disableOnInteraction: false
        }, slidesPerView: 'auto', pagination: {
            el: '.swiper-pagination', type: 'bullets', clickable: true
        }, breakpoints: {
            320: {
                slidesPerView: 1, spaceBetween: 20
            },

            1200: {
                slidesPerView: 3, spaceBetween: 20
            }
        }
    });


})()