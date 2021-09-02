const stepAnimation = (controller) => {
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
    .setClassToggle("body", "steps-active")
    .setTween(tl)
    .addTo(controller);
  return scene;
};
const tokenAnimation = (controller) => {
  var t2 = gsap.timeline();
  const fourFifthsScreen = window.innerHeight * 0.8;
  t2.from("#token-trigger", 1, { xPercent: 0, opacity: 1 });

  const scene = new ScrollMagic.Scene({
    triggerElement: "#token-trigger",
    triggerHook: "onLeave",
    duration: "0%",
    offset: -fourFifthsScreen,
  })
    .setTween(t2)
    .setClassToggle("#token-trigger", "active")
    .addTo(controller);
  return scene;
};
const integrateAnimation = (controller) => {
  var t4 = gsap.timeline();
  t4.from(".integrate-section", 1, { xPercent: 0, opacity: 1 });

  const scene = new ScrollMagic.Scene({
    triggerElement: ".integrate-section",
    triggerHook: "onLeave",
    duration: "0%",
    offset: -300,
  })
    .setTween(t4)
    .setClassToggle(".integrate-section", "active")
    .addTo(controller);
  return scene;
};
const partnersAnimation = (controller) => {
  var t5 = gsap.timeline();
  t5.from(".panel.partners", 1, { xPercent: 0 });
  t5.from(".panel.contributors", 1, { xPercent: 0 });
  t5.from(".panel.media", 1, { xPercent: 0 });

  const scene = new ScrollMagic.Scene({
    triggerElement: "#pinMasterPartners",
    triggerHook: "onLeave",
    duration: "200%",
  })
    .setPin("#pinContainerPartners")
    .setTween(t5)
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

  if (progress === 0) {
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
  if (progress > 0.7) {
    slides[3].classList.add("active");
    tile.classList.add("stage-four");
  }
};
const updatePartnersSlide = (progress) => {
  const slides = document.querySelectorAll("#pinMasterPartners .panel");
  slides.forEach((e) => e.classList.remove("active"));
  if (progress <= 0.33) {
    slides[0].classList.add("active");
  }
  if (progress > 0.33 && progress < 0.66) {
    slides[1].classList.add("active");
  }
  if (progress >= 0.66) {
    slides[2].classList.add("active");
  }
};
const isMobile = () => {
  const width = window.innerWidth;
  return width < 1024;
};
const disableScrollmagic = (scene) => {
  scene.enabled(false);
};
const enableScrollmagic = (scene) => {
  scene.enabled(true);
  scene.refresh();
  scene.update(true);
};
const initialiseScrollMagic = (controller) => {
  const scene = stepAnimation(controller);
  const scene2 = tokenAnimation(controller);
  const scene4 = integrateAnimation(controller);
  const scene5 = partnersAnimation(controller);
  scenes.push(scene);
  scenes.push(scene2);
  scenes.push(scene4);
  scenes.push(scene5);
  window.addEventListener("scroll", function () {
    updateActiveStep(scene.progress());
    updatePartnersSlide(scene5.progress());
  });
};
const scenes = [];
window.onload = function () {
  const controller = new ScrollMagic.Controller();
  const body = document.querySelector("body");
  if (!isMobile()) {
    initialiseScrollMagic(controller);
  }
  // $.stellar()
  $(window).stellar({ horizontalScrolling: false });
  $(window).stellar("refresh");
  window.addEventListener("resize", function () {
    if (!isMobile()) {
      if (scenes.length) {
        body.classList.remove("sm-disabled");
        scenes.forEach((scene) => enableScrollmagic(scene));
        controller.enabled(true);
        console.log("re-enabled previously initialised ScrollMagic");
      } else {
        body.classList.remove("sm-disabled");
        initialiseScrollMagic(controller);
        console.log("resize - initialised");
      }
    }
    if (isMobile() && scenes.length) {
      body.classList.add("sm-disabled");
      scenes.forEach((scene) => disableScrollmagic(scene));
      controller.enabled(false);
      console.log("resize - disabled");
    }
  });
};
