/* eslint-disable react/function-component-definition */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import history from '../services/history';
import Header from '../components/Header';
import Login from '../pages/Login';
import Page404 from '../pages/Page404';

export default function AppWrapper() {
  return (
    <Router history={history}>
      <Header />
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
}
