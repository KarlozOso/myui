import React from 'react';
import Button from '@mui/material/Button';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SendIcon from '@mui/icons-material/Send';

const WhatsappButton = () => {
  // Mensaje predeterminado que se enviará a WhatsApp
  const defaultMessage = '¡Hola! Estoy utilizando tu botón personalizado.';

  // Número de teléfono al que se enviará el mensaje (debes incluir el prefijo internacional)
  const phoneNumber = '529991051525';

  // Genera la URL con el esquema de enlace de WhatsApp y el mensaje
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className='flex justify-center'>
    <button variant="outlined"
    className={`bg-amber-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-600 hover:scale-105`}
  >
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center"
    >
      <WhatsAppIcon className="mr-2 rounded-full" />
      Enviar WhatsApp
    </a>
  </button>
  </div>
  );
};

export default WhatsappButton;
