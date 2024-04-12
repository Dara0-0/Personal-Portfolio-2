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

// Dynamically Load Skills Content
function loadSkillsContent() {
    const skillsData = [
        {
            icon: 'bx bx-directions',
            title: 'Strategy & Direction',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'
        },
        {
            icon: 'bx bx-bookmark-heart',
            title: 'Branding & Logo',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'
        },
        // Add more skills data as needed
    ];

    const skillItemsContainer = document.querySelector('.skill-items');

    skillsData.forEach(skill => {
        const item = document.createElement('div');
        item.classList.add('item');
        item.innerHTML = `
            <div class="icon"><i class='${skill.icon}'></i></div>
            <h4>${skill.title}</h4>
            <p>${skill.description}</p>
        `;
        skillItemsContainer.appendChild(item);
    });

    // Animate skills after content is loaded
    animateSkills();
}

// Call the function to load skills content
loadSkillsContent();
