import React from 'react';
import "/projetos/mary/src/components/styles/footer.css";


export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Sobre</h4>
          <p>Serviço de Consultoria </p>
        </div>
        <div className="footer-section">
          <h4>Links úteis</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/contatos">Contatos</a></li>
            <li><a href="/servicos">Serviços</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contato</h4>
          <p>wagnerleitaodeoliveira@hotmail.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Meu site. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
