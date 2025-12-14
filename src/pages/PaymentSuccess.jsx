// src/pages/PaymentSuccess.jsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';
import '../styles/PaymentSuccess.css';

export default function PaymentSuccess() {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Datos del pago exitoso
  const { 
    planName = 'Desconocido', 
    price = 0, 
    transactionId = 'N/A',
    message = 'Pago completado exitosamente'
  } = location.state || {};

  const handleContinue = () => {
    navigate('/home');
  };

  return (
    <div className="payment-success-container">
      <div className="success-card">
        <FaCheckCircle className="success-icon" />
        <h1>¡Pago Completado!</h1>
        
        <div className="success-details">
          <div className="detail-row">
            <span className="label">Plan:</span>
            <span className="value">{planName}</span>
          </div>
          <div className="detail-row">
            <span className="label">Monto:</span>
            <span className="value">${price} USD</span>
          </div>
          <div className="detail-row">
            <span className="label">ID de Transacción:</span>
            <span className="value">{transactionId}</span>
          </div>
          <div className="detail-row">
            <span className="label">Estado:</span>
            <span className="value status-completed">Completado ✓</span>
          </div>
        </div>

        <p className="success-message">
          {message}
        </p>

        <button onClick={handleContinue} className="continue-button">
          Continuar al Dashboard
        </button>
      </div>
    </div>
  );
}