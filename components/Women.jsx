import React from 'react';
import { useParams } from 'react-router-dom';

const Women = () => {
  const { category } = useParams();
  return (
    <div>
      <h2>Women's Clothing</h2>
    </div>
  );
}

export default Women;
