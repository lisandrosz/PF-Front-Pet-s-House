import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { generarLink } from 'helpers';
import { styled } from '@mui/material/styles';
import dona from '../../Assets/image/imagen6.png';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import './styleDonacion.css';

const Bottonlog = styled(Button)({
  fontSize: '20px'
});

const HacheTres = styled('h3')({
  fontSize: '25px',
  marginTop: '20px',
  color: '#7d8bcc'
});

const LaPe = styled('p')({
  marginTop: '10px'
});

const ContainerDiv = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center'
});

const DivSelect = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginLeft: '100px'
});

const Imagencita = styled('img')({
  width: '60%',
  marginTop: '10%',
  marginRight: '100px'
});
const Donacion: React.FC = () => {
  const [precio, setPrecio] = useState('');

  const navigate = useNavigate();

  useEffect((): void => {
    const id = localStorage.getItem('id');
    if (id === null) navigate('/');
  }, [navigate]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setPrecio((event.target as HTMLInputElement).value);
    console.log(precio);
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
        <DivSelect>
          <HacheTres>Elige el monto de tu donacion (ARS):</HacheTres>

          <form onSubmit={submitHandler}>
            <FormControl>
              <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
              <br />
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={precio}
                onChange={handleChange}
                row
              >
                <FormControlLabel
                  value="100"
                  control={<Radio />}
                  label="$ 100"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="200"
                  control={<Radio />}
                  label="$ 200"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="350"
                  control={<Radio />}
                  label="$ 350"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="500"
                  control={<Radio />}
                  label="$ 500"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="750"
                  control={<Radio />}
                  label="$ 750"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="1000"
                  control={<Radio />}
                  label="$ 1000"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="1500"
                  control={<Radio />}
                  label="$ 1500"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="2000"
                  control={<Radio />}
                  label="$ 2000"
                  labelPlacement="top"
                />
              </RadioGroup>
            </FormControl>

            <br />
            <div className="boton">
              <Bottonlog
                variant="contained"
                color="secondary"
                size="large"
                type="submit"
              >
                Pagar
              </Bottonlog>
            </div>
          </form>
        </DivSelect>
        <div>
          <Imagencita src={dona} alt="donacion"></Imagencita>
        </div>
      </ContainerDiv>
    </div>
  );
};

export default Donacion;
