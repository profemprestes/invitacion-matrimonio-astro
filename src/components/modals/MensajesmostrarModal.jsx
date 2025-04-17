import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  useDisclosure,
  Input,
  Textarea,
} from '@heroui/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import '../styles/MensajesmostrarModal.css';

function MensajesmostrarModal({ buttonClassName, buttonText }) {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
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
      <button onClick={onOpen} className={buttonClassName}>
        {buttonText}
      </button>
      <Modal
        backdrop={'blur'}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
        size="xl"
        isDismissable={false}
        className="message-modal"
      >
        <ModalContent>
          {onClose => (
            <>
              <ModalHeader className="message-modal-header">Mensaje para Galia</ModalHeader>
              <ModalBody>
                {!send ? (
                  <form onSubmit={handleGuardarForm} className="message-form">
                    <div className="message-form-container">
                      <Input
                        {...register('nombre', { required: 'El nombre es requerido' })}
                        type="text"
                        label="Tu nombre"
                        placeholder="Escribe tu nombre"
                        variant="bordered"
                        isInvalid={!!errors.nombre}
                        errorMessage={errors.nombre?.message}
                        className="message-input"
                      />

                      <Textarea
                        {...register('mensaje', {
                          required: 'El mensaje es requerido',
                          minLength: {
                            value: 5,
                            message: 'El mensaje debe tener al menos 5 caracteres',
                          },
                        })}
                        label="Tu mensaje para Galia"
                        placeholder="Escribe un mensaje especial para el día de su fiesta"
                        variant="bordered"
                        minRows={3}
                        maxRows={5}
                        isInvalid={!!errors.mensaje}
                        errorMessage={errors.mensaje?.message}
                        className="message-textarea"
                      />

                      {error && <p className="error-message">{error}</p>}

                      <div className="message-actions">
                        <Button color="danger" variant="light" onPress={onClose}>
                          Cancelar
                        </Button>
                        <Button type="submit" className="submit-button" isLoading={isSubmitting}>
                          Enviar Mensaje
                        </Button>
                      </div>
                    </div>
                  </form>
                ) : (
                  <div className="success-container">
                    <h3>¡Gracias por tu mensaje!</h3>
                    <p>Tu mensaje ha sido enviado y será leído en la fiesta de Galia.</p>
                    <Button onPress={onClose} className="close-button">
                      Cerrar
                    </Button>
                  </div>
                )}
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default MensajesmostrarModal;
