// Cart functionality
let cartCount = 0;
const cartCountElement = document.getElementById('cartCount');
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    // Add micro-animation to button
    const originalText = button.innerText;
    button.innerText = 'Added! ✿';
    button.style.backgroundColor = 'var(--accent-green)';
    button.style.color = 'white';
    
    // Increment cart
    cartCount++;
    cartCountElement.innerText = cartCount;
    
    // Add pop animation to cart icon
    const cartIcon = document.getElementById('cartBtn');
    cartIcon.style.transform = 'scale(1.2)';
    setTimeout(() => {
      cartIcon.style.transform = 'scale(1)';
    }, 200);

    // Reset button after 2 seconds
    setTimeout(() => {
      button.innerText = originalText;
      button.style.backgroundColor = '';
      button.style.color = '';
    }, 2000);
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }

    // Close mobile menu if open
    const navLinks = document.getElementById('navLinks');
    if (navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
    }
  });
});

// Mobile Menu Toggle
const mobileToggle = document.getElementById('mobileToggle');
const navLinks = document.getElementById('navLinks');

if (mobileToggle) {
  mobileToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
const heroImg = document.querySelector('.hero-img');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
  if (currentTheme === 'dark') {
    themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    if(heroImg) heroImg.src = './public/hero_illustration_dark.png';
  }
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    
    // Add flip animation class logic
    themeToggle.style.transform = 'scale(0.8) rotate(180deg)';
    
    setTimeout(() => {
      if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
        if(heroImg) heroImg.src = './public/hero_illustration_1781658402249.png';
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
        if(heroImg) heroImg.src = './public/hero_illustration_dark.png';
      }
      themeToggle.style.transform = 'scale(1) rotate(0deg)';
    }, 150);
  });
}

console.log('Cozy Chapters loaded successfully! ✿');
