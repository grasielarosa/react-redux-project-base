/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/function-component-definition */
import React from 'react';
import { useDispatch } from 'react-redux';

import { Title, Paragraph } from './styled';
import { Container } from '../../styles/GlobalStyles';
import * as exampleActions from '../../store/modules/examples/actions';

export default function Login() {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();

    dispatch(exampleActions.clickButton());
  }

  return (
    <Container>
      <Title isRed={false}>
        Login
        <small> teste</small>
      </Title>
      <Paragraph>lorem ipsum dolor sit amet.</Paragraph>
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}
