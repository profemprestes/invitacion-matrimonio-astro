
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link } from "@nextui-org/react";
import { Radio, RadioGroup } from "@nextui-org/react";


export default function AsistenciaModal({ type }) {
    const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();

    return (
        <>
            <Button onPress={onOpen} className="bg-color01 text-color02 py-3  w-[280px] mx-auto   desktop:w-[200px] rounded-3xl">Confirmar Asistencia</Button>
            <Modal
                backdrop={'blur'}
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="center"
                size='xl'
                className='      p-8'
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex 
                            font-parisienne
                            text-color01
                            font-light
                            text-5xl
                            phone:text-[34px]
                            p-0
                            desktop:text-5xl
                            text-center
                            my-4
                            flex-col gap-1">
                                ¿Asistes a la {type} ?

                            </ModalHeader>
                            <ModalBody>
                                <div className="flex items-center justify-center mt-4 mb-8" >
                                    <RadioGroup
                                        color='warning'
                                        size='lg'
                                        orientation='horizontal'
                                        label=""
                                    >
                                        <Radio value="buenos-aires">¡Sí, confirmo!</Radio>
                                        <Radio value="sydney">{`No puedo :(`} </Radio>

                                    </RadioGroup>
                                </div>
                                <Input
                                    label="Apellido Paterno"
                                    placeholder="Ingresa tu apellido paterno"
                                    variant="bordered"
                                />
                                <Input
                                    label="Apellido Materno"
                                    placeholder="Ingresa tu apellido materno"
                                    variant="bordered"
                                />
                                <Input
                                    label="Nombres"
                                    placeholder="Ingresa tus nombres"
                                    variant="bordered"
                                />


                            </ModalBody>
                            <ModalFooter>

                                <Button className='bg-color01 text-color02 py-3  w-[280px] mx-auto desktop:w-[200px] rounded-3xl' onPress={onClose}>
                                    Enviar
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
