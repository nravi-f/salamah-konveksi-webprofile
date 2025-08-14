// Mobile navigation toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            if (mobileMenu) {
                mobileMenu.classList.add('hidden');
            }
        }
    });
});

// Header scroll effect
const header = document.querySelector('header');
let lastScrollY = window.scrollY;

function handleScroll() {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > 100) {
        header.classList.add('bg-white/95', 'backdrop-blur-sm', 'shadow-lg');
        header.classList.remove('bg-white');
    } else {
        header.classList.remove('bg-white/95', 'backdrop-blur-sm', 'shadow-lg');
        header.classList.add('bg-white');
    }
    
    lastScrollY = currentScrollY;
}

// Debounced scroll event
let scrollTimeout;
window.addEventListener('scroll', () => {
    if (scrollTimeout) {
        clearTimeout(scrollTimeout);
    }
    scrollTimeout = setTimeout(handleScroll, 10);
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.vm-item, .product-card, .benefit-item').forEach(el => {
    observer.observe(el);
});

// Initial page load animations
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});