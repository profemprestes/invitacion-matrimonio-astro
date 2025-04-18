import { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, Input, Button } from "@heroui/react";
import { useForm, type SubmitHandler } from "react-hook-form";
import "../styles/AsistenciaModal.css";

interface FormData {
    nombre: string;
    cantidadPersonas: number;
}

interface AsistenciaModalProps {
    type: string;
}

const AsistenciaModal: React.FC<AsistenciaModalProps> = ({ type }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
    const [send, setSend] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [totalPersonas, setTotalPersonas] = useState<number | null>(null);

    const handleConfirmar: SubmitHandler<FormData> = (data) => {
        const mensaje = `Nos va a encantar asistir al cumple de Galia, vamos a asistir ${data.cantidadPersonas} persona${data.cantidadPersonas === 1 ? '' : 's'}.`;
        const numeroWhatsApp = "598097338241"; // WhatsApp number
        const enlace = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

        window.open(enlace, "_blank");

        setSend(true);
        setIsOpen(false);
        setTotalPersonas(data.cantidadPersonas);
    };

    return (
        <div>
            <button
                onClick={() => {
                    setIsOpen(true);
                    setSend(false);
                    setTotalPersonas(null); // Reset total personas on open
                }}
                className="action-button confirm-button" // Added specific class
            >
                Confirmar Asistencia
            </button>

            <Modal
                backdrop="blur"
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                size="xl"
                isDismissable={false}
                isKeyboardDismissDisabled={true}
                className="modal-container p-8" // Added specific class
            >
                <ModalContent className="modal-content"> {/* Added specific class */}
                    <ModalHeader className="modal-header font-parisienne text-[#FF6B8B] font-light text-5xl text-center my-4">
                        ¿Vas a asistir al cumple de Galia?
                    </ModalHeader>
                    <ModalBody className="modal-body"> {/* Added specific class */}
                        <form onSubmit={handleSubmit(handleConfirmar)}>
                            <div className="form-group flex flex-col gap-6 p-4"> {/* Added specific class */}
                                <div className="input-group mb-2"> {/* Added specific class */}
                                    <Input
                                        {...register("nombre", { required: "Campo requerido" })}
                                        label="Nombre"
                                        placeholder="Tu nombre completo"
                                        variant="bordered"
                                        classNames={{
                                            label: "input-label text-[#FF6B8B]", // Added specific class
                                            input: "input-field text-gray-700", // Added specific class
                                        }}
                                    />
                                    {errors.nombre && (
                                        <span className="error-message text-red-500 text-xs mt-1">{errors.nombre.message}</span>
                                    )}
                                </div>

                                <div className="input-group mb-2"> {/* Added specific class */}
                                    <Input
                                        {...register("cantidadPersonas", {
                                            required: "Campo requerido",
                                            pattern: { value: /^[0-9]+$/, message: "Debe ser un número válido" },
                                            min: { value: 1, message: "Debe ser al menos 1 persona" },
                                        })}
                                        label="Cantidad de personas"
                                        placeholder="Cantidad de personas que asistirán"
                                        variant="bordered"
                                        type="number"
                                        classNames={{
                                            label: "input-label text-[#FF6B8B]", // Added specific class
                                            input: "input-field text-gray-700", // Added specific class
                                        }}
                                    />
                                    {errors.cantidadPersonas && (
                                        <span className="error-message text-red-500 text-xs mt-1">{errors.cantidadPersonas.message}</span>
                                    )}
                                </div>

                                <Button
                                    type="submit"
                                    className="action-button submit-button mx-auto mt-4" // Added specific class
                                >
                                    Confirmar
                                </Button>
                            </div>
                        </form>
                    </ModalBody>
                </ModalContent>
            </Modal>

            {send && totalPersonas !== null && (
                <div className="confirmation-message text-center mt-4 p-3 bg-[#FFF8E1] rounded-lg border border-[#FFD166] animate-fadeIn"> {/* Added specific class */}
                    <p className="confirmation-title text-xl font-rubik text-[#FF6B8B]">¡Gracias por confirmar! 🎉</p> {/* Added specific class */}
                    <p className="confirmation-text text-sm text-gray-600">Se enviará un mensaje de confirmación al número de WhatsApp para {totalPersonas} persona{totalPersonas === 1 ? '' : 's'}.</p> {/* Added specific class */}
                </div>
            )}
        </div>
    );
};

export default AsistenciaModal;