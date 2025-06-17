// ----------- Données Mehdi ----------- //
const data = {
  avatar: "", // tu peux mettre le lien de ta photo ici ou laisser vide pour un avatar "généré"
  name: "Mehdi Chougrani",
  title: "BUT Informatique & Aspirant expert en cybersécurité",
  presentation: "Étudiant à l'IUT de Villetaneuse, passionné par la cybersécurité et les technologies du numérique. Je vise un Master en cybersécurité pour protéger le monde numérique de demain.",
  ambitions: "Poursuivre en Master Cybersécurité après mon BUT et contribuer à la protection des systèmes d'information.",
  skills: [
    "HTML", "CSS", "JavaScript", "Python", "Java", "C", "C++", "PHP", "SQL", "Bash", "PowerShell", "Bootstrap"
  ],
  softskills: [
    "Esprit d'équipe", "Rigueur", "Curiosité", "Autonomie", "Créativité", "Communication", "Persévérance"
  ],
  projects: [
    { title: "SAE S3 - Application Web", desc: "Développement d'une application web dynamique (MVC, base de données, gestion utilisateurs)." },
    { title: "Réseau sécurisé (SAE)", desc: "Installation et sécurisation d’un réseau local en environnement virtualisé." },
    { title: "Gestionnaire de mots de passe", desc: "Petit projet Python : application de gestion de mots de passe locale et sécurisée." }
  ],
  experience: [
    { date: "Janv - Mars 2025", title: "Stage développement web", place: "Lyman Agency (Garges-lès-Gonesse)", desc: "Développement de sites vitrines, gestion de contenu, apprentissage du métier et du travail en équipe." },
    { date: "2024 - Présent", title: "Agent d'attraction", place: "Parc Astérix", desc: "Accueil, sécurité et animation auprès du public dans un grand parc de loisirs." },
    { date: "Depuis 2022", title: "Bénévole", place: "ACIM", desc: "Distribution de repas et organisation d'événements solidaires." }
  ],
  education: [
    { date: "2023 - Aujourd’hui", title: "BUT Informatique", place: "IUT de Villetaneuse (Université Sorbonne Paris Nord)", desc: "Développement, cybersécurité, projets SAE, réseaux, gestion de projet." },
    { date: "2020 - 2023", title: "Baccalauréat Général (Maths, NSI)", place: "Lycée Simone de Beauvoir (mention AB)", desc: "Maths et NSI, projet de sécurité informatique en terminale." }
  ],
  veille: [
    { name: "Zataz", url: "https://www.zataz.com/" },
    { name: "HackerOne Blog", url: "https://www.hackerone.com/blog" },
    { name: "TheHackerNews", url: "https://thehackernews.com/" },
    { name: "Journal du hacker", url: "https://journalduhacker.net/" },
    { name: "FIC (Forum Int. Cybersécurité)", url: "https://www.forum-fic.com/" },
    { name: "Root-me", url: "https://www.root-me.org/?lang=fr" }
  ],
  contact: {
    email: "mehdichougrani95140@gmail.com",
    github: "mehdichougrani95140",
    github_url: "https://github.com/mehdichougrani95140"
  },
  cv: "CV_2025-06-16_Mehdi_CHOUGRANI.pdf"
};

// ----------- Rendu des sections ----------- //
function renderNav() {
  const sections = [
    {id:"presentation", label:"Présentation"},
    {id:"competences", label:"Compétences"},
    {id:"projects", label:"Projets"},
    {id:"experience", label:"Expériences"},
    {id:"qualities", label:"Qualités"},
    {id:"education", label:"Formation"},
    {id:"veille", label:"Veille"},
    {id:"ambitions", label:"Ambitions"},
    {id:"contact", label:"Contact"}
  ];
  return `
    <ul>
      ${sections.map(sec =>
        `<li><a href="#${sec.id}" id="nav-${sec.id}">${sec.label}</a></li>`).join('')}
    </ul>
  `;
}

function renderPresentation() {
  return `
  <section class="section" id="presentation">
    <div class="presentation-top">
      ${data.avatar ? `<img class="avatar" src="${data.avatar}" alt="Photo Mehdi" />`
                    : `<div class="avatar" style="display:flex;align-items:center;justify-content:center;background:#25315c;color:#7cc7ff;font-size:2.5em;font-weight:bold;">${data.name[0]}</div>`}
      <div>
        <div class="presentation-title">${data.name}</div>
        <div style="color:#7cc7ff;font-weight:600;">${data.title}</div>
      </div>
    </div>
    <p style="margin-top:1.7em;">${data.presentation}</p>
  </section>
  `;
}

function renderCompetences() {
  return `
  <section class="section" id="competences">
    <h2>Compétences techniques</h2>
    <div class="skills-grid">
      ${data.skills.map(skill => `<span class="skill-chip">${skill}</span>`).join("")}
    </div>
    <h2>Compétences humaines</h2>
    <div class="skills-grid">
      ${data.softskills.map(skill => `<span class="skill-chip">${skill}</span>`).join("")}
    </div>
  </section>
  `;
}

function renderProjects() {
  return `
  <section class="section" id="projects">
    <h2>Projets réalisés</h2>
    <div class="projects-list">
      ${data.projects.map(p => `
        <div class="project-card">
          <div class="project-title">${p.title}</div>
          <div class="project-desc">${p.desc}</div>
        </div>
      `).join("")}
    </div>
  </section>
  `;
}

function renderExperience() {
  return `
  <section class="section" id="experience">
    <h2>Expériences professionnelles</h2>
    <div class="experience-list">
      ${data.experience.map(e => `
        <div class="experience-card" tabindex="0">
          <div><b>${e.title}</b> — <span style="color:#7cc7ff;">${e.place}</span></div>
          <div style="font-size:0.98em;color:#a7c7ee;">${e.date}</div>
          <div>${e.desc}</div>
        </div>
      `).join("")}
    </div>
  </section>
  `;
}

function renderQualities() {
  return `
  <section class="section" id="qualities">
    <h2>Qualités personnelles</h2>
    <div class="qualities-list">
      ${data.softskills.map(q => `<span class="quality-chip">${q}</span>`).join("")}
    </div>
  </section>
  `;
}

function renderEducation() {
  return `
  <section class="section" id="education">
    <h2>Parcours scolaire</h2>
    <div class="education-list">
      ${data.education.map(e => `
        <div class="education-card" tabindex="0">
          <div><b>${e.title}</b> — <span style="color:#7cc7ff;">${e.place}</span></div>
          <div style="font-size:0.98em;color:#a7c7ee;">${e.date}</div>
          <div>${e.desc}</div>
        </div>
      `).join("")}
    </div>
  </section>
  `;
}

function renderVeille() {
  return `
  <section class="section" id="veille">
    <h2>Veille technologique</h2>
    <div class="veille-list">
      ${data.veille.map(v => `<a class="veille-item" href="${v.url}" target="_blank">${v.name}</a>`).join("")}
    </div>
  </section>
  `;
}

function renderAmbitions() {
  return `
  <section class="section" id="ambitions">
    <h2>Ambitions</h2>
    <p>${data.ambitions}</p>
  </section>
  `;
}

function renderContact() {
  return `
  <section class="section" id="contact">
    <h2>Contact</h2>
    <form class="contact-form" action="https://formspree.io/f/mayrnvjz" method="POST">
      <div class="form-row">
        <label>Votre nom</label>
        <input type="text" name="name" required>
      </div>
      <div class="form-row">
        <label>Votre e-mail</label>
        <input type="email" name="email" required>
      </div>
      <div class="form-row">
        <label>Votre message</label>
        <textarea name="message" rows="5" required></textarea>
      </div>
      <button type="submit">Envoyer</button>
    </form>
    <div style="text-align:center;margin-top:1.5rem;">
      <a href="mailto:${data.contact.email}" style="color:#7cc7ff;">${data.contact.email}</a> |
      <a href="${data.contact.github_url}" target="_blank" style="color:#7cc7ff;">${data.contact.github}</a>
    </div>
    <div style="text-align:center;">
      <a class="btn-cv" href="${data.cv}" download style="margin-top:1.2em;">Télécharger mon CV (PDF)</a>
    </div>
  </section>
  `;
}

function renderFooter() {
  return `<div>${data.name} - ${new Date().getFullYear()} - Portfolio personnel</div>`;
}

// ----------- App ----------- //
function app() {
  document.getElementById('navbar').innerHTML = renderNav();
  document.getElementById('main').innerHTML = [
    renderPresentation(),
    renderCompetences(),
    renderProjects(),
    renderExperience(),
    renderQualities(),
    renderEducation(),
    renderVeille(),
    renderAmbitions(),
    renderContact()
  ].join('\n');
  document.getElementById('footer').innerHTML = renderFooter();

  // Scroll menu actif
  const navLinks = document.querySelectorAll("nav a");
  function activateNav() {
    const scroll = window.scrollY + 140;
    document.querySelectorAll("main .section").forEach(sec => {
      const top = sec.offsetTop;
      const bottom = top + sec.offsetHeight;
      const id = sec.id;
      const navLink = document.getElementById("nav-" + id);
      if(navLink) navLink.classList.toggle("active", scroll >= top && scroll < bottom);
    });
  }
  window.addEventListener("scroll", activateNav);
  activateNav();
}

document.addEventListener("DOMContentLoaded", app);
