/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/function-component-definition */
import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Nav } from './styled';

export default function Header() {
  const clickedButton = useSelector((state) => state.clickedButton);

  return (
    <Nav>
      <Link to="/">
        <FaHome size={18} /> Home
      </Link>
      <Link to="/login">
        <FaUserAlt size={18} /> User
      </Link>
      <Link to="logout">
        <FaSignInAlt size={18} /> Logout
      </Link>
      {clickedButton ? 'Clicado' : 'Não clicado'}
    </Nav>
  );
}
