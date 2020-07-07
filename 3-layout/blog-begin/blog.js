const { easing, tween, styler } = window.popmotion;

const divStyler = styler(document.querySelector('.leftheader'));

tween({
  from: 0,
  to: { x: 300, rotate: 180 },
  duration: 1000,
  ease: easing.backOut,
  flip: Infinity,
  elapsed: 500,
  loop: 5,
  yoyo: 5
}).start(divStyler.set);


