$(() => {
  $(window).on('load', function hidePreloader() {
      $('.preloader__wrapper').fadeOut();
  });

  // gsap

  // console.log(gsap.config);
  // gsap.config({nullTargetWarn:false});
  //
  // gsap.registerPlugin(ScrambleTextPlugin);
  //
  // const preloaderAnimation = gsap.timeline({defaults: {duration: 1, ease: "none"}});
  //
  // const preloaderTimeline1 = gsap
  //     .timeline({
  //       defaults: {
  //         duration: 10,
  //         ease: 'power1.inOut',
  //       },
  //     })
  //     .to('.js-preloader-first-text', {duration: 2, scrambleText:{text:"Human oriented development.", chars:"lowerCase", revealDelay:0.5, speed: 0.5, tweenLength:true, delimiter: ""}});
  //
  //   preloaderAnimation.add(preloaderTimeline1, 0)
});

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
    spaceBetween: 10,
    pagination: {
      el: '.js-partners-slider .swiper-pagination',
      clickable: true
    },
    speed: 800,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
        slidesPerColumn: 2,
      },
      992: {
        slidesPerView: 4,
        slidesPerColumn: 2,
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
  const speed = 1; // between 0 and 1

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
