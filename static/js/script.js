var w = window.innerWidth;
var size = w >= 1024 ? "big" : "small";
var controller;
var prevElement;

const stepAnimation = () => {
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
const tokenAnimation = () => {
  var t2 = gsap.timeline();
  const halfScreen = window.innerHeight * 0.5;
  t2.from("#token-trigger", 1, { xPercent: 0, opacity: 1 });

  const scene = new ScrollMagic.Scene({
    triggerElement: "#token-trigger",
    triggerHook: "onLeave",
    duration: "0%",
    offset: -halfScreen,
  })
    .setTween(t2)
    .setClassToggle("#token-trigger", "active")
    .addTo(controller);
  return scene;
};
const cityAnimation = () => {
  var t3 = gsap.timeline();
  t3.from("#city-trigger", 1, { xPercent: 0, opacity: 1 });
  const halfScreen = window.innerHeight * 0.5;

  const scene = new ScrollMagic.Scene({
    triggerElement: "#city-trigger",
    triggerHook: "onLeave",
    duration: "0%",
    offset: -halfScreen,
  })
    .setTween(t3)
    .setClassToggle("#city-trigger", "active")
    .addTo(controller);
  return scene;
};
const buildingAnimation = () => {
  var t4 = gsap.timeline();
  t4.from("#building-trigger", 1, { xPercent: 0, opacity: 1 });
  const quarterScreen = window.innerHeight * 0.25;

  const scene = new ScrollMagic.Scene({
    triggerElement: "#building-trigger",
    triggerHook: "onLeave",
    duration: "0%",
    offset: -quarterScreen,
  })
    .setTween(t4)
    .setClassToggle("#building-trigger", "active")
    .addTo(controller);
  return scene;
};
const integrateAnimation = () => {
  var t5 = gsap.timeline();
  t5.from(".integrate-section", 1, { xPercent: 0, opacity: 1 });
  const oneFifthScreenHeight = window.innerHeight * 0.2;

  const scene = new ScrollMagic.Scene({
    triggerElement: ".integrate-section",
    triggerHook: "onLeave",
    duration: "0%",
    offset: -oneFifthScreenHeight,
  })
    .setTween(t5)
    .setClassToggle(".integrate-section", "active")
    .addTo(controller);
  return scene;
};
const partnersAnimation = () => {
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
  const firstSlide = slides[0];
  slides.forEach((e) => {
    e.classList.remove("inactive");
    e.classList.remove("active");
  });
  firstSlide.classList.remove("stage-one");
  firstSlide.classList.remove("stage-two");
  firstSlide.classList.remove("stage-three");
  firstSlide.classList.remove("stage-four");

  if (progress === 0) {
    // Remove the tile
    slides[0].classList.remove("start");
    firstSlide.classList.remove("stage-one");
  }
  if (progress > 0) {
    // Start the step tile slide in animations
    slides[0].classList.add("start");
  }
  if (progress < 0.2 && progress != 0) {
    slides[0].classList.add("active");
    firstSlide.classList.add("stage-one");
  }
  if (progress > 0.2 && progress <= 0.5) {
    slides[1].classList.add("active");
    firstSlide.classList.add("stage-two");
  }
  if (progress > 0.5 && progress <= 0.7) {
    slides[2].classList.add("active");
    firstSlide.classList.add("stage-three");
  }
  if (progress > 0.7) {
    slides[3].classList.add("active");
    firstSlide.classList.add("stage-four");
  }
  // Remove "inactive" class from active slides
  slides.forEach((e, i) => {
    const nextSlide = slides[i + 1];
      // Add inactive to the next slide
    if (e.classList.contains("active") && !!nextSlide) {
      nextSlide.classList.add("inactive")
    }
  });
};
const updatePartnersSlide = (progress) => {
  const slides = document.querySelectorAll("#pinMasterPartners .panel");
  slides.forEach((e) => e.classList.remove("active"));
  if (progress < 0.33) {
    slides[0].classList.add("active");
  }
  if (progress >= 0.33 && progress < 0.66) {
    slides[1].classList.add("active");
  }
  if (progress >= 0.66) {
    slides[2].classList.add("active");
  }
};
const partnerClick = (scene) => {
  const sectionLinks = document.querySelectorAll("p[data-section-link]");
  const steps = ["0.01", "0.33", "0.66"];
  const slides = document.querySelectorAll("#pinMasterPartners .panel");

  sectionLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const target = parseInt(e.target.dataset.sectionLink);
      const parentActive = slides[target].classList.contains("active");
      const panelHeight =
        document.querySelector("#pinMasterPartners .panel").offsetHeight * 0.8;
      if (!parentActive) {
        slides.forEach((e) => e.classList.remove("active"));
        if (prevElement === 0 && target === 1) {
          document.documentElement.scrollTop += panelHeight;
        }
        if (prevElement === 0 && target === 2) {
          document.documentElement.scrollTop += panelHeight * 2;
        }
        if (prevElement === 1 && target === 0) {
          document.documentElement.scrollTop -= panelHeight;
        }
        if (prevElement === 1 && target === 2) {
          document.documentElement.scrollTop += panelHeight;
        }
        if (prevElement === 2 && target === 0) {
          document.documentElement.scrollTop -= panelHeight * 2;
        }
        if (prevElement === 2 && target === 1) {
          document.documentElement.scrollTop -= panelHeight;
        }
        prevElement = target;
        scene.progress(steps[target]);
        updatePartnersSlide(scene.progress());
      }
    });
  });
};
const isMobile = () => {
  const width = window.innerWidth;
  return width < 1024;
};
const initialiseScrollMagic = () => {
  controller = new ScrollMagic.Controller();
  const scene = stepAnimation();
  const scene2 = tokenAnimation();
  const scene3 = cityAnimation();
  const scene4 = buildingAnimation();
  const scene5 = integrateAnimation();
  const scene6 = partnersAnimation();
  window.addEventListener("scroll", function () {
    updateActiveStep(scene.progress());
    updatePartnersSlide(scene6.progress());
  });
  partnerClick(scene6);
};
const handleResize = () => {
  var newSize = !isMobile() ? "big" : "small";
  if (newSize != size) {
    size = newSize;
    if (newSize === "small") {
      console.log("Destroyed");
      controller.destroy(true);
    } else {
      console.log("Initialised");
      initialiseScrollMagic();
    }
  }
};
window.onload = function () {
  if (!isMobile()) {
    initialiseScrollMagic();
  }

  $(window).stellar({ horizontalScrolling: false });
  $(window).stellar("refresh");

  // Disable ScrollMagic on resize and refresh Stellar.js
  window.addEventListener("resize", function () {
    this.setTimeout(function () {
      $(window).stellar({ horizontalScrolling: false });
      $(window).stellar("refresh");
      handleResize();
    }, 250);
  });
};
