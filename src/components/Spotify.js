import React from 'react';

const Spotify = () => {
  return (
    <div className="flex justify-end items-center">
      <iframe
        className="rounded-xl w-72 h-72 p-0 mx-36"
        src="https://open.spotify.com/embed/track/536jZQnDc8UczLFWyRqEzt?utm_source=generator"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Spotify;