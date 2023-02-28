import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './Componentes/Home/Home';
import { Route, Routes, useLocation } from 'react-router-dom';
// import Landing from 'Componentes/Landing';
import Donacion from 'Componentes/Donacion';
import Favoritos from 'Componentes/Favoritos';
import Publicaciones from 'Componentes/Publicaciones';
import PublicarMascota from 'Componentes/PublicarMascota';
import NavBar from 'Componentes/NavBar/copy';
import Login from 'Componentes/Login';
import Registrar from 'Componentes/Registrar';
import Dashboard from 'Componentes/Dashboard';
import Detalle from 'Componentes/Detalle';
import Success from 'Componentes/Success';
import Failure from 'Componentes/Failure';
import './App.css';

const App: React.FC = () => {
  const location = useLocation().pathname;
  return (
    <Provider store={store}>
      {location !== '/' && location !== '/registrar' ? <NavBar /> : null}
      <Routes>
        <Route path="/home" element={<Home />} />
        {/* <Route path="/" element={<Landing />} /> */}
        <Route path="/donacion" element={<Donacion />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/misPublicaciones" element={<Publicaciones />} />
        <Route path="/publicar" element={<PublicarMascota />} />
        <Route path="/" element={<Login />} />
        <Route path="/registrar" element={<Registrar />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/detalle" element={<Detalle />} />
        <Route path="/success" element={<Success />} />
        <Route path="/failure" element={<Failure />} />
      </Routes>
    </Provider>
  );
};

export default App;
