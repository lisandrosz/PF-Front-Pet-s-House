import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import { getDonations } from 'helpers';
import React, { useEffect, useState } from 'react';
import { type User } from 'redux/slices/users';
import './dashboard.css';

export interface Donation {
  id: string;
  money: number;
  date: string;
  UserId: number;
  User: User;
}

const DonationDash: React.FC = () => {
  const [donations, setDonations] = useState([
    {
      id: '',
      money: 0,
      date: '',
      UserId: 0,
      User: {
        name: ''
      }
    }
  ]);
  useEffect((): void => {
    getDonations().then((res) => {
      setDonations(res);
    });
  }, []);

  return (
    <div className="showContainer">
      <TableContainer className="tableContainer">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={4}>
                <h2>Listado de Donaciones</h2>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">ID</TableCell>
              <TableCell align="center">Cantidad</TableCell>
              <TableCell align="center">Usuario</TableCell>
              <TableCell align="center">Fecha de Publicaion</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {donations.map((donation, index) => {
              return (
                <TableRow key={index}>
                  <TableCell align="center">{donation.id}</TableCell>
                  <TableCell align="center">{donation.money} $</TableCell>
                  <TableCell align="center">{donation.User.name}</TableCell>
                  <TableCell align="center">{donation.date}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DonationDash;
