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
