/* eslint-disable react/function-component-definition */
import React from 'react';
import Header from './components/Header';
import Login from './pages/Login';
import GlobalStyle from './styles/GlobalStyles';

function App() {
  return (
    <>
      <Header />
      <Login />
      <GlobalStyle />
    </>
  );
}

export default App;
