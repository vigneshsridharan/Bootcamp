new Swiper(".swiper-container", {
    effect: 'slide',
    slidesPerView: 3,
    // effect: 'coverflow',
    // coverflowEffect: {
    //     rotate: 30,
    //     slideShadows: false,
    // },
    slidesPerView: 3,
    speed: 400,
    spaceBetween: 100,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    autoplay: {
        delay: 5000,
    },
    fadeEffect: {
        crossFade: true
    }
  });

// navigation physics - pop motion
const { styler, spring, listen, pointer, value } = window.popmotion;

const ball = document.querySelector('.brand');
const divStyler = styler(ball);
const ballXY = value({ x: 0, y: 0 }, divStyler.set);

listen(ball, 'mousedown touchstart')
  .start((e) => {
    e.preventDefault();
    pointer(ballXY.get()).start(ballXY);
  });

listen(document, 'mouseup touchend')
  .start(() => {
    spring({
      from: ballXY.get(),
      velocity: ballXY.getVelocity(),
      to: { x: 0, y: 0 },
      stiffness: 200,
      mass: 1,
      damping: 10
    }).start(ballXY);
  });