import './header.css';

export function createHeader(data) {
  const header = document.createElement('header');
  header.className = 'header';

  // Botón tema oscuro
  const themeBtn = document.createElement('button');
  themeBtn.className = 'theme-toggle';
  themeBtn.type = 'button';
  themeBtn.setAttribute('aria-label', 'Cambiar modo claro/oscuro');

  // Logo
  const logoImg = document.createElement('img');
  logoImg.alt = data.name + ' logo';
  logoImg.className = 'logo';

  function setLogo() {
    const isDark = document.documentElement.classList.contains('dark');
    logoImg.src = isDark ? data.logo.dark : data.logo.light;
  }

  //que se cargue el tema q guardo
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark');
  } else if (savedTheme === 'light') {
    document.documentElement.classList.remove('dark');
  }

  function updateThemeIcon() {
    const isDark = document.documentElement.classList.contains('dark');
    themeBtn.innerHTML = '';
    const img = document.createElement('img');
    img.src = isDark ? '/icons/modo-claro.png' : '/icons/modo-oscuro.png';
    img.alt = isDark ? 'Modo claro' : 'Modo oscuro';
    img.className = 'theme-icon';
    themeBtn.appendChild(img);
  }

  function toggleTheme() {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateThemeIcon();
    setLogo();
  }

  themeBtn.addEventListener('click', toggleTheme);

  //navegacion
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');
  ul.className = 'nav-list';

  const secciones = [
    { texto: 'Inicio', href: '#' },
    { texto: 'Servicios', href: '#servicios' },
    { texto: 'Sobre mí', href: '#sobremi' },
    { texto: 'Trabajos', href: '#trabajos' },
    { texto: 'Contacto', href: '#contacto' },
  ];

  secciones.forEach(sec => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = sec.texto;
    a.href = sec.href;    
    
    // Scroll suave
    a.addEventListener('click', (e) => {
      if (a.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const targetId = a.getAttribute('href').substring(1);
        if (targetId) {
          const section = document.getElementById(targetId);
          if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
          } else if (targetId === '') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }
      }
    });

    li.appendChild(a);
    ul.appendChild(li);
  });
  

  nav.appendChild(ul);

  
  header.appendChild(logoImg);
  header.appendChild(nav);
  header.appendChild(themeBtn);

  
  setLogo();
  updateThemeIcon();

  
  window.matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', setLogo);

  return header;
}
