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
  const { edad, especie, tamaño, sexo, date } = useCustomSelector(
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
            <option value="perros">Perros</option>
            <option value="gatos">Gatos</option>
            <option value="roedores">Roedores</option>
            <option value="aves">Aves</option>
            <option value="otros">Otros</option>
          </select>
        </div>
        <div className="filtro">
          <label htmlFor="tamaño">Selecciones el tamaño</label>
          <select name="tamaño" id="2" onChange={changeHandler} value={tamaño}>
            <option value="todos">Todas los tamaños</option>
            <option value="grande">Grande</option>
            <option value="mediano">Mediano</option>
            <option value="pequeño">Pequeño</option>
          </select>
        </div>
        <div className="filtro">
          <label htmlFor="sexo">Selecciones el sexo</label>
          <select name="sexo" id="6" onChange={changeHandler} value={sexo}>
            <option value="todos">Todos los sexos</option>
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
          </select>
        </div>
        <div className="filtro">
          <label htmlFor="provincia">Selecciones la ubicacion</label>
          <SelectComponent
            value={{
              value: '',
              label: ''
            }}
          />
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
        <label htmlFor="date">Ordenar por tiempo publicado</label>
        <select name="date" id="5" onChange={changeHandler} value={date}>
          <option value="defecto">Por defecto</option>
          <option value="nuevo">Mas nuevas primero</option>
          <option value="antiguo">Mas antiguas primero</option>
        </select>
      </div>
      <br />
      <div className="filtro">
        <button onClick={resetFiltros}>Reestablecer filtros</button>
      </div>
    </>
  );
};

export default Filtrado;
