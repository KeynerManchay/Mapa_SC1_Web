import React from 'react';
import '../styles/card.css'; // Asume que creaste un archivo de estilos para las tarjetas

const Card = ({ title, imageUrl, link }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <img src={imageUrl} alt={title} />
      <button onClick={() => window.location.href = link}>Visitar</button>
    </div>
  );
};

export default Card;
