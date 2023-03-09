import React, { useState, useEffect } from 'react';
import type { ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { generarLink } from 'helpers';
import { styled } from '@mui/material/styles';
import dona from '../../Assets/image/imagen6.png';
import Button from '@mui/material/Button';
import './styleDonacion.css';

const ElInput = styled('input')({
  marginTop: '15px'
});

const Bottonlog = styled(Button)({
  marginLeft: '80px',
  marginTop: '15px',
  // width: '70px',
  // height: '50px',
  fontSize: '20px'
});

const HacheTres = styled('h3')({
  marginTop: '20px'
});

const LaPe = styled('p')({
  marginTop: '10px'
});

// const DandoMargen = styled('h1')({
//   marginTop: '15px'
// });

const ContainerDiv = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center'
});

const Imagencita = styled('img')({
  width: '60%',
  marginTop: '10%'
});
const Donacion: React.FC = () => {
  const [precio, setPrecio] = useState('');

  const navigate = useNavigate();

  useEffect((): void => {
    const id = localStorage.getItem('id');
    if (id === null) navigate('/');
  }, [navigate]);

  const changeHandler = ({ target }: ChangeEvent<HTMLInputElement>): void => {
    const { value } = target;
    setPrecio(value);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const email = localStorage.getItem('email');
    const id = localStorage.getItem('id');
    if (email !== null && id !== null) {
      generarLink(email, precio, Number(id)).then((res) => {
        if (res !== undefined) window.location.replace(res);
      });
    }
  };

  return (
    <div>
      <div className="nuevoDiv">
        <h1>Donaciones Pets House</h1>
        <LaPe>
          Las donaciones son muy importantes para poder mantener en
          funcionamiento la pagina, es por eso que desde el equipo de
          desarrolladores de Pets House te queremos dar las gracias por el
          aporte que estas por realizar.
        </LaPe>
        <LaPe>
          Estas donaciones seran destinadas unica y exclusivamente a seguir
          ayudando a los cientos de mascotas que siguen en busca de un hogar.
          Seran utilizadas para mantener la pagina web en funcionamiento y
          ademas para comprar alimentos para los albergues temporales que los
          necesiten
        </LaPe>
      </div>
      <ContainerDiv>
        <div>
          <HacheTres>Elige el monto de tu donacion (ARS):</HacheTres>
          <form onSubmit={submitHandler}>
            <ElInput
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
            <input
              type="text"
              name="donation"
              id="otro"
              onChange={changeHandler}
            />
            <br />
            <Bottonlog
              variant="contained"
              color="secondary"
              size="large"
              type="submit"
            >
              Pagar
            </Bottonlog>
          </form>
        </div>
        <div>
          <Imagencita src={dona} alt="donacion"></Imagencita>
        </div>
      </ContainerDiv>
    </div>
  );
};

export default Donacion;
