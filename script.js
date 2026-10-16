const GH = 'https://github.com/Adrizzx/';

const PROJECTS = [
  { id:'hc', cat:['game'], featured:true, img:'hablacamaron.jpg', year:'2026',
    badge:{es:'Videojuego · Unity', en:'Video game · Unity'},
    title:{es:'¡Habla, Camarón!', en:'¡Habla, Camarón!'},
    desc:{es:'Simulador educativo de conducción manual ambientado en Quito. Tránsito con inteligencia artificial (A* sobre un grafo de calles y máquina de estados), física de embrague y ocho niveles con evaluación automática. Autor principal del código, con más de 440 pruebas automatizadas.',
          en:'Educational manual-driving simulator set in Quito. AI traffic (A* over a street graph plus a finite state machine), clutch physics and eight levels with automatic scoring. Lead author of the codebase, backed by 440+ automated tests.'},
    tags:['Unity 6','C#','A*','FSM','NUnit'], repo:'HablaCamaron', demo:GH+'HablaCamaron/releases/latest', demoLabel:{es:'Descargar juego',en:'Download game'} },
  { id:'azx', cat:['web'], img:'azx.jpg', year:'2026',
    badge:{es:'Full Stack',en:'Full Stack'},
    title:{es:'AZX-Finance',en:'AZX-Finance'},
    desc:{es:'Plataforma de finanzas personales con perfiles múltiples, presupuestos, metas, inversiones, simuladores y reportes. 20 tablas y más de 170 consultas preparadas.',
          en:'Personal finance platform with multiple profiles, budgets, goals, investments, simulators and reports. 20 tables and 170+ prepared statements.'},
    tags:['PHP','MySQL','Chart.js','Bootstrap'], repo:'AZX-Finance' },
  { id:'salon', cat:['web'], img:'salon.jpg', year:'2026',
    badge:{es:'Proyecto en equipo',en:'Team project'},
    title:{es:'Le Salon de Lumière',en:'Le Salon de Lumière'},
    desc:{es:'Sistema de reservas para restaurante con notificaciones por WhatsApp (Twilio), triggers, auditoría y pruebas unitarias, de integración y de estrés.',
          en:'Restaurant reservation system with WhatsApp notifications (Twilio), triggers, auditing and unit, integration and stress tests.'},
    tags:['PHP','MySQL','Twilio','Python'], repo:'Sistema-Reservas-Restaurante' },
  { id:'monster', cat:['web','api'], img:'monster.jpg', year:'2026',
    badge:{es:'Java EE',en:'Java EE'},
    title:{es:'Gestión de Proyectos Monster',en:'Monster Project Management'},
    desc:{es:'Talento humano y proyectos de extremo a extremo: ERS, UML, modelo de datos e implementación con control de acceso por roles y registro de horas.',
          en:'HR and project management built end to end: SRS, UML, data model and implementation with role-based access and time tracking.'},
    tags:['Java','Jakarta EE','MySQL','UML'], repo:'Gestion-Proyectos-Monster' },
  { id:'rest', cat:['web'], img:'restaurante.jpg', year:'2026',
    badge:{es:'ASP.NET Core',en:'ASP.NET Core'},
    title:{es:'Restaurante Monster',en:'Restaurante Monster'},
    desc:{es:'Carta digital, pedidos, facturación e inventario con alertas de stock para tres roles de usuario.',
          en:'Digital menu, orders, invoicing and inventory with stock alerts for three user roles.'},
    tags:['C#','ASP.NET Core','MongoDB'], repo:'Restaurante-Monster' },
  { id:'paradise', cat:['web'], img:'paradise.jpg', year:'2025',
    badge:{es:'Cliente real',en:'Real client'},
    title:{es:'Sitios para empresa de turismo',en:'Websites for a tourism company'},
    desc:{es:'Dos sitios responsivos diseñados y entregados para hospedajes de la Amazonía ecuatoriana: Paradise Lodge y Sisa Warmi.',
          en:'Two responsive websites designed and delivered for lodges in the Ecuadorian Amazon: Paradise Lodge and Sisa Warmi.'},
    tags:['HTML','CSS','JavaScript','Bootstrap'], repo:'Paradise-Lodge', demo:'https://adrizzx.github.io/Paradise-Lodge/', demoLabel:{es:'Ver sitio',en:'Live site'} },
  { id:'apis', cat:['api'], img:null, year:'2026',
    badge:{es:'Microservicios',en:'Microservices'},
    title:{es:'APIs de Talento Humano',en:'HR APIs'},
    desc:{es:'Servicios REST de personal y reloj de asistencia que registra el siguiente evento de la jornada y calcula atrasos automáticamente.',
          en:'REST services for staff and an attendance clock that logs the next event of the day and computes delays automatically.'},
    tags:['Python','Flask','PostgreSQL','SQLAlchemy'], repo:'apis-talento-humano' },
  { id:'sem', cat:['hw'], img:'semaforo.jpg', year:'2025',
    badge:{es:'Arduino + C#',en:'Arduino + C#'},
    title:{es:'Semáforo Inteligente',en:'Smart Traffic Light'},
    desc:{es:'Sistema embebido con EEPROM, LCD y matriz LED, controlado desde una app de escritorio por puerto serial con registro en SQLite.',
          en:'Embedded system with EEPROM, LCD and LED matrix, controlled from a desktop app over serial with SQLite logging.'},
    tags:['Arduino','C++','C#','SQLite'], repo:'Semaforo-Inteligente-Arduino' },
  { id:'cg', cat:['game'], img:'grafica.jpg', year:'2025',
    badge:{es:'Gráficos',en:'Graphics'},
    title:{es:'Computación Gráfica',en:'Computer Graphics'},
    desc:{es:'Algoritmos de rasterización, relleno, recorte y curvas; editor 3D con OpenGL; y un cortometraje animado en Blender.',
          en:'Rasterization, fill, clipping and curve algorithms; a 3D editor in OpenGL; and an animated short film in Blender.'},
    tags:['C#','OpenGL','Blender'], repo:'Computacion-Grafica' },
];

const T = {
  en:{
    'nav.about':'About','nav.stack':'Stack','nav.projects':'Projects','nav.path':'Journey','nav.contact':'Contact',
    'hero.status':'Open to opportunities','hero.role2':'Software Engineering',
    'hero.lead':'I build web apps, APIs and games end to end: from requirements and design to deployment. With a technical background in electronics, I also connect software with hardware.',
    'hero.cta1':'View projects','hero.cta2':'Download CV',
    'stats.repos':'public repositories','stats.tests':'automated tests in a single project','stats.clients':'websites delivered to a real client','stats.sem':'semester of Software Engineering',
    'about.title':'About me',
    'about.p1':'I am a seventh-semester Software Engineering student at Universidad de las Fuerzas Armadas ESPE. I enjoy building complete software: gathering requirements, designing the architecture, coding and shipping a working system.',
    'about.p2':'I have built business systems with Java EE, ASP.NET Core, Node.js, Python and PHP; a driving simulator in Unity with AI traffic; and two websites I designed and delivered to a tourism company.',
    'about.p3':'I also work with Linux infrastructure, load balancing, Business Intelligence and web security. My electronics background lets me take software all the way to hardware.',
    'about.f1k':'Education','about.f2k':'Background','about.f2v':'Electronics technical diploma','about.f3k':'Work mode','about.f3v':'On-site, hybrid or remote','about.f4k':'Languages','about.f4v':'Spanish native · English intermediate',
    'stack.title':'Tech stack','stack.db':'Databases','stack.star':'Star schema modeling','stack.sec':'Security','stack.net':'Network security','stack.games':'Games, 3D & hardware','stack.method':'Engineering','stack.methodv':'Requirements Engineering · UML · Scrum · Kanban · SOLID · Clean Code · Testing',
    'proj.title':'Featured projects','proj.all':'All','proj.games':'Games & 3D','proj.code':'Code',
    'path.title':'Journey','path.t1':'¡Habla, Camarón! · driving simulator','path.d1':'Lead code author of a serious game in Unity with AI traffic and 440+ automated tests.',
    'path.t2':'Freelance web developer','path.d2':'Designed, built and delivered two websites for tourist lodges in the Ecuadorian Amazon.',
    'path.d3':'Participant building an AI-powered mobile app for personal finance management.',
    'path.now':'now','path.t4':'Software Engineering · ESPE','path.d4':'Advanced Web Programming, Parallel Computing, Cybersecurity, Requirements Engineering, Networks and Business Intelligence.','path.certs':'Certifications',
    'contact.title':'Have an opportunity or a project in mind?','contact.text':'I am looking for my next challenge as a developer. Write to me and I will reply soon.',
    'foot.top':'Back to top'
  }
};

let lang = 'es';
const ES = {};
document.querySelectorAll('[data-i18n]').forEach(el => { ES[el.dataset.i18n] = el.innerHTML; });
T.es = Object.assign({'proj.code':'Código'}, ES);

function renderProjects(){
  const box = document.getElementById('projects');
  box.innerHTML = PROJECTS.map(p => `
    <article class="proj reveal in ${p.featured?'featured':''}" data-cat="${p.cat.join(' ')}">
      <div class="thumb">${p.img?`<img src="img/${p.img}" alt="${p.title[lang]}" loading="lazy">`:`<div class="thumb-code"><pre>POST /api/firmas/procesar\n{\n  "ci": "1700000001",\n  "hora": "08:35:00"\n}\n\n→ 201  inicio de jornada\n   atraso: 00:05:00</pre></div>`}
        <span class="badge">${p.badge[lang]}</span></div>
      <div class="body">
        <span class="meta">${p.year}</span>
        <h3>${p.title[lang]}</h3>
        <p>${p.desc[lang]}</p>
        <div class="tags">${p.tags.map(t=>`<span>${t}</span>`).join('')}</div>
        <div class="plinks">
          <a href="${GH+p.repo}" target="_blank" rel="noopener">${T[lang]['proj.code']} →</a>
          ${p.demo?`<a href="${p.demo}" target="_blank" rel="noopener">${p.demoLabel[lang]} →</a>`:''}
        </div>
      </div>
    </article>`).join('');
  applyFilter(currentFilter);
}

let currentFilter = 'all';
function applyFilter(f){
  currentFilter = f;
  document.querySelectorAll('.proj').forEach(el => {
    el.classList.toggle('hide', f!=='all' && !el.dataset.cat.split(' ').includes(f));
  });
}
document.getElementById('filters').addEventListener('click', e => {
  const b = e.target.closest('button'); if(!b) return;
  document.querySelectorAll('#filters button').forEach(x => x.classList.toggle('on', x===b));
  applyFilter(b.dataset.f);
});

function setLang(l){
  lang = l;
  document.documentElement.lang = l;
  document.querySelectorAll('[data-i18n]').forEach(el => { const v = T[l][el.dataset.i18n]; if(v) el.innerHTML = v; });
  const spans = document.querySelectorAll('#lang span');
  spans[0].classList.toggle('on', l==='es'); spans[1].classList.toggle('on', l==='en');
  renderProjects();
  try{ localStorage.setItem('lang', l); }catch(e){}
}
document.getElementById('lang').addEventListener('click', () => setLang(lang==='es'?'en':'es'));

// menú móvil
const burger = document.getElementById('burger'), links = document.getElementById('navlinks');
burger.addEventListener('click', () => { burger.classList.toggle('open'); links.classList.toggle('open'); });
links.addEventListener('click', e => { if(e.target.tagName==='A'){ burger.classList.remove('open'); links.classList.remove('open'); } });

// aparición al hacer scroll
const io = new IntersectionObserver(es => es.forEach(en => { if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); } }), {threshold:.12});
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// contadores
const co = new IntersectionObserver(es => es.forEach(en => {
  if(!en.isIntersecting) return; const el = en.target; co.unobserve(el);
  const end = +el.dataset.count, plus = el.dataset.plus?'+':'', suf = el.dataset.suffix||''; let t0 = null;
  const step = ts => { t0 ??= ts; const k = Math.min((ts-t0)/1200,1); el.textContent = Math.round(end*(1-Math.pow(1-k,3)))+(k===1?plus:'')+suf; if(k<1) requestAnimationFrame(step); };
  requestAnimationFrame(step);
}), {threshold:.5});
document.querySelectorAll('[data-count]').forEach(el => co.observe(el));

// enlace activo en el menú
const secs = [...document.querySelectorAll('main section[id]')];
window.addEventListener('scroll', () => {
  const y = scrollY + 120; let cur = '';
  secs.forEach(s => { if(s.offsetTop <= y) cur = s.id; });
  document.querySelectorAll('#navlinks a').forEach(a => a.classList.toggle('active', a.getAttribute('href')==='#'+cur));
}, {passive:true});

document.getElementById('year').textContent = new Date().getFullYear();
renderProjects();
try{ const saved = localStorage.getItem('lang'); if(saved==='en') setLang('en'); }catch(e){}
