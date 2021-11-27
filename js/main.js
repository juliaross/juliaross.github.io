"use strict";

gsap.registerPlugin(ScrollTrigger);
var locoScroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy('[data-scroll-container]', {
  scrollTop: function scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect: function getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  },
  pinType: document.querySelector('[data-scroll-container]').style.transform ? "transform" : "fixed"
});
var works = document.querySelectorAll('.work');

for (var i = 0; i < works.length; i++) {
  works[i].classList.add("work".concat(i));
  gsap.from(".work".concat(i), {
    scrollTrigger: {
      trigger: ".work".concat(i),
      scroller: "[data-scroll-container]",
      scrub: true,
      start: "top bottom",
      end: "top center" // onUpdate() {
      //   console.log("Update")
      // }

    },
    opacity: 0,
    y: 100,
    ease: Power2["in"]
  });
}

ScrollTrigger.addEventListener("refresh", function () {
  return locoScroll.update();
});
ScrollTrigger.refresh();