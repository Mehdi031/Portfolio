// script.js avec animations et interactivité

// Défilement fluide vers les sections
const links = document.querySelectorAll('nav a');

links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Animation fade-in au scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});

const fadeElements = document.querySelectorAll('.fade-in');
fadeElements.forEach(el => observer.observe(el));

// Bouton interactif animé (hover JS en bonus)
const cvButton = document.querySelector('.btn-cv');
if (cvButton) {
  cvButton.addEventListener('mouseover', () => {
    cvButton.style.transform = 'scale(1.05)';
  });
  cvButton.addEventListener('mouseout', () => {
    cvButton.style.transform = 'scale(1)';
  });
}

// Apparence dynamique au scroll (ajout d'effet de fond header)
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 30) {
    header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
  } else {
    header.style.boxShadow = 'none';
  }
});
