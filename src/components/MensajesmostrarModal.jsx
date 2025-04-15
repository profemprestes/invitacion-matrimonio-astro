
import { Modal, ModalContent, ModalHeader, ModalBody, Button, useDisclosure, Input, Textarea } from "@nextui-org/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import "../styles/MensajesmostrarModal.css";

function MensajesmostrarModal({ buttonClassName, buttonText }) {
    const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
    const [error, setError] = useState("");
    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
    const [send, setSend] = useState(false);
    
    const handleGuardarForm = handleSubmit(async (data) => {
        try {
            // Aquí puedes implementar la lógica para guardar el mensaje
            // Por ahora, simularemos un envío exitoso
            setTimeout(() => {
                reset();
                setSend(true);
                setError("");
            }, 1000);
            
            // Descomenta esto cuando tengas un endpoint real
            /*
            const response = await fetch('tu-endpoint-para-mensajes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            
            const res = await response.json();
            if (res.status === 201) {
                reset();
                setSend(true);
                setError("");
            } else {
                setError(res.message);
            }
            */
        } catch (err) {
            setError("Ocurrió un error al enviar tu mensaje. Inténtalo de nuevo.");
        }
    });

    return (
        <>
            <button onClick={onOpen} className={buttonClassName || "bg-color01 min-w-52 max-w-52 text-color02 py-3 rounded-3xl"}>
                {buttonText || "Enviar Mensaje"}
            </button>
            <Modal
                backdrop={'blur'}
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="center"
                size='xl'
                isDismissable={false} 
                isKeyboardDismissDisabled={true}
                className='p-8'
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <div className="modal-background"></div>
                            <ModalHeader className="flex 
                            font-parisienne
                            font-light
                            text-5xl
                            phone:text-[34px]
                            p-0
                            desktop:text-5xl
                            text-center
                            my-4
                            flex-col gap-1
                            message-modal-header">
                                Mensaje para Galia
                            </ModalHeader>
                            <ModalBody>
                                {
                                    !send ? (
                                        <form onSubmit={handleGuardarForm}>
                                            <div className="message-form-container flex flex-col gap-4">
                                                <div className="message-input">
                                                    <Input
                                                        {...register("nombre", { required: "El nombre es requerido" })}
                                                        type="text"
                                                        label="Tu nombre"
                                                        placeholder="Escribe tu nombre"
                                                        variant="bordered"
                                                        isInvalid={!!errors.nombre}
                                                        errorMessage={errors.nombre?.message}
                                                        classNames={{
                                                            label: "text-pink-500",
                                                            input: "text-gray-700",
                                                        }}
                                                    />
                                                </div>
                                                
                                                <div className="message-textarea">
                                                    <Textarea
                                                        {...register("mensaje", { 
                                                            required: "El mensaje es requerido",
                                                            minLength: {
                                                                value: 5,
                                                                message: "El mensaje debe tener al menos 5 caracteres"
                                                            }
                                                        })}
                                                        label="Tu mensaje para Galia"
                                                        placeholder="Escribe un mensaje especial para el día de su fiesta"
                                                        variant="bordered"
                                                        minRows={3}
                                                        maxRows={5}
                                                        isInvalid={!!errors.mensaje}
                                                        errorMessage={errors.mensaje?.message}
                                                        classNames={{
                                                            label: "text-pink-500",
                                                            input: "text-gray-700",
                                                        }}
                                                    />
                                                </div>
                                                
                                                {error && <p className="text-red-500 text-sm">{error}</p>}
                                                
                                                <div className="message-button-container">
                                                    <Button color="danger" variant="light" onPress={onClose} className="cancel-button">
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
                                            <div className="success-emoji">🎉</div>
                                            <h3 className="success-title">¡Gracias por tu mensaje!</h3>
                                            <p className="success-message">
                                                Tu mensaje ha sido enviado y será leído en la fiesta de Galia.
                                            </p>
                                            <Button onPress={onClose} className="close-button">
                                                Cerrar
                                            </Button>
                                        </div>
                                    )
                                }
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}

export default MensajesmostrarModal;