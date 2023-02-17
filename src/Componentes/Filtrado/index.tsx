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
      <label htmlFor="provincia">Selecciones la ubicacion</label>
      <select name="provincia" id="3">
        <option value="todas">Todas las provincias</option>
        <option value="buenosaires">Buenos Aires</option>
        <option value="cordoba">Cordoba</option>
        <option value="mendoza">Mendoza</option>
        <option value="sanluis">San Luis</option>
      </select>
      <br />
      <br />
      <p>Ordenado</p>
      <label htmlFor="edad">Ordenar por edad</label>
      <select name="edad" id="4">
        <option value="defecto">Por defecto</option>
        <option value="menor-mayor">De menor a mayor</option>
        <option value="mayor-menor">De mayor a menor</option>
      </select>
      <br />
      <br />
      <label htmlFor="tiempo">Ordenar por tiempo publicado</label>
      <select name="tiempo" id="5">
        <option value="defecto">Por defecto</option>
        <option value="nuevo">Mas nuevas primero</option>
        <option value="antiguas">Mas antiguas primero</option>
      </select>
    </>
  );
};

export default Filtrado;
