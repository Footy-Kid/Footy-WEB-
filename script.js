// FOOTY WEB JAVASCRIPT

// Welcome Message
alert("Welcome to Footy Web!");

// Change Background Color Automatically
const colors = ["#0f172a", "#1e293b", "#111827"];
let index = 0;

setInterval(() => {
  document.body.style.background = colors[index];
  index++;

  if (index >= colors.length) {
    index = 0;
  }
}, 3000);

// Button Click Message
const buttons = document.querySelectorAll("a");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    console.log("Navigation button clicked!");
  });
});

// Simple Typing Effect
const text = "Welcome to Footy Web";
let i = 0;

function typingEffect() {
  if (i < text.length) {
    document.title += text.charAt(i);
    i++;
    setTimeout(typingEffect, 150);
  }
}

document.title = "";
typingEffect();

// Scroll Animation
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < window.innerHeight - 100) {
      section.style.opacity = "1";
      section.style.transform = "translateY(0px)";
      section.style.transition = "all 1s";
    }
  });
});
