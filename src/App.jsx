import Navbar from "./components/Navbar"
import "./styles/App.css"
import { FaWhatsapp, FaInstagram } from "react-icons/fa"
import ServiceCard from "./components/ServiceCard"
import relajante from "./assets/images/relajante.jpg"
import reductivo from "./assets/images/reductivo.jpg"
import laser from "./assets/images/laser.jpg"
import postoperatorio from "./assets/images/postoperatorio.jpg"
import gallery1 from "./assets/images/gallery1.jpg"
import gallery2 from "./assets/images/gallery2.jpg"
import gallery3 from "./assets/images/gallery3.jpg"
import gallery4 from "./assets/images/gallery4.jpg"

function App() {
  return (
    <div className="app">

     <Navbar />

      <header className="hero">

        <h1>Siempre Bella</h1>

        <p className="slogan">
          Tu Oasis de Paz
        </p>

        <p className="description">
          Masajes relajantes, descontracturantes, reductivos,
post operatorios y depilación láser para tu bienestar.
        </p>

        <a
  href="https://wa.me/56976447554?text=Hola,%20quiero%20reservar%20una%20hora"
  target="_blank"
  className="btn"
>
  Reserva tu Hora
</a>

      </header>
<section id="services" className="services">

  <h2>Nuestros Servicios</h2>

  
<div className="cards">


<ServiceCard
  title="Masajes Relajantes y Descontracturantes"
  description="Tratamientos enfocados en aliviar tensiones, reducir el estrés y brindar bienestar físico y mental."
  image={relajante}
/>

<ServiceCard
  title="Masajes Reductivos"
  description="Tratamientos orientados a modelar, tonificar y ayudar a mejorar la circulación."
  image={reductivo}
/>

<ServiceCard
  title="Masajes Post Operatorios"
  description="Atención especializada para apoyar procesos de recuperación y drenaje post quirúrgico."
  image={postoperatorio}
/>

<ServiceCard
  title="Depilación Láser"
  description="Tecnología enfocada en una depilación más duradera, cómoda y efectiva."
  image={laser}
/>


</div>
</section>

<section id="about" className="about">

  <div className="about-content">

    <h2>Sobre Nosotros</h2>

    <p>
      En Siempre Bella creemos que el bienestar físico
      y emocional van de la mano. Nuestro objetivo es
      brindarte un espacio de tranquilidad, relajación
      y cuidado personal en cada sesión.
    </p>

  </div>

</section>

<section className="testimonials">

  <h2>Lo que dicen nuestras clientas</h2>

  <div className="testimonial-grid">

    <div className="testimonial-card">
      <p>
        “Una experiencia maravillosa. Salí totalmente
        relajada y renovada.”
      </p>

      <h4>- Camila R.</h4>
    </div>

    <div className="testimonial-card">
      <p>
        “Muy profesional y acogedor. Los masajes
        reductivos realmente me ayudaron muchísimo.”
      </p>

      <h4>- Daniela M.</h4>
    </div>

    <div className="testimonial-card">
      <p>
        “El lugar transmite mucha paz. Totalmente
        recomendado.”
      </p>

      <h4>- Francisca T.</h4>
    </div>

  </div>

</section>

<section className="gallery">

  <h2>Experiencias Siempre Bella</h2>

  <div className="gallery-grid">

    <img src={gallery1} alt="" />
    <img src={gallery2} alt="" />
    <img src={gallery3} alt="" />
    <img src={gallery4} alt="" />

  </div>

</section>

<section className="banner">

  <div className="banner-content">

    <h2>Regálate un momento para ti</h2>

    <p>
      Desconéctate del estrés y encuentra equilibrio
      en un espacio pensado para tu bienestar.
    </p>

    <a
      href="https://wa.me/56976447554"
      target="_blank"
      className="banner-btn"
    >
      Agenda tu sesión
    </a>

  </div>

</section>

<section id="contact" className="contact">
  <h2>Reserva tu hora</h2>

  <p>
    Escríbenos por WhatsApp y agenda tu sesión de masajes, tratamientos reductivos,
post operatorios o depilación láser.
  </p>

  <a
    href="https://wa.me/56976447554?text=Hola,%20quiero%20reservar%20una%20hora%20en%20Siempre%20Bella"
    target="_blank"
    className="contact-btn"
  >
    Reservar por WhatsApp
  </a>
</section>

<footer className="footer">

  <div className="socials">

  <a
  href="https://instagram.com/siemprebellaoasis"
  target="_blank"
>
  <FaInstagram />
</a>

</div>

  <h3>Siempre Bella</h3>

  <p>Tu Oasis de Paz</p>

  <p>
    Atención personalizada en masajes, tratamientos corporales
y depilación láser
  </p>

  <a
    href="https://wa.me/56976447554"
    target="_blank"
    className="footer-btn"
  >
    <FaWhatsapp />
{" "}Contáctanos por WhatsApp
  </a>

  <p className="copyright">
    © 2026 Siempre Bella. Todos los derechos reservados.
  </p>

</footer>

    </div>
  )
}



export default App