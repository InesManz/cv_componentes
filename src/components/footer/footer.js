import "./footer.css";

export function createFooter() {
  const footer = document.createElement("footer");
  footer.id = "contacto";
  footer.className = "footer";

  footer.innerHTML = `
    <div class="footer-container">
      <div class="footer-column">
        <h3>Contacto</h3>
        <p>682 53 67 01</p>
        <p><a href="mailto:info@inesdesign.com">info@inesmanzanodesign.com</a></p>
        <p>Calle Rejas de la Virgen, 25, 18005 Granada</p>
      </div>

      <div class="footer-column">
        <h3>Enlaces de interés</h3>
        <a href="#">Aviso Legal</a>
        <a href="#">Política de Privacidad</a>
        <a href="#">Política de Cookies</a>
      </div>

      <div class="footer-column">
        <h3>Síguenos en:</h3>
        <div class="footer-social">
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-google-plus-g"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-linkedin-in"></i></a>
          <a href="#"><i class="fab fa-pinterest"></i></a>
          <a href="#"><i class="fab fa-youtube"></i></a>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <p>Ines Manzano Design - Todos los derechos reservados</p>
    </div>
  `;

  return footer;
}
