import { createHeader } from './components/header/header.js';
import { createFooter } from './components/footer/footer.js';
import data from './dat/cvdata.js';
import { ServiceSection } from './dat/servivesection.js';
import { ProjectSection } from './dat/project.js';

export function App() {
  const app = document.createElement('div');

  // Header
  app.appendChild(createHeader(data));

  // Portada
  const portada = document.createElement('img');
  portada.src = '/viviendatorrejon-011.jpg';
  portada.alt = 'Imagen de portada';
  portada.className = 'portada-img';
  app.appendChild(portada);

  // Sobre mí
  const sobreMiSection = document.createElement('section');
  sobreMiSection.id = 'sobremi';
  sobreMiSection.className = 'sobre-mi-section';

  const sobreMiContainer = document.createElement('div');
  sobreMiContainer.className = 'sobre-mi-container';

  const sobreMiTextoContainer = document.createElement('div');
  sobreMiTextoContainer.className = 'sobre-mi-texto';

  const sobreMiTitulo = document.createElement('h2');
  sobreMiTitulo.textContent = 'Soy Inés Manzano';

  const sobreMiTexto = document.createElement('p');
  sobreMiTexto.textContent = data.aboutMe;

  sobreMiTextoContainer.appendChild(sobreMiTitulo);
  sobreMiTextoContainer.appendChild(sobreMiTexto);

  const sobreMiImg = document.createElement('img');
  sobreMiImg.src = '/michell/dormitorio-a.2.png'; 
  sobreMiImg.alt = 'Imagen de un 3d';
  sobreMiImg.className = 'sobre-mi-img';

  sobreMiContainer.appendChild(sobreMiTextoContainer);
  sobreMiContainer.appendChild(sobreMiImg);

  sobreMiSection.appendChild(sobreMiContainer);
  app.appendChild(sobreMiSection);

  // Servicios
  app.appendChild(ServiceSection());

  // Proyectos
  app.appendChild(ProjectSection());

  // Footer
  app.appendChild(createFooter());

  return app;
}
