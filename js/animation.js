
var burger = document.querySelector(".burger")

var reset = document.querySelector(".close")

var tl = gsap.timeline();

var tween = gsap.timeline({paused: true});

tl.from(".hero__title", {
  opacity: 0,
  y: 20,
  opacity: 0,
  eaease: "power4.out",
  duration: 1
}, 0.5)
  .from(".hero__btn", {
     opacity: 0,
    y: 20,
    opacity: 0,
    eaease: "power4.out",
    duration: 1
  }, 0.5)
  .from(".hero__descr", {
    opacity: 0,
    ease: "sine.out",
    duration: 1
  }, ">-0.6")
  .from(".img-one", {
    opacity: 0,
    scaleX: .8,
    scaleY: .8,
    ease: "power4.out",
    duration: 1
  }, ">-0.8")
  .from(".img-two", {
    opacity: 0,
    scaleX: .8,
    scaleY: .8,
    ease: "power4.out",
    duration: 1
  }, ">-0.7")
  .from(".img-three", {
    opacity: 0,
    scaleX: .8,
    scaleY: .8,
    ease: "power4.out",
    duration: 1
  }, ">-0.7")
  .from(".photos__author", {
    opacity: 0,
    ease: "sine.out",
    duration: 1
  }, ">-0.7")


  tween.to(('.menu'), 0.5, {
    display:'block',
  })
  .from(".menu__top", {
    y: -40,
    opacity: 0,
    ease: "power4.out",
    duration: 1
  })
  .from(".hero__active", {
    y: 40,
    opacity: 0,
    ease: "power4.out",
    duration: 1
  }, ">-0.7")
  .from(".nav__list", {
    y: 20,
    opacity: 0,
    ease: "power2.out",
    duration: 1
  }, ">-0.6")
  .from(".social", {
    y: 20,
    opacity: 0,
    ease: "power2.out",
    duration: 1
  }, ">-0.7")
  .from(".menu__right", {
    y: 40,
    opacity: 0,
    ease: "power2.out",
    duration: 1
  }, ">-1")


  burger.onclick = function() {
    tween.play();
  }

  reset.onclick = function() {
    tween.reverse();
  }
