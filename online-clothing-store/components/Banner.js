import React from 'react';

function Banner() {
  return (
    <div className="bg-cover bg-center sm:h-96 h-64">
      <img
        src="/images/wallpaper.png"
        alt="Banner"
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export default Banner;
