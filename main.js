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
  });
});

console.log('Cozy Chapters loaded successfully! ✿');
