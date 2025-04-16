import React from 'react';
import { Card } from '@heroui/react';
import PropTypes from 'prop-types';
import styles from './CardParty.module.css'; // Import CSS Module

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
    buttonClassName = "party-card-button",
    buttonText = "Ver más",
}) => {
    // Renderiza condicionalmente los modales basados en el 'guid'
    const renderModal = () => {
        switch (guid) {
            case "1":
                return (
                    <button className={`${styles.customModalButton} ${buttonClassName}`} >Enviar Mensaje</button>
                );
            case "2":
                return (
                    <button  className={`${styles.customModalButton} ${buttonClassName}`} >Conocer Más</button>
                );
            default:
                return null;
        }
    };

    return (
        <Card shadow="md" className={`${styles.partyCard} ${styles.hoverEffect}`}>
            <div className={`${styles.partyCardIcon} ${styles.bounce}`}>
                <img src={`/${icon}.gif`} alt={`Icono de ${title}`} />
            </div>
            <h3 className={`${styles.partyCardTitle} ${styles.fadeIn}`}>{title}</h3>
            <div className={`${styles.partyCardDescription} ${styles.slideUp}`}>{description}</div>
            <div className={`${styles.buttonWrapper} ${styles.fadeInUp}`}>
                {renderModal()}
            </div>
        </Card>
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
