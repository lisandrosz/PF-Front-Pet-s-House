import React, { useState } from 'react';
import type { ChangeEvent } from 'react';

const Donacion: React.FC = () => {
  const [otro, setOtro] = useState('');

  const changeHandler = ({ target }: ChangeEvent<HTMLInputElement>): void => {
    const { value } = target;
    setOtro(value);
    console.log(otro);
  };

  return (
    <>
      <h1>Donaciones Pets House</h1>
      <p>
        Las donaciones son muy importantes para poder mantener en funcionamiento
        la pagina, es por eso que desde el equipo de desarrolladores de Pets
        House te queremos dar las gracias por el aporte que estas por realizar.
      </p>
      <p>
        Estas donaciones seran destinadas unica y exclusivamente a seguir
        ayudando a los cientos de mascotas que siguen en busca de un hogar.
        Seran utilizadas para mantener la pagina web en funcionamiento y ademas
        para comprar alimentos para los albergues temporales que los necesiten
      </p>
      <h3>Elige el monto de tu donacion (ARS):</h3>
      <form>
        <input
          type="radio"
          name="donation"
          id="100"
          value={100}
          onChange={changeHandler}
        />
        <label htmlFor="100">$100</label> <br />
        <input
          type="radio"
          name="donation"
          id="200"
          value={200}
          onChange={changeHandler}
        />
        <label htmlFor="200">$200</label> <br />
        <input
          type="radio"
          name="donation"
          id="350"
          value={350}
          onChange={changeHandler}
        />
        <label htmlFor="350">$350</label> <br />
        <input
          type="radio"
          name="donation"
          id="500"
          value={500}
          onChange={changeHandler}
        />
        <label htmlFor="500">$500</label> <br />
        <input
          type="radio"
          name="donation"
          id="750"
          value={750}
          onChange={changeHandler}
        />
        <label htmlFor="750">$750</label> <br />
        <input
          type="radio"
          name="donation"
          id="1000"
          value={1000}
          onChange={changeHandler}
        />
        <label htmlFor="1000">$1000</label> <br />
        <input
          type="radio"
          name="donation"
          id="1500"
          value={1500}
          onChange={changeHandler}
        />
        <label htmlFor="1500">$1500</label> <br />
        <input
          type="radio"
          name="donation"
          id="2000"
          value={2000}
          onChange={changeHandler}
        />
        <label htmlFor="2000">$2000</label> <br />
        <label htmlFor="otro">Otro: </label>
        <input type="text" name="donation" id="otro" onChange={changeHandler} />
        <br />
      </form>
    </>
  );
};

export default Donacion;
