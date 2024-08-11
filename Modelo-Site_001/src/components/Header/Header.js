import React, { useEffect, useState } from 'react';
import './Header.css';

function Header() {
  const [activeSection, setActiveSection] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Verificar qual seção está visível na janela de visualização
      const homeSection = document.getElementById('home');
      const aboutSection = document.getElementById('about');
      const servicesSection = document.getElementById('services');
      const contactSection = document.getElementById('contact');

      if (homeSection && scrollPosition < aboutSection.offsetTop) {
        setActiveSection('#home');
      } else if (aboutSection && scrollPosition >= aboutSection.offsetTop && scrollPosition < servicesSection.offsetTop) {
        setActiveSection('#about');
      } else if (servicesSection && scrollPosition >= servicesSection.offsetTop && scrollPosition < contactSection.offsetTop) {
        setActiveSection('#services');
      } else if (contactSection && scrollPosition >= contactSection.offsetTop) {
        setActiveSection('#contact');
      }
    };

    // Adicionar evento de scroll
    window.addEventListener('scroll', handleScroll);
    
    // Remover evento de scroll ao desmontar o componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="header">
      <div className="containerheader">
        <div className="bowyer-tech">NomeEmpresa</div>
        <nav className="nav">
          <ul className="nav-list">
            <li className={`nav-item ${activeSection === '#home' ? 'active' : ''}`}><a href="#home">Página Inicial</a></li>
            <li className={`nav-item ${activeSection === '#about' ? 'active' : ''}`}><a href="#about">Sobre</a></li>
            <li className={`nav-item ${activeSection === '#services' ? 'active' : ''}`}><a href="#services">Serviços</a></li>
            <li className={`nav-item ${activeSection === '#contact' ? 'active' : ''}`}><a href="#contact">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
