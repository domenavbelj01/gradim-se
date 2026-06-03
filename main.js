const memberData = {
  mk: {
    name: 'Marko Kovač', role: 'SaaS · Startup',
    photo: 'https://i.pravatar.cc/300?img=11',
    tags: ['SaaS', 'Podcast gost', '12k MRR'],
    bio: 'Od razvijalca do ustanovitelja — v 3 letih zgradil SaaS produkt z 12k mesečnega prihodka, brez vlagateljev in brez ekipe.',
    phone: '+386 41 123 456', email: 'marko.kovac@gradimse.si',
    quote: '"Uspeh ni v ideji. Je v tisočih malih odločitvah po tem, ko si idejo povedal glasno."'
  },
  ap: {
    name: 'Ana Potočnik', role: 'E-commerce · Ustanoviteljica',
    photo: 'https://i.pravatar.cc/300?img=49',
    tags: ['200k €/let', 'Podjetnik meseca', 'Brez investitorja'],
    bio: 'Začela pri 38, brez investitorja. V treh letih zgradila e-commerce podjetje z 200.000 € letnega prometa.',
    phone: '+386 40 234 567', email: 'ana.potocnik@shop.si',
    quote: '"Najboljši čas za začetek je bil včeraj. Drugi najboljši čas je danes."'
  },
  jn: {
    name: 'Jure Novak', role: 'Gostinstvo · Lastnik',
    photo: 'https://i.pravatar.cc/300?img=68',
    tags: ['3 restavracije', 'Brez kredita', '5 let'],
    bio: 'Pet let, trije lokali, nič kredita. Zgrajeno postopoma — s potrpežljivostjo in fokusiranim konceptom.',
    phone: '+386 51 345 678', email: 'jure.novak@novakbistro.si',
    quote: '"Vsak gost je priložnost za odnos, ne samo za transakcijo."'
  },
  kl: {
    name: 'Kaja Lebar', role: 'Marketing · Agencija',
    photo: 'https://i.pravatar.cc/300?img=25',
    tags: ['40+ strank', 'Freelance → agencija', 'Branding'],
    bio: 'Začela kot freelancerka iz dnevne sobe. Danes vodi boutique agencijo z ekipo 6 ljudi in 40+ aktivnimi strankami.',
    phone: '+386 41 456 789', email: 'kaja@lebarmarketing.si',
    quote: '"Dober branding te ne dela večjega — dela te prepričljivejšega."'
  },
  tb: {
    name: 'Tomaž Bregar', role: 'SaaS · B2B',
    photo: 'https://i.pravatar.cc/300?img=15',
    tags: ['50k €/let', 'Bootstrapped', 'B2B'],
    bio: 'Bootstrapped SaaS za B2B trg. 50.000 € letnega prihodka brez vlagateljev — samo fokus in dolgotrajne stranke.',
    phone: '+386 70 567 890', email: 'tomaz@bregartech.si',
    quote: '"Počasi gre, ampak ko pride — ostane. Stranka ki ti zaupa, ti plačuje leta."'
  },
  sh: {
    name: 'Sara Hrovat', role: 'Life Coaching · Ustanoviteljica',
    photo: 'https://i.pravatar.cc/300?img=43',
    tags: ['100+ klientov', 'Korporacija → svoboda', 'Coaching'],
    bio: 'Zapustila direktorski položaj in začela znova. Danes pomaga 100+ klientom najti pravo smer v karieri in poslu.',
    phone: '+386 40 678 901', email: 'sara@hrovatcoaching.si',
    quote: '"Strah pred spremembo je manjši od obžalovanja, da spremembe nisi naredila."'
  },
  lj: {
    name: 'Luka Jeglič', role: 'LinkedIn · Marketing',
    photo: 'https://i.pravatar.cc/300?img=50',
    tags: ['8k sledilcev', 'Organsko', '6 mesecev'],
    bio: '8.000 sledilcev v 6 mesecih brez enega evra oglasov. Pomaga podjetnikom, da postanejo vidni na LinkedInu.',
    phone: '+386 51 789 012', email: 'luka@jeglic.si',
    quote: '"LinkedIn ni življenjepis. Je tvoj glas — in vsak dan imaš priložnost, da ga uporabiš."'
  },
  pk: {
    name: 'Peter Kranjc', role: 'Spletni razvoj · SaaS',
    photo: 'https://i.pravatar.cc/300?img=3',
    tags: ['3 SaaS produkti', 'Freelance → produkt', 'Dev'],
    bio: 'Iz freelance razvijalca do lastnika 3 SaaS produktov. Dokaz, da razvijalci ne rabijo investitorjev — rabijo pravo idejo.',
    phone: '+386 41 890 123', email: 'peter@kranjcdev.si',
    quote: '"Koda je poceni. Prava vrednost je razumevanje problema, ki ga rešuješ."'
  }
};

const overlay   = document.getElementById('memberOverlay');
const vizitka   = document.getElementById('memberVizitka');
const isTouch   = window.matchMedia('(hover: none)').matches;
let showTimer   = null;
let hideTimer   = null;

function showVizitka(id) {
  clearTimeout(hideTimer);
  const d = memberData[id];
  if (!d) return;
  document.getElementById('vizImg').src            = d.photo;
  document.getElementById('vizImg').alt            = d.name;
  document.getElementById('vizName').textContent   = d.name;
  document.getElementById('vizRole').textContent   = d.role;
  document.getElementById('vizBio').textContent    = d.bio;
  document.getElementById('vizQuote').textContent  = d.quote;
  document.getElementById('vizTags').innerHTML     = d.tags.map(t => `<span class="viz-tag">${t}</span>`).join('');
  const ph = document.getElementById('vizPhone');
  ph.href = 'tel:' + d.phone.replace(/\s/g,'');
  document.getElementById('vizPhoneText').textContent = d.phone;
  const em = document.getElementById('vizEmail');
  em.href = 'mailto:' + d.email;
  document.getElementById('vizEmailText').textContent = d.email;
  document.querySelector('.viz-lnk').href = 'skupnost.html#' + id;
  overlay.classList.add('viz-active');
  vizitka.classList.add('viz-active');
}

function hideVizitka() {
  clearTimeout(showTimer);
  hideTimer = setTimeout(() => {
    overlay.classList.remove('viz-active');
    vizitka.classList.remove('viz-active');
  }, 150);
}

document.querySelectorAll('.member-card[data-member-id]').forEach(card => {
  const id = card.dataset.memberId;
  if (isTouch) {
    card.addEventListener('click', e => { e.preventDefault(); showVizitka(id); });
  } else {
    card.addEventListener('mouseenter', () => {
      clearTimeout(hideTimer);
      showTimer = setTimeout(() => showVizitka(id), 1000);
    });
    card.addEventListener('mouseleave', () => clearTimeout(showTimer));
  }
});

overlay.addEventListener('click', hideVizitka);
document.getElementById('vizClose').addEventListener('click', () => {
  clearTimeout(showTimer);
  overlay.classList.remove('viz-active');
  vizitka.classList.remove('viz-active');
});

// ── Join modal ──
(function() {
  const overlay = document.getElementById('joinOverlay');
  const STEPS = ['joinStep1','joinStep2','joinLogin','joinSuccess'];

  function showStep(id) {
    STEPS.forEach(s => document.getElementById(s).classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');
  }

  function openJoin() {
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    showStep('joinStep1');
  }

  function closeJoin() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  function fieldErr(fieldId, bad) {
    const el = document.getElementById(fieldId);
    el.classList.toggle('has-error', bad);
    const inp = el.querySelector('.join-input,.join-select,.join-textarea');
    if (inp) inp.classList.toggle('err', bad);
    return bad;
  }

  function clearErr(fieldId) { fieldErr(fieldId, false); }

  // Open trigger
  document.querySelector('.sk-cta-lnk').addEventListener('click', e => { e.preventDefault(); openJoin(); });

  // Close
  document.getElementById('joinClose').addEventListener('click', closeJoin);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeJoin(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && overlay.classList.contains('active')) closeJoin(); });

  // Clear errors on input
  ['jName','jEmail','jPass'].forEach(id => {
    document.getElementById(id).addEventListener('input', () => {
      const map = { jName:'f-name', jEmail:'f-email', jPass:'f-pass' };
      clearErr(map[id]);
    });
  });

  // Step 1 → Step 2
  document.getElementById('joinNext').addEventListener('click', () => {
    const name  = document.getElementById('jName').value.trim();
    const email = document.getElementById('jEmail').value.trim();
    const pass  = document.getElementById('jPass').value;
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const e1 = fieldErr('f-name',  !name);
    const e2 = fieldErr('f-email', !emailOk);
    const e3 = fieldErr('f-pass',  pass.length < 8);
    if (!e1 && !e2 && !e3) showStep('joinStep2');
  });

  // Back
  document.getElementById('joinBack').addEventListener('click', () => showStep('joinStep1'));

  // Step 2 submit
  document.getElementById('joinSubmit').addEventListener('click', () => {
    const area = document.getElementById('jArea').value;
    const bio  = document.getElementById('jBio').value.trim();
    const e1 = fieldErr('f-area', !area);
    const e2 = fieldErr('f-bio',  !bio);
    if (!e1 && !e2) {
      document.getElementById('successEmail').textContent = document.getElementById('jEmail').value.trim();
      showStep('joinSuccess');
    }
  });

  // Login toggle
  document.getElementById('showLogin').addEventListener('click', e => { e.preventDefault(); showStep('joinLogin'); });
  document.getElementById('showRegister').addEventListener('click', e => { e.preventDefault(); showStep('joinStep1'); });

  // Login submit
  document.getElementById('loginSubmit').addEventListener('click', () => {
    const em = document.getElementById('jLEmail').value.trim();
    const ps = document.getElementById('jLPass').value;
    const e1 = fieldErr('f-lemail', !em);
    const e2 = fieldErr('f-lpass',  !ps);
    if (!e1 && !e2) {
      document.getElementById('successEmail').textContent = em;
      showStep('joinSuccess');
    }
  });

  // Success → skupnost
  document.getElementById('joinDone').addEventListener('click', () => { window.location.href = 'skupnost.html'; });
})();

// Podcast mini-player
const pmData = [
  { ep:'Ep. 32 · Intervju', title:'Od 0 do 200k v 18 mesecih', dur:2880, thumb:'https://picsum.photos/seed/pod32/144/104' },
  { ep:'Ep. 31 · Okrogla miza', title:'Kako nastaviti cene storitev', dur:3720, thumb:'https://picsum.photos/seed/pod31/144/104' },
  { ep:'Ep. 30 · Intervju', title:'Prodaja brez pritiska', dur:2460, thumb:'https://picsum.photos/seed/pod30/144/104' },
  { ep:'Ep. 29 · Solo', title:'Zakaj večina freelancerjev ostane majhnih', dur:1740, thumb:'https://picsum.photos/seed/pod29/144/104' },
];
const podMini  = document.getElementById('podMini');
const pmFillEl = document.getElementById('pmFill');
let pmCurrent = -1, pmTime = 0, pmInterval = null;

function pmOpen(i) {
  const d = pmData[i];
  if (!d) return;
  pmCurrent = i; pmTime = 0;
  clearInterval(pmInterval);
  document.getElementById('pmThumb').src = d.thumb;
  document.getElementById('pmEp').textContent = d.ep;
  document.getElementById('pmTitle').textContent = d.title;
  pmFillEl.style.width = '0%';
  podMini.classList.add('pm-active');
  pmInterval = setInterval(() => {
    pmTime++;
    pmFillEl.style.width = Math.min((pmTime / d.dur) * 100, 100) + '%';
    if (pmTime >= d.dur) clearInterval(pmInterval);
  }, 1000);
}

function pmClose() {
  clearInterval(pmInterval);
  podMini.classList.remove('pm-active');
}

document.querySelectorAll('.pod-item').forEach((item, i) => {
  item.addEventListener('click', e => { e.preventDefault(); pmOpen(i); });
});
document.getElementById('pmClose').addEventListener('click', pmClose);

// ── Hero search ──
(function() {
  const searchData = {
    persons: [
      { name:'Marko Kovač', sub:'SaaS · Startup', url:'skupnost.html#mk' },
      { name:'Ana Potočnik', sub:'E-commerce · Ustanoviteljica', url:'skupnost.html#ap' },
      { name:'Jure Novak', sub:'Gostinstvo · Lastnik', url:'skupnost.html#jn' },
      { name:'Kaja Lebar', sub:'Marketing · Agencija', url:'skupnost.html#kl' },
      { name:'Tomaž Bregar', sub:'SaaS · B2B', url:'skupnost.html#tb' },
      { name:'Sara Hrovat', sub:'Life Coaching', url:'skupnost.html#sh' },
      { name:'Luka Jeglič', sub:'LinkedIn · Marketing', url:'skupnost.html#lj' },
      { name:'Maja Hudnik', sub:'Fotografija · Studio', url:'skupnost.html#mh' },
      { name:'Peter Kranjc', sub:'Spletni razvoj · SaaS', url:'skupnost.html#pk' },
    ],
    blogs: [
      { name:'5 napak v prvem letu posla', sub:'Marko Kovač · Zgodbe', url:'blog.html?id=5-napak' },
      { name:'Računovodstvo za s.p. brez računovodje', sub:'Ana Novak · Finance', url:'blog.html?id=racunovodstvo-sp' },
      { name:'Strah pred neuspehom me je zaustavil 2 leti', sub:'Tim Horvat · Mindset', url:'blog.html?id=strah-neuspeh' },
      { name:'Prvih 10 strank brez omrežja in oglasov', sub:'Katja Rus · Prodaja', url:'blog.html?id=prvih-10-strank' },
      { name:'LinkedIn strategija za freelancerje', sub:'Luka Jeglič · Marketing', url:'blog.html?id=linkedin-strategija' },
      { name:'Od 0 do prvih 50.000 € prihodka', sub:'Tomaž Bregar · Rast', url:'blog.html?id=50k-prihodek' },
      { name:'Davčna optimizacija za s.p.', sub:'Ana Potočnik · Finance', url:'blog.html?id=davcna-optimizacija' },
      { name:'Zakaj sem zavrnil investitorja', sub:'Jure Novak · Rast', url:'blog.html?id=zavrnil-investitorja' },
    ],
    podcasts: [
      { name:'Od 0 do 200k v 18 mesecih', sub:'Ep. 32 · Ana Potočnik', url:'podcast.html' },
      { name:'Kako nastaviti cene storitev', sub:'Ep. 31 · Okrogla miza', url:'podcast.html' },
      { name:'Prodaja brez pritiska', sub:'Ep. 30 · Tomaž Bregar', url:'podcast.html' },
      { name:'Zakaj večina freelancerjev ostane majhnih', sub:'Ep. 29 · Solo', url:'podcast.html' },
    ]
  };

  const inp  = document.getElementById('heroSearch');
  const drop = document.getElementById('searchDropdown');
  const clr  = document.getElementById('hsClr');
  const wrap = document.querySelector('.hero-search-wrap');

  // Premakni dropdown na <body> da pobegne overflow:hidden in transform containing block na .hero-search-wrap
  document.body.appendChild(drop);

  function positionDropdown() {
    const rect = wrap.getBoundingClientRect();
    drop.style.top   = (rect.bottom + 8) + 'px';
    drop.style.left  = rect.left + 'px';
    drop.style.width = rect.width + 'px';
  }

  function iconSvg(type) {
    if (type === 'person') return '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#22A87E" stroke-width="1.4" stroke-linecap="round"><circle cx="7" cy="4.5" r="2.8"/><path d="M1.5 13c0-3.04 2.46-5.5 5.5-5.5s5.5 2.46 5.5 5.5"/></svg>';
    if (type === 'blog')   return '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#6E7870" stroke-width="1.4" stroke-linecap="round"><path d="M2.5 2.5h9v9h-9z"/><path d="M5 5.5h4M5 8h3"/></svg>';
    return '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#8b5cf6" stroke-width="1.4" stroke-linecap="round"><circle cx="7" cy="7" r="5.5"/><path d="M5.5 5l4 2.5-4 2.5V5z" fill="#8b5cf6" stroke="none"/></svg>';
  }

  function renderResults(q) {
    const lq = q.toLowerCase();
    const match = arr => arr.filter(x => x.name.toLowerCase().includes(lq) || x.sub.toLowerCase().includes(lq));
    const pr = match(searchData.persons);
    const br = match(searchData.blogs);
    const pod = match(searchData.podcasts);
    if (!pr.length && !br.length && !pod.length) {
      drop.innerHTML = `<p class="sd-empty">Ni rezultatov za "<em>${q}</em>"</p>`;
    } else {
      let html = '';
      const group = (label, items, type) => {
        if (!items.length) return '';
        return `<div class="sd-group"><span class="sd-label">${label}</span>${items.map(x =>
          `<a class="sd-item" href="${x.url}">
            <span class="sd-ico ${type}">${iconSvg(type)}</span>
            <span><div class="sd-title">${x.name}</div><div class="sd-sub">${x.sub}</div></span>
          </a>`).join('')}</div>`;
      };
      html += group('Osebe', pr, 'person');
      html += group('Blogi', br, 'blog');
      html += group('Podcast', pod, 'podcast');
      drop.innerHTML = html;
    }
    positionDropdown();
    drop.classList.add('vis');
  }

  inp.addEventListener('input', () => {
    const q = inp.value.trim();
    clr.classList.toggle('vis', !!q);
    if (q.length >= 1) renderResults(q);
    else drop.classList.remove('vis');
  });

  clr.addEventListener('click', () => {
    inp.value = ''; clr.classList.remove('vis'); drop.classList.remove('vis'); inp.focus();
  });

  document.addEventListener('click', e => {
    if (!e.target.closest('.hero-search-wrap') && !e.target.closest('.search-dropdown')) drop.classList.remove('vis');
  });

  window.addEventListener('scroll', () => drop.classList.remove('vis'), { passive: true });
  window.addEventListener('resize', () => { if (drop.classList.contains('vis')) positionDropdown(); });
})();

// ── Account panel ──

// TODO: zamenjaj z pravim auth sistemom (JWT / session) preden greš v produkcijo
const ADMIN_EMAILS = ['domenavbelj01@gmail.com'];

(function() {
  const overlay = document.getElementById('acctOverlay');
  const panel   = document.getElementById('acctPanel');
  const btn     = document.getElementById('accountBtn');

  // Persist login across pages via localStorage
  let loggedIn = false;
  let currentUser = {};

  function loadSession() {
    try {
      const s = localStorage.getItem('gs_user');
      if (s) { currentUser = JSON.parse(s); loggedIn = true; }
    } catch(e) {}
  }

  function saveSession(u) {
    try { localStorage.setItem('gs_user', JSON.stringify(u)); } catch(e) {}
  }

  function clearSession() {
    try { localStorage.removeItem('gs_user'); } catch(e) {}
  }

  loadSession();
  if (loggedIn) btn.classList.add('open');

  function renderDashboard() {
    const initials = (currentUser.name||'GS').split(' ').map(w=>w[0]).join('').toUpperCase().slice(0,2);
    document.getElementById('acctAvatarInitials').textContent = initials;
    document.getElementById('acctDisplayName').textContent = currentUser.name || '';
    const roleEl = document.getElementById('acctDisplayRole');
    roleEl.innerHTML = currentUser.isAdmin
      ? `<span class="acct-admin-badge">Admin</span>`
      : (currentUser.area || 'Član skupnosti');
    // Admin button
    const adminBtn = document.getElementById('adminOpenBtn');
    if (adminBtn) adminBtn.style.display = currentUser.isAdmin ? '' : 'none';
  }

  function showLoginForm() {
    document.getElementById('acctLoButtons').style.display = 'none';
    document.getElementById('acctLoginForm').style.display = '';
    document.getElementById('loginEmail').focus();
  }

  function hideLoginForm() {
    document.getElementById('acctLoginForm').style.display = 'none';
    document.getElementById('acctLoButtons').style.display = '';
    document.getElementById('loginErr').textContent = '';
    document.getElementById('loginEmail').value = '';
    document.getElementById('loginPass').value = '';
  }

  function openPanel() {
    hideLoginForm();
    if (loggedIn) {
      document.getElementById('acctLoggedOut').style.display = 'none';
      document.getElementById('acctDashboard').style.display = 'flex';
      renderDashboard();
    } else {
      document.getElementById('acctLoggedOut').style.display = '';
      document.getElementById('acctDashboard').style.display = 'none';
    }
    overlay.classList.add('active');
    btn.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closePanel() {
    overlay.classList.remove('active');
    if (!loggedIn) btn.classList.remove('open');
    document.body.style.overflow = '';
  }

  btn.addEventListener('click', openPanel);
  overlay.addEventListener('click', e => { if (e.target === overlay) closePanel(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && overlay.classList.contains('active')) closePanel(); });

  const acctClose = document.getElementById('acctClose');
  if (acctClose) acctClose.addEventListener('click', closePanel);

  // Prijava button → show inline login form
  document.getElementById('acctOpenLogin').addEventListener('click', showLoginForm);
  document.getElementById('acctLoginBack').addEventListener('click', hideLoginForm);

  // Login submit
  document.getElementById('loginSubmitBtn').addEventListener('click', doLogin);
  document.getElementById('loginPass').addEventListener('keydown', e => { if (e.key === 'Enter') doLogin(); });

  function doLogin() {
    const email = document.getElementById('loginEmail').value.trim();
    const pass  = document.getElementById('loginPass').value;
    const errEl = document.getElementById('loginErr');
    if (!email) { errEl.textContent = 'Vnesite e-poštni naslov.'; return; }
    if (!pass)  { errEl.textContent = 'Vnesite geslo.'; return; }
    // Prototype: any email + any password = valid login
    errEl.textContent = '';
    const isAdmin = ADMIN_EMAILS.includes(email.toLowerCase());
    const name = isAdmin ? 'Domena Vbelj' : email.split('@')[0].replace(/[._-]/g,' ').replace(/\b\w/g,c=>c.toUpperCase());
    currentUser = { name, email, area: isAdmin ? 'Admin · GradimSe' : 'Član skupnosti', isAdmin };
    loggedIn = true;
    saveSession(currentUser);
    hideLoginForm();
    document.getElementById('acctLoggedOut').style.display = 'none';
    document.getElementById('acctDashboard').style.display = 'flex';
    renderDashboard();
    btn.classList.add('open');
  }

  // Odjava
  document.getElementById('acctLogoutBtn').addEventListener('click', () => {
    loggedIn = false;
    currentUser = {};
    clearSession();
    btn.classList.remove('open');
    closePanel();
  });

  // Open register → join modal
  document.getElementById('acctOpenRegister').addEventListener('click', () => {
    closePanel();
    document.getElementById('joinOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
    ['joinStep1','joinStep2','joinLogin','joinSuccess'].forEach(s => document.getElementById(s).classList.add('hidden'));
    document.getElementById('joinStep1').classList.remove('hidden');
  });

  // After registration, set session from join form
  document.getElementById('joinDone').addEventListener('click', () => {
    const name = (document.getElementById('jName').value.trim() || document.getElementById('jLEmail').value.trim().split('@')[0]);
    const email = document.getElementById('jLEmail') ? document.getElementById('jLEmail').value.trim() : '';
    const area = document.getElementById('jArea') ? document.getElementById('jArea').value : 'Član skupnosti';
    currentUser = { name, email, area, isAdmin: false };
    loggedIn = true;
    saveSession(currentUser);
    btn.classList.add('open');
  });

  // Tab switching
  document.querySelectorAll('.acct-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.acct-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.acct-pane').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById('pane-' + tab.dataset.tab).classList.add('active');
    });
  });

  // Publish blog
  document.getElementById('publishBlogBtn').addEventListener('click', () => {
    const title = document.getElementById('blogTitle').value.trim();
    if (!title) { document.getElementById('blogTitle').focus(); return; }
    document.getElementById('blogSuccess').classList.add('vis');
    document.getElementById('blogTitle').value = '';
    document.getElementById('blogBody').value = '';
    document.getElementById('blogCat').value = '';
    setTimeout(() => document.getElementById('blogSuccess').classList.remove('vis'), 4000);
  });

  // Upload podcast
  document.getElementById('uploadPodBtn').addEventListener('click', () => {
    const title = document.getElementById('podTitle').value.trim();
    if (!title) { document.getElementById('podTitle').focus(); return; }
    document.getElementById('podSuccess').classList.add('vis');
    document.getElementById('podTitle').value = '';
    document.getElementById('podDesc').value = '';
    setTimeout(() => document.getElementById('podSuccess').classList.remove('vis'), 5000);
  });

  // Drag over upload zone
  const zone = document.getElementById('uploadZone');
  zone.addEventListener('dragover', e => { e.preventDefault(); zone.style.borderColor = 'var(--green)'; zone.style.background = 'var(--green-faint)'; });
  zone.addEventListener('dragleave', () => { zone.style.borderColor = ''; zone.style.background = ''; });
  zone.addEventListener('drop', e => { e.preventDefault(); zone.style.borderColor = ''; zone.style.background = ''; const f = e.dataTransfer.files[0]; if(f) document.getElementById('podTitle').focus(); });
})();

// ── Hamburger menu ──
(function() {
  const btn  = document.getElementById('navHamburger');
  const menu = document.getElementById('mobileMenu');
  let open = false;

  function openMenu() {
    open = true;
    menu.style.display = 'flex';
    requestAnimationFrame(() => menu.classList.add('open'));
    btn.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    open = false;
    menu.classList.remove('open');
    btn.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    setTimeout(() => { if (!open) menu.style.display = 'none'; }, 220);
  }

  btn.addEventListener('click', () => open ? closeMenu() : openMenu());

  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

  document.addEventListener('keydown', e => { if (e.key === 'Escape' && open) closeMenu(); });
})();

// ── Stats counter animation ──
// TODO: zamenjaj s pravimi podatki iz backenda ko bo API na voljo
(function() {
  const statEls = document.querySelectorAll('.stat-n[data-count]');
  if (!statEls.length || !('IntersectionObserver' in window)) return;

  function animateCount(el) {
    const target = parseInt(el.dataset.count, 10);
    const suffix = el.dataset.suffix || '';
    const duration = 1400;
    const start = performance.now();

    function easeOut(t) { return 1 - Math.pow(1 - t, 3); }

    function tick(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.round(easeOut(progress) * target);
      el.textContent = value + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    }

    el.textContent = '0' + suffix;
    requestAnimationFrame(tick);
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  statEls.forEach(el => observer.observe(el));
})();

// Admin button links to admin.html (standalone page)
