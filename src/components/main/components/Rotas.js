import React from 'react';
import Home from '../rotas/Home';
import About from '../rotas/About';
import Portifolio from '../rotas/Portifolio';
import Links from './Links';
import * as R from 'react-router-dom'

const Rotas = () => {
  return (
    <R.BrowserRouter>
      <Links/>
      <R.Routes>
        <R.Route path="/" element={<Home />} />
        <R.Route path="/about" element={<About />} />
        <R.Route path="/portifolio" element={<Portifolio />} />
      </R.Routes>
    </R.BrowserRouter>
  );
};

export default Rotas;
