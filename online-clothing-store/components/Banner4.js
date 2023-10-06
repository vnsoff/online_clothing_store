import React from 'react';
import sharp from 'sharp';

function Banner4() {
  const imageBuffer = sharp('/images/wallpaper.png')
    .resize(360, 700) // Set your desired width and height
    .toBuffer();
  const imageSrc = `data:image/png;base64,${imageBuffer.toString('base64')}`;
  return (
    <div className="bg-cover bg-center h-[250px] w-[360px] mx-10 my-10">
      <img
        src={imageSrc}
        alt="Banner"
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export default Banner4;