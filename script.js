var body = document.querySelector("body");
var crsr = document.querySelector(".crsr");

body.addEventListener("mousemove", (axis) => {
  crsr.style.display = "block"
  crsr.style.left = axis.x + "px";
  crsr.style.top = axis.y + "px";
});
body.addEventListener("mouseleave", () => {
  crsr.style.display = "none";
});

var tl = gsap.timeline();

tl.from("#nav img, h3", {
  y: -50,
  duration: 1,
  delay: 0.3,
  opacity: 0,
  stagger: 0.5,
});

tl.from(".upper h1, p, h2", {
  y: 50,
  duration: 1,
  opacity: 0,
  stagger: 0.5,
});

tl.from("#bigimg", {
  x: 50,
  opacity: 0,
  duration: 1,
});

tl.from(".lower, .lower img", {
  y: 50,
  duration: 1,
  opacity: 0,
  stagger: 0.5,
});

