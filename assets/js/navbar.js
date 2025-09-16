// ===== RESPONSIVE BOOTSTRAP NAVBAR JAVASCRIPT =====

document.addEventListener('DOMContentLoaded', function() {
    // Bootstrap navbar elements
    const navbar = document.querySelector('.navbar');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const body = document.body;

    // Navbar scroll effect
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScrollTop = scrollTop;
    });

    // Close mobile menu when clicking on a nav link
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Close Bootstrap collapse
            if (navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                    hide: true
                });
            }
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNavbar = navbar.contains(event.target);
        if (!isClickInsideNavbar && navbarCollapse.classList.contains('show')) {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                hide: true
            });
        }
    });

    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Only handle anchor links (not just #)
            if (href !== '#') {
                e.preventDefault();

                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar height

                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Enhanced keyboard navigation
    navbarToggler.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.click();
        }
    });

    // Focus trap for mobile menu
    document.addEventListener('keydown', function(e) {
        if (navbarCollapse.classList.contains('show')) {
            const focusableElements = navbarCollapse.querySelectorAll(
                'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );

            if (focusableElements.length > 0) {
                const firstElement = focusableElements[0];
                const lastElement = focusableElements[focusableElements.length - 1];

                if (e.key === 'Tab') {
                    if (e.shiftKey) {
                        if (document.activeElement === firstElement) {
                            e.preventDefault();
                            lastElement.focus();
                        }
                    } else {
                        if (document.activeElement === lastElement) {
                            e.preventDefault();
                            firstElement.focus();
                        }
                    }
                }

                if (e.key === 'Escape') {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                        hide: true
                    });
                    navbarToggler.focus();
                }
            }
        }
    });

    // Prevent body scroll when mobile menu is open (Bootstrap handles this, but we add enhancement)
    function toggleBodyScroll() {
        if (navbarCollapse.classList.contains('show')) {
            body.style.overflow = 'hidden';
            body.style.paddingRight = '0px'; // Prevent layout shift
        } else {
            body.style.overflow = '';
            body.style.paddingRight = '';
        }
    }

    // Observe mobile menu state changes
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.attributeName === 'class') {
                toggleBodyScroll();
            }
        });
    });

    observer.observe(navbarCollapse, {
        attributes: true,
        attributeFilter: ['class']
    });

    // Handle window resize to ensure proper state
    window.addEventListener('resize', function() {
        if (window.innerWidth > 991.98) { // Bootstrap lg breakpoint
            // Ensure mobile menu is closed on desktop
            if (navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                    hide: true
                });
            }
        }
    });

    // Add loading animation for navbar
    navbar.style.opacity = '0';
    navbar.style.transform = 'translateY(-20px)';

    setTimeout(() => {
        navbar.style.transition = 'all 0.5s ease';
        navbar.style.opacity = '1';
        navbar.style.transform = 'translateY(0)';
    }, 100);

    // Initial check for body scroll
    toggleBodyScroll();
});
