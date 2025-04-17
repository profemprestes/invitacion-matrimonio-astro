import React, { useState } from 'react';
import '../styles/Sobremimodal.css';

const Sobremimodal = ({ buttonText, buttonClassName }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)} className={buttonClassName}>
        {buttonText}
      </button>

      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button onClick={() => setIsOpen(false)} className="close-button">
              X
            </button>
            <div className="modal-body">
              <h2 className="modal-title">Datos Sobre Mí</h2>
              <div className="modal-section">
                <h3 className="section-title">Mis Medidas</h3>
                <ul className="section-list">
                  <li>Tamaño: 52 cm</li>
                  <li>Peso: 3.780 kg</li>
                  <li>Nacimiento: 10/05/2024, 09:30 am</li>
                </ul>
              </div>
              <div className="modal-section">
                <h3 className="section-title">Lo Que Me Encanta</h3>
                <ul className="section-list">
                  <li>Pelotitas</li>
                  <li>Cuentos</li>
                  <li>Música</li>
                  <li>Juguetes</li>
                </ul>
              </div>
              <div className="modal-section">
                <h3 className="section-title">Mis Comidas Favoritas</h3>
                <ul className="section-list">
                  <li>Puré de calabaza</li>
                  <li>Banana</li>
                  <li>Yogur</li>
                  <li>Galletitas</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sobremimodal;
