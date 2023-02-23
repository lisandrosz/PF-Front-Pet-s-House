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
import NavBar from 'Componentes/NavBar';
import Login from 'Componentes/Login';
import Registrar from 'Componentes/Registrar';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      {useLocation().pathname !== '/' && <NavBar />}
      <Routes>
        <Route path="/home" element={<Home />} />
        {/* <Route path="/" element={<Landing />} /> */}
        <Route path="/donacion" element={<Donacion />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/misPublicaciones" element={<Publicaciones />} />
        <Route path="/publicar" element={<PublicarMascota />} />
        <Route path="/" element={<Login />} />
        <Route path="/registrar" element={<Registrar />} />
      </Routes>
    </Provider>
  );
};

export default App;
