import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Layout from './components/Layout';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="sign-in" element={<SignIn />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')

);


