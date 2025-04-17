import React from 'react';
import PropTypes from 'prop-types';
import MensajesmostrarModal from './MensajesmostrarModal';
import Sobremimodal from './Sobremimodal';
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
  buttonClassName = '',
  buttonText = 'Ver más',
}) => {
  // Render the appropriate modal based on the 'guid'
  const renderModal = () => {
    switch (guid) {
      case '1':
        return <MensajesmostrarModal buttonClassName={buttonClassName} buttonText={buttonText} />;
      case '2':
        return <Sobremimodal buttonClassName={buttonClassName} buttonText={buttonText} />;
      default:
        return null;
    }
  };

  return (
    <div className="party-card">
      <div className="party-card-icon bounce">
        <img src={`/${icon}.gif`} alt={`Icono de ${title}`} />
      </div>
      <h3 className="party-card-title fadeIn">{title}</h3>
      <div className="party-card-description slideUp">{description}</div>
      <div className="button-wrapper fadeInUp">{renderModal()}</div>
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
