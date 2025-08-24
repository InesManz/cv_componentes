export const projects = [
    {
       title: "Reforma integral de vivienda Madrid",
       description:
         "Proyecto completo de reforma y diseño interior en una vivienda antigua. Se diseñaron los espacios desde cero, se realizaron planos técnicos y se entregó al cliente una visualización 3D hiperrealista del resultado final.",      
       fronPage: "/madrid/1.png",
       imagenes: [ "/madrid/1.png",
           "/madrid/24.png",
           "/madrid/15.png",
           "/madrid/18.png",
         ]
     },
     {
       title: "Vivienda vacacional Marbella",
       description:
         "Proyecto de vivienda vacacional donde se necesitaba una ampliación y renovación total de la vivienda. Para llevarla a cabo tuve que realizar planos técnicos y visualizaciones realistas con una presentación para que el cliente tuviera claro el proyecto.",      
       fronPage: "/michell/salona.png",
       imagenes: ["/michell/salona.png",
           "/michell/cocina.png",
           "/michell/dormitorio-a.2.png",
           "/michell/comedor.jpg",
           "/michell/salonc.png",
         ]
     },
     {
       title: "Diseño de vivienda modular en Sierra Nevada",
       description:
         "Colaboración en el diseño de una vivienda modular. Participé en la distribución interior, elección de materiales y renderizado del resultado final para la presentación a inversores.",
       fronPage: "/Sierranevada/vista-1a.png",  
       imagenes: ["/Sierranevada/vista-1a.png", 
           "/Sierranevada/vista2a.png",
           "/Sierranevada/vista2b.png",
           "/Sierranevada/vista3a.png",
           "/Sierranevada/vista4.png"
          ]       
     },
      {
       title: "Diseño de cocina en San Pedro",
       description:
         "Diseño para integrar la cocina en la vivienda con ampliación y estudio de cómo hacerla más habitable.",
       fronPage: "/marbellaabodado/cocinamaderav2.jpg",  
       imagenes: ["/marbellaabodado/cocinamaderav2.jpg",
           "/marbellaabodado/1cocinafinal.jpg",
           "/marbellaabodado/2cocinafinal.jpg",
           "/marbellaabodado/vistasaloncocinamadera.jpg"
         ]         
     },
       {
       title: "Reforma integral de vivienda",
       description:
         "Hemos remodelado la planta baja de la vivienda creando un espacio multifuncional donde el objetivo era fusionar interior y exterior logrando una continuidad visual y potenciando las fantásticas vistas del entorno.",      
       fronPage: "/michell/contraste-sof.png",  
       imagenes: ["/michell/contraste-sof.png",
           "/michell/dormitorioprincipal.png",
           "/michell/salonb.png",
           "/michell/bano-dormitorio-d.jpg"
         ]
     },
];

export function ProjectSection() {
  const section = document.createElement("section");
  section.id = "trabajos";
  section.className = "trabajos-section";

  const title = document.createElement("h2");
  title.textContent = "Trabajos";

  const subtitle = document.createElement("p");
  subtitle.textContent = "Aquí encontrarás una selección de mis proyectos.";

  const grid = document.createElement("div");
  grid.className = "trabajos-grid";

  projects.forEach((proyecto, index) => {
    const card = document.createElement("div");
    card.className = "trabajo-card";
    card.style.cursor = "pointer";

    const img = document.createElement("img");
    img.src = proyecto.fronPage;
    img.alt = proyecto.title;

    const h3 = document.createElement("h3");
    h3.textContent = proyecto.title;

    const p = document.createElement("p");
    p.textContent = proyecto.description;

    card.appendChild(img);
    card.appendChild(h3);
    card.appendChild(p);
        
    card.addEventListener('click', () => {
      openProjectDetail(proyecto, index);
    });
    
    grid.appendChild(card);
  });

  section.appendChild(title);
  section.appendChild(subtitle);
  section.appendChild(grid);

  return section;
}

// crear la pagina de los trabajos
function openProjectDetail(proyecto, index) {
 
  const detailPage = createProjectDetailPage(proyecto, index);
  
  
  const app = document.querySelector('#app');
  const mainContent = app.innerHTML;
    
  app.setAttribute('data-main-content', mainContent);
    
  app.innerHTML = '';
  app.appendChild(detailPage);  
  
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function createProjectDetailPage(proyecto, index) {
  const container = document.createElement('div');
  container.className = 'project-detail-container';
  
  // Header 
  const header = document.createElement('div');
  header.className = 'project-detail-header';
  
  const backButton = document.createElement('button');
  backButton.textContent = '← Volver';
  backButton.className = 'back-button';
  backButton.addEventListener('click', () => {
    const app = document.querySelector('#app');
    const mainContent = app.getAttribute('data-main-content');
    app.innerHTML = mainContent;    
    window.scrollTo({ top: 0, behavior: 'smooth' });    
    window.location.reload();
  });
  
  const title = document.createElement('h1');
  title.textContent = proyecto.title;
  
  header.appendChild(backButton);
  header.appendChild(title);
  
  // Descripción del proyecto
  const description = document.createElement('div');
  description.className = 'project-description';
  
  const descText = document.createElement('p');
  descText.textContent = proyecto.description;
  
  description.appendChild(descText);
  
  // Galería de imágenes
  const gallery = document.createElement('div');
  gallery.className = 'project-gallery';
  
  proyecto.imagenes.forEach((imagen, imgIndex) => {
    const imgContainer = document.createElement('div');
    imgContainer.className = 'gallery-item';
    
    const img = document.createElement('img');
    img.src = imagen;
    img.alt = `${proyecto.title} - Imagen ${imgIndex + 1}`;
    img.loading = 'lazy';
    
    //  clic para ampliar imagen
    img.addEventListener('click', () => {
      openImageModal(imagen, proyecto.title);
    });
    
    imgContainer.appendChild(img);
    gallery.appendChild(imgContainer);
  });
  
  container.appendChild(header);
  container.appendChild(description);
  container.appendChild(gallery);
  
  return container;
}

// para abrir la imagen en grande
function openImageModal(imageSrc, title) {
  const modal = document.createElement('div');
  modal.className = 'image-modal';
  
  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content';
  
  const closeButton = document.createElement('span');
  closeButton.className = 'close-modal';
  closeButton.innerHTML = '&times;';
  closeButton.addEventListener('click', () => {
    document.body.removeChild(modal);
  });
  
  const img = document.createElement('img');
  img.src = imageSrc;
  img.alt = title;
  
  const caption = document.createElement('p');
  caption.className = 'modal-caption';
  caption.textContent = title;
  
  modalContent.appendChild(closeButton);
  modalContent.appendChild(img);
  modalContent.appendChild(caption);
  modal.appendChild(modalContent);
  
  // Cerrar la imagen
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      document.body.removeChild(modal);
    }
  });
  
  document.body.appendChild(modal);
}