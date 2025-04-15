import { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, Input, Button } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import "../styles/PrincipalDate.css";

const AsistenciaModal = ({ type }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [send, setSend] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [totalPersonas, setTotalPersonas] = useState(0);

  // Función para enviar el mensaje de WhatsApp
  const handleConfirmar = (data) => {
    const mensaje = `Nos va a encantar asistir al cumple de Galia, vamos a asistir ${data.cantidadPersonas} personas.`;
    const numeroWhatsApp = "598097338241"; // Número de WhatsApp para enviar el mensaje
    const enlace = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
    
    // Redirigir al usuario a WhatsApp con el mensaje predefinido
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
        }} 
        className="action-button"
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
        className="p-8"
      >
        <ModalContent>
          <ModalHeader className="font-parisienne text-[#FF6B8B] font-light text-5xl text-center my-4">
            ¿Vas a asistir al cumple de Galia?
          </ModalHeader>
          <ModalBody>
            <form onSubmit={handleSubmit(handleConfirmar)}>
              <div className="flex flex-col gap-6 p-4">
                <div className="mb-2">
                  <Input
                    {...register("nombre", { required: "Campo requerido" })}
                    label="Nombre"
                    placeholder="Tu nombre completo"
                    variant="bordered"
                    classNames={{
                      label: "text-[#FF6B8B]",
                      input: "text-gray-700",
                    }}
                  />
                  {errors.nombre && (
                    <span className="text-red-500 text-xs mt-1">{errors.nombre.message}</span>
                  )}
                </div>

                <div className="mb-2">
                  <Input
                    {...register("cantidadPersonas", { 
                      required: "Campo requerido", 
                      pattern: { value: /^[0-9]+$/, message: "Debe ser un número válido" } 
                    })}
                    label="Cantidad de personas"
                    placeholder="Cantidad de personas que asistirán"
                    variant="bordered"
                    type="number"
                    classNames={{
                      label: "text-[#FF6B8B]",
                      input: "text-gray-700",
                    }}
                  />
                  {errors.cantidadPersonas && (
                    <span className="text-red-500 text-xs mt-1">{errors.cantidadPersonas.message}</span>
                  )}
                </div>

                <Button
                  type="submit"
                  className="action-button mx-auto mt-4"
                >
                  Confirmar
                </Button>
              </div>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>

      {send && (
        <div className="text-center mt-4 p-3 bg-[#FFF8E1] rounded-lg border border-[#FFD166] animate-fadeIn">
          <p className="text-xl font-rubik text-[#FF6B8B]">¡Gracias por confirmar! 🎉</p>
          <p className="text-sm text-gray-600">Se enviará un mensaje de confirmación al número de WhatsApp.</p>
        </div>
      )}
    </div>
  );
};

export default AsistenciaModal;
