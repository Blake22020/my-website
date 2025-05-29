// Loader
window.addEventListener('load', function() {
    const loader = document.querySelector('.loader');
    
    // Minimum display time 1 second
    setTimeout(() => {
        loader.classList.add('hidden');
        setTimeout(() => {
            loader.remove();
        }, 500);
    }, 1000);
});

const mobileMenuButton = document.querySelector('.mobile-menu-button');
const headButtons = document.querySelector('.head-buttons');

mobileMenuButton.addEventListener('click', function() {
    headButtons.classList.toggle('active');
    this.innerHTML = headButtons.classList.contains('active') ? 
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

document.querySelectorAll('.head-button').forEach(button => {
    button.addEventListener('click', function() {
        if (window.innerWidth <= 768) {
            headButtons.classList.remove('active');
            mobileMenuButton.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            const headerHeight = document.querySelector('header').offsetHeight;
            window.scrollTo({
                top: targetElement.offsetTop - headerHeight,
                behavior: 'smooth'
            });
        }
    });
});

const animateOnScroll = function() {
    const elements = document.querySelectorAll('.card, .text h1, .text h2');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

window.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.card, .text h1, .text h2');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    setTimeout(animateOnScroll, 300);
});

window.addEventListener('scroll', animateOnScroll);