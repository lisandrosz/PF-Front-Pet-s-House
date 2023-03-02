import React, { type ChangeEvent, useState } from 'react';
import { Pagination } from '@mui/material';
import usePagination from 'hooks/Paginacion';
import { useCustomSelector } from 'hooks/redux';
import CardsContainer from 'Componentes/CardsContainer';

const Paginado: React.FC = () => {
  const data = useCustomSelector((state) => state.pets.pets);
  const [page, setPage] = useState(1);
  const porPagina = 3;

  const count = Math.ceil(data.length / porPagina);
  const pets = usePagination(data, porPagina);

  const handleChange = (event: ChangeEvent<unknown>, page: number): void => {
    setPage(page);
    pets.jump(page);
  };

  return (
    <div>
      <CardsContainer pets={pets.currentData()} />
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
  );
};

export default Paginado;
