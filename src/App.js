import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./views/home";
import Destino from "./views/destinos";
import Promocoes from "./views/promocoes";
import Contato from "./views/contato";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

import "./assets/CSS/Estilos.css";


function App() {
  return (
    <BrowserRouter>
    <Menu />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/destino" element={<Destino/>} />
      <Route path="/promocoes" element={<Promocoes/>} />
      <Route path="/contato" element={<Contato/>} />
    </Routes>
    <Footer />
  </BrowserRouter>
  );
}

export default App;