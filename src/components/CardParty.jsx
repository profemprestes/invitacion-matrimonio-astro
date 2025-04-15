
import { Card } from "@nextui-org/react";
import MensajesmostrarModal from "./MensajesmostrarModal";
import DressCodeModal from "./DressCodeModal";

export default function CardParty({
    title,
    guid,
    description,
    icon,
    buttonClassName,
    buttonText
}) {
    return (
        <Card shadow="md" className="party-card">
            <div className="party-card-icon">
                <img src={`/${icon}.gif`} alt={`Icono de ${title}`} />
            </div>
            
            <h3 className="party-card-title">
                {title}
            </h3>

            <div className="party-card-description">
                {description}
            </div>

            {
                guid == 1 ? (
                    <MensajesmostrarModal buttonClassName="party-card-button" buttonText="Enviar Mensaje" />
                ): (
                    guid == 2 ? (
                        <DressCodeModal buttonClassName="party-card-button" buttonText="Conocer Más" />
                    ) : null
                )
            }
        </Card>
    );
}
