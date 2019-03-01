$(function() {
    // Owl Carousel
    var owl = $("#big-slider");
    owl.owlCarousel({
      items: 1,
      margin: 0,
      loop: true,
      nav: true,
      animateOut: 'fadeOut',
      mouseDrag: false,
    
      
     
    });
  });
  $(function() {
    // Owl Carousel
    var owl = $("#spb-js-little-slider");
    owl.owlCarousel({
      items: 4,
      margin: 30,
      loop: true,
      nav: true,  
      dots:false,
      responsive:{
        0:{
          items:1
      
      },
        500:{
          items:2
      
      },
        768:{
          items:3
      
      },
        768:{
            items:3
        
        },
        1350:{
          items:4
      
      },

    }  
    
    });
  });

  $(document).ready(function () {
    $('.spb-header__menu .spb-header__menu-item').hover(
      function () {
        $(this).addClass('hover');
        $(".spb-header__menu .spb-header__menu-item").css({"color":"rgba(255, 255, 255, 0.5)"});
        $(".spb-header__bottom").addClass("spb-header__bottom_modal")
        $(".spb-header__menu_lvl-2").css({"opacity":"1"})  
        
      },
      function () {
        $(this).removeClass('hover'); 
        $(".spb-header__menu .spb-header__menu-item").css({"color":"white"});
      }
    )
    $(".spb-header__menu_lvl-2").mouseleave(function() {
        $(this).css({"opacity":"0"})  
        $(".spb-header__bottom").removeClass("spb-header__bottom_modal")
    })
  });