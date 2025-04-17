import { Modal, ModalContent, ModalHeader, ModalBody, Button, useDisclosure } from '@heroui/react';
import '../styles/DressCodeModal.css';

function DressCodeModal({ buttonClassName, buttonText }: { buttonClassName: string; buttonText: string }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure(); // Removed onClose

  return (
    <>
      <button
        onClick={onOpen}
        className={buttonClassName || 'bg-color01 text-color02 min-w-52 max-w-52 rounded-3xl py-3'}
      >
        {buttonText || 'Conocer Más'}
      </button>
      <Modal
        backdrop={'blur'}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
        isDismissable={false}
        isKeyboardDismissDisabled={true}
        size="xl"
        className="p-8"
      >
        <ModalContent>
          {() => ( // Removed onClose parameter
            <>
              <ModalHeader
                className="font-parisienne 
                            phone:text-[34px]
                            desktop:text-5xl
                            about-me-title
                            my-4
                            flex
                            flex-col
                            gap-1
                            p-0
                            text-center
                            text-5xl font-light text-pink-500"
              >
                Un Poquito Sobre Mí
              </ModalHeader>
              <ModalBody>
                <div className="about-me-container">
                  <div className="about-me-photo-container">
                    <img src="/img/Galia.png" alt="Foto de Galia" className="about-me-photo" />
                  </div>

                  <div className="about-me-sections">
                    <div className="about-me-section">
                      <h3 className="section-title">Mis Medidas</h3>
                      <ul className="section-list">
                        <li>Ropita 12-18 meses</li>
                        <li>Zapatos Talla 4</li>
                        <li>Pañales Talla 4</li>
                      </ul>
                    </div>

                    <div className="about-me-section">
                      <h3 className="section-title">Lo Que Me Encanta</h3>
                      <ul className="section-list">
                        <li>Pelotitas</li>
                        <li>Cuentos</li>
                        <li>Música</li>
                        <li>Juguetes</li>
                      </ul>
                    </div>

                    <div className="about-me-section">
                      <h3 className="section-title">Mis Comidas Favoritas</h3>
                      <ul className="section-list">
                        <li>Puré de calabaza</li>
                        <li>Banana</li>
                        <li>Yogur</li>
                        <li>Galletitas</li>
                      </ul>
                    </div>
                  </div>

                  <div className="about-me-footer">
                    <span className="font-parisienne text-lg font-bold text-pink-500">
                      ¡Gracias por conocerme mejor!
                    </span>
                    <Button color="primary" onPress={onClose} className="close-button">
                      Cerrar
                    </Button>
                  </div>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default DressCodeModal;
