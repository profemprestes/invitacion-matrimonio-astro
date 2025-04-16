
// Cambiar esta línea
import { Modal, ModalContent, ModalHeader, ModalBody, Button, useDisclosure } from "@heroui/react";
import "../styles/DressCodeModal.css";

function DressCodeModal({ buttonClassName, buttonText }) {
    const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();

    return (
        <>
            <button onClick={onOpen} className={buttonClassName || "bg-color01 min-w-52 max-w-52 text-color02 py-3 rounded-3xl"}>
                {buttonText || "Conocer Más"}
            </button>
            <Modal
                backdrop={'blur'}
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="center"
                isDismissable={false} 
                isKeyboardDismissDisabled={true}
                size='xl'
                className='p-8'
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex 
                            font-parisienne
                            text-pink-500
                            font-light
                            text-5xl
                            phone:text-[34px]
                            p-0
                            desktop:text-5xl
                            text-center
                            my-4
                            flex-col gap-1 about-me-title">
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
                                        <span className="font-parisienne text-pink-500 text-lg font-bold">
                                            ¡Gracias por conocerme mejor!
                                        </span>
                                        <Button 
                                            color="primary" 
                                            onPress={onClose}
                                            className="close-button"
                                        >
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