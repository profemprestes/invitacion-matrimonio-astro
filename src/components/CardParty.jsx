
import { Card } from "@heroui/react";
import MensajesmostrarModal from "./MensajesmostrarModal";
import DressCodeModal from "./DressCodeModal";
import PropTypes from 'prop-types';
import "../styles/CardParty.css";

export default function CardParty({
    title,
    guid,
    description,
    icon,
    buttonClassName = "party-card-button", // Set default value
    buttonText = "Ver más" // Set default value
}) {
    return (
        <Card shadow="md" className="party-card hover-effect">
            <div className="party-card-icon bounce">
                <img src={`/${icon}.gif`} alt={`Icono de ${title}`} />
            </div>
            
            <h3 className="party-card-title fade-in">
                {title}
            </h3>

            <div className="party-card-description slide-up">
                {description}
            </div>

            <div className="button-wrapper fade-in-up">
                {guid === "1" && (
                    <MensajesmostrarModal 
                        buttonClassName="custom-modal-button" 
                        buttonText="Enviar Mensaje"
                        client:load
                    />
                )}
                {guid === "2" && (
                    <DressCodeModal 
                        buttonClassName="custom-modal-button" 
                        buttonText="Conocer Más"
                        client:load
                    />
                )}
            </div>
        </Card>
    );
}

CardParty.propTypes = {
    title: PropTypes.string.isRequired,
    guid: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    buttonClassName: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired
};
