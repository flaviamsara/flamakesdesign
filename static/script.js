const cards = document.querySelectorAll('.nav-card, .hero-box, .content-card');

cards.forEach((el, i) => {
  el.animate(
    [
      { opacity: 0, transform: 'translateY(12px)' },
      { opacity: 1, transform: 'translateY(0)' }
    ],
    {
      duration: 360,
      delay: i * 40,
      easing: 'ease-out',
      fill: 'both'
    }
  );
});

const langButtons = document.querySelectorAll('.lang-btn');
const langKey = 'flamakesdesign_lang';
const themeKey = 'flamakesdesign_theme';
let currentLang = 'pt';
let currentTheme = 'light';
let themeToggle;
const themeAssets = {
  logo: {
    light: 'static/flamakesdesign.png',
    dark: 'static/logowhite.png'
  },
  pierre: {
    light: 'static/pierre.png',
    dark: 'static/pierremarrom.png'
  }
};

function applyThemeAssets(theme) {
  const mode = theme === 'dark' ? 'dark' : 'light';
  const logo = document.querySelector('.logo-link img');
  if (logo) logo.setAttribute('src', themeAssets.logo[mode]);

  const pierreMain = document.getElementById('pierreCharacter');
  if (pierreMain) pierreMain.setAttribute('src', themeAssets.pierre[mode]);

  const pierreFixed = document.querySelector('.about-pierre-fixed img');
  if (pierreFixed) pierreFixed.setAttribute('src', themeAssets.pierre[mode]);
}

function applyTheme(theme) {
  const selectedTheme = theme === 'dark' ? 'dark' : 'light';
  currentTheme = selectedTheme;
  document.body?.setAttribute('data-theme', selectedTheme);
  applyThemeAssets(selectedTheme);
  if (themeToggle) {
    themeToggle.setAttribute('data-mode', selectedTheme);
    themeToggle.setAttribute(
      'aria-label',
      selectedTheme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'
    );
  }
}

function mountThemeToggle() {
  const topbar = document.querySelector('.topbar');
  const langSwitch = document.querySelector('.lang-switch');
  if (!topbar || !langSwitch) return;

  let controls = topbar.querySelector('.topbar-controls');
  if (!controls) {
    controls = document.createElement('div');
    controls.className = 'topbar-controls';
    topbar.appendChild(controls);
  }

  controls.appendChild(langSwitch);

  if (controls.querySelector('.theme-toggle')) {
    themeToggle = controls.querySelector('.theme-toggle');
    return;
  }

  themeToggle = document.createElement('button');
  themeToggle.type = 'button';
  themeToggle.className = 'theme-toggle';
  themeToggle.setAttribute('aria-label', 'Ativar modo escuro');
  themeToggle.innerHTML = `
    <span class="theme-icon theme-icon-sun" aria-hidden="true">☀</span>
    <span class="theme-icon theme-icon-moon" aria-hidden="true">☾</span>
  `;

  controls.insertBefore(themeToggle, langSwitch);

  themeToggle.addEventListener('click', () => {
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    localStorage.setItem(themeKey, nextTheme);
    applyTheme(nextTheme);
  });
}

mountThemeToggle();
applyTheme(localStorage.getItem(themeKey) || 'light');

const i18n = {
  pt: {
    'nav.about': 'sobre mim',
    'nav.portfolio': 'portfólio',
    'nav.services': 'serviços',
    'nav.process': 'processo',
    'nav.shop': 'loja',
    'nav.contact': 'contato',
    'common.backHome': 'voltar para home',
    'page.about.title': 'sobre mim',
    'page.about.intro1': 'Oi, eu sou a Fla. Sou designer gráfica e trabalho criando identidades visuais estratégicas para marcas que querem crescer com clareza e personalidade.',
    'page.about.intro2': 'Gosto de unir organização e estética. Para mim, design não é só bonito, é estrutura, direção e intenção.',
    'page.about.intro3': 'Além do design, estou estudando programação e explorando novas formas de criar na web.',
    'page.about.newIntro1': 'Oi, eu sou a Fla! :)',
    'page.about.newIntro2': 'Sou designer gráfica e crio identidades visuais estratégicas para marcas que querem crescer com clareza, personalidade e propósito.',
    'page.about.newIntro3': 'Acredito que design não é só estética. É estrutura, direção e intenção. É organizar ideias para que a marca comunique exatamente o que precisa comunicar, do jeito certo. Sou apaixonada por unir organização e estética (sim, eu amo um processo bem estruturado 😌).',
    'page.about.newIntro4': 'E além do design, estou estudando programação e explorando novas formas de criar experiências na web. Vamos trabalhar juntos?',
    'page.about.photoPlaceholder': 'sua foto aqui',
    'page.about.quickFactsTitle': 'quick facts',
    'page.about.fact1': 'Recife, Brasil',
    'page.about.fact2': 'apaixonada por organização',
    'page.about.fact3': 'ama cozinhar para a família',
    'page.about.fact4': 'fã de coisas fofas',
    'page.about.educationTitle': 'educação',
    'page.about.educationIntro': 'Espaço para adicionar onde você estudou, cursos, formações e certificações.',
    'page.about.educationBlock1Title': 'formação',
    'page.about.educationBlock1Text': 'Exemplo: Graduação em Design Gráfico — Nome da Instituição (ano).',
    'page.about.educationBlock2Title': 'cursos',
    'page.about.educationBlock2Text': 'Exemplo: Curso de Branding Estratégico, UX/UI, Tipografia, etc.',
    'page.about.educationBlock3Title': 'certificações',
    'page.about.educationBlock3Text': 'Exemplo: Certificado em ferramentas, metodologias ou especializações.',
    'page.about.educationNewIntro': 'Minha formação, idiomas e principais ferramentas de trabalho.',
    'page.about.educationNewBlock1Title': 'formação',
    'page.about.educationNewBlock1Text': 'Bacharelado em Design Gráfico — UNIFG (2022 - 2024).',
    'page.about.educationNewBlock2Title': 'idiomas',
    'page.about.educationNewBlock2Text': 'Português (nativo) e Inglês (avançado).',
    'page.about.educationNewBlock3Title': 'ferramentas',
    'page.about.educationNewBlock3Text': 'Illustrator (avançado), Canva (avançado) e Photoshop (intermediário).',
    'page.about.experienceTitle': 'experiência',
    'page.about.experienceIntro': 'Espaço para adicionar onde você trabalhou, funções e principais responsabilidades.',
    'page.about.experienceBlock1Title': 'cargo e empresa',
    'page.about.experienceBlock1Text': 'Exemplo: Designer Gráfica — Nome da Empresa (ano inicial - ano final).',
    'page.about.experienceBlock2Title': 'atividades',
    'page.about.experienceBlock2Text': 'Exemplo: criação de identidades visuais, materiais para redes sociais e direção de arte.',
    'page.about.experienceBlock3Title': 'resultados',
    'page.about.experienceBlock3Text': 'Exemplo: melhorias de posicionamento de marca, consistência visual e crescimento de presença digital.',
    'page.about.experienceNewIntro': 'Experiências que fortaleceram minha visão estratégica e criativa em design e marketing.',
    'page.about.experienceNewBlock1Title': '2022 - 2023 | freelance designer',
    'page.about.experienceNewBlock1Text': 'Atuei de forma independente oferecendo serviços de branding para pequenos empreendedores.',
    'page.about.experienceNewBlock2Title': '2023 - 2025 | designer / marketing',
    'page.about.experienceNewBlock2Text': 'LAI Architecture: criei marcas e identidades visuais, além de materiais promocionais e posts para redes sociais.',
    'page.about.experienceNewBlock3Title': '2025 | marketing assistant',
    'page.about.experienceNewBlock3Text': 'Costa Imobiliária: produzi conteúdo para redes sociais, gravei stories e desenvolvi posts e materiais gráficos.',
    'home.speechHint': 'você pode fechar esta aba no x',
    'page.portfolio.title': 'portfólio',
    'page.portfolio.text': 'Galeria com identidades visuais. Passe o mouse sobre os projetos para destacar cada case.',
    'page.services.title': 'serviços',
    'page.services.text': 'Seção para explicar seus serviços: identidade visual, design de site, materiais de marca, consultoria e direção de arte.',
    'page.process.title': 'processo',
    'page.process.text': 'Área para mostrar seu fluxo: briefing, pesquisa, conceito, criação, refinamento e entrega. Isso ajuda clientes a entenderem como você conduz cada projeto.',
    'page.shop.title': 'loja',
    'page.shop.text': 'Página para vender templates, packs, artes, impressos ou produtos digitais. Você pode conectar com plataforma de pagamento depois.',
    'page.contact.title': 'contato',
    'page.contact.text': 'Coloque aqui seu e-mail profissional, WhatsApp e redes sociais para receber novos projetos e parcerias.'
  },
  en: {
    'nav.about': 'about me',
    'nav.portfolio': 'portfolio',
    'nav.services': 'services',
    'nav.process': 'process',
    'nav.shop': 'shop',
    'nav.contact': 'contact',
    'common.backHome': 'back to home',
    'page.about.title': 'about me',
    'page.about.intro1': 'Hi, I am Fla. I am a graphic designer focused on creating strategic visual identities for brands that want to grow with clarity and personality.',
    'page.about.intro2': 'I love combining organization and aesthetics. To me, design is not only beautiful, it is structure, direction, and intention.',
    'page.about.intro3': 'Beyond design, I am studying programming and exploring new ways to create on the web.',
    'page.about.newIntro1': 'Hi, I am Fla! :)',
    'page.about.newIntro2': 'I am a graphic designer and I create strategic visual identities for brands that want to grow with clarity, personality, and purpose.',
    'page.about.newIntro3': 'I believe design is not just aesthetics. It is structure, direction, and intention. It is about organizing ideas so the brand communicates exactly what it needs, in the right way. I am passionate about combining organization and aesthetics (yes, I love a well-structured process 😌).',
    'page.about.newIntro4': 'And beyond design, I am studying programming and exploring new ways to create web experiences. Shall we work together?',
    'page.about.photoPlaceholder': 'your photo here',
    'page.about.quickFactsTitle': 'quick facts',
    'page.about.fact1': 'Recife, Brazil',
    'page.about.fact2': 'passionate about organization',
    'page.about.fact3': 'loves cooking for family',
    'page.about.fact4': 'fan of cute things',
    'page.about.educationTitle': 'education',
    'page.about.educationIntro': 'Space to add where you studied, courses, programs, and certifications.',
    'page.about.educationBlock1Title': 'education',
    'page.about.educationBlock1Text': 'Example: Bachelor in Graphic Design — Institution Name (year).',
    'page.about.educationBlock2Title': 'courses',
    'page.about.educationBlock2Text': 'Example: Strategic Branding, UX/UI, Typography, etc.',
    'page.about.educationBlock3Title': 'certifications',
    'page.about.educationBlock3Text': 'Example: Certifications in tools, methods, or specializations.',
    'page.about.educationNewIntro': 'My education, languages, and main work tools.',
    'page.about.educationNewBlock1Title': 'education',
    'page.about.educationNewBlock1Text': 'Bachelor in Graphic Design — UNIFG (2022 - 2024).',
    'page.about.educationNewBlock2Title': 'languages',
    'page.about.educationNewBlock2Text': 'Portuguese (native) and English (advanced).',
    'page.about.educationNewBlock3Title': 'tools',
    'page.about.educationNewBlock3Text': 'Illustrator (advanced), Canva (advanced), and Photoshop (intermediate).',
    'page.about.experienceTitle': 'experience',
    'page.about.experienceIntro': 'Space to add where you worked, roles, and key responsibilities.',
    'page.about.experienceBlock1Title': 'role and company',
    'page.about.experienceBlock1Text': 'Example: Graphic Designer — Company Name (start year - end year).',
    'page.about.experienceBlock2Title': 'activities',
    'page.about.experienceBlock2Text': 'Example: visual identity creation, social media assets, and art direction.',
    'page.about.experienceBlock3Title': 'results',
    'page.about.experienceBlock3Text': 'Example: improved brand positioning, visual consistency, and growth in digital presence.',
    'page.about.experienceNewIntro': 'Experiences that strengthened my strategic and creative vision in design and marketing.',
    'page.about.experienceNewBlock1Title': '2022 - 2023 | freelance designer',
    'page.about.experienceNewBlock1Text': 'I worked independently, providing branding services for small entrepreneurs.',
    'page.about.experienceNewBlock2Title': '2023 - 2025 | designer / marketing',
    'page.about.experienceNewBlock2Text': 'LAI Architecture: I created brands and visual identities, as well as promotional materials and social media posts.',
    'page.about.experienceNewBlock3Title': '2025 | marketing assistant',
    'page.about.experienceNewBlock3Text': 'Costa Real Estate: I produced social media content, recorded stories, and designed posts and graphic materials.',
    'home.speechHint': 'you can close this bubble on x',
    'page.portfolio.title': 'portfolio',
    'page.portfolio.text': 'Visual identity gallery. Hover over the projects to highlight each case.',
    'page.services.title': 'services',
    'page.services.text': 'Section to explain your services: visual identity, website design, brand materials, consulting, and art direction.',
    'page.process.title': 'process',
    'page.process.text': 'Area to show your workflow: briefing, research, concept, creation, refinement, and delivery. This helps clients understand how each project is developed.',
    'page.shop.title': 'shop',
    'page.shop.text': 'Page to sell templates, packs, artwork, prints, or digital products. You can connect to a payment platform later.',
    'page.contact.title': 'contact',
    'page.contact.text': 'Place your professional email, WhatsApp, and social links here to receive new projects and partnerships.'
  }
};

const pierreBox = document.getElementById('pierreBox');
const pierreCharacter = document.getElementById('pierreCharacter');
const pierreSpeech = document.getElementById('pierreSpeech');
const pierreSpeechText = document.getElementById('pierreSpeechText');
const pierreSpeechClose = document.getElementById('pierreSpeechClose');

const pierreMessages = {
  pt: [
    'Olá! Meu nome é Pierre. Clique outras vezes e eu posso te dar algumas dicas!',
    'Clique em portfólio para ver todos os meus projetos! :)',
    'Clique em PT - EN para mudar o idioma do website!',
    ':P',
    'Eu sou o mascote oficial da flamakesdesign',
    'Eu amo sorvete! :D',
    'Fico feliz de você ter clicado nesse site <3'
  ],
  en: [
    'Hi! My name is Pierre. Click again and I can give you more tips!',
    'Click on portfolio to see all my projects! :)',
    'Click PT - EN to change the website language!',
    ':P',
    'I am the official flamakesdesign mascot',
    'I love ice cream! :D',
    'I am happy you clicked on this website <3'
  ]
};

let pierreMessageIndex = 0;
let pierreCurrentMessageIndex = -1;
let pierreHideTimeout;

function applyLang(lang) {
  const selected = i18n[lang] ? lang : 'pt';
  currentLang = selected;
  document.documentElement.lang = selected === 'en' ? 'en' : 'pt-BR';
  const langSwitch = document.querySelector('.lang-switch');
  if (langSwitch) {
    langSwitch.setAttribute('data-active-lang', selected);
  }

  langButtons.forEach((btn) => {
    const isActive = btn.dataset.lang === selected;
    btn.classList.toggle('is-active', isActive);
    btn.setAttribute('aria-pressed', String(isActive));
  });

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    const text = i18n[selected][key];
    if (text) el.textContent = text;
  });

  const body = document.body;
  if (body) {
    const title = selected === 'en' ? body.dataset.titleEn : body.dataset.titlePt;
    if (title) document.title = title;
  }

  if (pierreSpeech?.classList.contains('is-visible') && pierreSpeechText && pierreCurrentMessageIndex >= 0) {
    pierreSpeechText.textContent = pierreMessages[selected][pierreCurrentMessageIndex];
  }
}

if (langButtons.length) {
  const savedLang = localStorage.getItem(langKey) || 'pt';
  applyLang(savedLang);

  langButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const selectedLang = btn.dataset.lang || 'pt';
      localStorage.setItem(langKey, selectedLang);
      applyLang(selectedLang);
    });
  });
}

function showPierreMessage() {
  if (!pierreBox || !pierreCharacter || !pierreSpeech || !pierreSpeechText) return;

  const messages = pierreMessages[currentLang] || pierreMessages.pt;
  pierreCurrentMessageIndex = pierreMessageIndex;
  pierreSpeechText.textContent = messages[pierreCurrentMessageIndex];
  pierreSpeech.classList.add('is-visible');
  pierreBox.classList.remove('is-shaking');
  void pierreBox.offsetWidth;
  pierreBox.classList.add('is-shaking');

  pierreMessageIndex = (pierreMessageIndex + 1) % messages.length;
  clearTimeout(pierreHideTimeout);
  pierreHideTimeout = setTimeout(() => {
    pierreSpeech.classList.remove('is-visible');
    pierreBox.classList.remove('is-shaking');
    pierreCurrentMessageIndex = -1;
  }, 4800);
}

if (pierreCharacter) {
  pierreCharacter.addEventListener('click', showPierreMessage);
  pierreCharacter.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      showPierreMessage();
    }
  });
}

if (pierreSpeechClose) {
  pierreSpeechClose.addEventListener('click', () => {
    clearTimeout(pierreHideTimeout);
    pierreSpeech?.classList.remove('is-visible');
    pierreBox?.classList.remove('is-shaking');
    pierreCurrentMessageIndex = -1;
  });
}

const portfolioHeadBox = document.getElementById('portfolioHeadBox');
const portfolioHeadClose = document.getElementById('portfolioHeadClose');

if (portfolioHeadBox && portfolioHeadClose) {
  portfolioHeadClose.addEventListener('click', () => {
    portfolioHeadBox.style.display = 'none';
  });
}

const servicesDeck = document.getElementById('servicesDeck');
const servicePrev = document.getElementById('servicePrev');
const serviceNext = document.getElementById('serviceNext');

if (servicesDeck && servicePrev && serviceNext) {
  const serviceCards = Array.from(servicesDeck.querySelectorAll('[data-service-card]'));
  let serviceIndex = 0;

  const renderServiceDeck = () => {
    if (!serviceCards.length) return;
    const lastIndex = serviceCards.length - 1;
    const prevIndex = serviceIndex === 0 ? lastIndex : serviceIndex - 1;
    const nextIndex = serviceIndex === lastIndex ? 0 : serviceIndex + 1;

    serviceCards.forEach((card, index) => {
      card.classList.remove('is-active', 'is-prev', 'is-next', 'is-hidden');
      if (index === serviceIndex) card.classList.add('is-active');
      else if (index === prevIndex) card.classList.add('is-prev');
      else if (index === nextIndex) card.classList.add('is-next');
      else card.classList.add('is-hidden');
    });
  };

  const goPrev = () => {
    serviceIndex = serviceIndex === 0 ? serviceCards.length - 1 : serviceIndex - 1;
    renderServiceDeck();
  };

  const goNext = () => {
    serviceIndex = serviceIndex === serviceCards.length - 1 ? 0 : serviceIndex + 1;
    renderServiceDeck();
  };

  servicePrev.addEventListener('click', goPrev);
  serviceNext.addEventListener('click', goNext);

  servicesDeck.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') goPrev();
    if (event.key === 'ArrowRight') goNext();
  });

  renderServiceDeck();
}
