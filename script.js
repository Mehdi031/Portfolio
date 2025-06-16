// script.js avec animations, interactivité et affichage dynamique des compétences

// Défilement fluide
const links = document.querySelectorAll('nav a');
links.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Apparition avec fade-in
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Bouton CV hover
const cvButton = document.querySelector('.btn-cv');
if (cvButton) {
  cvButton.addEventListener('mouseover', () => {
    cvButton.style.transform = 'scale(1.05)';
  });
  cvButton.addEventListener('mouseout', () => {
    cvButton.style.transform = 'scale(1)';
  });
}

// Effet scroll header
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  header.style.boxShadow = window.scrollY > 30 ? '0 2px 10px rgba(0,0,0,0.1)' : 'none';
});

// Création dynamique des compétences
const skillsData = {
  "Frontend & Web Development": [
    { name: 'HTML', icon: '🌐' },
    { name: 'CSS', icon: '🎨' },
    { name: 'JavaScript', icon: '🟨' },
    { name: 'Bootstrap', icon: '🅱️' }
  ],
  "Backend & Programming Languages": [
    { name: 'Python', icon: '🐍' },
    { name: 'Java', icon: '☕' },
    { name: 'C', icon: '🔵' },
    { name: 'C++', icon: '🧩' },
    { name: 'PHP', icon: '🔷' },
    { name: 'SQL', icon: '🗃️' },
    { name: 'Bash Script', icon: '💻' },
    { name: 'PowerShell', icon: '📘' }
  ],
  "Outils & Logiciels": [
    { name: 'VS Code', icon: '🖊️' },
    { name: 'GitHub', icon: '🐱' },
    { name: 'Git', icon: '🔧' },
    { name: 'MySQL Workbench', icon: '🧮' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'Linux', icon: '🐧' },
    { name: 'VirtualBox', icon: '📦' },
    { name: 'Pack Office', icon: '📁' }
  ]
};

function createSkillsSection() {
  const container = document.querySelector("#skills .container");
  container.innerHTML = "";

  for (const category in skillsData) {
    const group = document.createElement("div");
    group.className = "skill-group fade-in";

    const title = document.createElement("h3");
    title.textContent = category;
    group.appendChild(title);

    const list = document.createElement("div");
    list.className = "skill-list";

    skillsData[category].forEach(skill => {
      const item = document.createElement("div");
      item.className = "skill-item";
      item.innerHTML = `<span class="icon">${skill.icon}</span> ${skill.name}`;
      list.appendChild(item);
    });

    group.appendChild(list);
    container.appendChild(group);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  createSkillsSection();
});
