import { useState } from "react"
import logo from "../assets/logo.png"

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (

    <nav className="navbar">

      <img src={logo} alt="Siempre Bella" className="nav-logo" />

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <a href="#">Inicio</a>
        <a href="#services">Servicios</a>
        <a href="#about">Nosotros</a>
        <a href="#contact">Contacto</a>
      </div>

    </nav>

  )
}

export default Navbar