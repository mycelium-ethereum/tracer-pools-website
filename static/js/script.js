const scrollStepAnimation = (controller) => {
  var tl = gsap.timeline();
  tl.from(".panel.step-two", 1, { xPercent: 0 });
  tl.from(".panel.step-three", 1, { xPercent: 0 });
  tl.from(".panel.step-four", 1, { xPercent: 0 });

  const scene = new ScrollMagic.Scene({
    triggerElement: "#pinMaster",
    triggerHook: "onLeave",
    duration: "200%",
  })
    .setPin("#pinMaster")
    .setTween(tl)
    .addTo(controller);
  return scene;
};
const scrollTokenAnimation = (controller) => {
  var t2 = gsap.timeline();
  t2.from(".panel.wallet-one", 1, { xPercent: 0 });
  t2.from(".panel.wallet-two", 1, { xPercent: 0 });
  t2.from(".panel.wallet-three", 1, { xPercent: 0 });

  const scene = new ScrollMagic.Scene({
    triggerElement: "#pinMasterWallet",
    triggerHook: "onLeave",
    duration: "200%",
  })
    .setPin("#pinContainerWallet")
    .setTween(t2)
    .addTo(controller);
  return scene;
};
const scrollCityAnimation = (controller) => {
  var t3 = gsap.timeline();
  t3.from(".panel.staking-section", 1, { xPercent: 0, opacity: 1 });
  t3.from(".panel.strategise-section", 1, { xPercent: 0, opacity: 1 });

  const scene = new ScrollMagic.Scene({
    triggerElement: "#pinMasterCity",
    triggerHook: "onLeave",
    duration: "100%",
  })
    .setPin("#pinContainerCity")
    .setTween(t3)
    .addTo(controller);
  return scene;
};
const updateActiveStep = (progress) => {
  const slides = document.querySelectorAll("#pinMaster .panel");
  const tile = document.querySelector(".step-animation__tile");
  slides.forEach((e) => e.classList.remove("active"));
  tile.classList.remove("stage-one");
  tile.classList.remove("stage-two");
  tile.classList.remove("stage-three");
  tile.classList.remove("stage-four");

  if (progress == 0) {
    // Start the step tile slide in animations
    slides[0].classList.remove("start");
  }
  if (progress > 0) {
    // Start the step tile slide in animations
    slides[0].classList.add("start");
  }
  if (progress < 0.2 && progress != 0) {
    slides[0].classList.add("active");
    tile.classList.add("stage-one");
  }
  if (progress > 0.2 && progress <= 0.5) {
    slides[1].classList.add("active");
    tile.classList.add("stage-two");
  }
  if (progress > 0.5 && progress <= 0.7) {
    slides[2].classList.add("active");
    tile.classList.add("stage-three");
  }
  if (progress > 0.7 && progress <= 1.0) {
    slides[3].classList.add("active");
    tile.classList.add("stage-four");
  }
};
const updateActiveTokenSlide = (progress) => {
  const slides = document.querySelectorAll("#pinMasterWallet .panel");
  slides.forEach((e) => e.classList.remove("active"));

  if (progress == 0) {
    slides[0].classList.remove("active");
  }
  if (progress < 0.3 && progress > 0) {
    slides[0].classList.add("active");
  }
  if (progress >= 0.3 && progress < 0.6) {
    slides[1].classList.add("active");
  }
  if (progress >= 0.6) {
    slides[2].classList.add("active");
  }
};
const updateActiveCitySlide = (progress) => {
  const slides = document.querySelectorAll("#pinMasterCity .panel");
  // const tile = document.querySelector(".step-animation__tile");
  slides.forEach((e) => e.classList.remove("active"));

  // if (progress == 0) {
  //   // Start the step tile slide in animations
  //   slides[0].classList.remove("start");
  // }
  if (progress < 0.5) {
    // Start the step tile slide in animations
    slides[0].classList.add("active");
    // tile.classList.add("stage-one");
  }
  if (progress >= 0.5) {
    slides[1].classList.add("active");
    // tile.classList.add("stage-two");
  }
};
window.onload = function () {
  const controller = new ScrollMagic.Controller();
  const scene = scrollStepAnimation(controller);
  const scene2 = scrollTokenAnimation(controller);
  const scene3 = scrollCityAnimation(controller);
  // updateActiveStep(scene.progress());
  window.addEventListener("scroll", function () {
    updateActiveStep(scene.progress());
    updateActiveTokenSlide(scene2.progress());
    updateActiveCitySlide(scene3.progress());
  });
};
