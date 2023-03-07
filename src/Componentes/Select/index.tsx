import React, { useState, useEffect } from 'react';
import ReactSelect from 'react-select';
import type { SingleValue } from 'react-select';
import { filtrado, traerProvincias, traerLocalidades } from 'helpers';
import { useCustomSelector } from 'hooks/redux';

export interface Option {
  value: string;
  label: string;
}

interface props {
  value: SingleValue<Option>;
}

const SelectComponent: React.FC<props> = () => {
  const [provincias, setProvincias] = useState([
    {
      value: 'Todas las provincias',
      label: 'Todas las provincias'
    }
  ]);

  useEffect(() => {
    traerProvincias().then((res) => {
      setProvincias(res);
    });
  }, []);

  const { provincia, localidad } = useCustomSelector(
    (state) => state.pets.filtros
  );

  const [localidades, setLocalidades] = useState([
    { value: 'Todas las localidades', label: 'Todas las localidades' }
  ]);

  const provHandler = (option: Option | null): void => {
    if (option !== null) {
      filtrado('provincia', option.label);
      traerLocalidades(option.value).then((res) => {
        console.log(res);

        setLocalidades(res);
      });
    }
  };

  const depHandler = (option: Option | null): void => {
    if (option !== null) {
      filtrado('localidad', option.label);
    }
  };

  return (
    <>
      <ReactSelect
        options={provincias}
        onChange={provHandler}
        value={{
          value: provincia,
          label: provincia
        }}
      />
      <ReactSelect
        options={localidades}
        onChange={depHandler}
        value={{
          value: localidad,
          label: localidad
        }}
      />
    </>
  );
};

export default SelectComponent;
