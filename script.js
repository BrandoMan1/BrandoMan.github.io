// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Fade-in sections on scroll
const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
      entry.target.style.transition = "all 1s ease-out";
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });
sections.forEach(section => observer.observe(section));

// Highlight nav items based on section
const navLinks = document.querySelectorAll('nav a');
window.addEventListener('scroll', () => {
  let fromTop = window.scrollY + 80;
  navLinks.forEach(link => {
    const section = document.querySelector(link.hash);
    if(
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ){
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});

// Typing effect for hero
const words = ["Linux Enthusiast", "AWS DevOps", "Full-Stack Developer", "Culinary Expert"];
let i = 0, j = 0;
let currentWord = "";
let isDeleting = false;
const typingSpeed = 120;
const typingElement = document.querySelector(".typing");

function type() {
  if(i >= words.length) i = 0;
  currentWord = words[i];
  
  if(!isDeleting){
    typingElement.textContent = currentWord.substring(0, j+1);
    j++;
    if(j === currentWord.length){
      isDeleting = true;
      setTimeout(type, 1000);
      return;
    }
  } else {
    typingElement.textContent = currentWord.substring(0, j-1);
    j--;
    if(j === 0){
      isDeleting = false;
      i++;
    }
  }
  setTimeout(type, isDeleting ? typingSpeed/2 : typingSpeed);
}

type();
