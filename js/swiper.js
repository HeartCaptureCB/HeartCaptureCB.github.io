var mySwiper1 = new Swiper('.swiper1', {
    // autoHeight: true,
    loop: true,

    // effect: 'flip',
    grabCursor: true,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination1',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next1',
        prevEl: '.swiper-button-prev1',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar1',
    },
})

var mySwiper2 = new Swiper('.swiper2', {
    // autoHeight: true,
    loop: true,
    // effect: 'flip',
    grabCursor: true,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination2',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next2',
        prevEl: '.swiper-button-prev2',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar2',
    },
})

var mySwiper3 = new Swiper('.swiper3', {
    // autoHeight: true,
    loop: true,
    // effect: 'flip',
    grabCursor: true,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination3',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next3',
        prevEl: '.swiper-button-prev3',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar3',
    },
})

var mySwiper4 = new Swiper('.swiper4', {
    // autoHeight: true,
    loop: true,
    // effect: 'flip',
    grabCursor: true,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination4',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next4',
        prevEl: '.swiper-button-prev4',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar4',
    },
})


// var coll = document.getElementsByClassName("collapsible");
// var i;

// for (i = 0; i < coll.length; i++) {
// coll[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var content = this.nextElementSibling;
//     // alert(content.style.s);
//     if (content.style.display === "flex") {
//     content.style.display = "none";
//     mySwiper.updateAutoHeight();
//     } else {
//     content.style.display = "flex";
//     mySwiper.updateAutoHeight();
//     }
//     // mySwiper.update();
// });
// }



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