/* eslint-disable @typescript-eslint/key-spacing */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import Card from 'Componentes/Card';
import './styleContainer.css'

const CardsContainer: React.FC = () => {

  interface Pet {
    id: number;
    name: string;
    image: string;
    age: number;
    description: string;
    size: string;
    animal: string;
    healthBook: boolean;
    provincia: string;
    active: boolean;
    localidad: string;
    zona: string;
  }

  const [pets] = useState<Pet[]>([
    {
      "id":1,
      "name":"fido",
      "image":"https://i.pinimg.com/originals/37/2c/db/372cdbb7af08ad27524ef53c53e1ba8d.jpg",
      "age":2,
      "description":"muy tranquilo fido. Es un perro muy grande pero re cariñoso",
      "size":"grande",
      "animal":"perro",
      "healthBook":true,
      "active": true,
      "provincia":"Buenos Aires",
      "localidad":"San Fernando",
      "zona":""
    },
    {
      "id":2,
      "name":"bugs bunny",
      "image":"https://i.pinimg.com/originals/37/2c/db/372cdbb7af08ad27524ef53c53e1ba8d.jpg",
      "age":11,
      "description":"re divertido",
      "size":"chico",
      "animal":"conejo",
      "healthBook":false,
      "active": true,
      "provincia":"Cordoba",
      "localidad":"Villa Warcalde",
      "zona":""
    },
    {
      "id":3,
      "name":"manuelita",
      "image":"https://i.pinimg.com/originals/37/2c/db/372cdbb7af08ad27524ef53c53e1ba8d.jpg",
      "age":20,
      "description":"como come!! lenta la pobre pero se la aguanta",
      "size":"chico",
      "animal":"conejo",
      "healthBook":false,
      "active": true,
      "provincia":"Mendoza",
      "localidad":"La Cieneguita",
      "zona":""
    },
    {
      "id":4,
      "name":"pepito",
      "image":"https://i.pinimg.com/originals/37/2c/db/372cdbb7af08ad27524ef53c53e1ba8d.jpg",
      "age":8,
      "description":"el mejor amigo del solitario",
      "size":"chico",
      "animal":"loro",
      "healthBook":false,
      "active": true,
      "provincia":"San Luis",
      "localidad":"Cerro de la Cruz",
      "zona":""
    },
    {
      "id":4,
      "name":"Zamba",
      "image":"https://i.pinimg.com/originals/37/2c/db/372cdbb7af08ad27524ef53c53e1ba8d.jpg",
      "age":8,
      "description":"perra pitbul re buenita",
      "size":"mediano",
      "animal":"perro",
      "healthBook":true,
      "active": true,
      "provincia":"Buenos Aires",
      "localidad":"Vicente Lopez",
      "zona":""
    }
  ]);


  return (
    <div className="cardsContainer">
      {pets.map((pet,index) => {
        return(
          <Card
            key={index}
            image={pet.image}
            name={pet.name}
            age={pet.age}
            size={pet.size}
            animal={pet.animal}
          />
        )
      })}
      
    </div>
  );
};

export default CardsContainer;
