var w = window.innerWidth;
var size = w >= 1024 ? "big" : "small";
var controller;
var prevElement;
var halfScreen = window.innerHeight * 0.5;
var threeQuarterScreen = window.innerHeight * 0.75;
var oneFifthScreenHeight = window.innerHeight * 0.2;

function stepAnimation() {
  var tl = gsap.timeline();
  tl.from(".panel.step-two", 1, { xPercent: 0 });
  tl.from(".panel.step-three", 1, { xPercent: 0 });
  tl.from(".panel.step-four", 1, { xPercent: 0 });

  return new ScrollMagic.Scene({
    triggerElement: "#pinMaster",
    triggerHook: "onLeave",
    duration: "200%",
  })
    .setPin("#pinMaster")
    .setTween(tl)
    .addTo(controller);
}
function tokenAnimation() {
  const t2 = gsap.timeline();
  t2.to("#fade1", 1, { opacity: 0 })
    .to("#fade1", 1, { opacity: 1 })
    .to("#fade1", 1, { opacity: 1 });
  t2.to("#fade2", 1, { opacity: 0 }).to("#fade2", 1, { opacity: 1 });
  t2.to("#fade3", 1, { opacity: 0 }).to("#fade3", 1, { opacity: 1 });

  return new ScrollMagic.Scene({
    triggerElement: "#token-trigger",
    triggerHook: "onLeave",
    duration: "45%",
    offset: -halfScreen,
  })
    .setTween(t2)
    .setClassToggle("#token-trigger", "active")
    .addTo(controller);
}
function cityAnimation() {
  var t3 = gsap.timeline();
  t3.from("#city-trigger", 1, { xPercent: 0, opacity: 1 });

  return new ScrollMagic.Scene({
    triggerElement: "#city-trigger",
    triggerHook: "onLeave",
    duration: "0%",
    offset: -threeQuarterScreen,
  })
    .setTween(t3)
    .setClassToggle("#city-trigger", "active")
    .addTo(controller);
}
function buildingAnimation() {
  const t4 = gsap.timeline();
  t4.from("#building-trigger", 1, { xPercent: 0, opacity: 1 });

  return new ScrollMagic.Scene({
    triggerElement: "#building-trigger",
    triggerHook: "onLeave",
    duration: "0%",
    offset: -halfScreen,
  })
    .setTween(t4)
    .setClassToggle("#building-trigger", "active")
    .addTo(controller);
}
function integrateAnimation() {
  const t5 = gsap.timeline();
  t5.from(".integrate-section", 1, { xPercent: 0, opacity: 1 });

  return new ScrollMagic.Scene({
    triggerElement: ".integrate-section",
    triggerHook: "onLeave",
    duration: "0%",
    offset: -oneFifthScreenHeight,
  })
    .setTween(t5)
    .setClassToggle(".integrate-section", "active")
    .addTo(controller);
}
function updateActiveStep(progress) {
  const slides = document.querySelectorAll("#pinMaster .panel");
  const firstSlide = slides[0];
  if (firstSlide) {
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
    if (progress < 0.2 && progress !== 0) {
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
        nextSlide.classList.add("inactive");
      }
    });
  }
}
function isMobile() {
  return window.innerWidth < 1024;
}
function initialiseScrollMagic() {
  controller = new ScrollMagic.Controller();
  const scene = stepAnimation();
  const scene2 = tokenAnimation();
  const scene3 = cityAnimation();
  const scene4 = buildingAnimation();
  const scene5 = integrateAnimation();
  document.addEventListener("scroll", function () {
    updateActiveStep(scene.progress());
  });
}
function handleResize() {
  setTimeout(function () {
    if (!isSafari()) {
      $.stellar("refresh");
    }
    const newSize = !isMobile() ? "big" : "small";
    if (newSize !== size) {
      size = newSize;
      if (newSize === "small") {
        controller.destroy(true);
      } else {
        initialiseScrollMagic();
      }
    }
  }, 400);
}
function isSafari() {
  const navigator = window.navigator;
  const ua = navigator.userAgent.toLowerCase();
  const hasMediaCapabilities = !!(
    navigator.mediaCapabilities && navigator.mediaCapabilities.decodingInfo
  );
  const isSafari =
    ua.indexOf("safari") !== -1 &&
    !(ua.indexOf("chrome") !== -1) &&
    ua.indexOf("version/") !== -1;
  return isSafari && hasMediaCapabilities;
}
function initialiseElements() {
  const title = document.title;
  if (title.includes("Home")) {
    if (!isMobile()) {
      initialiseScrollMagic();
    }
    $.stellar({
      horizontalScrolling: false,
      responsive: true,
      positionProperty: "transform",
      parallaxElements: true,
      verticalOffset: isSafari() ? -threeQuarterScreen : 0,
    });

    // Disable ScrollMagic on resize and refresh Stellar.js
    window.addEventListener("resize", function () {
      handleResize();
    });
  } else {
    if (controller) {
      controller.destroy(true);
    }
    window.removeEventListener(
      "resize",
      function () {
        handleResize();
      },
      true
    );
    document.removeEventListener("scroll", updateActiveStep, true);
  }
}
window.addEventListener("popstate", initialiseElements());