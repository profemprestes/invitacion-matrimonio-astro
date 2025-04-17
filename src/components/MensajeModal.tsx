import React, { useState } from 'react';
import type { FormEvent, ChangeEvent } from 'react';
import '../styles/MensajeModal.css';

interface MensajeModalProps {
  type?: string; // Made optional since it's not being used
}

const MensajeModalMostrar: React.FC<MensajeModalProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [peopleCount, setPeopleCount] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
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

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value);
  const handlePeopleCountChange = (e: ChangeEvent<HTMLInputElement>) =>
    setPeopleCount(e.target.value);

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
                <input type="text" id="name" value={name} onChange={handleNameChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="peopleCount">Cantidad de personas:</label>
                <input
                  type="number"
                  id="peopleCount"
                  value={peopleCount}
                  onChange={handlePeopleCountChange}
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

export default MensajeModalMostrar;
