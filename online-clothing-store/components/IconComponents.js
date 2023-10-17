// IconComponents.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart, faUser, faSearch } from '@fortawesome/free-solid-svg-icons';

const ShoppingCartIcon = () => (
  <FontAwesomeIcon icon={faShoppingCart} />
);

const HeartIcon = () => (
  <FontAwesomeIcon icon={faHeart} />
);

const UserIcon = () => (
  <FontAwesomeIcon icon={faUser} />
);
const SearchIcon = () => (
  <FontAwesomeIcon icon={faSearch} />
);

export { ShoppingCartIcon, HeartIcon,SearchIcon, UserIcon };
