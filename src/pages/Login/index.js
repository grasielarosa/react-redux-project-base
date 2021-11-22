/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/function-component-definition */
import React from 'react';
import { Title, Paragraph } from './styled';
import { Container } from '../../styles/GlobalStyles';

export default function Login() {
  return (
    <Container>
      <Title isRed={false}>
        Login
        <small> teste</small>
      </Title>
      <Paragraph>lorem ipsum dolor sit amet.</Paragraph>
      <button type="button">Enviar</button>
    </Container>
  );
}
