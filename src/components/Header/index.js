/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/function-component-definition */
import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Nav } from './styled';

export default function Header() {
  return (
    <Nav>
      <a href="#">
        <FaHome size={18} /> Home
      </a>
      <a href="#">
        <FaUserAlt size={18} /> User
      </a>
      <a href="#">
        <FaSignInAlt size={18} /> Logout
      </a>
    </Nav>
  );
}
