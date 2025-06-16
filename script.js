// Données du portfolio
const data = {
  name: "Mehdi Chougrani",
  subtitle: "BUT Informatique & Aspirant expert en cybersécurité",
  about: `Étudiant à l'IUT de Villetaneuse, passionné par la cybersécurité, je poursuis un BUT Informatique avec pour objectif un Master dans ce domaine.`,
  skills: [
    {
      group: "Frontend & Web Development",
      icon: "🌐",
      list: [
        {name: "HTML", icon: "🟧"},
        {name: "CSS", icon: "🟦"},
        {name: "JavaScript", icon: "🟨"},
        {name: "Bootstrap", icon: "🅱️"},
      ]
    },
    {
      group: "Backend & Programming Languages",
      icon: "⚙️",
      list: [
        {name: "Python", icon: "🐍"},
        {name: "Java", icon: "☕"},
        {name: "C", icon: "🔵"},
        {name: "C++", icon: "🧩"},
        {name: "PHP", icon: "🔷"},
        {name: "SQL", icon: "🗃️"},
        {name: "Bash Script", icon: "💻"},
        {name: "PowerShell", icon: "📘"},
      ]
    },
    {
      group: "Outils & Logiciels",
      icon: "🧰",
      list: [
        {name: "VS Code", icon: "🖊️"},
        {name: "GitHub", icon: "🐱"},
        {name: "Git", icon: "🔧"},
        {name: "MySQL Workbench", icon: "🧮"},
        {name: "PostgreSQL", icon: "🐘"},
        {name: "Linux", icon: "🐧"},
        {name: "VirtualBox", icon: "📦"},
        {name: "Pack Office", icon: "📁"},
      ]
    }
  ],
  experience: [
    {date: "Janv - Mars 2025", desc: "Stage web chez Lyman Agency"},
    {date: "2024 - Présent", desc: "Parc Astérix - Agent d'attraction"},
    {date: "Depuis 2022", desc: "Bénévole chez ACIM"},
  ],
  projects: [
    {
      title: "Application Web",
      desc: "SAE S3 - Projet MVC avec gestion de base de données"
    }
  ],
  contact: {
    email: "mehdichougrani95140@gmail.com",
    github: "@mehdichougrani95140",
    github_url: "https://github.com/mehdichougrani95140",
    cv: "CV_2025-06-16_Mehdi_CHOUGRANI.pdf"
  },
  copyright:
    "© 2025 Mehdi Chougrani - Portfolio personnel"
};

// Génération du contenu
function render() {
  document.getElementById("app").innerHTML = `
    <header>
      <h1>${data.name}</h1>
      <div class="subtitle">${data.subtitle}</div>
      <nav>
        <ul>
          <li><a href="#about">Présentation</a></li>
          <li><a href="#skills">Compétences</a></li>
          <li><a href="#experience">Expérience</a></li>
          <li><a href="#projects">Projets</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>

    <main>
      <section class="section" id="about">
        <h2>À propos de moi</h2>
        <p>${data.about}</p>
      </section>

      <section class="section" id="skills">
        <h2>Compétences</h2>
        ${data.skills
          .map(
            group => `
            <div class="skills-block">
              <div class="skills-title">${group.icon} ${group.group}</div>
              <div class="skills-list">
                ${group.list
                  .map(
                    skill =>
                      `<div class="skill-card"><span class="icon">${skill.icon}</span>${skill.name}</div>`
                  )
                  .join("")}
              </div>
            </div>
          `
          )
          .join("")}
      </section>

      <section class="section" id="experience">
        <h2>Expérience professionnelle</h2>
        <ul class="timeline">
          ${data.experience
            .map(
              e =>
                `<li><span style="color:#ffde81;">${e.date}</span> ${e.desc}</li>`
            )
            .join("")}
        </ul>
        <div class="skills-list">
          ${data.skills[2].list
            .map(
              tool =>
                `<div class="skill-card"><span class="icon">${tool.icon}</span>${tool.name}</div>`
            )
            .join("")}
        </div>
      </section>

      <section class="section" id="projects">
        <h2>Projets</h2>
        ${data.projects
          .map(
            p =>
              `<div class="project-card"><h3>${p.title}</h3><div>${p.desc}</div></div>`
          )
          .join("")}
      </section>

      <section class="section" id="contact">
        <h2>Contact</h2>
        <p><b>Email</b> : <a href="mailto:${data.contact.email}">${data.contact.email}</a></p>
        <p><b>GitHub</b> : <a href="${data.contact.github_url}" target="_blank">${data.contact.github}</a></p>
        <a class="btn-cv" href="${data.contact.cv}" download>Télécharger mon CV (PDF)</a>
      </section>
    </main>

    <footer>
      ${data.copyright}
    </footer>
  `;
}

// Scroll smooth sur la nav
function scrollNav() {
  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) target.scrollIntoView({behavior:"smooth"});
    });
  });
}

// Animation fade-in au scroll
function fadeInOnScroll() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.style.opacity = 1;
    });
  }, { threshold: 0.15 });
  document.querySelectorAll(".section").forEach(el => {
    el.style.opacity = 0;
    observer.observe(el);
  });
}

// Initialisation
document.addEventListener("DOMContentLoaded", () => {
  render();
  scrollNav();
  fadeInOnScroll();
});
