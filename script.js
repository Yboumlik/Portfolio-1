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
    // 3D Parallax Tilt Effect (All Profile Images)
    const profileWrappers = document.querySelectorAll('.image-wrapper');
    profileWrappers.forEach(wrapper => {
        const img = wrapper.querySelector('.profile-img');
        if (!img) return; // Skip if no profile image (e.g., project images)

        wrapper.addEventListener('mousemove', (e) => {
            const rect = wrapper.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const xPct = (x / rect.width) - 0.5;
            const yPct = (y / rect.height) - 0.5;
            const maxTilt = 15;

            const rotateX = yPct * -maxTilt * 2;
            const rotateY = xPct * maxTilt * 2;

            img.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
        });

        wrapper.addEventListener('mouseleave', () => {
            img.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });

    // Magnetic Effect (Project Images)
    const projectWrappers = document.querySelectorAll('.project-visual .image-wrapper');
    projectWrappers.forEach(wrapper => {
        const img = wrapper.querySelector('.project-img');
        if (!img) return;

        wrapper.addEventListener('mousemove', (e) => {
            const rect = wrapper.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Calculate distance from center
            const xPos = (x - rect.width / 2);
            const yPos = (y - rect.height / 2);

            // Magnetic strength (how much it moves)
            // Reduced to 0.08 for a subtle, premium feel that stays within frame
            const strength = 0.08;

            // Move the entire wrapper instead of just the image to prevent clipping
            wrapper.style.transform = `translate(${xPos * strength}px, ${yPos * strength}px)`;
        });

        wrapper.addEventListener('mouseleave', () => {
            wrapper.style.transform = 'translate(0, 0)';
        });
    });

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
