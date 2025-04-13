document.addEventListener('DOMContentLoaded', () => {
  // Highlight active link
  const navLinks = document.querySelectorAll('.nav-link');
  const currentPath = window.location.pathname.split('/').pop();

  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
    }
  });

  // Project filtering (only if input exists on this page)
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

  // Hamburger menu (only if hamburger exists on this page)
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('nav ul');
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });
  }
});

// Highlight Active Nav Link
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-link');
  const currentPage = window.location.pathname.split('/').pop();

  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
});

// Back to Top Button
window.addEventListener('scroll', () => {
  const btn = document.getElementById('backToTop');
  if (window.scrollY > 300) {
    btn.style.display = 'block';
  } else {
    btn.style.display = 'none';
  }
});

