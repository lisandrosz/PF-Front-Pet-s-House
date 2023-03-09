import React, { type ChangeEvent } from 'react';
import { Pagination } from '@mui/material';
import usePagination from 'hooks/Paginacion';
import CardsContainer from 'Componentes/CardsContainer';
import { useCustomSelector, useCustomDispatch } from 'hooks/redux';
import { setPage } from 'redux/slices/mascotas';

const Paginado: React.FC = () => {
  const data = useCustomSelector((state) => state.pets.pets);
  const page = useCustomSelector((state) => state.pets.page);
  const dispatch = useCustomDispatch();

  const porPagina = 3;

  const count = Math.ceil(data.length / porPagina);
  const pets = usePagination(data, porPagina);

  const handleChange = (event: ChangeEvent<unknown>, pages: number): void => {
    dispatch(setPage(pages));
    pets.jump(pages);
  };

  if (page !== pets.currentPage) {
    pets.jump(page);
  }

  return (
    <div className="home">
      <CardsContainer pets={pets.currentData()} />
      <div className="pag">
        <Pagination
          count={count}
          size="large"
          page={page}
          variant="outlined"
          shape="rounded"
          color="primary"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Paginado;
