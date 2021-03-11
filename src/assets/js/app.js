$(() => {
  $(window).on('load', function preloader() {
    // gsap
    gsap.config({nullTargetWarn:false});
    const wrapper = $('.preloader__wrapper');
    const overlay = $('.js-preloader-overlay');
    const text = $('.js-preloader-first-text');
    const base = $('.js-preloader-base');
    const promo = $('.js-preloader-text-icon');
    const leftDecoration = $('.js-preloader-decoration-1');
    const rightDecoration = $('.js-preloader-decoration-2');

    const preloaderAnimation = gsap.timeline({
      defaults: {
        duration: 4,
        ease: "power1.inOut",
      },
    });

    const preloaderTimeline0 = gsap
        .timeline({
          defaults: {
            duration: 0.7,
            ease: 'power1.inOut',
          },
        })
        .to(text, {autoAlpha: 1, duration: 0.7, delay: 0.7});

    const preloaderTimeline1 = gsap
      .timeline({
        defaults: {
          duration: 1,
          ease: 'power1.inOut',
        },
      })
      .to(text, {autoAlpha: 0, duration: 2, delay: 0.5});

    const preloaderTimeline2 = gsap
      .timeline({
        defaults: {
          duration: 1,
          ease: 'power1.inOut',
        },
      })
      .to(base, {autoAlpha: 1, duration: 0.3})
      .to(leftDecoration, { left: 'calc(100% + 17px)', duration: 0.5, stagger: 0.2 })
      .to(rightDecoration, { right: 'calc(100% + 17px)', duration: 0.5, delay: -0.5 });

    const preloaderTimeline3 = gsap
        .timeline({
          // defaults: {
          //   duration: 2.5,
          //   ease: 'power1.inOut',
          // },
        })
        .to(overlay, {scale: 0, duration: 3}, "-=4");
        // .to(overlay, {
        //   keyframes: [
        //     {scale: 0, duration: 3},
            // {boxShadow: '#d9c557 0 0 0 0', duration: 1, delay: -0.3}, //create a 0.5 second gap
          // ]});
        // .to(overlay, {boxShadow: '0 0 0 0 #d9c557', duration: 1}, 1);

    // const preloaderTimeline4 = gsap
    //     .timeline({
    //       defaults: {
    //         duration: 0.5,
    //         ease: 'power1.inOut',
    //       },
    //     })
    //     .to(overlay, {boxShadow: 'none'});

    const preloaderTimeline5 = gsap
        .timeline({
          defaults: {
            ease: 'power1.inOut',
          },
        })
        .to(wrapper, {autoAlpha: 0, duration: 0.8, delay: 0.8});

    preloaderAnimation
      .add(preloaderTimeline0, 0)
      .add(preloaderTimeline1, 1)
      .add(preloaderTimeline2, 3.5)
      .add(preloaderTimeline3, 2.8)
      // .add(preloaderTimeline4, 3.5)
      .add(preloaderTimeline5, 5);

    // $('.preloader__wrapper').fadeOut();
  });
});

$(() => {
  //sticky header
  $(window).scroll(function() {
    if ($(this).scrollTop() > 5){
      $('body').addClass('sticky-header');
    } else{
      $('body').removeClass('sticky-header');
    }
  });
});

  //marquee
  $(() => {
    gsap.config({nullTargetWarn:false});
    if ($(window).width() > 1200) {
      const marquee = $('.marquee__text');
      // set a default rate, the higher the value, the faster it is
      let rate = 200;
      // get the width of the element
      let distance = marquee.parent().width() + marquee.width() + 50;
      // get the total width of the element
      let totalDistance = distance;
      // get the duration of the animation
      // for a better explanation, see the quoted codepen in the first comment
      let time = totalDistance / rate;

      gsap.to(marquee, time, {
        repeat: -1,
        x: '-' + totalDistance,
        ease: Linear.easeNone,
      });
    } else {
      const section = $('.marquee');
      const text = $('.marquee__text');

      const animateIn = gsap.timeline({
        defaults: {
          ease: "power3.inOut"
        },
        scrollTrigger: {
          trigger: section,
          start: "top center",
          // toggleActions: "play none none reverse",
        }
      });

      animateIn.fromTo(text, {
        autoAlpha: 0,
      }, {
        autoAlpha: 1,
        duration: 1.2,
      });
    }
  });


// $(() => {
//   gsap.config({nullTargetWarn:false});
//   gsap.utils.toArray(".nominal").forEach((el) => {
//     const picture = $(el).find('.nominal__picture');
//     const pictureWrapper = $(el).find('.nominal__picture-wrapper');
//     const info = $(el).find('.nominal__info');
//     const button = $(el).find('.button--circle');
//     if ($(window).width() > 576) {
//       const animateIn = gsap.timeline({
//         defaults: {
//           ease: "power1.inOut"
//         },
//         scrollTrigger: {
//           trigger: el,
//           start: "top center",
//           // toggleActions: "play none none reverse",
//         }
//       });
//       animateIn.fromTo(pictureWrapper, {
//         scaleX: 0,
//       }, {
//         scaleX: 1,
//         transformOrigin: "0% 100%",
//         duration: 1,
//       });
//
//       animateIn.fromTo(picture, {
//         xPercent: -100,
//       }, {
//         xPercent: 0,
//         duration: 1.5,
//         delay: -0.8,
//       });
//
//       const animateIn2 = gsap.timeline({
//         defaults: {
//           ease: "power1.inOut"
//         },
//         scrollTrigger: {
//           trigger: el,
//           start: "top center",
//           // toggleActions: "play none none reverse",
//         }
//       });
//
//       animateIn2.fromTo([info, button], {
//         autoAlpha: 0,
//       }, {
//         autoAlpha: 1,
//         duration: 0.5,
//       });
//     } else {
//       const animateIn = gsap.timeline({
//         defaults: {
//           ease: "power1.inOut"
//         },
//         scrollTrigger: {
//           trigger: pictureWrapper,
//           start: "top center",
//           // toggleActions: "play none none reverse",
//         }
//       });
//       animateIn.fromTo(pictureWrapper, {
//         scaleX: 0,
//       }, {
//         scaleX: 1,
//         transformOrigin: "0% 100%",
//         duration: 1,
//       });
//
//       animateIn.fromTo(picture, {
//         xPercent: -100,
//       }, {
//         xPercent: 0,
//         duration: 1.5,
//         delay: -0.8,
//       });
//
//       const animateIn2 = gsap.timeline({
//         defaults: {
//           ease: "power1.inOut"
//         },
//         scrollTrigger: {
//           trigger: el,
//           start: "top center",
//           // toggleActions: "play none none reverse",
//         }
//       });
//
//       animateIn2.fromTo(info, {
//         autoAlpha: 0,
//       }, {
//         autoAlpha: 1,
//         duration: 0.5,
//         delay: -0.2,
//       });
//
//       animateIn2.fromTo(button, {
//         autoAlpha: 0,
//         scale: 0.5,
//       }, {
//         autoAlpha: 1,
//         scale: 1,
//         duration: 0.6,
//         delay: -0.2
//       });
//
//     }
//   });
//
//   gsap.fromTo('.footer', {
//     autoAlpha: 0,
//     yPercent: -10,
//   }, {
//     autoAlpha: 1,
//     yPercent: 0,
//     duration: 0.6,
//     scrollTrigger: {
//       trigger: '.footer',
//       start: "top 80%",
//       // markers: true,
//     }
//   });
//
//   gsap.utils.toArray(".news__item").forEach((el) => {
//     const pictureWrapper = $(el).find('.news__item-top');
//     const picture = $(el).find('.news__item-picture');
//     const info = $(el).find('.news__item-info');
//     const animateIn = gsap.timeline({
//       defaults: {
//         ease: "power3.inOut"
//       },
//       scrollTrigger: {
//         trigger: el,
//         start: "top center",
//         // toggleActions: "play none none reverse",
//       }
//     });
//     animateIn.fromTo(pictureWrapper, {
//       scaleX: 0,
//     }, {
//       scaleX: 1,
//       duration: 1,
//     });
//
//     animateIn.fromTo(picture, {
//       xPercent: -100,
//     }, {
//       xPercent: 0,
//       duration: 1.2,
//       delay: -0.5,
//     });
//
//     animateIn.fromTo(info, {
//       autoAlpha: 0,
//     }, {
//       autoAlpha: 1,
//       duration: 0.5,
//       delay: 0.1
//     });
//   });
//
//   $(() => {
//     const sectionSubscribe = $('.news-page__section-subscribe');
//     const pictureWrapper = $('.news-page__section-subscribe .nominal--tight__subscribe-picture-wrapper');
//
//     const picture = $('.news-page__section-subscribe .nominal--tight__subscribe-picture');
//     const crumbs = $('.news-page__crumbs');
//     const button = $('.news-page__section-subscribe .button--circle');
//
//     const animateIn = gsap.timeline({
//       defaults: {
//         ease: "power3.inOut"
//       },
//       scrollTrigger: {
//         trigger: sectionSubscribe,
//         start: "top center",
//         // toggleActions: "play none none reverse",
//       }
//     });
//
//     const animateIn2 = gsap.timeline({
//       defaults: {
//         ease: "power3.inOut"
//       },
//       scrollTrigger: {
//         trigger: sectionSubscribe,
//         start: "top center",
//         // toggleActions: "play none none reverse",
//       }
//     });
//     animateIn.fromTo(pictureWrapper, {
//       scaleX: 0,
//     }, {
//       scaleX: 1,
//       duration: 1,
//     });
//
//     animateIn.fromTo(picture, {
//       xPercent: -100,
//     }, {
//       xPercent: 0,
//       duration: 1.2,
//       delay: -0.5,
//     });
//
//     animateIn.fromTo(crumbs, {
//       autoAlpha: 0,
//     }, {
//       autoAlpha: 1,
//       duration: 0.5,
//       delay: 0.1
//     });
//
//
//
//     animateIn2.fromTo(button, {
//       autoAlpha: 0,
//     }, {
//       autoAlpha: 1,
//       duration: 0.5,
//       delay: 0.4
//     });
//   });
//
//   $(() => {
//     const pictureWrapper = $('.news-page-nominal--tight__picture-wrapper');
//
//     const picture = $('.news-page-nominal--tight__picture-wrapper .nominal--tight__picture');
//
//     const animateIn = gsap.timeline({
//       defaults: {
//         ease: "power3.inOut"
//       },
//       scrollTrigger: {
//         trigger: pictureWrapper,
//         start: "top center",
//         // toggleActions: "play none none reverse",
//       }
//     });
//     animateIn.fromTo(pictureWrapper, {
//       scaleX: 0,
//     }, {
//       scaleX: 1,
//       duration: 1,
//     });
//
//     animateIn.fromTo(picture, {
//       xPercent: -100,
//     }, {
//       xPercent: 0,
//       duration: 1.2,
//       delay: -0.5,
//     });
//   })
//
//   $(() => {
//     const section = $('.news-page__section--anim');
//     const text = $('.news-page__section--anim .nominal--tight__right');
//
//     const animateIn = gsap.timeline({
//       defaults: {
//         ease: "power3.inOut"
//       },
//       scrollTrigger: {
//         trigger: section,
//         start: "top center",
//         // toggleActions: "play none none reverse",
//       }
//     });
//
//     animateIn.fromTo(text, {
//       autoAlpha: 0,
//     }, {
//       autoAlpha: 1,
//       duration: 1.2,
//     });
//   })
//
//   $(() => {
//     const section = $('.project-page__begin');
//
//     const animateIn = gsap.timeline({
//       defaults: {
//         ease: "power3.inOut"
//       },
//       scrollTrigger: {
//         trigger: section,
//         start: "top center",
//         // toggleActions: "play none none reverse",
//       }
//     });
//
//     animateIn.fromTo(section, {
//       autoAlpha: 0,
//     }, {
//       autoAlpha: 1,
//       duration: 1.2,
//     });
//   })
//
//   $(() => {
//     gsap.utils.toArray(".nominal--tight--about").forEach((el) => {
//       const title = $(el).find('.section__title--big');
//
//       const pictureHorWrapper = $(el).find('.nominal--tight__subscribe-picture-wrapper');
//       const pictureHor = $(el).find('.nominal--tight__subscribe-picture');
//
//       const pictureSquareWrapper = $(el).find('.nominal--tight__small-picture-wrapper');
//       const pictureSquare = $(el).find('.nominal--tight__small-picture');
//
//       const infoTitle = $(el).find('.section__title--medium');
//       const info = $(el).find('.nominal__text');
//       const button = $(el).find('.about__section-button');
//
//       const animateIn = gsap.timeline({
//         defaults: {
//           ease: "power1.inOut"
//         },
//         scrollTrigger: {
//           trigger: el,
//           start: "top center",
//           // toggleActions: "play none none reverse",
//         }
//       });
//       animateIn.fromTo(title, {
//         autoAlpha: 0,
//       }, {
//         autoAlpha: 1,
//         duration: 0.5,
//         delay: -0.2
//       });
//       animateIn.fromTo(pictureSquareWrapper, {
//         scaleX: 0,
//       }, {
//         scaleX: 1,
//         duration: 1,
//       });
//
//       animateIn.fromTo(pictureSquare, {
//         xPercent: -100,
//       }, {
//         xPercent: 0,
//         duration: 1.5,
//         delay: -0.8,
//       });
//
//       animateIn.fromTo(pictureHorWrapper, {
//         scaleX: 0,
//       }, {
//         scaleX: 1,
//         duration: 1,
//         delay: -0.9
//       });
//
//       animateIn.fromTo(pictureHor, {
//         xPercent: -100,
//       }, {
//         xPercent: 0,
//         duration: 1.5,
//         delay: -0.8,
//       });
//
//
//       animateIn.fromTo(infoTitle, {
//         autoAlpha: 0,
//       }, {
//         autoAlpha: 1,
//         duration: 0.5,
//         delay: 0
//       });
//       animateIn.fromTo(info, {
//         autoAlpha: 0,
//       }, {
//         autoAlpha: 1,
//         duration: 0.5,
//         delay: -0.2
//       });
//       animateIn.fromTo(button, {
//         autoAlpha: 0,
//       }, {
//         autoAlpha: 1,
//         duration: 0.5,
//         delay: -0.2
//       });
//     })
//   })
//   $(() => {
//     gsap.utils.toArray(".nominal--tight--default").forEach((el) => {
//
//       const pictureHorWrapper = $(el).find('.nominal--tight__subscribe-picture-wrapper');
//       const pictureHor = $(el).find('.nominal--tight__subscribe-picture');
//
//       const pictureSquareWrapper = $(el).find('.nominal--tight__small-picture-wrapper');
//       const pictureSquare = $(el).find('.nominal--tight__small-picture');
//
//       const info = $(el).find('.nominal__text');
//
//       const animateIn = gsap.timeline({
//         defaults: {
//           ease: "power1.inOut"
//         },
//         scrollTrigger: {
//           trigger: el,
//           start: "top center",
//           // toggleActions: "play none none reverse",
//         }
//       });
//
//       animateIn.fromTo(pictureSquareWrapper, {
//         scaleX: 0,
//       }, {
//         scaleX: 1,
//         duration: 1,
//       });
//
//       animateIn.fromTo(pictureSquare, {
//         xPercent: -100,
//       }, {
//         xPercent: 0,
//         duration: 1.5,
//         delay: -0.8,
//       });
//
//       animateIn.fromTo(pictureHorWrapper, {
//         scaleX: 0,
//       }, {
//         scaleX: 1,
//         duration: 1,
//         delay: -0.9
//       });
//
//       animateIn.fromTo(pictureHor, {
//         xPercent: -100,
//       }, {
//         xPercent: 0,
//         duration: 1.5,
//         delay: -0.8,
//       });
//
//       animateIn.fromTo(info, {
//         autoAlpha: 0,
//       }, {
//         autoAlpha: 1,
//         duration: 0.5,
//         delay: -0.2
//       });
//
//     });
//   })
//   $(() => {
//     gsap.utils.toArray(".nominal--tight--promo").forEach((el) => {
//
//       const pictureWrapper = $(el).find('.nominal--tight__small-picture-wrapper');
//       const picture = $(el).find('.nominal--tight__small-picture');
//
//       const title = $(el).find('.nominal__promo-title');
//       const promo = $(el).find('.nominal__promo-in');
//
//       const animateIn = gsap.timeline({
//         defaults: {
//           ease: "power1.inOut"
//         },
//         scrollTrigger: {
//           trigger: el,
//           start: "top center",
//           // toggleActions: "play none none reverse",
//         }
//       });
//
//       animateIn.fromTo(pictureWrapper, {
//         scaleX: 0,
//       }, {
//         scaleX: 1,
//         duration: 1,
//       });
//
//       animateIn.fromTo(picture, {
//         xPercent: -100,
//       }, {
//         xPercent: 0,
//         duration: 1.5,
//         delay: -0.8,
//       });
//
//       animateIn.fromTo(title, {
//         autoAlpha: 0,
//       }, {
//         autoAlpha: 1,
//         duration: 0.5,
//         delay: -0.2
//       });
//
//       animateIn.fromTo(promo, {
//         autoAlpha: 0,
//       }, {
//         autoAlpha: 1,
//         duration: 0.5,
//       });
//
//     });
//   })
//   $(() => {
//     gsap.utils.toArray(".project").forEach((el) => {
//       const projectTop = $(el).find('.project__top');
//       const projectPicture = $(el).find('.project__picture');
//       const projectLink = $(el).find('.project__link');
//       const animateIn = gsap.timeline({
//         defaults: {
//           ease: "power3.inOut"
//         },
//         scrollTrigger: {
//           trigger: el,
//           start: "top center",
//           // toggleActions: "play none none reverse",
//         }
//       });
//       animateIn.fromTo(projectTop, {
//         scaleX: 0,
//       }, {
//         scaleX: 1,
//         duration: 1,
//       });
//
//       animateIn.fromTo(projectPicture, {
//         xPercent: -100,
//       }, {
//         xPercent: 0,
//         duration: 1.2,
//         delay: -0.5,
//       });
//
//       animateIn.fromTo(projectLink, {
//         autoAlpha: 0,
//       }, {
//         autoAlpha: 1,
//         duration: 0.5,
//         delay: -0.3
//       });
//     });
//   })
//   $(() => {
//     const section = $('.project-page__team');
//
//     const animateIn = gsap.timeline({
//       defaults: {
//         ease: "power3.inOut"
//       },
//       scrollTrigger: {
//         trigger: section,
//         start: "top center",
//         // toggleActions: "play none none reverse",
//       }
//     });
//
//     animateIn.fromTo(section, {
//       autoAlpha: 0,
//       yPercent: 10,
//     }, {
//       autoAlpha: 1,
//       yPercent: 0,
//       duration: 1.2,
//     });
//   })
//
//   $(() => {
//     gsap.utils.toArray(".partners__item").forEach((el) => {
//       const title = $(el).find('.partners__title');
//       const slider = $(el).find('.partners__slider-wrapper');
//
//       const animateIn = gsap.timeline({
//         defaults: {
//           ease: "power3.inOut"
//         },
//         scrollTrigger: {
//           trigger: el,
//           start: "top center",
//           // toggleActions: "play none none reverse",
//         }
//       });
//
//       animateIn.fromTo(title, {
//         autoAlpha: 0,
//       }, {
//         autoAlpha: 1,
//         duration: 1.2,
//       });
//
//       animateIn.fromTo(slider, {
//         autoAlpha: 0,
//         yPercent: 10,
//       }, {
//         autoAlpha: 1,
//         yPercent: 0,
//         delay: -0.4,
//       });
//     })
//
//   });
//
//   $(() => {
//     const section = $('.contacts__form');
//
//     const animateIn = gsap.timeline({
//       defaults: {
//         ease: "power3.inOut"
//       },
//       scrollTrigger: {
//         trigger: section,
//         start: "top 60%",
//         // toggleActions: "play none none reverse",
//       }
//     });
//
//     animateIn.fromTo(section, {
//       autoAlpha: 0,
//       yPercent: 10,
//     }, {
//       autoAlpha: 1,
//       yPercent: 0,
//       duration: 1.2,
//     });
//
//   });
//
//   $(() => {
//     const section = $('.contacts__title');
//
//     const animateIn = gsap.timeline({
//       defaults: {
//         ease: "power3.inOut"
//       },
//       scrollTrigger: {
//         trigger: section,
//         start: "top center",
//         // toggleActions: "play none none reverse",
//       }
//     });
//
//     animateIn.fromTo(section, {
//       autoAlpha: 0,
//       yPercent: 10,
//     }, {
//       autoAlpha: 1,
//       yPercent: 0,
//       duration: 1.2,
//     });
//
//   });
//
//   $(() => {
//     const section = $('.contacts__item');
//
//     const animateIn = gsap.timeline({
//       defaults: {
//         ease: "power3.inOut"
//       },
//       scrollTrigger: {
//         trigger: section,
//         start: "top center",
//         // toggleActions: "play none none reverse",
//       }
//     });
//
//     animateIn.fromTo(section, {
//       autoAlpha: 0,
//       yPercent: 10,
//     }, {
//       autoAlpha: 1,
//       yPercent: 0,
//       duration: 1.2,
//     });
//
//   });
//
//   $(() => {
//     const section = $('.contacts__map');
//
//     const animateIn = gsap.timeline({
//       defaults: {
//         ease: "power3.inOut"
//       },
//       scrollTrigger: {
//         trigger: section,
//         start: "top 70%",
//         // toggleActions: "play none none reverse",
//       }
//     });
//
//     animateIn.fromTo(section, {
//       autoAlpha: 0,
//       yPercent: 10,
//     }, {
//       autoAlpha: 1,
//       yPercent: 0,
//       duration: 1.2,
//     });
//
//   });
//
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
  const teamSlider = new Swiper('.js-team-slider', {
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
  const partnersSlider = new Swiper('.js-partners-slider', {
    pagination: {
      el: '.js-partners-slider .swiper-pagination',
      clickable: true
    },
    speed: 800,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        slidesPerColumn: 2,
        spaceBetween: 10,
      },
      992: {
        slidesPerView: 4,
        slidesPerColumn: 2,
        spaceBetween: 45,
      },
    }
  });
});

$(() => {
  $('.swiper-pagination-bullet').attr('cursor-class', 'cursor--interactive');
});

$(() => {
  const cursor = document.querySelector('#cursor');
  const cursorCircle = cursor.querySelector('.cursor__circle');

  const mouse = { x: -100, y: -100 }; // mouse pointer's coordinates
  const pos = { x: 0, y: 0 }; // cursor's coordinates
  const speed = .7; // between 0 and 1

  const updateCoordinates = e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  };

  window.addEventListener('mousemove', updateCoordinates);


  function getAngle(diffX, diffY) {
    return Math.atan2(diffY, diffX) * 180 / Math.PI;
  }

  function getSqueeze(diffX, diffY) {
    const distance = Math.sqrt(
        Math.pow(diffX, 2) + Math.pow(diffY, 2)
    );
    const maxSqueeze = 0.15;
    const accelerator = 1700;
    return Math.min(distance / accelerator, maxSqueeze);
  }


  const updateCursor = () => {
    const diffX = Math.round(mouse.x - pos.x);
    const diffY = Math.round(mouse.y - pos.y);

    pos.x += diffX * speed;
    pos.y += diffY * speed;

    const angle = getAngle(diffX, diffY);
    const squeeze = getSqueeze(diffX, diffY);

    const scale = 'scale(' + (1 + squeeze) + ', ' + (1 - squeeze) +')';
    const rotate = 'rotate(' + angle +'deg)';
    const translate = 'translate3d(' + pos.x + 'px ,' + pos.y + 'px, 0)';

    cursor.style.transform = translate;
    cursorCircle.style.transform = rotate + scale;
  };

  function loop() {
    updateCursor();
    requestAnimationFrame(loop);
  }

  requestAnimationFrame(loop);

  const cursorModifiers = document.querySelectorAll('[cursor-class]');

  cursorModifiers.forEach(cursorModifier => {
    cursorModifier.addEventListener('mouseenter', function() {
      const className = this.getAttribute('cursor-class');
      cursor.classList.add(className);
    });

    cursorModifier.addEventListener('mouseleave', function() {
      const className = this.getAttribute('cursor-class');
      cursor.classList.remove(className);
    });
  });

});
