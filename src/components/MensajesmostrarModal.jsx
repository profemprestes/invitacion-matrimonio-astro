import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import '../styles/MensajesmostrarModal.css';

import { MensajesmostrarModal } from './MensajesmostrarModal';

function MensajesmostrarModal({ buttonClassName, buttonText }: { buttonClassName: string; buttonText: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState('');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const [send, setSend] = useState(false);

  const handleGuardarForm = handleSubmit(async data => {
    try {
      const { nombre, mensaje } = data;
      console.log(`Sending message from ${nombre}: ${mensaje}`);

      // You could store the message in a database or send it to an API
      localStorage.setItem('galia_message', JSON.stringify({ nombre, mensaje }));

      setTimeout(() => {
        reset();
        setSend(true);
        setError('');
      }, 1000);
    } catch (err) {
      setError('Ocurrió un error al enviar tu mensaje. Inténtalo de nuevo.');
    }
  });

  return (
    <>
      <button onClick={() => setIsOpen(true)} className={buttonClassName}>
        {buttonText}
      </button>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <DialogPanel className="message-modal w-full max-w-xl rounded-lg bg-white">
            <div className="message-modal-header">Mensaje para Galia</div>
            <div className="message-modal-body">
              {!send ? (
                <form onSubmit={handleGuardarForm} className="message-form">
                  <div className="message-form-container">
                    <div className="form-group">
                      <label htmlFor="nombre">Tu nombre</label>
                      <input
                        {...register('nombre', { required: 'El nombre es requerido' })}
                        type="text"
                        id="nombre"
                        placeholder="Escribe tu nombre"
                        className={`message-input ${errors.nombre ? 'error' : ''}`}
                      />
                      {errors.nombre && (
                        <span className="error-message">{errors.nombre.message}</span>
                      )}
                    </div>

                    <div className="form-group">
                      <label htmlFor="mensaje">Tu mensaje para Galia</label>
                      <textarea
                        {...register('mensaje', {
                          required: 'El mensaje es requerido',
                          minLength: {
                            value: 5,
                            message: 'El mensaje debe tener al menos 5 caracteres',
                          },
                        })}
                        id="mensaje"
                        placeholder="Escribe un mensaje especial para el día de su fiesta"
                        className={`message-textarea ${errors.mensaje ? 'error' : ''}`}
                        rows={3}
                      />
                      {errors.mensaje && (
                        <span className="error-message">{errors.mensaje.message}</span>
                      )}
                    </div>

                    {error && <p className="error-message">{error}</p>}

                    <div className="message-actions">
                      <button
                        type="button"
                        onClick={() => setIsOpen(false)}
                        className="close-button"
                      >
                        Cancelar
                      </button>
                      <button type="submit" className="submit-button" disabled={isSubmitting}>
                        {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                      </button>
                    </div>
                  </div>
                </form>
              ) : (
                <div className="success-container">
                  <h3>¡Gracias por tu mensaje!</h3>
                  <p>Tu mensaje ha sido enviado y será leído en la fiesta de Galia.</p>
                  <button onClick={() => setIsOpen(false)} className="close-button">
                    Cerrar
                  </button>
                </div>
              )}
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}

export default MensajesmostrarModal;
