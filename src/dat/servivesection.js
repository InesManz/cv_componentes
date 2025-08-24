
import '../components/cservice/service.css';

export const services = [
  {
    titulo: 'Asesoramiento in-situ',
    descripcion: 'Consúltanos tus dudas, visitamos tu Negocio o Vivienda',
    icono: '/icons/asesoramiento.svg'
  },
  {
    titulo: 'Personal Styling',
    descripcion: 'Sin tiempo, te ayudamos a redecorar y acompañamos en la selección',
    icono: '/icons/persona-styling.svg'
  },
  {
    titulo: 'Decoración de Eventos',
    descripcion: 'Sorprende en cumpleaños, cenas o pedidas de mano personalizadas',
    icono: '/icons/eventos.svg'
  },
  {
    titulo: 'Proyecto de Interiorismo',
    descripcion: 'Elaboramos una propuesta de diseño para tu vivienda o negocio',
    icono: '/icons/decoracion-interiorismo.svg'
  },
  {
    titulo: 'Dirección de Interiorismo',
    descripcion: 'Ready & Go. Diseño, gestión de pedidos & Dirección de Proyecto',
    icono: '/icons/interiorismo.svg'
  },
  {
    titulo: 'Colaboraciones',
    descripcion: 'Juntos podemos conseguir grandes proyectos',
    icono: '/icons/colaboraciones.svg'
  }
];


export function ServiceSection() {
  const section = document.createElement('section');
  section.id = 'servicios';
  section.className = 'servicesSection';

 
  const headerDiv = document.createElement('div');
  headerDiv.className = 'services-header';

  const heading = document.createElement('h2');
  heading.textContent = 'Servicios';

  const subheading = document.createElement('p');
  subheading.textContent = 'Ofrecemos soluciones y asesoramiento para potenciar tu vivienda o negocio';

  headerDiv.appendChild(heading);
  headerDiv.appendChild(subheading);


  const gridDiv = document.createElement('div');
  gridDiv.className = 'services-grid';

  services.forEach(service => {
    const serviceCard = document.createElement('div');
    serviceCard.className = 'service-card';

    const serviceIcon = document.createElement('img');
    serviceIcon.src = service.icono;
    serviceIcon.alt = `Icono de ${service.titulo}`;
    serviceIcon.className = 'service-icon';

    const serviceTitle = document.createElement('h3');
    serviceTitle.textContent = service.titulo;

    const serviceDescription = document.createElement('p');
    serviceDescription.textContent = service.descripcion;

    const readMoreBtn = document.createElement('button');
    readMoreBtn.textContent = 'LEER MÁS';
    readMoreBtn.className = 'btn-leer-mas';

    serviceCard.appendChild(serviceIcon);
    serviceCard.appendChild(serviceTitle);
    serviceCard.appendChild(serviceDescription);
    serviceCard.appendChild(readMoreBtn);

    gridDiv.appendChild(serviceCard);
  });

  section.appendChild(headerDiv);
  section.appendChild(gridDiv);

  return section;
}
