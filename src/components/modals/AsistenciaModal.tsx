import React, { useState } from 'react';
import '../styles/AsistenciaModal.css';

const AsistenciaModal = () => {
  // Removed unused type parameter
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [peopleCount, setPeopleCount] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name && peopleCount) {
      const message = `¡Hola! Confirmamos nuestra asistencia al cumpleaños. Somos ${peopleCount} personas. Mi nombre es ${name}.`;
      const whatsappLink = `https://wa.me/59892475455?text=${encodeURIComponent(message)}`;
      window.open(whatsappLink, '_blank');
      setIsOpen(false);
    } else {
      alert('Por favor, complete todos los campos.');
    }
  };

  return (
    <div>
      <button onClick={() => setIsOpen(true)} className="confirm-button">
        Confirmar Asistencia
      </button>

      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button onClick={() => setIsOpen(false)} className="close-button">
              X
            </button>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nombre:</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="peopleCount">Cantidad de personas:</label>
                <input
                  type="number"
                  id="peopleCount"
                  value={peopleCount}
                  onChange={e => setPeopleCount(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="submit-button">
                Enviar
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AsistenciaModal;
