function openMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('open');
}

// Animate Skills
function animateSkills() {
    const skillItems = document.querySelectorAll('.skill-items .item');
    skillItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(50px)';
    });

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.3 // Adjust this threshold as needed
    });

    skillItems.forEach(item => {
        observer.observe(item);
    });
}

// Animate skills after content is loaded
animateSkills();

