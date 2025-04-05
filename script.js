

document.body.classList.add('dark-mode');



     // Scroll Reveal Animation
     function reveal() {
         const reveals = document.querySelectorAll('.reveal');
         
         for (let i = 0; i < reveals.length; i++) {
             const windowHeight = window.innerHeight;
             const elementTop = reveals[i].getBoundingClientRect().top;
             const elementVisible = 150;
             
             if (elementTop < windowHeight - elementVisible) {
                 reveals[i].classList.add('active');
             }
         }
     }

     window.addEventListener('scroll', reveal);
     reveal(); 


      // Scroll to top functionality
 const scrollToTopBtn = document.getElementById('scrollToTop');
 
 // Show button when user scrolls down 300px from the top
 window.addEventListener('scroll', () => {
     if (window.pageYOffset > 300) {
         scrollToTopBtn.classList.add('visible');
     } else {
         scrollToTopBtn.classList.remove('visible');
     }
 });
 
 // Smooth scroll to top when button is clicked
 scrollToTopBtn.addEventListener('click', () => {
     window.scrollTo({
         top: 0,
         behavior: 'smooth'
     });
 });





  // Dark/Light Mode Toggle
  const body = document.body;
     const modeToggle = document.querySelector('.mode-toggle');
     const modeIcon = modeToggle.querySelector('i');
     
     modeToggle.addEventListener('click', () => {
         body.classList.toggle('dark-mode');
         if (body.classList.contains('dark-mode')) {
             modeIcon.className = 'fas fa-sun';
         } else {
             modeIcon.className = 'fas fa-moon';
         }
         localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
     });
     
     // Check for saved user preference
     document.addEventListener('DOMContentLoaded', () => {
     
         if (body.classList.contains('dark-mode')) {
             modeIcon.className = 'fas fa-sun';
         }
         
         // Check localStorage
         const savedMode = localStorage.getItem('darkMode');
         if (savedMode !== null) {
             if (savedMode === 'true') {
                 body.classList.add('dark-mode');
                 modeIcon.className = 'fas fa-sun';
             } else {
                 body.classList.remove('dark-mode');
                 modeIcon.className = 'fas fa-moon';
             }
         }
     });
     
     // Mobile Navigation Toggle
     const mobileToggle = document.querySelector('.mobile-toggle');
     const navLinks = document.querySelector('.nav-links');
     
     mobileToggle.addEventListener('click', () => {
         navLinks.classList.toggle('active');
         const toggleIcon = mobileToggle.querySelector('i');
         toggleIcon.classList.toggle('fa-bars');
         toggleIcon.classList.toggle('fa-times');
     });
     
     // Close mobile menu when clicking on a link
     document.querySelectorAll('.nav-links a').forEach(link => {
         link.addEventListener('click', () => {
             navLinks.classList.remove('active');
             const toggleIcon = mobileToggle.querySelector('i');
             toggleIcon.className = 'fas fa-bars';
         });
     });
     
     // Typing effect for role text
     const typedTextElement = document.querySelector('.typed-text');
     const texts = ["Data Analyst", "Frontend Developer", "Programmer"];
     let textIndex = 0;
     let charIndex = 0;
     let isDeleting = false;
     let typingDelay = 100;
     let erasingDelay = 50;
     let newTextDelay = 2000;

     function typeEffect() {
         const currentText = texts[textIndex];
         
         if (isDeleting) {
             typedTextElement.textContent = currentText.substring(0, charIndex - 1);
             charIndex--;
             typingDelay = erasingDelay;
         } else {
             typedTextElement.textContent = currentText.substring(0, charIndex + 1);
             charIndex++;
             typingDelay = 100;
         }
         
         if (!isDeleting && charIndex === currentText.length) {
            
             isDeleting = true;
             typingDelay = newTextDelay;
         } else if (isDeleting && charIndex === 0) {
             isDeleting = false;
            
             textIndex = (textIndex + 1) % texts.length;
             
             typingDelay = 500;
         }
         
         setTimeout(typeEffect, typingDelay);
     }
     

     function createGlowEffects() {
         const container = document.getElementById('glow-effects');
         
         // Create 3 glow effects
         for (let i = 0; i < 3; i++) {
             const glow = document.createElement('div');
             glow.classList.add('glow');
             
          
             const size = Math.floor(Math.random() * 300) + 200;
             const top = Math.floor(Math.random() * 100);
             const left = Math.floor(Math.random() * 100);
             const delay = Math.random() * 5;
             
             glow.style.width = `${size}px`;
             glow.style.height = `${size}px`;
             glow.style.top = `${top}%`;
             glow.style.left = `${left}%`;
             glow.style.animationDelay = `${delay}s`;
             
             container.appendChild(glow);
         }
     }
     
     function createGeometricShapes() {
         const container = document.getElementById('geometric-shapes');
         const shapes = ['shape-circle', 'shape-square', 'shape-hex','shape-star'];
         const colors = ['var(--primary-color)', 'var(--secondary-color)', 'var(--accent-color)'];
         
         // Create 15 random shapes
         for (let i = 0; i < 20; i++) {
             const shape = document.createElement('div');
             shape.classList.add('shape');
             
             // Randomly select shape type
             const shapeType = shapes[Math.floor(Math.random() * shapes.length)];
             shape.classList.add(shapeType);
             
             // Randomize properties
             const size = Math.floor(Math.random() * 80) + 20;
             const top = Math.floor(Math.random() * 100);
             const left = Math.floor(Math.random() * 100);
             const color = colors[Math.floor(Math.random() * colors.length)];
             const floatX = (Math.random() - 0.5) * 100;
             const floatY = (Math.random() - 0.5) * 100;
             const rotateDeg = Math.floor(Math.random() * 360);
             
             // Apply styles
             shape.style.width = `${size}px`;
             shape.style.height = `${size}px`;
             shape.style.top = `${top}%`;
             shape.style.left = `${left}%`;
             shape.style.background = color;
             shape.style.setProperty('--float-x', `${floatX}px`);
             shape.style.setProperty('--float-y', `${floatY}px`);
             shape.style.setProperty('--rotate-deg', `${rotateDeg}deg`);
             
             // Add special styles for hexagons
             if (shapeType === 'shape-hex') {
                 shape.style.borderBottomColor = color;
             }
             
             container.appendChild(shape);
         }
     }
     
     function createParticles() {
         const container = document.getElementById('particle-field');
         const colors = ['var(--primary-color)', 'var(--secondary-color)', 'var(--accent-color)'];
         
         // Create 50 particles
         for (let i = 0; i < 50; i++) {
             const particle = document.createElement('div');
             particle.classList.add('particle');
             
             // Randomize properties
             const size = Math.random() * 3 + 1;
             const top = Math.random() * 100;
             const left = Math.random() * 100;
             const color = colors[Math.floor(Math.random() * colors.length)];
             const floatX = (Math.random() - 0.5) * 80;
             const floatY = (Math.random() - 0.5) * 80;
             const opacity_base = Math.random() * 0.3 + 0.1; // Base opacity between 0.1 and 0.4
const opacity_peak = opacity_base + 0.2; // Peak opacity during animation

// Apply styles
particle.style.width = `${size}px`;
particle.style.height = `${size}px`;
particle.style.top = `${top}%`;
particle.style.left = `${left}%`;
particle.style.backgroundColor = color;
particle.style.setProperty('--float-x', `${floatX}px`);
particle.style.setProperty('--float-y', `${floatY}px`);
particle.style.setProperty('--opacity-base', opacity_base);
particle.style.setProperty('--opacity-peak', opacity_peak);
particle.style.opacity = opacity_base;
// Add random animation delay
const animDelay = Math.random() * 10;
             particle.style.animationDelay = `${animDelay}s`;
             
             container.appendChild(particle);
         }
     }
     
     // Reveal animations on scroll
     function revealOnScroll() {
         const reveals = document.querySelectorAll('.reveal');
         
         reveals.forEach(element => {
             const windowHeight = window.innerHeight;
             const elementTop = element.getBoundingClientRect().top;
             const elementVisible = 150;
             
             if (elementTop < windowHeight - elementVisible) {
                 element.classList.add('active');
             } else {
                 element.classList.remove('active');
             }
         });
     }
     
     // Initialize animations
     document.addEventListener('DOMContentLoaded', () => {
         createGlowEffects();
         createGeometricShapes();
         createParticles();
         typeEffect();
         
         revealOnScroll();

         window.addEventListener('scroll', revealOnScroll);
     });
     

 