import { Button, List, ListItem } from '@mui/material';
import React, { useState } from 'react';
import PetDash from './petDash';
import UserDash from './userDash';
import './dashboard.css';

const Dashboard: React.FC = () => {
  const rol = localStorage.getItem('rol');
  const [toShow, setToShow] = useState('pets');

  function toShowHandler(e: React.MouseEvent<HTMLButtonElement>): void {
    const button: HTMLButtonElement = e.currentTarget;
    setToShow(button.value);
  }

  if (rol === 'administrador') {
    return (
      <div className="dashContainer">
        <div className="sideBar">
          <List>
            <ListItem>
              <Button onClick={toShowHandler} value="users">
                Usuarios
              </Button>
            </ListItem>
            <ListItem>
              <Button onClick={toShowHandler} value="pets">
                Mascotas
              </Button>
            </ListItem>
            <ListItem>
              <Button onClick={toShowHandler} value="donations">
                Donaciones
              </Button>
            </ListItem>
          </List>
        </div>
        <div className="showPanel">
          {toShow === 'pets' && <PetDash></PetDash>}
          {toShow === 'users' && <UserDash></UserDash>}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        Esta funcion solo esta disponible para el admin
        <hr />
      </div>
    );
  }
};

export default Dashboard;
