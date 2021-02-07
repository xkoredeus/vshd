$(() => {
    $(window).on('load', function hidePreloader() {
        $('.preloader__wrp').fadeOut();
    });
});

// $(() => {
//
//   const productsThumbs = new Swiper('.products__thumbs', {
//     speed: 600,
//     slidesPerView: 1,
//     effect: 'fade',
//     fadeEffect: {
//       crossFade: true
//     },
//   });
//
//   const productsSlider = new Swiper('.products__slider', {
//     navigation: {
//       nextEl: '.products .swiper-button-next',
//       prevEl: '.products .swiper-button-prev',
//     },
//     slidesPerView: 1,
//     effect: 'fade',
//     fadeEffect: {
//       crossFade: true
//     },
//     speed: 600,
//     thumbs: {
//       swiper: productsThumbs
//     },
//     // breakpoints: {
//     //   0: {
//     //     autoHeight: true
//     //   },
//     //   768: {
//     //     autoHeight: false
//     //   },
//     // }
//   });
// });

$(() => {
    $('[data-fancybox]').fancybox({
      animationDuration: 600,
      animationEffect   : 'slide-in-in',
      touch: false
    });
});

$('input[type="tel"]').mask("+7 ( 999 ) - 999 - 99 - 99");


$(() => {
  $('.js-toggle-menu').on('click', function toggleMenu() {
    $('body').toggleClass('show-menu');
  });


  $(document).on('click', function(event) {
    var $target = $(event.target);
    if(!$target.closest('.header').length &&
        $('body').hasClass('show-menu')) {
      $('body').removeClass('show-menu');
    }
  });
});


$(() => {
  const modelsSlider = new Swiper('.js-team-slider', {
    pagination: {
      el: '.js-team-slider .swiper-pagination',
      clickable: true
    },
    speed: 800,
    spaceBetween: 10,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 4,
      },
    }
  });
});

$(() => {
  const modelsSlider = new Swiper('.js-partners-slider', {
    pagination: {
      el: '.js-partners-slider .swiper-pagination',
      clickable: true
    },
    speed: 800,
    spaceBetween: 10,
    slidesPerView: 4,
    slidesPerColumn: 2,
    // breakpoints: {
    //   0: {
    //     slidesPerView: 1,
    //   },
    //   576: {
    //     slidesPerView: 2,
    //   },
    //   768: {
    //     slidesPerView: 3,
    //   },
    //   992: {
    //     slidesPerView: 4,
    //   },
    // }
  });
});
