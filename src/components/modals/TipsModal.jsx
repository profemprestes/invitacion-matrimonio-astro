import { Modal, ModalContent, ModalHeader, ModalBody, useDisclosure } from '@heroui/react';

function TipsModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  // Removed unused type variable and related code

  const title = {
    fontWeight: 'bold',
    fontSize: '1rem',
  };
  const list = {
    display: 'flex',
    gap: '8px',
    marginLeft: '15px',
    flexDirection: 'column',
  };
  const li = {
    display: 'flex',
    gap: '3px',
    fontSize: '0.8rem',
    flexDirection: 'column',
  };

  return (
    <>
      <button
        onClick={onOpen}
        className="bg-color01 text-color02 min-w-52 max-w-52 rounded-3xl py-3"
      >
        + Info
      </button>
      <Modal
        backdrop={'blur'}
        isOpen={isOpen}
        isDismissable={false}
        isKeyboardDismissDisabled={true}
        onOpenChange={onOpenChange}
        placement="center"
        size="xl"
        className="phone:max-h-[60vh] desktop:max-h-[90vh] max-h-[60vh] overflow-y-auto p-8"
      >
        <ModalContent>
          {onClose => (
            <>
              <ModalHeader
                className="font-parisienne 
                            text-color01
                            phone:text-[34px]
                            desktop:text-5xl
                            my-4
                            flex
                            flex-col
                            gap-1

                            p-0
                            text-center
                            text-5xl font-light"
              >
                Tips y Notas
              </ModalHeader>
              <ModalBody className="font-rubik">
                <h3 style={title}>Actividades y Horarios</h3>
                <ul style={list}>
                  <li style={li}>
                    <span className="font-semibold">Ceremonia Religiosa:</span>
                    <span>
                      {' '}
                      Comienza puntualmente a las 15:00 horas, así que por favor, llega al menos 15
                      minutos antes.
                    </span>
                  </li>
                  <li style={li}>
                    <span className="font-semibold">Ceremonia Civil:</span>

                    <span>La ceremonia civil será a las 16:30 horas.</span>
                  </li>
                  <li style={li}>
                    <span className="font-semibold">Fiesta:</span>
                    <span>Se realizará una vez culmine la ceremonia Civil. </span>
                  </li>
                </ul>

                <h3 style={title}>Comidas y Bebidas</h3>
                <ul style={list}>
                  <li style={li}>
                    <span className="font-semibold">Menú:</span>
                    <span>Esperamos que disfrutes de la cena que hemos preparado para ti.</span>
                  </li>
                </ul>
                <h3 style={title}>Reglas</h3>
                <ul style={list}>
                  <li style={li}>
                    <span className="font-semibold">Solo Adultos:</span>
                    <span>
                      Para garantizar que todos nuestros invitados puedan disfrutar plenamente de la
                      celebración, amablemente solicitamos que este sea un evento para adultos.
                      Apreciamos mucho su comprensión y apoyo en esta decisión.
                    </span>
                  </li>
                  <li style={li}>
                    <span className="font-semibold">Fotografía:</span>

                    <span>
                      Te pedimos que evites tomar fotografias que puedan interferir con el
                      desarrollo de la ceremonia, luego de ello, siéntete libre de tomar las fotos
                      que desees. No olvides etiquetarnos en tus redes sociales con el hashtag
                      #JohanYDahiana
                    </span>
                  </li>
                </ul>
                <h3 style={title}>Regalos</h3>
                <ul style={list}>
                  <li style={li}>
                    Estamos muy emocionados de celebrar nuestro matrimonio con ustedes y estamos
                    profundamente agradecidos por su amor y apoyo. Si desean honrarnos con un
                    regalo, les agradecemos de antemano por su generosidad.
                  </li>
                  <li style={li}>
                    <span className="font-semibold">Dahiana:</span>
                    <span>
                      INTERBANK: 8983305997546
                      <br />
                      CCI: 00389801330599754645
                    </span>
                  </li>
                  <li style={li}>
                    <span className="font-semibold">Johan:</span>
                    <span>
                      BCP: 29519490244091
                      <br />
                      CCI: 00229511949024409146
                    </span>
                  </li>
                </ul>
                <div className="flex flex-col items-end justify-end gap-1 ">
                  <span className="font-parisienne text-color01 text-lg font-bold">
                    Johan y Dahiana
                  </span>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default TipsModal;
