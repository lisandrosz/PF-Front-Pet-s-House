import React from 'react';
import { filtrado, resetFiltros } from 'helpers';
import './styleFiltrado.css';
import SelectComponent from 'Componentes/Select';
import type { ChangeEvent } from 'react';
import { useCustomSelector } from 'hooks/redux';

const changeHandler = ({ target }: ChangeEvent<HTMLSelectElement>): void => {
  const { name, value } = target;
  filtrado(name, value);
};

const Filtrado: React.FC = () => {
  const { edad, especie, tamaño } = useCustomSelector(
    (state) => state.pets.filtros
  );

  return (
    <>
      Filtrado
      <div className="conteniendo">
        <div className="filtro">
          <label htmlFor="especie">Selecciones una especie</label>
          <select
            name="especie"
            id="1"
            onChange={changeHandler}
            value={especie}
          >
            <option value="todos">Todas las mascotas</option>
            <option value="perro">Perros</option>
            <option value="gatos">Gatos</option>
            <option value="conejo">Roedores</option>
            <option value="loro">Otros</option>
          </select>
        </div>
        <div className="filtro">
          <label htmlFor="tamaño">Selecciones el tamaño</label>
          <select name="tamaño" id="2" onChange={changeHandler} value={tamaño}>
            <option value="todos">Todas los tamaños</option>
            <option value="grande">Grande</option>
            <option value="mediano">Mediano</option>
            <option value="chico">Pequeño</option>
          </select>
        </div>
        <div className="filtro">
          <label htmlFor="provincia">Selecciones la ubicacion</label>
          <SelectComponent />
        </div>
        <div className="filtro">
          <p>Ordenado</p>
          <label htmlFor="edad">Ordenar por edad</label>
          <select name="edad" id="4" onChange={changeHandler} value={edad}>
            <option value="defecto">Por defecto</option>
            <option value="menor-mayor">De menor a mayor</option>
            <option value="mayor-menor">De mayor a menor</option>
          </select>
        </div>
      </div>
      <div className="filtro">
        <button onClick={resetFiltros}>Reestablecer filtros</button>
      </div>
      {/* <br />
      <label htmlFor="tiempo">Ordenar por tiempo publicado</label>
      <select name="tiempo" id="5" onChange={filtrado}>
        <option value="defecto">Por defecto</option>
        <option value="nuevo">Mas nuevas primero</option>
        <option value="antiguas">Mas antiguas primero</option>
      </select> */}
    </>
  );
};

export default Filtrado;
