const data = {
  name: "Mehdi Chougrani",
  subtitle: "BUT Informatique & Aspirant expert en cybersécurité",
  about: `Étudiant à l'IUT de Villetaneuse, passionné par la cybersécurité, je poursuis un BUT Informatique avec pour objectif un Master en cybersécurité.`,
  education: [
    {
      date: "2023 - Aujourd’hui",
      title: "BUT Informatique",
      place: "IUT de Villetaneuse, Université Sorbonne Paris Nord",
      details: "Développement web, réseaux, cybersécurité, gestion de projet, SAE, stages et pratique concrète."
    },
    {
      date: "2020 - 2023",
      title: "Baccalauréat Général (Maths, NSI) - Mention Assez Bien",
      place: "Lycée Simone de Beauvoir, Garges-lès-Gonesse",
      details: "Spécialités Mathématiques & NSI. Projet de fin de terminale sur la sécurité des réseaux domestiques."
    }
  ],
  skillsTech: [
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
  skillsSoft: [
    {name: "Esprit d'équipe", icon: "🤝"},
    {name: "Autonomie", icon: "🚀"},
    {name: "Rigueur", icon: "🧐"},
    {name: "Curiosité", icon: "🔎"},
    {name: "Créativité", icon: "🎨"},
    {name: "Communication", icon: "💬"},
    {name: "Sens de l'écoute", icon: "👂"},
    {name: "Persévérance", icon: "🏋️"},
  ],
  experience: [
    {
      date: "Janv - Mars 2025",
      desc: "Stage web chez Lyman Agency",
      details: "Création de sites vitrines, gestion de contenus, rigueur professionnelle."
    },
    {
      date: "2024 - Présent",
      desc: "Parc Astérix - Agent d'attraction",
      details: "Accueil du public, sécurité, logistique, travail en équipe."
    },
    {
      date: "Depuis 2022",
      desc: "Bénévole chez ACIM",
      details: "Distribution de repas, projets solidaires, organisation d'événements."
    },
  ],
  veille: [
    {name: "Zataz", url: "https://www.zataz.com/", icon: "🛡️"},
    {name: "HackerOne Blog", url: "https://www.hackerone.com/blog", icon: "🧑‍💻"},
    {name: "TheHackerNews", url: "https://thehackernews.com/", icon: "📰"},
    {name: "Journal du hacker", url: "https://journalduhacker.net/", icon: "📰"},
    {name: "Forum 2600", url: "https://forum.2600.com/", icon: "💻"},
    {name: "FIC", url: "https://www.forum-fic.com/", icon: "📅"},
    {name: "RSSI Mag", url: "https://www.rssimagazine.fr/", icon: "📖"},
    {name: "Root-me", url: "https://www.root-me.org/?lang=fr", icon: "🔗"}
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
          <li><a href="#veille">Veille techno</a></li>
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
        <ul class="timeline" id="edu-timeline">
          ${data.education.map((edu, i) =>
              `<li data-idx="${i}">
                <span style="color:#7cc7ff;">${edu.date}</span>
                <b> ${edu.title}</b>
                <br>
                <span style="color:#a7c7ee;">${edu.place}</span>
                <div class="timeline-details" style="display:none;">${edu.details}</div>
              </li>`
          ).join("")}
        </ul>
      </section>

      <section class="section" id="skills">
        <h2>Compétences techniques</h2>
        ${data.skillsTech
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
        <h2>Compétences humaines</h2>
        <div class="softskills-block">
          <div class="softskills-list">
            ${data.skillsSoft.map(
              soft =>
                `<div class="softskill-card"><span class="icon">${soft.icon}</span>${soft.name}</div>`
            ).join("")}
          </div>
        </div>
      </section>

      <section class="section" id="experience">
        <h2>Expérience professionnelle</h2>
        <ul class="timeline" id="exp-timeline">
          ${data.experience.map((e, i) =>
              `<li data-idx="${i}">
                <span style="color:#7cc7ff;">${e.date}</span> ${e.desc}
                <div class="timeline-details" style="display:none;">${e.details}</div>
              </li>`
          ).join("")}
        </ul>
      </section>

      <section class="section" id="veille">
        <h2>Veille technologique & événements</h2>
        <div class="veille-list">
          ${data.veille.map(
            v =>
              `<a class="veille-item" href="${v.url}" target="_blank">${v.icon} ${v.name}</a>`
          ).join("")}
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
        <form class="contact-form" action="https://formspree.io/f/mayrnvjz" method="POST">
          <input type="text" name="name" placeholder="Votre nom" required>
          <input type="email" name="email" placeholder="Votre email" required>
          <textarea name="message" rows="5" placeholder="Votre message" required></textarea>
          <button type="submit">Envoyer</button>
        </form>
        <p style="text-align:center; margin-top:1.5rem;">
          <a href="mailto:${data.contact.email}" style="color:#7cc7ff;"><b>${data.contact.email}</b></a> |
          <a href="${data.contact.github_url}" style="color:#7cc7ff;" target="_blank">${data.contact.github}</a>
        </p>
        <div style="text-align:center;"><a class="btn-cv" href="${data.contact.cv}" download>Télécharger mon CV (PDF)</a></div>
      </section>
    </main>

    <footer>
      ${data.copyright}
    </footer>
  `;
}

// Navigation scroll fluide
function scrollNav() {
  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) target.scrollIntoView({behavior:"smooth"});
    });
  });
}

// Timeline interactive
function timelineInteractive(id) {
  const timeline = document.getElementById(id);
  if (!timeline) return;
  const items = timeline.querySelectorAll("li");
  items.forEach(li => {
    li.addEventListener("click", () => {
      items.forEach(l2 => {
        l2.classList.remove("selected");
        l2.querySelector(".timeline-details").style.display = "none";
      });
      li.classList.add("selected");
      li.querySelector(".timeline-details").style.display = "block";
    });
    // Affiche au hover aussi
    li.addEventListener("mouseenter", () => li.classList.add("selected"));
    li.addEventListener("mouseleave", () => {
      li.classList.remove("selected");
      li.querySelector(".timeline-details").style.display = "none";
    });
  });
}

// Fade-in au scroll
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

// Message succès Formspree (facultatif)
document.addEventListener("DOMContentLoaded", () => {
  render();
  scrollNav();
  fadeInOnScroll();
  timelineInteractive("edu-timeline");
  timelineInteractive("exp-timeline");
});
