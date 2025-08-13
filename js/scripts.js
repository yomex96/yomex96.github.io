document.addEventListener('DOMContentLoaded', () => {
  // Highlight active nav link
  const navLinks = document.querySelectorAll('.nav-link');
  const currentPath = window.location.pathname.split('/').pop();


  document.querySelectorAll('.social-icons a').forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.style.transform = 'scale(1.3)';
  });
  link.addEventListener('mouseleave', () => {
    link.style.transform = 'scale(1)';
  });
});



  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
    }
  });

  // Project filtering with input (for pages that have project-filter)
  const input = document.getElementById('project-filter');
  if (input) {
    const cards = document.querySelectorAll('.project-card');
    input.addEventListener('input', () => {
      const query = input.value.toLowerCase();
      cards.forEach(card => {
        const tags = card.getAttribute('data-tags') || '';
        const text = card.innerText.toLowerCase();
        const matches = tags.includes(query) || text.includes(query);
        card.style.display = matches ? 'block' : 'none';
      });
    });
  }

  // Hamburger menu toggle
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('nav ul');
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });
  }

  // Smooth scroll for Back to Top button
  const backToTopBtn = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopBtn.style.display = 'block';
    } else {
      backToTopBtn.style.display = 'none';
    }
  });

  backToTopBtn.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Clean Project Card Tilt Effect
  const cards = document.querySelectorAll('.project-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = -(y - centerY) / 20;
      const rotateY = (x - centerX) / 20;
      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
    });
  });
});
