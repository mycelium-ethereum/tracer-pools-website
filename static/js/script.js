var w = window.innerWidth;
var size = w >= 1024 ? "big" : "small";
var controller;
var prevElement;
const halfScreen = window.innerHeight * 0.5;
const threeQuarterScreen = window.innerHeight * 0.75;
const oneFifthScreenHeight = window.innerHeight * 0.2;

function stepAnimation() {
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
}
function tokenAnimation() {
  var t2 = gsap.timeline();
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
}
function cityAnimation() {
  var t3 = gsap.timeline();
  t3.from("#city-trigger", 1, { xPercent: 0, opacity: 1 });

  const scene = new ScrollMagic.Scene({
    triggerElement: "#city-trigger",
    triggerHook: "onLeave",
    duration: "0%",
    offset: -threeQuarterScreen,
  })
    .setTween(t3)
    .setClassToggle("#city-trigger", "active")
    .addTo(controller);
  return scene;
}
function buildingAnimation() {
  var t4 = gsap.timeline();
  t4.from("#building-trigger", 1, { xPercent: 0, opacity: 1 });

  const scene = new ScrollMagic.Scene({
    triggerElement: "#building-trigger",
    triggerHook: "onLeave",
    duration: "0%",
    offset: -halfScreen,
  })
    .setTween(t4)
    .setClassToggle("#building-trigger", "active")
    .addTo(controller);
  return scene;
}
function integrateAnimation() {
  var t5 = gsap.timeline();
  t5.from(".integrate-section", 1, { xPercent: 0, opacity: 1 });

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
        nextSlide.classList.add("inactive");
      }
    });
  }
}
function isMobile() {
  const width = window.innerWidth;
  return width < 1024;
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
  this.setTimeout(function () {
    $.stellar("refresh");
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
  }, 500);
}
function initialiseElements() {
  const title = document.title.split(" ")[0];
  if (title == "Home") {
    if (!isMobile()) {
      initialiseScrollMagic();
    }

    $(window).stellar({ horizontalScrolling: false });
    $(window).stellar("refresh");

    // Disable ScrollMagic on resize and refresh Stellar.js
    window.addEventListener("resize", handleResize);
  } else {
    if (controller) {
      controller.destroy(true);
    }
    $.stellar("destroy");

    window.removeEventListener("resize", handleResize, true);
    document.removeEventListener("scroll", updateActiveStep, true);
  }
}
window.addEventListener("popstate", initialiseElements());
// window.onload = initialiseElements();
