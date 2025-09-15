// Smooth scrolling for nav links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Fade-in sections on scroll
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
      entry.target.style.transition = 'all 1s ease-out';
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));

// Typing effect in hero
const words = ["Linux Enthusiast", "AWS DevOps", "Full-Stack Developer", "Culinary Expert"];
let i = 0, j = 0;
let currentWord = "";
let isDeleting = false;
const typingSpeed = 120;
const typingElement = document.querySelector(".typing");

function type() {
  if (i >= words.length) i = 0;
  currentWord = words[i];
  
  if (!isDeleting) {
    typingElement.textContent = currentWord.substring(0, j + 1);
    j++;
    if (j === currentWord.length) {
      isDeleting = true;
      setTimeout(type, 1000);
      return;
    }
  } else {
    typingElement.textContent = currentWord.substring(0, j - 1);
    j--;
    if (j === 0) {
      isDeleting = false;
      i++;
    }
  }
  setTimeout(type, isDeleting ? typingSpeed / 2 : typingSpeed);
}

type();
