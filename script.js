document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.setAttribute('data-theme', savedTheme);
    }

    themeToggle.addEventListener('click', () => {
        if (body.getAttribute('data-theme') === 'dark') {
            body.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
        } else {
            body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
    });

    // Fade In Animation on Scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    // Custom Cursor
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');

    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        // Smooth follow for outline
        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    });

    // Hover effects for cursor
    const links = document.querySelectorAll('a, button');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursorOutline.style.width = '60px';
            cursorOutline.style.height = '60px';
            cursorOutline.style.backgroundColor = 'rgba(100, 100, 100, 0.1)';
        });

        link.addEventListener('mouseleave', () => {
            cursorOutline.style.width = '40px';
            cursorOutline.style.height = '40px';
            cursorOutline.style.backgroundColor = 'transparent';
        });
    });

    // Developer HUD Logic
    const debugToggle = document.querySelector('.debug-toggle');
    const techPanel = document.querySelector('.tech-specs-panel');
    const viewportSize = document.getElementById('viewport-size');
    const scrollPos = document.getElementById('scroll-pos');
    const mousePos = document.getElementById('mouse-pos');
    const currentTheme = document.getElementById('current-theme');

    let isDebugMode = false;

    function updateStats() {
        if (!isDebugMode) return;
        viewportSize.textContent = `${window.innerWidth} x ${window.innerHeight}`;
        scrollPos.textContent = `${Math.round(window.scrollY)}px`;
        currentTheme.textContent = body.getAttribute('data-theme') === 'dark' ? 'DARK' : 'LIGHT';
    }

    debugToggle.addEventListener('click', () => {
        isDebugMode = !isDebugMode;
        body.classList.toggle('debug-mode');
        techPanel.classList.toggle('hidden');
        updateStats();
    });

    window.addEventListener('resize', updateStats);
    window.addEventListener('scroll', () => {
        if (isDebugMode) requestAnimationFrame(updateStats);
    });

    window.addEventListener('mousemove', (e) => {
        if (isDebugMode) {
            mousePos.textContent = `${e.clientX}, ${e.clientY}`;
        }
    });
});

// Magnetic Buttons
const magneticBtns = document.querySelectorAll('.btn, .nav-link, .theme-toggle, .debug-toggle, .project-link, .btn-link');

magneticBtns.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });

    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0px, 0px)';
    });
});
