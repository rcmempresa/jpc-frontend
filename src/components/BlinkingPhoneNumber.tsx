// src/components/BlinkingPhoneNumber.jsx
import React from 'react';
import { Phone } from 'lucide-react';

const BlinkingPhoneNumber = () => {
  const phoneNumber = '351913823499';
  const defaultMessage = 'Olá, gostaria de saber mais sobre os seus serviços.';

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`}
        className="bg-blue-500 text-white rounded-full p-4 shadow-lg flex items-center justify-center space-x-2
                   hover:bg-blue-600 transition-colors duration-300 animate-blink" // <--- A classe 'animate-blink' está aqui
        aria-label="Enviar mensagem para JPC Rodrigues via WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Phone size={24} />
        <span className="font-bold text-lg hidden md:inline">{phoneNumber.replace('351', '+351 ')}</span>
      </a>
    </div>
  );
};

export default BlinkingPhoneNumber;