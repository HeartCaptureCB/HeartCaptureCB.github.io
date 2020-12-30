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