Shery.mouseFollower();
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".anime", {
  videos: ["./assets/0.mp4", "./assets/2.mp4", "./assets/3.mp4"],
});

gsap.to(".text2", {
scrollTrigger: {
  trigger:".scroll",
  pin:true,
  start:"top top",
  end:"bottom bottom",
  endTrigger:".last",
  scrub:1,
},

y:"-300%",
ease:Power1
})

var sections = document.querySelectorAll(".text2");
Shery.imageEffect(".images", {
  style: 5,
  congif:{onMouse: {value: 1}},
  slideStyle: (setScroll) => {
    sections.forEach(function(section) {
      ScrollTrigger.create({
        trigger: section,
        start:"top top",
        scrub:1,
        onUpdate: function(prog) {
          setScroll(prog.progress+index)
        }
      })
    });
  },
});