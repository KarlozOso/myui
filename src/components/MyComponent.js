import React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';

const MyComponent = () => {
  const handleOpenMap = () => {
    // Ubicación en formato de coordenadas (latitud y longitud)
    // Construir la URL de Google Maps
    const mapUrl = `https://goo.gl/maps/CTW21LiNMFzz2Du88`;

    // Abrir enlace en una nueva pestaña
    window.open(mapUrl, '_blank');
  };

  return (
    <div className='flex justify-center items-center'>
    <Fab
      variant="extended"
      onClick={handleOpenMap}
      className='bg-blue-500 hover:bg-blue-600 transition-colors duration-300'
    >
      <NavigationIcon sx={{ mr: 1 }} />
      Open in Maps
    </Fab>
  </div>
  );
};

export default MyComponent;
