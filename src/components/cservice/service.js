import { services } from '../../dat/serviceSection.js';
import './service.css';

export function crearSeccionServicios() {
  const section = document.createElement('section');
  section.id = 'servicios'; 
  section.className = 'servicesSection'; 

  const header = document.createElement('div');
  header.className = 'services-header'; 

  const titulo = document.createElement('h2');
  titulo.textContent = 'Servicios';

  const subtitulo = document.createElement('p');
  subtitulo.textContent = 'Ofrecemos soluciones y asesoramiento para potenciar tu vivienda o negocio';

  header.append(titulo, subtitulo);

  const grid = document.createElement('div');
  grid.className = 'services-grid'; 

  services.forEach(servicio => {
    const card = document.createElement('div');
    card.className = 'service-card'; 

    const icono = document.createElement('img');
    icono.className = 'service-icon';
    icono.src = servicio.icono;
    icono.alt = servicio.titulo;    

    const titulo = document.createElement('h3');
    titulo.textContent = servicio.titulo;

    const descripcion = document.createElement('p');
    descripcion.textContent = servicio.descripcion;

    const boton = document.createElement('button');
    boton.textContent = 'LEER MÁS';
    boton.className = 'btn-leer-mas';

    card.append(icono, titulo, descripcion, boton);
    grid.appendChild(card);
  });

  section.append(header, grid); 
  return section;
}
