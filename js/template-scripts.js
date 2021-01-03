jQuery(document).ready(function($) {  
  // Owl Carousel                     
  var owl = $('.carousel-default');
  owl.owlCarousel({
    nav: true,
    dots: true,
    items: 1,
    loop: true,
    navText: ["&#xe605","&#xe606"],
    autoplay: true,
    autoplayTimeout: 5000
  });

  // Owl Carousel - Content Blocks  
  var owl = $('.carousel-blocks');
  owl.owlCarousel({
    nav: true,
    dots: false,
    items: 4,
    responsive: {
      0: {
        items: 1
      },
      481: {
        items: 3
      },
      769: {
        items: 4
      }
    },
    loop: true,
    navText: ["&#xe605","&#xe606"],
    autoplay: true,
    autoplayTimeout: 5000
  });
  
  // Sticky Nav Bar
  $(window).scroll(function() {
    if ($(this).scrollTop() > 20){  
        $('.sticky').addClass("fixed");
    }
    else{
        $('.sticky').removeClass("fixed");
    }
  });
});

function divToggle(elem) {
  var box = 'quest' + elem.id;
  var arr = 'arrow' + elem.id;
  var x = document.getElementById(box);
  var y = document.getElementById(arr);
  if (x.style.display == "none" || x.style.display == "") {
    x.style.display = "block";
    y.style.display = "none";
  } else {
    x.style.display = "none";
    y.style.display = "inline-block";
  }
  // if (y.style.display === "none") {
  //   y.style.display = "inline-block";
  // } else {
  //   y.style.display = "none";
  // }
}

function rubToggle(elem) {
  var box = 'rubric' + elem.id;
  var arr = 'arrow' + elem.id;
  var x = document.getElementById(box);
  var y = document.getElementById(arr);
  if (x.style.display == "none" || x.style.display == "") {
    x.style.display = "block";
    y.style.transform = "rotate(-135deg)";
  } else {
    x.style.display = "none";
    y.style.transform = "rotate(45deg)";
  }
  // if (y.style.display === "none") {
  //   y.style.display = "inline-block";
  // } else {
  //   y.style.display = "none";
  // }
}

// $(document).ready(function(){
//   $('.text_container').addClass("hidden");

//   $('.text_container').click(function() {
//     var $this = $(this);

//     if ($this.hasClass("hidden")) {
//       $(this).removeClass("hidden").addClass("visible");

//     } else {
//       $(this).removeClass("visible").addClass("hidden");
//     }
//   });
// });

//Get the button:
mybutton = document.getElementById("scroll-to-top");

// When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  var position =
    document.body.scrollTop || document.documentElement.scrollTop;
  if (position) {
    window.scrollBy(0, -Math.max(1, Math.floor(position / 8)));
    scrollAnimation = setTimeout("topFunction()", 15);
  } else clearTimeout(scrollAnimation);
  // document.body.scrollTop = 0; 
  // document.documentElement.scrollTop = 0; 
}