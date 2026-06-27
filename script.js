// ========== Smooth Scroll Enhancement ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ========== Form Handling ==========
const registrationForm = document.querySelector('.registration-form');
if (registrationForm) {
  registrationForm.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const interest = document.getElementById('interest').value;
    
    // Simple validation
    if (name && email && interest !== 'Select an option') {
      // Show success message
      alert(`Thank you for registering, ${name}! We'll be in touch at ${email} soon.`);
      
      // Reset form
      registrationForm.reset();
    } else {
      alert('Please fill in all fields correctly.');
    }
  });
}

// ========== Intersection Observer for Animations ==========
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Apply to cards and opportunity items
document.querySelectorAll('.card, .opportunity-card, .timeline-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// ========== Mobile Menu Toggle ==========
// Placeholder for mobile menu functionality
const navLinks = document.querySelector('.nav-links');
const header = document.querySelector('.header');

// Adjust header on scroll
let lastScrollTop = 0;
window.addEventListener('scroll', function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollTop > lastScrollTop) {
    // Scrolling down
    header.style.boxShadow = '0 4px 8px rgba(30, 115, 190, 0.12)';
  } else {
    // Scrolling up
    header.style.boxShadow = '0 4px 8px rgba(30, 115, 190, 0.08)';
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// ========== Initialize ==========
console.log('Unity & Progress website initialized');
