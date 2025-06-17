const data = {
  name: "Mehdi Chougrani",
  subtitle: "BUT Informatique & Aspirant expert en cybersécurité",
  about: `Étudiant à l'IUT de Villetaneuse, passionné par la cybersécurité, je poursuis un BUT Informatique avec pour objectif un Master dans ce domaine.`,
  education: [
    {
      date: "2023 - Aujourd’hui",
      title: "BUT Informatique",
      place: "IUT de Villetaneuse, Université Sorbonne Paris Nord"
    },
    {
      date: "2020 - 2023",
      title: "Baccalauréat Général (Maths, NSI) - Mention Assez Bien",
      place: "Lycée Simone de Beauvoir, Garges-lès-Gonesse"
    }
  ],
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

function render() {
  document.getElementById("app").innerHTML = `
    <header>
      <h1>${data.name}</h1>
      <div class="subtitle">${data.subtitle}</div>
      <nav>
        <ul>
          <li><a href="#about">Présentation</a></li>
          <li><a href="#education">Parcours scolaire</a></li>
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

      <section class="section" id="education">
        <h2>Parcours scolaire</h2>
        <ul class="timeline">
          ${data.education.map(
            edu =>
              `<li>
                <span style="color:#7cc7ff;">${edu.date}</span>
                <b> ${edu.title}</b>
                <br>
                <span style="color:#a7c7ee;">${edu.place}</span>
              </li>`
          ).join("")}
        </ul>
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
                `<li><span style="color:#7cc7ff;">${e.date}</span> ${e.desc}</li>`
            )
            .join("")}
        </ul>
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

function scrollNav() {
  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) target.scrollIntoView({behavior:"smooth"});
    });
  });
}

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

document.addEventListener("DOMContentLoaded", () => {
  render();
  scrollNav();
  fadeInOnScroll();
});
