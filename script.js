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

document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.contact form');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const fullName = form.querySelector('input[type="text"][placeholder="Full Name..."]').value.trim();
    const email = form.querySelector('input[type="text"][placeholder="Full Email Id..."]').value.trim();
    const mobileNo = form.querySelector('input[type="text"][placeholder="Full Mobile No..."]').value.trim();
    const address = form.querySelector('textarea').value.trim();

    // Validation
    if (!fullName || !email || !mobileNo || !address) {
      alert('Please fill in all fields');
      return;
    }

    // Clear the form after submission
    form.reset();
  });
});

