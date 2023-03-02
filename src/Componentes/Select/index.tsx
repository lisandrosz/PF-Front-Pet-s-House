import React, { useState } from 'react';
import ReactSelect from 'react-select';
import type { SingleValue } from 'react-select';
import { filtrado, traerProvincias, traerLocalidades } from 'helpers';
import { useCustomSelector } from 'hooks/redux';

export interface Option {
  value: string;
  label: string;
}
let provOption: Option[];
traerProvincias().then((res) => {
  provOption = res;
});

interface props {
  value: SingleValue<Option>;
}

const SelectComponent: React.FC<props> = () => {
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
        // locOption = res;
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
        options={provOption}
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
