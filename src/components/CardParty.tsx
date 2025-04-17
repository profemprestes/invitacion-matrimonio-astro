import React from 'react';
import { Card } from '@heroui/react';
import PropTypes from 'prop-types';
import '../styles/CardParty.css';

interface CardPartyProps {
    title: string;
    guid: string;
    description: string;
    icon: string;
    buttonClassName?: string;
    buttonText?: string;
}

const CardParty: React.FC<CardPartyProps> = ({
    title,
    guid,
    description,
    icon,
    buttonClassName = "",
    buttonText = "Ver más",
}) => {
    // Renderiza condicionalmente los modales basados en el 'guid'
    const renderModal = () => {
        switch (guid) {
            case "1":
                return (
                    <button className={`custom-modal-button message-button ${buttonClassName}`}>
                        {buttonText}
                    </button>
                );
            case "2":
                return (
                    <button className={`custom-modal-button about-button ${buttonClassName}`}>
                        {buttonText}
                    </button>
                );
            default:
                return (
                    <button className={`custom-modal-button ${buttonClassName}`}>
                        {buttonText}
                    </button>
                );
        }
    };

    return (
        <div className="party-card">
            <div className="party-card-icon bounce">
                <img src={`/${icon}.gif`} alt={`Icono de ${title}`} />
            </div>
            <h3 className="party-card-title fadeIn">{title}</h3>
            <div className="party-card-description slideUp">{description}</div>
            <div className="button-wrapper fadeInUp">
                {renderModal()}
            </div>
        </div>
    );
};

CardParty.propTypes = {
    title: PropTypes.string.isRequired,
    guid: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    buttonClassName: PropTypes.string,
    buttonText: PropTypes.string,
};

export default CardParty;
