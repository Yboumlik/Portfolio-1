document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.setAttribute('data-theme', savedTheme);
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            if (body.getAttribute('data-theme') === 'dark') {
                body.removeAttribute('data-theme');
                localStorage.setItem('theme', 'light');
            } else {
                body.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
            }
        });
    }

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

    // Developer HUD Logic (Optional - kept for functionality)
    const debugToggle = document.querySelector('.debug-toggle');
    const techPanel = document.querySelector('.tech-specs-panel');

    if (debugToggle && techPanel) {
        const viewportSize = document.getElementById('viewport-size');
        const scrollPos = document.getElementById('scroll-pos');
        const mousePos = document.getElementById('mouse-pos');
        const currentTheme = document.getElementById('current-theme');

        let isDebugMode = false;

        function updateStats() {
            if (!isDebugMode) return;
            if (viewportSize) viewportSize.textContent = `${window.innerWidth} x ${window.innerHeight}`;
            if (scrollPos) scrollPos.textContent = `${Math.round(window.scrollY)}px`;
            if (currentTheme) currentTheme.textContent = body.getAttribute('data-theme') === 'dark' ? 'DARK' : 'LIGHT';
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
            if (isDebugMode && mousePos) {
                mousePos.textContent = `${e.clientX}, ${e.clientY}`;
            }
        });
    }

    // Progress Bar Animation
    const progressBars = document.querySelectorAll('.progress-bar');
    const progressObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const level = bar.getAttribute('data-level');
                bar.style.width = level;
                progressObserver.unobserve(bar);
            }
        });
    }, { threshold: 0.2 });

    progressBars.forEach(bar => progressObserver.observe(bar));
});
