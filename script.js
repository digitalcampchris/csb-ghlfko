console.log("Hier sind wir im Skript.");
gsap.from("#main-heading", { x: 50, opacity: 0, duration: 1 });
gsap.from("#whats-inside", {
  scrollTrigger: "#whats-inside",
  x: -50,
  opacity: 0,
  duration: 1
});
gsap.from("#about-the-author", {
  scrollTrigger: "#about-the-author",
  x: 50,
  opacity: 0,
  duration: 1
});

gsap
  .timeline({
    scrollTrigger: {
      trigger: "#iphone",
      //pin: true,
      scrub: 0.1,
      start: "top bottom",
      end: "+=600"
    }
  })
  .to("#iphone", {
    rotation: 20,
    duration: 1,
    ease: "none"
  });
