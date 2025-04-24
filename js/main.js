// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Animate elements on scroll
    const animateOnScroll = function() {
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            // If section is in viewport
            if (sectionTop < windowHeight * 0.75) {
                section.classList.add('visible');
            }
        });
    };
    
    // Add visible class to each section
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-in');
    });
    
    // Call the animate function on scroll
    window.addEventListener('scroll', animateOnScroll);
    // Call it once on load to check for elements already in view
    animateOnScroll();
    
    // Add parallax effect to artist image
    const artistImage = document.querySelector('.artist-image-container');
    if (artistImage) {
        window.addEventListener('mousemove', function(e) {
            const mouseX = e.clientX / window.innerWidth - 0.5;
            const mouseY = e.clientY / window.innerHeight - 0.5;
            
            artistImage.style.transform = `translateX(${mouseX * 20}px) translateY(${mouseY * 20}px)`;
        });
    }
});