document.addEventListener('DOMContentLoaded', () => {
    // Scroll Header Background
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile Navigation Menu
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');
    const nav = document.getElementById('nav');
    const navLinks = document.querySelectorAll('.nav-link');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            nav.classList.add('active');
        });
    }

    if (navClose) {
        navClose.addEventListener('click', () => {
            nav.classList.remove('active');
        });
    }

    // Close nav when clicking a link on mobile
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
        });
    });

    // Active Navigation Link on Scroll
    const sections = document.querySelectorAll('section[id]');
    
    function scrollActive() {
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100;
            const sectionId = current.getAttribute('id');
            const navLink = document.querySelector('.nav-link[href*=' + sectionId + ']');

            if (navLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLink.classList.add('active');
                } else {
                    navLink.classList.remove('active');
                }
            }
        });
    }
    window.addEventListener('scroll', scrollActive);

    // Scroll Animation Revealing Elements
    const fadeUpElements = document.querySelectorAll('.fade-up');
    const slideLeftElements = document.querySelectorAll('.slide-left');
    const slideRightElements = document.querySelectorAll('.slide-right');

    const revealElements = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = 100;

        // Reveal fade-ups
        fadeUpElements.forEach(el => {
            const revealTop = el.getBoundingClientRect().top;
            if (revealTop < windowHeight - revealPoint) {
                el.classList.add('visible');
            }
        });

        // Reveal slide lefts
        slideLeftElements.forEach(el => {
            const revealTop = el.getBoundingClientRect().top;
            if (revealTop < windowHeight - revealPoint) {
                el.classList.add('visible');
            }
        });

        // Reveal slide rights
        slideRightElements.forEach(el => {
            const revealTop = el.getBoundingClientRect().top;
            if (revealTop < windowHeight - revealPoint) {
                el.classList.add('visible');
            }
        });
    };

    // Initial check and on scroll
    revealElements();
    window.addEventListener('scroll', revealElements);
});
