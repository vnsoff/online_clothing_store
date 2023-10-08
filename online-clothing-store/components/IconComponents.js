// IconComponents.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';

const ShoppingCartIcon = () => (
  <FontAwesomeIcon icon={faShoppingCart} />
);

const HeartIcon = () => (
  <FontAwesomeIcon icon={faHeart} />
);

const UserIcon = () => (
  <FontAwesomeIcon icon={faUser} />
);

export { ShoppingCartIcon, HeartIcon, UserIcon };
