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
      spb:0,
      
     
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
    $('.spb-header__menu .spb-header__menu-item , .spb-industry-implementations__item-text-hover').hover(
      function () {
        $(this).addClass('hover');
 
        $(this).parents(".spb-industry-implementations__container-hovers").siblings(".spb-industry-implementations__icon").addClass('hover');
        $(".spb-header__menu .spb-header__menu-item").css({"color":"rgba(255, 255, 255, 0.5)"});
        $(".spb-header__bottom").addClass("spb-header__bottom_modal")
        $(".spb-header__menu_lvl-2").css({"opacity":"1"})  
        
      },
      function () {
        $(this).removeClass('hover'); 
        $(this).parents(".spb-industry-implementations__container-hovers").siblings(".spb-industry-implementations__icon").removeClass('hover'); 
        $(".spb-header__menu .spb-header__menu-item").css({"color":"white"});
      }
    )
    $(".spb-header__menu_lvl-2").mouseleave(function() {
        $(this).css({"opacity":"0"})  
        $(".spb-header__bottom").removeClass("spb-header__bottom_modal")
    })
    $(".spb-header__top-qustionButton").click(function () {
      $(".spb-main-banner__container-text").slideToggle("slow")
    });

    ymaps.ready(init);

    function init() {
      var myMap = new ymaps.Map("map", {
        // Центр карты, указываем коордианты
        center: [55.7087, 37.5675],
        // Масштаб, тут все просто
        zoom: 13,

        controls: ['smallMapDefaultSet']
      }, {
          searchControlProvider: 'yandex#search'
        });


      var myGeoObjects = [];

      // Наша метка, указываем коордианты

      // Метка 1
      myGeoObjects[0] = new ymaps.Placemark([55.7174, 37.6948], {
        balloonContentBody: 'Офис в москве',
      }, {
          iconLayout: 'default#image',
          iconImageHref: './assets/img/map_icon.png',
          iconImageSize: [70, 70],
          iconImageOffset: [-35, -35]
        });

      // Метка 2
      myGeoObjects[1] = new ymaps.Placemark([55.6888, 37.5728], {
        balloonContentBody: 'Контактное производство',
      }, {
          iconLayout: 'default#image',
          iconImageHref: './assets/img/map_icon.png',
          iconImageSize: [70, 70],
          iconImageOffset: [-35, -35]
        });
              // Метка 3
      myGeoObjects[2] = new ymaps.Placemark([55.6908, 37.5357], {
        balloonContentBody: 'Склад',
      }, {
          iconLayout: 'default#image',
          iconImageHref: './assets/img/map_icon.png',
          iconImageSize: [70, 70],
          iconImageOffset: [-35, -35]
        });

      var clusterer = new ymaps.Clusterer({
        clusterDisableClickZoom: false,
        clusterOpenBalloonOnClick: false,
      });

      clusterer.add(myGeoObjects);
      myMap.geoObjects.add(clusterer);

    }
  });