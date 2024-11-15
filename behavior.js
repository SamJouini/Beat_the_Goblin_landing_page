// behavior.js

document.addEventListener('DOMContentLoaded', () => {
    // Animate title on load
    const title = document.querySelector('.title');
    title.classList.add('fade-in');

    // Add hover effects to social links
    const socialLinks = document.querySelectorAll('.social-links a');
    socialLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.classList.add('hover-effect');
        });
        link.addEventListener('mouseout', () => {
            link.classList.remove('hover-effect');
        });
    });

    // Scroll animations for sections
    const sections = document.querySelectorAll('.section');
    const options = {
        root: null,
        threshold: 0.1,
        rootMargin: '0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('slide-in');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});
