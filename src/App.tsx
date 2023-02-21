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
<<<<<<< HEAD
import MuiThemeProvider from './theme/index';
=======
import Login from 'Componentes/Login';
>>>>>>> 6f7555a67d3288866eea7b3b4ed461df379483a6

const App: React.FC = () => {
  return (
    <Provider store={store}>
<<<<<<< HEAD
      <MuiThemeProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/" element={<Landing />} /> */}
          <Route path="/donacion" element={<Donacion />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="/misPublicaciones" element={<Publicaciones />} />
          <Route path="/publicar" element={<PublicarMascota />} />
        </Routes>
      </MuiThemeProvider>
=======
      {useLocation().pathname !== '/login' && <NavBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<Landing />} /> */}
        <Route path="/donacion" element={<Donacion />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/misPublicaciones" element={<Publicaciones />} />
        <Route path="/publicar" element={<PublicarMascota />} />
        <Route path="/login" element={<Login />} />
      </Routes>
>>>>>>> 6f7555a67d3288866eea7b3b4ed461df379483a6
    </Provider>
  );
};

export default App;
