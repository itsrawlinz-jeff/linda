// ===== SCROLL ANIMATIONS WITH GSAP =====

document.addEventListener('DOMContentLoaded', function() {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // ===== HERO SECTION ANIMATIONS =====
    // Animate hero title
    gsap.from('.hero-section h2', {
        duration: 1.5,
        y: 100,
        opacity: 0,
        ease: "power3.out",
        delay: 0.5
    });

    // Animate hero paragraph
    gsap.from('.hero-section p', {
        duration: 1.5,
        y: 50,
        opacity: 0,
        ease: "power3.out",
        delay: 0.8
    });

    // Animate hero buttons
    gsap.from('.aximo-hero-btn-wrap .aximo-default-btn', {
        duration: 1,
        y: 30,
        opacity: 0,
        stagger: 0.2,
        ease: "power2.out",
        delay: 1.2
    });

    // ===== ACHIEVEMENT CARDS ANIMATIONS =====
    gsap.from('.achievement-card', {
        scrollTrigger: {
            trigger: '.achievement-card',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        y: 60,
        opacity: 0,
        stagger: 0.2,
        ease: "power2.out"
    });

    // ===== PARTNERS SECTION ANIMATIONS =====
    gsap.from('.aximo-hero-thumb-item', {
        scrollTrigger: {
            trigger: '.aximo-hero-thumb-wrap',
            start: 'top 75%',
            toggleActions: 'play none none reverse'
        },
        duration: 1,
        scale: 0.8,
        opacity: 0,
        stagger: 0.1,
        ease: "back.out(1.7)"
    });

    // ===== ABOUT SECTION ANIMATIONS =====
    gsap.from('.aximo-about-section .aximo-thumb', {
        scrollTrigger: {
            trigger: '.aximo-about-section',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        },
        duration: 1.2,
        x: -100,
        opacity: 0,
        ease: "power3.out"
    });

    gsap.from('.aximo-about-section .aximo-default-content', {
        scrollTrigger: {
            trigger: '.aximo-about-section',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        },
        duration: 1.2,
        x: 100,
        opacity: 0,
        ease: "power3.out",
        delay: 0.2
    });

    // Counter animations
    gsap.from('.aximo-counter-data2', {
        scrollTrigger: {
            trigger: '.aximo-counter-wrap2',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        duration: 1,
        y: 50,
        opacity: 0,
        stagger: 0.2,
        ease: "power2.out"
    });

    // ===== PROGRAMS SECTION ANIMATIONS =====
    gsap.from('.aximo-service-increase-item', {
        scrollTrigger: {
            trigger: '.aximo-service-increase-wrap',
            start: 'top 75%',
            end: 'bottom 25%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        y: 80,
        opacity: 0,
        stagger: 0.15,
        ease: "power2.out"
    });

    // ===== TESTIMONIALS SECTION ANIMATIONS =====
    gsap.from('.aximo-testimonial-wrap2', {
        scrollTrigger: {
            trigger: '.aximo-testimonial-column',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        },
        duration: 1,
        x: 50,
        opacity: 0,
        stagger: 0.3,
        ease: "power2.out"
    });

    // ===== FAQ SECTION ANIMATIONS =====
    gsap.from('.aximo-accordion-column', {
        scrollTrigger: {
            trigger: '#aximo-accordion',
            start: 'top 75%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        y: 60,
        opacity: 0,
        stagger: 0.2,
        ease: "power2.out"
    });

    // ===== FOOTER ANIMATIONS =====
    gsap.from('.aximo-footer-top .row > div', {
        scrollTrigger: {
            trigger: '.aximo-footer-top',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        y: 40,
        opacity: 0,
        stagger: 0.1,
        ease: "power2.out"
    });

    // ===== PARALLAX EFFECTS =====
    // Subtle parallax for hero background
    gsap.to('.hero-carousel', {
        scrollTrigger: {
            trigger: '.hero-section',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        },
        y: -100,
        ease: "none"
    });

    // ===== HOVER ANIMATIONS =====
    // Achievement cards hover effect
    const achievementCards = document.querySelectorAll('.achievement-card');
    achievementCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                duration: 0.3,
                y: -10,
                scale: 1.02,
                ease: "power2.out"
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                duration: 0.3,
                y: 0,
                scale: 1,
                ease: "power2.out"
            });
        });
    });

    // Program items hover effect
    const programItems = document.querySelectorAll('.aximo-service-increase-item');
    programItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            gsap.to(item.querySelector('img'), {
                duration: 0.4,
                scale: 1.1,
                ease: "power2.out"
            });
            gsap.to(item.querySelector('.aximo-service-increase-icon'), {
                duration: 0.3,
                x: 10,
                ease: "power2.out"
            });
        });

        item.addEventListener('mouseleave', () => {
            gsap.to(item.querySelector('img'), {
                duration: 0.4,
                scale: 1,
                ease: "power2.out"
            });
            gsap.to(item.querySelector('.aximo-service-increase-icon'), {
                duration: 0.3,
                x: 0,
                ease: "power2.out"
            });
        });
    });

    // ===== STAGGERED TEXT ANIMATIONS =====
    // Split text animation for main headings
    const headings = document.querySelectorAll('h2');
    headings.forEach(heading => {
        const text = heading.textContent;
        const words = text.split(' ');
        heading.innerHTML = words.map(word => `<span class="word">${word}</span>`).join(' ');

        gsap.from(heading.querySelectorAll('.word'), {
            scrollTrigger: {
                trigger: heading,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            duration: 0.8,
            y: 30,
            opacity: 0,
            stagger: 0.1,
            ease: "power2.out"
        });
    });

    // ===== LOADING ANIMATION =====
    // Page load animation
    gsap.from('body', {
        duration: 0.5,
        opacity: 0,
        ease: "power2.out"
    });

    // ===== PROGRESS BAR =====
    // Create and animate progress bar
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 4px;
        background: linear-gradient(90deg, #ff6b6b, #4ecdc4);
        z-index: 9999;
        transition: width 0.3s ease;
    `;
    document.body.appendChild(progressBar);

    gsap.to(progressBar, {
        scrollTrigger: {
            trigger: 'body',
            start: 'top top',
            end: 'bottom bottom',
            scrub: true,
            onUpdate: (self) => {
                progressBar.style.width = (self.progress * 100) + '%';
            }
        }
    });

    // ===== MAGNETIC BUTTONS =====
    // Add magnetic effect to buttons
    const buttons = document.querySelectorAll('.aximo-default-btn, .btn-donate');
    buttons.forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            gsap.to(button, {
                duration: 0.3,
                x: x * 0.3,
                y: y * 0.3,
                ease: "power2.out"
            });
        });

        button.addEventListener('mouseleave', () => {
            gsap.to(button, {
                duration: 0.5,
                x: 0,
                y: 0,
                ease: "elastic.out(1, 0.3)"
            });
        });
    });

    // ===== REVEAL ANIMATIONS =====
    // Text reveal animation
    const revealElements = document.querySelectorAll('.aximo-default-content p, .aximo-default-content h2');
    revealElements.forEach(element => {
        gsap.from(element, {
            scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            duration: 1,
            y: 50,
            opacity: 0,
            ease: "power3.out"
        });
    });

    // ===== FLOATING ELEMENTS =====
    // Add subtle floating animation to decorative elements
    const floatingElements = document.querySelectorAll('.aximo-hero-thumb-item img');
    floatingElements.forEach((element, index) => {
        gsap.to(element, {
            y: '+=10',
            duration: 2 + index * 0.5,
            ease: "power2.inOut",
            yoyo: true,
            repeat: -1,
            delay: index * 0.2
        });
    });

    // ===== SCALE ON SCROLL =====
    // Scale effect for certain sections
    gsap.from('.bg-red', {
        scrollTrigger: {
            trigger: '.bg-red',
            start: 'top 90%',
            end: 'top 10%',
            scrub: true
        },
        scale: 0.95,
        ease: "none"
    });

    // ===== ROTATION ANIMATIONS =====
    // Subtle rotation for logos
    const logos = document.querySelectorAll('.aximo-brandlogo-item img');
    logos.forEach((logo, index) => {
        gsap.from(logo, {
            scrollTrigger: {
                trigger: logo,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            duration: 1,
            rotation: -10,
            opacity: 0,
            ease: "back.out(1.7)",
            delay: index * 0.1
        });
    });

    // ===== PULSE ANIMATIONS =====
    // Pulse effect for call-to-action buttons
    const ctaButtons = document.querySelectorAll('.aximo-default-btn');
    ctaButtons.forEach(button => {
        gsap.to(button, {
            scale: 1.05,
            duration: 2,
            ease: "power2.inOut",
            yoyo: true,
            repeat: -1,
            delay: Math.random() * 2
        });
    });

    // ===== MORPHING SHAPES =====
    // Create morphing background shapes
    const morphingShape = document.createElement('div');
    morphingShape.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        width: 200px;
        height: 200px;
        background: radial-gradient(circle, rgba(255,107,107,0.1) 0%, transparent 70%);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        z-index: -1;
        pointer-events: none;
    `;
    document.body.appendChild(morphingShape);

    gsap.to(morphingShape, {
        scrollTrigger: {
            trigger: 'body',
            start: 'top top',
            end: 'bottom bottom',
            scrub: true
        },
        scale: 3,
        opacity: 0.3,
        ease: "none"
    });

    // ===== INTERSECTION OBSERVER FOR PERFORMANCE =====
    // Use Intersection Observer for better performance
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
    document.querySelectorAll('.achievement-card, .aximo-service-increase-item, .aximo-testimonial-wrap2').forEach(el => {
        observer.observe(el);
    });

    // ===== RESPONSIVE ANIMATIONS =====
    // Adjust animations for mobile
    if (window.innerWidth < 768) {
        ScrollTrigger.getAll().forEach(trigger => {
            trigger.vars.start = 'top 85%';
        });
    }

    // ===== PERFORMANCE OPTIMIZATION =====
    // Throttle scroll events
    let scrollTimeout;
    const throttledScroll = () => {
        if (!scrollTimeout) {
            scrollTimeout = setTimeout(() => {
                // Update scroll-based animations
                ScrollTrigger.refresh();
                scrollTimeout = null;
            }, 16); // ~60fps
        }
    };

    window.addEventListener('scroll', throttledScroll);

    // ===== ACCESSIBILITY =====
    // Respect user's motion preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
        gsap.globalTimeline.pause();
    }

    // ===== DEBUGGING =====
    // Uncomment for debugging ScrollTrigger
    // ScrollTrigger.create({
    //     trigger: "body",
    //     start: "top top",
    //     end: "bottom bottom",
    //     markers: true
    // });
});
