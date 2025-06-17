const data = {
  name: "Mehdi Chougrani",
  email: "mehdichougrani95140@gmail.com",
  github: "@mehdichougrani95140",
  github_url: "https://github.com/mehdichougrani95140",
  cv: "CV_2025-06-16_Mehdi_CHOUGRANI.pdf",
  presentation: [
    "Étudiant en BUT Informatique à l’IUT de Villetaneuse, passionné par la cybersécurité.",
    "Je vise un Master en cybersécurité, toujours prêt à apprendre et à relever de nouveaux défis !"
  ],
  skills_front: [
    {icon:"🟧", label:"HTML"}, {icon:"🟦", label:"CSS"},
    {icon:"🟨", label:"JavaScript"}, {icon:"🅱️", label:"Bootstrap"}
  ],
  skills_back: [
    {icon:"🐍", label:"Python"}, {icon:"☕", label:"Java"}, {icon:"🔵", label:"C"}, {icon:"🧩", label:"C++"},
    {icon:"🔷", label:"PHP"}, {icon:"🗃️", label:"SQL"}, {icon:"💻", label:"Bash Script"}, {icon:"📘", label:"PowerShell"}
  ],
  skills_soft: [
    {icon:"🤝", label:"Esprit d'équipe"}, {icon:"🚀", label:"Autonomie"}, {icon:"🧐", label:"Rigueur"}, {icon:"🔎", label:"Curiosité"},
    {icon:"🎨", label:"Créativité"}, {icon:"💬", label:"Communication"}, {icon:"👂", label:"Sens de l'écoute"}, {icon:"🏋️", label:"Persévérance"}
  ],
  formation: [
  {
    date: "2023 - Aujourd’hui",
    title: "BUT Informatique",
    place: "IUT de Villetaneuse, Université Sorbonne Paris Nord",
    desc: "Développement web, réseaux, cybersécurité, gestion de projet, SAE, stages et pratique concrète."
  },
  {
    date: "2020 - 2023",
    title: "Baccalauréat Général (Maths, NSI) - Mention Assez Bien",
    place: "Lycée Simone de Beauvoir, Garges-lès-Gonesse",
    desc: "Spécialités Mathématiques & NSI. Projet de fin de terminale sur la sécurité des réseaux domestiques."
  },
  {
    date: "2016 - 2020",
    title: "Brevet des collèges - Mention Bien",
    place: "Collège Saint Didier, Arnouville",
    desc: "Obtention du diplôme national du brevet avec mention bien. Premiers pas en informatique et initiation à la logique algorithmique."
  }
],
  experience: [
    {
      date: "Janv - Mars 2025",
      title: "Stage web",
      place: "Lyman Agency (Garges-lès-Gonesse)",
      desc: "Création de sites vitrines, gestion de contenus, rigueur professionnelle."
    },
    {
      date: "2024 - Présent",
      title: "Agent d'attraction",
      place: "Parc Astérix",
      desc: "Accueil du public, sécurité, logistique, travail en équipe."
    },
    {
      date: "Depuis 2022",
      title: "Bénévole",
      place: "ACIM",
      desc: "Distribution de repas, projets solidaires, organisation d'événements."
    }
  ],
  projets: [
    {
      title: "SAE S3 - Application Web",
      desc: "Développement d'une application web dynamique (MVC, base de données, gestion utilisateurs)."
    },
    {
      title: "Réseau sécurisé (SAE)",
      desc: "Installation et sécurisation d’un réseau local en environnement virtualisé."
    },
    {
      title: "Gestionnaire de mots de passe",
      desc: "Application Python de gestion de mots de passe locale et sécurisée."
    }
  ],
  veille: [
    {icon: "🛡️", name:"Zataz", url:"https://www.zataz.com/"},
    {icon: "🧑‍💻", name:"HackerOne Blog", url:"https://www.hackerone.com/blog"},
    {icon: "📰", name:"TheHackerNews", url:"https://thehackernews.com/"},
    {icon: "📖", name:"Journal du hacker", url:"https://journalduhacker.net/"},
    {icon: "📅", name:"FIC (Forum Int. Cybersécurité)", url:"https://www.forum-fic.com/"},
    {icon: "🔗", name:"Root-me", url:"https://www.root-me.org/?lang=fr"}
  ],
  ambitions: `Je souhaite poursuivre mes études en Master Cybersécurité après le BUT, 
pour approfondir mes connaissances et contribuer à la protection des systèmes d’information. 
Je suis motivé par l’apprentissage continu, la collaboration, et la résolution de problèmes complexes dans des contextes réels.`
};

function nav() {
  return `<ul>
    <li><a href="#accueil" class="active">Accueil</a></li>
    <li><a href="#competences">Compétences</a></li>
    <li><a href="#formation">Formation</a></li>
    <li><a href="#experience">Expérience</a></li>
    <li><a href="#projets">Projets</a></li>
    <li><a href="#veille">Veille</a></li>
    <li><a href="#ambitions">Ambitions</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>`;
}

function accueil() {
  return `
  <section class="accueil section" id="accueil">
    <div class="hero-card">
      <div class="avatar-large"><span>M</span></div>
      <div>
        <h1>${data.name}</h1>
        <h2 class="typed-text">${data.presentation[0]}</h2>
        <p>${data.presentation[1]}</p>
        <a href="#contact" class="btn-main">Me contacter</a>
      </div>
    </div>
  </section>
  `;
}
function competences() {
  return `
  <section class="section" id="competences">
    <h2>Compétences techniques</h2>
    <div class="skills-cards">
      <div class="card-domain">
        <h3>🌐 Frontend & Web Development</h3>
        <ul class="skills-list">
          ${data.skills_front.map(s=>`<li class="skill-chip">${s.icon} ${s.label}</li>`).join("")}
        </ul>
      </div>
      <div class="card-domain">
        <h3>⚙️ Backend & Langages</h3>
        <ul class="skills-list">
          ${data.skills_back.map(s=>`<li class="skill-chip">${s.icon} ${s.label}</li>`).join("")}
        </ul>
      </div>
    </div>
    <h2>Compétences humaines</h2>
    <div class="skills-cards">
      <ul class="skills-list">
        ${data.skills_soft.map(s=>`<li class="skill-chip">${s.icon} ${s.label}</li>`).join("")}
      </ul>
    </div>
  </section>
  `;
}
function formation() {
  return `
  <section class="section" id="formation">
    <h2>Formation</h2>
    <div class="timeline-cards">
      ${data.formation.map(f=>`
        <div class="timeline-card">
          <span class="date">${f.date}</span>
          <div class="title">${f.title}</div>
          <div class="place">${f.place}</div>
          <div class="desc">${f.desc}</div>
        </div>`).join("")}
    </div>
  </section>
  `;
}
function experience() {
  return `
  <section class="section" id="experience">
    <h2>Expériences professionnelles</h2>
    <div class="timeline-cards">
      ${data.experience.map(e=>`
        <div class="timeline-card">
          <span class="date">${e.date}</span>
          <div class="title">${e.title}</div>
          <div class="place">${e.place}</div>
          <div class="desc">${e.desc}</div>
        </div>`).join("")}
    </div>
  </section>
  `;
}
function projets() {
  return `
  <section class="section" id="projets">
    <h2>Projets</h2>
    <div class="projects-cards">
      ${data.projets.map(p=>`
        <div class="project-card">
          <div class="project-title">${p.title}</div>
          <div class="desc">${p.desc}</div>
        </div>`).join("")}
    </div>
  </section>
  `;
}
function veille() {
  return `
  <section class="section" id="veille">
    <h2>Veille technologique</h2>
    <div class="skills-cards" style="gap:0.7rem;">
      <ul class="skills-list" style="flex-wrap:wrap;">
        ${data.veille.map(v=>`
          <li class="skill-chip">
            <a href="${v.url}" target="_blank" style="color:inherit;text-decoration:none;">${v.icon} ${v.name}</a>
          </li>`).join("")}
      </ul>
    </div>
  </section>
  `;
}
function ambitions() {
  return `
  <section class="section" id="ambitions">
    <h2>Ambitions</h2>
    <p>${data.ambitions}</p>
  </section>
  `;
}
function contact() {
  return `
  <section class="section" id="contact">
    <h2>Contact</h2>
    <form class="contact-form" action="https://formspree.io/f/mayrnvjz" method="POST">
      <input type="text" name="name" placeholder="Votre nom" required>
      <input type="email" name="email" placeholder="Votre email" required>
      <textarea name="message" rows="5" placeholder="Votre message" required></textarea>
      <button type="submit">Envoyer</button>
    </form>
    <div style="margin-top:1.5rem;">
      <a href="mailto:${data.email}" style="color:#7cc7ff;">${data.email}</a> |
      <a href="${data.github_url}" style="color:#7cc7ff;" target="_blank">${data.github}</a>
    </div>
    <div>
      <a class="btn-main" href="${data.cv}" download style="margin-top:1.2em;display:inline-block;">Télécharger mon CV (PDF)</a>
    </div>
  </section>
  `;
}

function footer() {
  return `<div>© 2025 Mehdi Chougrani - Portfolio personnel</div>`;
}

// Typed effect accueil
function typedAccueil() {
  const el = document.querySelector('.typed-text');
  if(!el) return;
  const phrases = [
    data.presentation[0],
    "Développeur curieux, motivé et rigoureux.",
    "Toujours prêt à apprendre et à relever de nouveaux défis !"
  ];
  let i = 0, j = 0, erase = false;

  function typeLoop() {
    el.textContent = phrases[i].substring(0, j);
    if(!erase && j < phrases[i].length) {
      j++; setTimeout(typeLoop, 50);
    } else if(!erase && j === phrases[i].length) {
      erase = true; setTimeout(typeLoop, 1200);
    } else if(erase && j > 0) {
      j--; setTimeout(typeLoop, 22);
    } else {
      erase = false; i = (i+1)%phrases.length; setTimeout(typeLoop, 400);
    }
  }
  typeLoop();
}

// Nav active + scroll fluide
function navActive() {
  const navLinks = document.querySelectorAll('nav a');
  window.addEventListener('scroll', function() {
    let fromTop = window.scrollY + 110;
    navLinks.forEach(link => {
      const section = document.querySelector(link.getAttribute("href"));
      if(!section) return;
      if(section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
        navLinks.forEach(l=>l.classList.remove("active"));
        link.classList.add("active");
      }
    });
  });
  navLinks.forEach(link => {
    link.addEventListener("click", function(e) {
      if(this.hash && document.querySelector(this.hash)) {
        e.preventDefault();
        document.querySelector(this.hash).scrollIntoView({behavior: "smooth"});
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('navbar').innerHTML = nav();
  document.getElementById('main').innerHTML = [
    accueil(),
    competences(),
    formation(),
    experience(),
    projets(),
    veille(),
    ambitions(),
    contact()
  ].join('');
  document.getElementById('footer').innerHTML = footer();
  typedAccueil();
  navActive();
});
