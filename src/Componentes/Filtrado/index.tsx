import React from 'react';

const Filtrado: React.FC = () => {
  return (
    <>
      Filtrado
      <br />
      <label htmlFor="especie">Selecciones una especie</label>
      <select name="especie" id="1">
        <option value="todos">Todas las mascotas</option>
        <option value="perros">Perros</option>
        <option value="gatos">Gatos</option>
        <option value="roedores">Roedores</option>
        <option value="otros">Otros</option>
      </select>
      <br />
      <br />
      <label htmlFor="tamaño">Selecciones el tamaño</label>
      <select name="tamaño" id="2">
        <option value="todos">Todas los tamaños</option>
        <option value="grande">Grande</option>
        <option value="mediano">Mediano</option>
        <option value="pequeño">Pequeño</option>
      </select>
      <br />
      <br />
      <p>Selecciones la ubicacion</p>
      <select name="provincia" id="3">
        <option value="buenosaires">Buenos Aires</option>
        <option value="cordoba">Cordoba</option>
        <option value="mendoza">Mendoza</option>
        <option value="sanluis">San Luis</option>
      </select>
      <br />
      <br />
    </>
  );
};

export default Filtrado;
