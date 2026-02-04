/* ===========================
   David Alvin - Portfolio JS
   =========================== */

(function () {
    'use strict';

    /* ----- Loader ----- */
    const loader = document.getElementById('loader');

    function hideLoader() {
        document.body.classList.remove('loading');
        loader.classList.add('hidden');
    }

    document.body.classList.add('loading');
    window.addEventListener('load', function () {
        setTimeout(hideLoader, 1400);
    });

    // Failsafe: hide loader after 3 seconds regardless
    setTimeout(hideLoader, 3000);

    /* ----- Navigation: scroll effect ----- */
    const nav = document.getElementById('nav');

    function handleNavScroll() {
        if (window.scrollY > 60) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleNavScroll, { passive: true });
    handleNavScroll();

    /* ----- Mobile menu toggle ----- */
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    navToggle.addEventListener('click', function () {
        const isOpen = navMenu.classList.toggle('open');
        navToggle.classList.toggle('active');
        navToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close menu on link click
    navMenu.querySelectorAll('.nav-link').forEach(function (link) {
        link.addEventListener('click', function () {
            navMenu.classList.remove('open');
            navToggle.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
        });
    });

    // Close menu on outside click
    document.addEventListener('click', function (e) {
        if (!navMenu.contains(e.target) && !navToggle.contains(e.target) && navMenu.classList.contains('open')) {
            navMenu.classList.remove('open');
            navToggle.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
        }
    });

    /* ----- Active nav link on scroll ----- */
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link:not(.nav-resume-btn)');

    function highlightNav() {
        var scrollPos = window.scrollY + 200;

        sections.forEach(function (section) {
            var top = section.offsetTop;
            var height = section.offsetHeight;
            var id = section.getAttribute('id');

            if (scrollPos >= top && scrollPos < top + height) {
                navLinks.forEach(function (link) {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', highlightNav, { passive: true });

    /* ----- Scroll-triggered reveal ----- */
    var revealElements = document.querySelectorAll('.reveal');

    if ('IntersectionObserver' in window) {
        var revealObserver = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        revealObserver.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.15,
                rootMargin: '0px 0px -40px 0px'
            }
        );

        revealElements.forEach(function (el) {
            revealObserver.observe(el);
        });
    } else {
        // Fallback: show everything
        revealElements.forEach(function (el) {
            el.classList.add('visible');
        });
    }

    /* ----- Skill bar animation ----- */
    var skillFills = document.querySelectorAll('.skill-fill');

    if ('IntersectionObserver' in window) {
        var skillObserver = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        var level = entry.target.getAttribute('data-level');
                        entry.target.style.width = level + '%';
                        entry.target.classList.add('animated');
                        skillObserver.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.3
            }
        );

        skillFills.forEach(function (bar) {
            skillObserver.observe(bar);
        });
    } else {
        skillFills.forEach(function (bar) {
            bar.style.width = bar.getAttribute('data-level') + '%';
        });
    }

    /* ----- Smooth scroll for anchor links (Safari fallback) ----- */
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var targetId = this.getAttribute('href');
            if (targetId === '#') return;

            var target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                var offset = nav.offsetHeight + 16;
                var top = target.getBoundingClientRect().top + window.pageYOffset - offset;

                window.scrollTo({
                    top: top,
                    behavior: 'smooth'
                });
            }
        });
    });

    /* ----- Parallax on hero shapes (subtle, desktop only) ----- */
    var shapes = document.querySelectorAll('.shape');

    if (window.matchMedia('(min-width: 769px)').matches) {
        window.addEventListener('scroll', function () {
            var scrollY = window.scrollY;
            if (scrollY < window.innerHeight) {
                shapes.forEach(function (shape, i) {
                    var speed = 0.03 + i * 0.015;
                    shape.style.transform = 'translateY(' + scrollY * speed + 'px)';
                });
            }
        }, { passive: true });
    }

    /* ----- Hide scroll indicator on scroll ----- */
    var scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 100) {
                scrollIndicator.style.opacity = '0';
            } else {
                scrollIndicator.style.opacity = '';
            }
        }, { passive: true });
    }

})();
