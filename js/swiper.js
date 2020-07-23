var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    // direction: 'vertical',
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

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "none") {
    content.style.display = "flex";
    } else {
    content.style.display = "none";
    }
});
}

(function() {

'use strict';

// breakpoint where swiper will be destroyed
// and switches to a dual-column layout
const breakpoint = window.matchMedia( '(min-width:920px)' );

// keep track of swiper instances to destroy later
let mySwiper;

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

const breakpointChecker = function() {

    // if larger viewport and multi-row layout needed
    if ( breakpoint.matches === true ) {

    // clean up old instances and inline styles when available
    if ( mySwiper !== undefined ) mySwiper.destroy( true, true );

    // or/and do nothing
    return;

    // else if a small viewport and single column layout needed
    } else if ( breakpoint.matches === false ) {

        // fire small viewport version of swiper
        return enableSwiper();

    }

};

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

const enableSwiper = function() {

    mySwiper = new Swiper ('.swiper-container', {

    loop: true,
    
    slidesPerView: 'auto',

    centeredSlides: true,

    a11y: true,
    keyboardControl: true,
    grabCursor: true,

    // pagination
    pagination: '.swiper-pagination',
    paginationClickable: true,

    });

};

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

// keep an eye on viewport size changes
breakpoint.addListener(breakpointChecker);

// kickstart
breakpointChecker();



})(); /* IIFE end */