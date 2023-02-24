import React, { useState } from 'react';
import ReactSelect from 'react-select';
import type { SingleValue } from 'react-select';
import { filtrado } from 'helpers';
import { useCustomSelector } from 'hooks/redux';

interface Option {
  value: string;
  label: string;
}
const provOption: Option[] = [
  { value: 'Provincias', label: 'Todas las provincias' },
  { value: 'Misiones', label: 'Misiones' },
  { value: 'San Luis', label: 'San Luis' },
  { value: 'San Juan', label: 'San Juan' },
  { value: 'Entre Ríos', label: 'Entre Ríos' },
  { value: 'Santa Cruz', label: 'Santa Cruz' },
  { value: 'Río Negro', label: 'Río Negro' },
  { value: 'Chubut', label: 'Chubut' },
  { value: 'Córdoba', label: 'Córdoba' },
  { value: 'Mendoza', label: 'Mendoza' },
  { value: 'La Rioja', label: 'La Rioja' },
  { value: 'Catamarca', label: 'Catamarca' },
  { value: 'La Pampa', label: 'La Pampa' },
  { value: 'Santiago del Estero', label: 'Santiago del Estero' },
  { value: 'Corrientes', label: 'Corrientes' },
  { value: 'Santa Fe', label: 'Santa Fe' },
  { value: 'Tucumán', label: 'Tucumán' },
  { value: 'Neuquén', label: 'Neuquén' },
  { value: 'Salta', label: 'Salta' },
  { value: 'Chaco', label: 'Chaco' },
  { value: 'Formosa', label: 'Formosa' },
  { value: 'Jujuy', label: 'Jujuy' },
  {
    value: 'Ciudad Autónoma de Buenos Aires',
    label: 'Ciudad Autónoma de Buenos Aires'
  },
  { value: 'Buenos Aires', label: 'Buenos Aires' },
  {
    value: 'Tierra del Fuego',
    label: 'Tierra del Fuego'
  }
];
interface Provincias {
  Todas: Option[];
  Misiones: Option[];
  'San Luis': Option[];
  'San Juan': Option[];
  'Entre Ríos': Option[];
  'Santa Cruz': Option[];
  'Río Negro': Option[];
  Chubut: Option[];
  Córdoba: Option[];
  Mendoza: Option[];
  'La Rioja': Option[];
  Catamarca: Option[];
  'La Pampa': Option[];
  'Santiago del Estero': Option[];
  Corrientes: Option[];
  'Santa Fe': Option[];
  Tucumán: Option[];
  Neuquén: Option[];
  Salta: Option[];
  Chaco: Option[];
  Formosa: Option[];
  Jujuy: Option[];
  'Ciudad Autónoma de Buenos Aires': Option[];
  'Buenos Aires': Option[];
  'Tierra del Fuego': Option[];
}
const provincias: Provincias = {
  Todas: [
    {
      value: 'Provincias',
      label: 'Todas las provincias'
    }
  ],
  Misiones: [
    {
      value: 'Localidades',
      label: 'Todas las localidades'
    },
    {
      value: 'Apóstoles',
      label: 'Apóstoles'
    },
    {
      value: 'Tres Capones',
      label: 'Tres Capones'
    },
    {
      value: 'Mártires',
      label: 'Mártires'
    },
    {
      value: 'Santiago de Liniers',
      label: 'Santiago de Liniers'
    },
    {
      value: 'San Pedro',
      label: 'San Pedro'
    },
    {
      value: 'Campo Grande',
      label: 'Campo Grande'
    },
    {
      value: 'Puerto Rico',
      label: 'Puerto Rico'
    },
    {
      value: 'Montecarlo',
      label: 'Montecarlo'
    },
    {
      value: 'El Soberbio',
      label: 'El Soberbio'
    },
    {
      value: 'Cerro Corá',
      label: 'Cerro Corá'
    },
    {
      value: 'Garupá',
      label: 'Garupá'
    },
    {
      value: 'Santa Ana',
      label: 'Santa Ana'
    },
    {
      value: 'Corpus',
      label: 'Corpus'
    },
    {
      value: 'Gobernador Roca',
      label: 'Gobernador Roca'
    },
    {
      value: 'Posadas',
      label: 'Posadas'
    },
    {
      value: 'Panambí',
      label: 'Panambí'
    },
    {
      value: 'Hipólito Irigoyen',
      label: 'Hipólito Irigoyen'
    },
    {
      value: 'Profundidad',
      label: 'Profundidad'
    },
    {
      value: 'Azara',
      label: 'Azara'
    },
    {
      value: 'Colonia Aurora',
      label: 'Colonia Aurora'
    },
    {
      value: 'Fachinal',
      label: 'Fachinal'
    },
    {
      value: 'El Alcázar',
      label: 'El Alcázar'
    },
    {
      value: 'Capioví',
      label: 'Capioví'
    },
    {
      value: 'Santo Pipo',
      label: 'Santo Pipo'
    },
    {
      value: 'Colonia Polana',
      label: 'Colonia Polana'
    },
    {
      value: 'Gobernador López',
      label: 'Gobernador López'
    },
    {
      value: 'Jardín América',
      label: 'Jardín América'
    },
    {
      value: 'Caa Yarí',
      label: 'Caa Yarí'
    },
    {
      value: 'Olegario V. Andrade',
      label: 'Olegario V. Andrade'
    },
    {
      value: 'Cerro Azul',
      label: 'Cerro Azul'
    },
    {
      value: 'General J. J. Urquiza',
      label: 'General J. J. Urquiza'
    },
    {
      value: 'Alba Posse',
      label: 'Alba Posse'
    },
    {
      value: 'Los Helechos',
      label: 'Los Helechos'
    },
    {
      value: 'San Vicente',
      label: 'San Vicente'
    },
    {
      value: 'Mojón Grande',
      label: 'Mojón Grande'
    },
    {
      value: 'Gral. Alvear',
      label: 'Gral. Alvear'
    },
    {
      value: 'San Javier',
      label: 'San Javier'
    },
    {
      value: 'Ruiz de Montoya',
      label: 'Ruiz de Montoya'
    },
    {
      value: 'Santa María',
      label: 'Santa María'
    },
    {
      value: 'Guaraní',
      label: 'Guaraní'
    },
    {
      value: 'San Martín',
      label: 'San Martín'
    },
    {
      value: 'San José',
      label: 'San José'
    },
    {
      value: 'Puerto Esperanza',
      label: 'Puerto Esperanza'
    },
    {
      value: 'Itacaruaré',
      label: 'Itacaruaré'
    },
    {
      value: 'Almafuerte',
      label: 'Almafuerte'
    },
    {
      value: 'Colonia Alberdi',
      label: 'Colonia Alberdi'
    },
    {
      value: 'Leandro N. Alem',
      label: 'Leandro N. Alem'
    },
    {
      value: 'Colonia Delicia',
      label: 'Colonia Delicia'
    },
    {
      value: 'Bernardo de Irigoyen',
      label: 'Bernardo de Irigoyen'
    },
    {
      value: 'Colonia Victoria',
      label: 'Colonia Victoria'
    },
    {
      value: '25 de Mayo',
      label: '25 de Mayo'
    },
    {
      value: 'Oberá',
      label: 'Oberá'
    },
    {
      value: 'Iguazú',
      label: 'Iguazú'
    },
    {
      value: 'Leoni',
      label: 'Leoni'
    },
    {
      value: 'Caraguatay',
      label: 'Caraguatay'
    },
    {
      value: 'Campo Viera',
      label: 'Campo Viera'
    },
    {
      value: 'Dos Arroyos',
      label: 'Dos Arroyos'
    },
    {
      value: 'Concepción de la Sierra',
      label: 'Concepción de la Sierra'
    },
    {
      value: 'Arroyo del Medio',
      label: 'Arroyo del Medio'
    },
    {
      value: '9 de Julio',
      label: '9 de Julio'
    },
    {
      value: 'Bonpland',
      label: 'Bonpland'
    },
    {
      value: 'San Ignacio',
      label: 'San Ignacio'
    },
    {
      value: 'Comandante A. Guacurary',
      label: 'Comandante A. Guacurary'
    },
    {
      value: 'San Antonio',
      label: 'San Antonio'
    },
    {
      value: 'Aristóbulo del Valle',
      label: 'Aristóbulo del Valle'
    },
    {
      value: 'Ameghino',
      label: 'Ameghino'
    },
    {
      value: 'Campo Ramón',
      label: 'Campo Ramón'
    },
    {
      value: 'Eldorado',
      label: 'Eldorado'
    },
    {
      value: 'Puerto Piray',
      label: 'Puerto Piray'
    },
    {
      value: 'Garuhapé',
      label: 'Garuhapé'
    },
    {
      value: 'Colonia Wanda',
      label: 'Colonia Wanda'
    },
    {
      value: 'Dos de Mayo',
      label: 'Dos de Mayo'
    },
    {
      value: 'Candelaria',
      label: 'Candelaria'
    },
    {
      value: 'Loreto',
      label: 'Loreto'
    },
    {
      value: 'Libertad',
      label: 'Libertad'
    }
  ],
  'San Luis': [
    {
      value: 'Localidades',
      label: 'Todas las localidades'
    },
    {
      value: 'Zanjitas',
      label: 'Zanjitas'
    },
    {
      value: 'Beazley',
      label: 'Beazley'
    },
    {
      value: 'Balde',
      label: 'Balde'
    },
    {
      value: 'Fraga',
      label: 'Fraga'
    },
    {
      value: 'P. de los Funes',
      label: 'P. de los Funes'
    },
    {
      value: 'Carolina',
      label: 'Carolina'
    },
    {
      value: 'San Francisco',
      label: 'San Francisco'
    },
    {
      value: 'Merlo',
      label: 'Merlo'
    },
    {
      value: 'Juana Koslay',
      label: 'Juana Koslay'
    },
    {
      value: 'Batavia',
      label: 'Batavia'
    },
    {
      value: 'Ranqueles',
      label: 'Ranqueles'
    },
    {
      value: 'Alto Pencoso',
      label: 'Alto Pencoso'
    },
    {
      value: 'Las Aguadas',
      label: 'Las Aguadas'
    },
    {
      value: 'San Martin',
      label: 'San Martin'
    },
    {
      value: 'Leandro N. Alem',
      label: 'Leandro N. Alem'
    },
    {
      value: 'La Calera',
      label: 'La Calera'
    },
    {
      value: 'La Punilla',
      label: 'La Punilla'
    },
    {
      value: 'Fortin el Patria',
      label: 'Fortin el Patria'
    },
    {
      value: 'Lujan',
      label: 'Lujan'
    },
    {
      value: 'Quines',
      label: 'Quines'
    },
    {
      value: 'Las Vertientes',
      label: 'Las Vertientes'
    },
    {
      value: 'Paso Grande',
      label: 'Paso Grande'
    },
    {
      value: 'San Luis',
      label: 'San Luis'
    },
    {
      value: 'El Trapiche',
      label: 'El Trapiche'
    },
    {
      value: 'Navia',
      label: 'Navia'
    },
    {
      value: 'Desaguadero',
      label: 'Desaguadero'
    },
    {
      value: 'Villa Mercedes',
      label: 'Villa Mercedes'
    },
    {
      value: 'Candelaria',
      label: 'Candelaria'
    },
    {
      value: 'Alto Pelado',
      label: 'Alto Pelado'
    },
    {
      value: 'Las Lagunas',
      label: 'Las Lagunas'
    },
    {
      value: 'Las Chacras',
      label: 'Las Chacras'
    },
    {
      value: 'V, de Praga',
      label: 'V, de Praga'
    },
    {
      value: 'Villa del Carmen',
      label: 'Villa del Carmen'
    },
    {
      value: 'San Pablo',
      label: 'San Pablo'
    },
    {
      value: 'Renca',
      label: 'Renca'
    },
    {
      value: 'Tilisarao',
      label: 'Tilisarao'
    },
    {
      value: 'Los Molles',
      label: 'Los Molles'
    },
    {
      value: 'V, Gral, Roca',
      label: 'V, Gral, Roca'
    },
    {
      value: 'V, de la Quebrada',
      label: 'V, de la Quebrada'
    },
    {
      value: 'Nogoli',
      label: 'Nogoli'
    },
    {
      value: 'Carpinteria',
      label: 'Carpinteria'
    },
    {
      value: 'La Toma',
      label: 'La Toma'
    },
    {
      value: 'Juan Llerena',
      label: 'Juan Llerena'
    },
    {
      value: 'Concaran',
      label: 'Concaran'
    },
    {
      value: 'Talita',
      label: 'Talita'
    },
    {
      value: 'Sta Rosa del Conlara',
      label: 'Sta Rosa del Conlara'
    },
    {
      value: 'Villa Larca',
      label: 'Villa Larca'
    },
    {
      value: 'Papagayos',
      label: 'Papagayos'
    },
    {
      value: 'Naschel',
      label: 'Naschel'
    },
    {
      value: 'Justo Daract',
      label: 'Justo Daract'
    },
    {
      value: 'Saladillo',
      label: 'Saladillo'
    },
    {
      value: 'Bagual',
      label: 'Bagual'
    },
    {
      value: 'Arizona',
      label: 'Arizona'
    },
    {
      value: 'Buena Esperanza',
      label: 'Buena Esperanza'
    },
    {
      value: 'Union',
      label: 'Union'
    },
    {
      value: 'San Jeronimo',
      label: 'San Jeronimo'
    },
    {
      value: 'El Volcan',
      label: 'El Volcan'
    },
    {
      value: 'Estancia Grande',
      label: 'Estancia Grande'
    },
    {
      value: 'La Punta',
      label: 'La Punta'
    },
    {
      value: 'Nueva Galia',
      label: 'Nueva Galia'
    },
    {
      value: 'Fortuna',
      label: 'Fortuna'
    },
    {
      value: 'Anchorena',
      label: 'Anchorena'
    },
    {
      value: 'Juan Jorba',
      label: 'Juan Jorba'
    },
    {
      value: 'Lavaisse',
      label: 'Lavaisse'
    },
    {
      value: 'San Jose del Morro',
      label: 'San Jose del Morro'
    },
    {
      value: 'Cortaderas',
      label: 'Cortaderas'
    },
    {
      value: 'Lafinur',
      label: 'Lafinur'
    }
  ],
  'San Juan': [
    {
      value: 'Localidades',
      label: 'Todas las localidades'
    },
    {
      value: 'Iglesia',
      label: 'Iglesia'
    },
    {
      value: 'Valle Fértil',
      label: 'Valle Fértil'
    },
    {
      value: 'Ullum',
      label: 'Ullum'
    },
    {
      value: 'Albardón',
      label: 'Albardón'
    },
    {
      value: 'Zonda',
      label: 'Zonda'
    },
    {
      value: 'Chimbas',
      label: 'Chimbas'
    },
    {
      value: 'Rivadavia',
      label: 'Rivadavia'
    },
    {
      value: 'Santa Lucía',
      label: 'Santa Lucía'
    },
    {
      value: 'Rawson',
      label: 'Rawson'
    },
    {
      value: 'Pocito',
      label: 'Pocito'
    },
    {
      value: 'Sarmiento',
      label: 'Sarmiento'
    },
    {
      value: 'Jáchal',
      label: 'Jáchal'
    },
    {
      value: 'Calingasta',
      label: 'Calingasta'
    },
    {
      value: '25 de Mayo',
      label: '25 de Mayo'
    },
    {
      value: 'San Juan',
      label: 'San Juan'
    },
    {
      value: '9 de Julio',
      label: '9 de Julio'
    },
    {
      value: 'San Martín',
      label: 'San Martín'
    },
    {
      value: 'Angaco',
      label: 'Angaco'
    },
    {
      value: 'Caucete',
      label: 'Caucete'
    }
  ],
  'Entre Ríos': [
    {
      value: 'Localidades',
      label: 'Todas las localidades'
    },
    {
      value: 'Villaguay',
      label: 'Villaguay'
    },
    {
      value: 'San Salvador',
      label: 'San Salvador'
    },
    {
      value: 'Nogoyá',
      label: 'Nogoyá'
    },
    {
      value: 'Tala',
      label: 'Tala'
    },
    {
      value: 'La Paz',
      label: 'La Paz'
    },
    {
      value: 'Concordia',
      label: 'Concordia'
    },
    {
      value: 'Federal',
      label: 'Federal'
    },
    {
      value: 'Gualeguaychú',
      label: 'Gualeguaychú'
    },
    {
      value: 'Islas del Ibicuy',
      label: 'Islas del Ibicuy'
    },
    {
      value: 'Victoria',
      label: 'Victoria'
    },
    {
      value: 'Diamante',
      label: 'Diamante'
    },
    {
      value: 'Uruguay',
      label: 'Uruguay'
    },
    {
      value: 'Paraná',
      label: 'Paraná'
    },
    {
      value: 'Colón',
      label: 'Colón'
    },
    {
      value: 'Gualeguay',
      label: 'Gualeguay'
    },
    {
      value: 'Federación',
      label: 'Federación'
    },
    {
      value: 'Feliciano',
      label: 'Feliciano'
    }
  ],
  'Santa Cruz': [
    {
      value: 'Localidades',
      label: 'Todas las localidades'
    },
    {
      value: 'Magallanes',
      label: 'Magallanes'
    },
    {
      value: 'Corpen Aike',
      label: 'Corpen Aike'
    },
    {
      value: 'Lago Buenos Aires',
      label: 'Lago Buenos Aires'
    },
    {
      value: 'Deseado',
      label: 'Deseado'
    },
    {
      value: 'Río Chico',
      label: 'Río Chico'
    },
    {
      value: 'Lago Argentino',
      label: 'Lago Argentino'
    },
    {
      value: 'Güer Aike',
      label: 'Güer Aike'
    }
  ],
  'Río Negro': [
    {
      value: 'Localidades',
      label: 'Todas las localidades'
    },
    {
      value: 'Cipolletti',
      label: 'Cipolletti'
    },
    {
      value: 'Ing. Jacobacci',
      label: 'Ing. Jacobacci'
    },
    {
      value: 'El Bolson',
      label: 'El Bolson'
    },
    {
      value: 'San Carlos de Bariloche',
      label: 'San Carlos de Bariloche'
    },
    {
      value: 'Guardia Mitre',
      label: 'Guardia Mitre'
    },
    {
      value: 'Gral. Roca',
      label: 'Gral. Roca'
    },
    {
      value: 'Luis Beltran',
      label: 'Luis Beltran'
    },
    {
      value: 'Gral. Conesa',
      label: 'Gral. Conesa'
    },
    {
      value: 'Choele Choel',
      label: 'Choele Choel'
    },
    {
      value: 'Lamarque',
      label: 'Lamarque'
    },
    {
      value: 'Coronel Belisle',
      label: 'Coronel Belisle'
    },
    {
      value: 'Darwin',
      label: 'Darwin'
    },
    {
      value: 'Chimpay',
      label: 'Chimpay'
    },
    {
      value: 'Chichinales',
      label: 'Chichinales'
    },
    {
      value: 'Allen',
      label: 'Allen'
    },
    {
      value: 'Cinco Saltos',
      label: 'Cinco Saltos'
    },
    {
      value: 'Campo Grande',
      label: 'Campo Grande'
    },
    {
      value: 'Contralmirante Cordero',
      label: 'Contralmirante Cordero'
    },
    {
      value: 'Mainque',
      label: 'Mainque'
    },
    {
      value: 'Catriel',
      label: 'Catriel'
    },
    {
      value: 'Dina Huapi',
      label: 'Dina Huapi'
    },
    {
      value: 'Gral. Enrique Godoy',
      label: 'Gral. Enrique Godoy'
    },
    {
      value: 'Ingeniero Huergo',
      label: 'Ingeniero Huergo'
    },
    {
      value: 'Villa Regina',
      label: 'Villa Regina'
    },
    {
      value: 'Rìo Colorado',
      label: 'Rìo Colorado'
    },
    {
      value: 'El Manso',
      label: 'El Manso'
    },
    {
      value: 'San Javier',
      label: 'San Javier'
    },
    {
      value: 'Arroyo Ventana',
      label: 'Arroyo Ventana'
    },
    {
      value: 'Laguna Blanca',
      label: 'Laguna Blanca'
    },
    {
      value: 'Pilquiniyeu',
      label: 'Pilquiniyeu'
    },
    {
      value: 'Nahuel Niyeu',
      label: 'Nahuel Niyeu'
    },
    {
      value: 'Sierra Paileman',
      label: 'Sierra Paileman'
    },
    {
      value: 'Peñas Blancas',
      label: 'Peñas Blancas'
    },
    {
      value: 'Paso Flores',
      label: 'Paso Flores'
    },
    {
      value: 'Aguada Guzman',
      label: 'Aguada Guzman'
    },
    {
      value: 'Valle Azul',
      label: 'Valle Azul'
    },
    {
      value: 'Villa Llanquin',
      label: 'Villa Llanquin'
    },
    {
      value: 'Arroyo los Berros',
      label: 'Arroyo los Berros'
    },
    {
      value: 'Rincon de Treneta',
      label: 'Rincon de Treneta'
    },
    {
      value: 'Comico',
      label: 'Comico'
    },
    {
      value: 'El Cain',
      label: 'El Cain'
    },
    {
      value: 'Cona Niyeu',
      label: 'Cona Niyeu'
    },
    {
      value: 'Yaminué',
      label: 'Yaminué'
    },
    {
      value: 'El Cuy',
      label: 'El Cuy'
    },
    {
      value: 'Aguada de Guerra',
      label: 'Aguada de Guerra'
    },
    {
      value: 'Naupa Huen',
      label: 'Naupa Huen'
    },
    {
      value: 'Colan Conhué',
      label: 'Colan Conhué'
    },
    {
      value: 'Mencuen',
      label: 'Mencuen'
    },
    {
      value: 'Ojos de Agua',
      label: 'Ojos de Agua'
    },
    {
      value: 'Clemente Onelli',
      label: 'Clemente Onelli'
    },
    {
      value: 'Pilquiniyeu del Limay',
      label: 'Pilquiniyeu del Limay'
    },
    {
      value: 'Mamuel Choique',
      label: 'Mamuel Choique'
    },
    {
      value: 'Rio Chico',
      label: 'Rio Chico'
    },
    {
      value: 'Viedma',
      label: 'Viedma'
    },
    {
      value: 'Maquinchao',
      label: 'Maquinchao'
    },
    {
      value: 'Sierra Grande',
      label: 'Sierra Grande'
    },
    {
      value: 'Pilcaniyeu',
      label: 'Pilcaniyeu'
    },
    {
      value: 'San Antonio Oeste',
      label: 'San Antonio Oeste'
    },
    {
      value: 'Comallo',
      label: 'Comallo'
    },
    {
      value: 'Los Menucos',
      label: 'Los Menucos'
    },
    {
      value: 'Valcheta',
      label: 'Valcheta'
    },
    {
      value: 'Sierra Colorada',
      label: 'Sierra Colorada'
    },
    {
      value: 'Ministro Ramos Mexia',
      label: 'Ministro Ramos Mexia'
    },
    {
      value: 'Gral. Fdez. Oro',
      label: 'Gral. Fdez. Oro'
    },
    {
      value: 'Pomona',
      label: 'Pomona'
    },
    {
      value: 'Ñorquinco',
      label: 'Ñorquinco'
    },
    {
      value: 'Cervantes',
      label: 'Cervantes'
    },
    {
      value: 'Chipauquil',
      label: 'Chipauquil'
    },
    {
      value: 'Prahuaniyeu',
      label: 'Prahuaniyeu'
    },
    {
      value: 'Aguada Cecilio',
      label: 'Aguada Cecilio'
    }
  ],
  Chubut: [
    {
      value: 'Localidades',
      label: 'Todas las localidades'
    },
    {
      value: 'Buen Pasto',
      label: 'Buen Pasto'
    },
    {
      value: 'Carrenleufú',
      label: 'Carrenleufú'
    },
    {
      value: 'El Maitén',
      label: 'El Maitén'
    },
    {
      value: 'Puerto Madryn',
      label: 'Puerto Madryn'
    },
    {
      value: 'Cholila',
      label: 'Cholila'
    },
    {
      value: 'Rawson',
      label: 'Rawson'
    },
    {
      value: '28 de Julio',
      label: '28 de Julio'
    },
    {
      value: 'Río Pico',
      label: 'Río Pico'
    },
    {
      value: 'Alto Río Senguer',
      label: 'Alto Río Senguer'
    },
    {
      value: 'Gobernador Costa',
      label: 'Gobernador Costa'
    },
    {
      value: 'El Hoyo',
      label: 'El Hoyo'
    },
    {
      value: 'Dolavon',
      label: 'Dolavon'
    },
    {
      value: 'Trelew',
      label: 'Trelew'
    },
    {
      value: 'José de San Martín',
      label: 'José de San Martín'
    },
    {
      value: 'Aldea Beleiro',
      label: 'Aldea Beleiro'
    },
    {
      value: 'Cushamen',
      label: 'Cushamen'
    },
    {
      value: 'Dique Florentino Ameghino',
      label: 'Dique Florentino Ameghino'
    },
    {
      value: 'Doctor Ricardo Rojas',
      label: 'Doctor Ricardo Rojas'
    },
    {
      value: 'Corcovado',
      label: 'Corcovado'
    },
    {
      value: 'Puerto Pirámides',
      label: 'Puerto Pirámides'
    },
    {
      value: 'Sarmiento',
      label: 'Sarmiento'
    },
    {
      value: 'Paso de Indios',
      label: 'Paso de Indios'
    },
    {
      value: 'Gualjaina',
      label: 'Gualjaina'
    },
    {
      value: 'Aldea Epulef',
      label: 'Aldea Epulef'
    },
    {
      value: 'Facundo',
      label: 'Facundo'
    },
    {
      value: 'Gan Gan',
      label: 'Gan Gan'
    },
    {
      value: 'Lago Blanco',
      label: 'Lago Blanco'
    },
    {
      value: 'Lagunita Salada',
      label: 'Lagunita Salada'
    },
    {
      value: 'Las Plumas',
      label: 'Las Plumas'
    },
    {
      value: 'Los Altares',
      label: 'Los Altares'
    },
    {
      value: 'Paso del Sapo',
      label: 'Paso del Sapo'
    },
    {
      value: 'Telsen',
      label: 'Telsen'
    },
    {
      value: 'Trevelín',
      label: 'Trevelín'
    },
    {
      value: 'Dr. Atilio Oscar Viglione',
      label: 'Dr. Atilio Oscar Viglione'
    },
    {
      value: 'Comodoro Rivadavia',
      label: 'Comodoro Rivadavia'
    },
    {
      value: 'Lago Puelo',
      label: 'Lago Puelo'
    },
    {
      value: 'Epuyén',
      label: 'Epuyén'
    },
    {
      value: 'Gaiman',
      label: 'Gaiman'
    },
    {
      value: 'Esquel',
      label: 'Esquel'
    },
    {
      value: 'Tecka',
      label: 'Tecka'
    },
    {
      value: 'Rada Tilly',
      label: 'Rada Tilly'
    },
    {
      value: 'Río Mayo',
      label: 'Río Mayo'
    },
    {
      value: 'Camarones',
      label: 'Camarones'
    },
    {
      value: 'Cerro Centinela',
      label: 'Cerro Centinela'
    },
    {
      value: 'Colan Conhué',
      label: 'Colan Conhué'
    },
    {
      value: 'Gastre',
      label: 'Gastre'
    }
  ],
  Córdoba: [
    {
      value: 'Localidades',
      label: 'Todas las localidades'
    },
    {
      value: 'Ballesteros',
      label: 'Ballesteros'
    },
    {
      value: 'Río Bamba',
      label: 'Río Bamba'
    },
    {
      value: 'Río Ceballos',
      label: 'Río Ceballos'
    },
    {
      value: 'Bialet Massé',
      label: 'Bialet Massé'
    },
    {
      value: 'Jesús María',
      label: 'Jesús María'
    },
    {
      value: 'La Cautiva',
      label: 'La Cautiva'
    },
    {
      value: 'La Granja',
      label: 'La Granja'
    },
    {
      value: 'Colazo',
      label: 'Colazo'
    },
    {
      value: 'Alcira',
      label: 'Alcira'
    },
    {
      value: 'Almafuerte',
      label: 'Almafuerte'
    },
    {
      value: 'Alpa Corral',
      label: 'Alpa Corral'
    },
    {
      value: 'Alto Alegre',
      label: 'Alto Alegre'
    },
    {
      value: 'Achiras',
      label: 'Achiras'
    },
    {
      value: 'Agua de Oro',
      label: 'Agua de Oro'
    },
    {
      value: 'Amboy',
      label: 'Amboy'
    },
    {
      value: 'Alto de los Quebrachos',
      label: 'Alto de los Quebrachos'
    },
    {
      value: 'Anisacate',
      label: 'Anisacate'
    },
    {
      value: 'Arroyo los Patos',
      label: 'Arroyo los Patos'
    },
    {
      value: 'Ambul',
      label: 'Ambul'
    },
    {
      value: 'Arias',
      label: 'Arias'
    },
    {
      value: 'Atahona',
      label: 'Atahona'
    },
    {
      value: 'Ausonia',
      label: 'Ausonia'
    },
    {
      value: 'Avellaneda',
      label: 'Avellaneda'
    },
    {
      value: 'Ballesteros Sud',
      label: 'Ballesteros Sud'
    },
    {
      value: 'Balnearia',
      label: 'Balnearia'
    },
    {
      value: 'Bañado de Soto',
      label: 'Bañado de Soto'
    },
    {
      value: 'Arroyito',
      label: 'Arroyito'
    },
    {
      value: 'Bell Ville',
      label: 'Bell Ville'
    },
    {
      value: 'Berrotarán',
      label: 'Berrotarán'
    },
    {
      value: 'Bouwer',
      label: 'Bouwer'
    },
    {
      value: 'Brinkmann',
      label: 'Brinkmann'
    },
    {
      value: 'Buchardo',
      label: 'Buchardo'
    },
    {
      value: 'Bengolea',
      label: 'Bengolea'
    },
    {
      value: 'Benjamín Gould',
      label: 'Benjamín Gould'
    },
    {
      value: 'Cavanagh',
      label: 'Cavanagh'
    },
    {
      value: 'Cañada de Luque',
      label: 'Cañada de Luque'
    },
    {
      value: 'Cabalango',
      label: 'Cabalango'
    },
    {
      value: 'Villa del Dique',
      label: 'Villa del Dique'
    },
    {
      value: 'Calmayo',
      label: 'Calmayo'
    },
    {
      value: 'Camilo Aldao',
      label: 'Camilo Aldao'
    },
    {
      value: 'Caminiaga',
      label: 'Caminiaga'
    },
    {
      value: 'Canals',
      label: 'Canals'
    },
    {
      value: 'Candelaria Sud',
      label: 'Candelaria Sud'
    },
    {
      value: 'Capilla de los Remedios',
      label: 'Capilla de los Remedios'
    },
    {
      value: 'Capilla del Carmen',
      label: 'Capilla del Carmen'
    },
    {
      value: 'Capilla del Sitón',
      label: 'Capilla del Sitón'
    },
    {
      value: "Capitán General B. O'Higgins",
      label: "Capitán General B. O'Higgins"
    },
    {
      value: 'Carnerillo',
      label: 'Carnerillo'
    },
    {
      value: 'Carrilobo',
      label: 'Carrilobo'
    },
    {
      value: 'Cañada de Río Pinto',
      label: 'Cañada de Río Pinto'
    },
    {
      value: 'Cerro Colorado',
      label: 'Cerro Colorado'
    },
    {
      value: 'Chaján',
      label: 'Chaján'
    },
    {
      value: 'Casa Grande',
      label: 'Casa Grande'
    },
    {
      value: 'Charbonier',
      label: 'Charbonier'
    },
    {
      value: 'Chañar Viejo',
      label: 'Chañar Viejo'
    },
    {
      value: 'Chilibroste',
      label: 'Chilibroste'
    },
    {
      value: 'Churqui Cañada',
      label: 'Churqui Cañada'
    },
    {
      value: 'Charras',
      label: 'Charras'
    },
    {
      value: 'Chuña',
      label: 'Chuña'
    },
    {
      value: 'Chuña Huasi',
      label: 'Chuña Huasi'
    },
    {
      value: 'Ciénaga del Coro',
      label: 'Ciénaga del Coro'
    },
    {
      value: 'Colonia Bremen',
      label: 'Colonia Bremen'
    },
    {
      value: 'Colonia Caroya',
      label: 'Colonia Caroya'
    },
    {
      value: 'Colonia las Cuatro Esquinas',
      label: 'Colonia las Cuatro Esquinas'
    },
    {
      value: 'Colonia Marina',
      label: 'Colonia Marina'
    },
    {
      value: 'Colonia Prosperidad',
      label: 'Colonia Prosperidad'
    },
    {
      value: 'Colonia Italiana',
      label: 'Colonia Italiana'
    },
    {
      value: 'Colonia Iturraspe',
      label: 'Colonia Iturraspe'
    },
    {
      value: 'Colonia Tirolesa',
      label: 'Colonia Tirolesa'
    },
    {
      value: 'Colonia las Pichanas',
      label: 'Colonia las Pichanas'
    },
    {
      value: 'Villa Yacanto',
      label: 'Villa Yacanto'
    },
    {
      value: 'Conlara',
      label: 'Conlara'
    },
    {
      value: 'Copacabana',
      label: 'Copacabana'
    },
    {
      value: 'Coronel Moldes',
      label: 'Coronel Moldes'
    },
    {
      value: 'Corralito',
      label: 'Corralito'
    },
    {
      value: 'El Rastreador',
      label: 'El Rastreador'
    },
    {
      value: 'Costasacate',
      label: 'Costasacate'
    },
    {
      value: 'Cruz de Caña',
      label: 'Cruz de Caña'
    },
    {
      value: 'Embalse',
      label: 'Embalse'
    },
    {
      value: 'Colonia San Bartolomé',
      label: 'Colonia San Bartolomé'
    },
    {
      value: 'Cuesta Blanca',
      label: 'Cuesta Blanca'
    },
    {
      value: 'Del Campillo',
      label: 'Del Campillo'
    },
    {
      value: 'Despeñaderos',
      label: 'Despeñaderos'
    },
    {
      value: 'Devoto',
      label: 'Devoto'
    },
    {
      value: 'Diego de Rojas',
      label: 'Diego de Rojas'
    },
    {
      value: 'Dique Chico',
      label: 'Dique Chico'
    },
    {
      value: 'El Chacho',
      label: 'El Chacho'
    },
    {
      value: 'El Crispín',
      label: 'El Crispín'
    },
    {
      value: 'El Fortín',
      label: 'El Fortín'
    },
    {
      value: 'Guatimozín',
      label: 'Guatimozín'
    },
    {
      value: 'El Manzano',
      label: 'El Manzano'
    },
    {
      value: 'El Rodeo',
      label: 'El Rodeo'
    },
    {
      value: 'Esquina',
      label: 'Esquina'
    },
    {
      value: 'Estación General Paz',
      label: 'Estación General Paz'
    },
    {
      value: 'Estación Juárez Celman',
      label: 'Estación Juárez Celman'
    },
    {
      value: 'Estancia de Guadalupe',
      label: 'Estancia de Guadalupe'
    },
    {
      value: 'Estancia Vieja',
      label: 'Estancia Vieja'
    },
    {
      value: 'Etruria',
      label: 'Etruria'
    },
    {
      value: 'Falda del Carmen',
      label: 'Falda del Carmen'
    },
    {
      value: 'General Cabrera',
      label: 'General Cabrera'
    },
    {
      value: 'Guanaco Muerto',
      label: 'Guanaco Muerto'
    },
    {
      value: 'Guasapampa',
      label: 'Guasapampa'
    },
    {
      value: 'James Craik',
      label: 'James Craik'
    },
    {
      value: 'Huerta Grande',
      label: 'Huerta Grande'
    },
    {
      value: 'Huinca Renancó',
      label: 'Huinca Renancó'
    },
    {
      value: 'Idiazabal',
      label: 'Idiazabal'
    },
    {
      value: 'Impira',
      label: 'Impira'
    },
    {
      value: 'La Calera',
      label: 'La Calera'
    },
    {
      value: 'La Cesira',
      label: 'La Cesira'
    },
    {
      value: 'La Francia',
      label: 'La Francia'
    },
    {
      value: 'La Cruz',
      label: 'La Cruz'
    },
    {
      value: 'La Cumbre',
      label: 'La Cumbre'
    },
    {
      value: 'La Paquita',
      label: 'La Paquita'
    },
    {
      value: 'La Cumbrecita',
      label: 'La Cumbrecita'
    },
    {
      value: 'La Falda',
      label: 'La Falda'
    },
    {
      value: 'La Higuera',
      label: 'La Higuera'
    },
    {
      value: 'La Laguna',
      label: 'La Laguna'
    },
    {
      value: 'Laborde',
      label: 'Laborde'
    },
    {
      value: 'Laboulaye',
      label: 'Laboulaye'
    },
    {
      value: 'Laguna Larga',
      label: 'Laguna Larga'
    },
    {
      value: 'Colonia San Pedro',
      label: 'Colonia San Pedro'
    },
    {
      value: 'La Paisanita',
      label: 'La Paisanita'
    },
    {
      value: 'La Palestina',
      label: 'La Palestina'
    },
    {
      value: 'La Pampa',
      label: 'La Pampa'
    },
    {
      value: 'La Para',
      label: 'La Para'
    },
    {
      value: 'La Paz',
      label: 'La Paz'
    },
    {
      value: 'La Playa',
      label: 'La Playa'
    },
    {
      value: 'La Población',
      label: 'La Población'
    },
    {
      value: 'La Posta',
      label: 'La Posta'
    },
    {
      value: 'La Rancherita',
      label: 'La Rancherita'
    },
    {
      value: 'La Rinconada',
      label: 'La Rinconada'
    },
    {
      value: 'General Deheza',
      label: 'General Deheza'
    },
    {
      value: 'La Serranita',
      label: 'La Serranita'
    },
    {
      value: 'La Tordilla',
      label: 'La Tordilla'
    },
    {
      value: 'Las Acequias',
      label: 'Las Acequias'
    },
    {
      value: 'General Fotheringham',
      label: 'General Fotheringham'
    },
    {
      value: 'Las Albahacas',
      label: 'Las Albahacas'
    },
    {
      value: 'Las Arrias',
      label: 'Las Arrias'
    },
    {
      value: 'Las Bajadas',
      label: 'Las Bajadas'
    },
    {
      value: 'Las Caleras',
      label: 'Las Caleras'
    },
    {
      value: 'Las Higueras',
      label: 'Las Higueras'
    },
    {
      value: 'Las Isletillas',
      label: 'Las Isletillas'
    },
    {
      value: 'Las Junturas',
      label: 'Las Junturas'
    },
    {
      value: 'Las Rabonas',
      label: 'Las Rabonas'
    },
    {
      value: 'Las Tapias',
      label: 'Las Tapias'
    },
    {
      value: 'Leones',
      label: 'Leones'
    },
    {
      value: 'Los Cedros',
      label: 'Los Cedros'
    },
    {
      value: 'General Levalle',
      label: 'General Levalle'
    },
    {
      value: 'Las Vertientes',
      label: 'Las Vertientes'
    },
    {
      value: 'Leguizamón',
      label: 'Leguizamón'
    },
    {
      value: 'Los Cerrillos',
      label: 'Los Cerrillos'
    },
    {
      value: 'Los Chañaritos (C.D. Eje)',
      label: 'Los Chañaritos (C.D. Eje)'
    },
    {
      value: 'Los Chañaritos',
      label: 'Los Chañaritos'
    },
    {
      value: 'Los Cocos',
      label: 'Los Cocos'
    },
    {
      value: 'Los Hornillos',
      label: 'Los Hornillos'
    },
    {
      value: 'Los Mistoles',
      label: 'Los Mistoles'
    },
    {
      value: 'Los Pozos',
      label: 'Los Pozos'
    },
    {
      value: 'Maquinista Gallini',
      label: 'Maquinista Gallini'
    },
    {
      value: 'Marull',
      label: 'Marull'
    },
    {
      value: 'Los Reartes',
      label: 'Los Reartes'
    },
    {
      value: 'Los Talares',
      label: 'Los Talares'
    },
    {
      value: 'Los Zorros',
      label: 'Los Zorros'
    },
    {
      value: 'Lucio V. Mansilla',
      label: 'Lucio V. Mansilla'
    },
    {
      value: 'Luque',
      label: 'Luque'
    },
    {
      value: 'Luyaba',
      label: 'Luyaba'
    },
    {
      value: 'Malagueño',
      label: 'Malagueño'
    },
    {
      value: 'Malena',
      label: 'Malena'
    },
    {
      value: 'Pampayasta Norte',
      label: 'Pampayasta Norte'
    },
    {
      value: 'Panaholma',
      label: 'Panaholma'
    },
    {
      value: 'Malvinas Argentinas',
      label: 'Malvinas Argentinas'
    },
    {
      value: 'Manfredi',
      label: 'Manfredi'
    },
    {
      value: 'Potrero de Garay',
      label: 'Potrero de Garay'
    },
    {
      value: 'Matorrales',
      label: 'Matorrales'
    },
    {
      value: 'Media Naranja',
      label: 'Media Naranja'
    },
    {
      value: 'Melo',
      label: 'Melo'
    },
    {
      value: 'Mendiolaza',
      label: 'Mendiolaza'
    },
    {
      value: 'Miramar',
      label: 'Miramar'
    },
    {
      value: 'Monte Buey',
      label: 'Monte Buey'
    },
    {
      value: 'Río de los Sauces',
      label: 'Río de los Sauces'
    },
    {
      value: 'Mi Granja',
      label: 'Mi Granja'
    },
    {
      value: 'Monte Cristo',
      label: 'Monte Cristo'
    },
    {
      value: 'Monte de los Gauchos',
      label: 'Monte de los Gauchos'
    },
    {
      value: 'Monte Ralo',
      label: 'Monte Ralo'
    },
    {
      value: 'Morrison',
      label: 'Morrison'
    },
    {
      value: 'Morteros',
      label: 'Morteros'
    },
    {
      value: 'Nicolás Bruzzone',
      label: 'Nicolás Bruzzone'
    },
    {
      value: 'Obispo Trejo',
      label: 'Obispo Trejo'
    },
    {
      value: 'Olaeta',
      label: 'Olaeta'
    },
    {
      value: 'Nono',
      label: 'Nono'
    },
    {
      value: 'Oliva',
      label: 'Oliva'
    },
    {
      value: 'Olivares de San Nicolás',
      label: 'Olivares de San Nicolás'
    },
    {
      value: 'Oncativo',
      label: 'Oncativo'
    },
    {
      value: 'Ordóñez',
      label: 'Ordóñez'
    },
    {
      value: 'Pacheco de Melo',
      label: 'Pacheco de Melo'
    },
    {
      value: 'Pasco',
      label: 'Pasco'
    },
    {
      value: 'Paso Viejo',
      label: 'Paso Viejo'
    },
    {
      value: 'Pincen',
      label: 'Pincen'
    },
    {
      value: 'Piquillín',
      label: 'Piquillín'
    },
    {
      value: 'Plaza Luxardo',
      label: 'Plaza Luxardo'
    },
    {
      value: 'Porteña',
      label: 'Porteña'
    },
    {
      value: 'Pilar',
      label: 'Pilar'
    },
    {
      value: 'Plaza de Mercedes',
      label: 'Plaza de Mercedes'
    },
    {
      value: 'Pozo del Molle',
      label: 'Pozo del Molle'
    },
    {
      value: 'Pozo Nuevo',
      label: 'Pozo Nuevo'
    },
    {
      value: 'Pueblo Italiano',
      label: 'Pueblo Italiano'
    },
    {
      value: 'Puesto de Castro',
      label: 'Puesto de Castro'
    },
    {
      value: 'Quebracho Herrado',
      label: 'Quebracho Herrado'
    },
    {
      value: 'Quilino',
      label: 'Quilino'
    },
    {
      value: 'Rafael García',
      label: 'Rafael García'
    },
    {
      value: 'Ranqueles',
      label: 'Ranqueles'
    },
    {
      value: 'Rayo Cortado',
      label: 'Rayo Cortado'
    },
    {
      value: 'Reducción',
      label: 'Reducción'
    },
    {
      value: 'Rincón',
      label: 'Rincón'
    },
    {
      value: 'Río Cuarto',
      label: 'Río Cuarto'
    },
    {
      value: 'Río Segundo',
      label: 'Río Segundo'
    },
    {
      value: 'Río Tercero',
      label: 'Río Tercero'
    },
    {
      value: 'Rosales',
      label: 'Rosales'
    },
    {
      value: 'Rosario del Saladillo',
      label: 'Rosario del Saladillo'
    },
    {
      value: 'Sacanta',
      label: 'Sacanta'
    },
    {
      value: 'Sagrada Familia',
      label: 'Sagrada Familia'
    },
    {
      value: 'Saira',
      label: 'Saira'
    },
    {
      value: 'Saladillo',
      label: 'Saladillo'
    },
    {
      value: 'Saldán',
      label: 'Saldán'
    },
    {
      value: 'Salsacate',
      label: 'Salsacate'
    },
    {
      value: 'Salsipuedes',
      label: 'Salsipuedes'
    },
    {
      value: 'Sampacho',
      label: 'Sampacho'
    },
    {
      value: 'San Agustín',
      label: 'San Agustín'
    },
    {
      value: 'San Antonio de Arredondo',
      label: 'San Antonio de Arredondo'
    },
    {
      value: 'San Antonio de Litín',
      label: 'San Antonio de Litín'
    },
    {
      value: 'Santa Catalina',
      label: 'Santa Catalina'
    },
    {
      value: 'Santa Eufemia',
      label: 'Santa Eufemia'
    },
    {
      value: 'Santiago Temple',
      label: 'Santiago Temple'
    },
    {
      value: 'San Carlos Minas',
      label: 'San Carlos Minas'
    },
    {
      value: 'San Esteban',
      label: 'San Esteban'
    },
    {
      value: 'San Francisco del Chañar',
      label: 'San Francisco del Chañar'
    },
    {
      value: 'San Gerónimo',
      label: 'San Gerónimo'
    },
    {
      value: 'San Ignacio',
      label: 'San Ignacio'
    },
    {
      value: 'San Javier y Yacanto',
      label: 'San Javier y Yacanto'
    },
    {
      value: 'San Joaquín',
      label: 'San Joaquín'
    },
    {
      value: 'San José',
      label: 'San José'
    },
    {
      value: 'San José de la Dormida',
      label: 'San José de la Dormida'
    },
    {
      value: 'San José de las Salinas',
      label: 'San José de las Salinas'
    },
    {
      value: 'San Lorenzo',
      label: 'San Lorenzo'
    },
    {
      value: 'San Marcos Sierras',
      label: 'San Marcos Sierras'
    },
    {
      value: 'San Marcos Sud',
      label: 'San Marcos Sud'
    },
    {
      value: 'San Pedro',
      label: 'San Pedro'
    },
    {
      value: 'San Pedro Norte',
      label: 'San Pedro Norte'
    },
    {
      value: 'San Roque',
      label: 'San Roque'
    },
    {
      value: 'Santa María de Punilla',
      label: 'Santa María de Punilla'
    },
    {
      value: 'San Vicente',
      label: 'San Vicente'
    },
    {
      value: 'Santa Rosa de Calamuchita',
      label: 'Santa Rosa de Calamuchita'
    },
    {
      value: 'Sarmiento',
      label: 'Sarmiento'
    },
    {
      value: 'Saturnino María Laspiur',
      label: 'Saturnino María Laspiur'
    },
    {
      value: 'Sebastián Elcano',
      label: 'Sebastián Elcano'
    },
    {
      value: 'Seeber',
      label: 'Seeber'
    },
    {
      value: 'Segunda Usina',
      label: 'Segunda Usina'
    },
    {
      value: 'Serrano',
      label: 'Serrano'
    },
    {
      value: 'Villa Concepción del Tío',
      label: 'Villa Concepción del Tío'
    },
    {
      value: 'Serrezuela',
      label: 'Serrezuela'
    },
    {
      value: 'Silvio Pellico',
      label: 'Silvio Pellico'
    },
    {
      value: 'Villa del Prado',
      label: 'Villa del Prado'
    },
    {
      value: 'Sinsacate',
      label: 'Sinsacate'
    },
    {
      value: 'Suco',
      label: 'Suco'
    },
    {
      value: 'Tala Cañada',
      label: 'Tala Cañada'
    },
    {
      value: 'Tala Huasi',
      label: 'Tala Huasi'
    },
    {
      value: 'Talaini',
      label: 'Talaini'
    },
    {
      value: 'Tinoco',
      label: 'Tinoco'
    },
    {
      value: 'Tío Pujio',
      label: 'Tío Pujio'
    },
    {
      value: 'Toro Pujio',
      label: 'Toro Pujio'
    },
    {
      value: 'Toledo',
      label: 'Toledo'
    },
    {
      value: 'Tosno',
      label: 'Tosno'
    },
    {
      value: 'Villa la Bolsa',
      label: 'Villa la Bolsa'
    },
    {
      value: 'Unquillo',
      label: 'Unquillo'
    },
    {
      value: 'Valle Hermoso',
      label: 'Valle Hermoso'
    },
    {
      value: 'Villa Allende',
      label: 'Villa Allende'
    },
    {
      value: 'Villa Amancay',
      label: 'Villa Amancay'
    },
    {
      value: 'Villa Rossi',
      label: 'Villa Rossi'
    },
    {
      value: 'Villa Ascasubi',
      label: 'Villa Ascasubi'
    },
    {
      value: 'Villa Candelaria Norte',
      label: 'Villa Candelaria Norte'
    },
    {
      value: 'Villa San Esteban',
      label: 'Villa San Esteban'
    },
    {
      value: 'Villa Cerro Azul',
      label: 'Villa Cerro Azul'
    },
    {
      value: 'Villa Cura Brochero',
      label: 'Villa Cura Brochero'
    },
    {
      value: 'Villa de las Rosas',
      label: 'Villa de las Rosas'
    },
    {
      value: 'Villa de María',
      label: 'Villa de María'
    },
    {
      value: 'Villa de Pocho',
      label: 'Villa de Pocho'
    },
    {
      value: 'Villa de Soto',
      label: 'Villa de Soto'
    },
    {
      value: 'Paso del Durazno',
      label: 'Paso del Durazno'
    },
    {
      value: 'Capilla del Monte',
      label: 'Capilla del Monte'
    },
    {
      value: 'Villa del Totoral',
      label: 'Villa del Totoral'
    },
    {
      value: 'Villa Dolores',
      label: 'Villa Dolores'
    },
    {
      value: 'Villa Fontana',
      label: 'Villa Fontana'
    },
    {
      value: 'Villa General Belgrano',
      label: 'Villa General Belgrano'
    },
    {
      value: 'Villa Giardino',
      label: 'Villa Giardino'
    },
    {
      value: 'Villa Huidobro',
      label: 'Villa Huidobro'
    },
    {
      value: 'Villa los Aromos',
      label: 'Villa los Aromos'
    },
    {
      value: 'Villa los Patos',
      label: 'Villa los Patos'
    },
    {
      value: 'Cosquín',
      label: 'Cosquín'
    },
    {
      value: 'Alta Gracia',
      label: 'Alta Gracia'
    },
    {
      value: 'Colonia Videla',
      label: 'Colonia Videla'
    },
    {
      value: 'Freyre',
      label: 'Freyre'
    },
    {
      value: 'Mina Clavero',
      label: 'Mina Clavero'
    },
    {
      value: 'Adelia María',
      label: 'Adelia María'
    },
    {
      value: 'Aldea Santa María',
      label: 'Aldea Santa María'
    },
    {
      value: 'Alejandro Roca',
      label: 'Alejandro Roca'
    },
    {
      value: 'Alejo Ledesma',
      label: 'Alejo Ledesma'
    },
    {
      value: 'Alicia',
      label: 'Alicia'
    },
    {
      value: 'Arroyo Cabral',
      label: 'Arroyo Cabral'
    },
    {
      value: 'Altos de Chipión',
      label: 'Altos de Chipión'
    },
    {
      value: 'Ana Zumarán',
      label: 'Ana Zumarán'
    },
    {
      value: 'Assunta',
      label: 'Assunta'
    },
    {
      value: 'Bulnes',
      label: 'Bulnes'
    },
    {
      value: 'Calchín',
      label: 'Calchín'
    },
    {
      value: 'Calchín Oeste',
      label: 'Calchín Oeste'
    },
    {
      value: 'Chalacea',
      label: 'Chalacea'
    },
    {
      value: 'Chancaní',
      label: 'Chancaní'
    },
    {
      value: 'Chazón',
      label: 'Chazón'
    },
    {
      value: 'Cañada de Machado',
      label: 'Cañada de Machado'
    },
    {
      value: 'Cañada del Sauce',
      label: 'Cañada del Sauce'
    },
    {
      value: 'Chucul',
      label: 'Chucul'
    },
    {
      value: 'Comechingones',
      label: 'Comechingones'
    },
    {
      value: 'Cintra',
      label: 'Cintra'
    },
    {
      value: 'Colonia Almada',
      label: 'Colonia Almada'
    },
    {
      value: 'Colonia Anita',
      label: 'Colonia Anita'
    },
    {
      value: 'Colonia Barge',
      label: 'Colonia Barge'
    },
    {
      value: 'Colonia Bismarck',
      label: 'Colonia Bismarck'
    },
    {
      value: 'Colonia Valtelina',
      label: 'Colonia Valtelina'
    },
    {
      value: 'Colonia Vicente Agüero',
      label: 'Colonia Vicente Agüero'
    },
    {
      value: 'Colonia Vignaud',
      label: 'Colonia Vignaud'
    },
    {
      value: 'Cruz Alta',
      label: 'Cruz Alta'
    },
    {
      value: 'Coronel Baigorria',
      label: 'Coronel Baigorria'
    },
    {
      value: 'Corral de Bustos',
      label: 'Corral de Bustos'
    },
    {
      value: 'Cruz del Eje',
      label: 'Cruz del Eje'
    },
    {
      value: 'El Arañado',
      label: 'El Arañado'
    },
    {
      value: 'Dalmacio Vélez',
      label: 'Dalmacio Vélez'
    },
    {
      value: 'Deán Funes',
      label: 'Deán Funes'
    },
    {
      value: 'El Brete',
      label: 'El Brete'
    },
    {
      value: 'El Tío',
      label: 'El Tío'
    },
    {
      value: 'Elena',
      label: 'Elena'
    },
    {
      value: 'Eufrasio Loza',
      label: 'Eufrasio Loza'
    },
    {
      value: 'General Baldissera',
      label: 'General Baldissera'
    },
    {
      value: 'General Roca',
      label: 'General Roca'
    },
    {
      value: 'Hernando',
      label: 'Hernando'
    },
    {
      value: 'Huanchilla',
      label: 'Huanchilla'
    },
    {
      value: 'Isla Verde',
      label: 'Isla Verde'
    },
    {
      value: 'Gütemberg',
      label: 'Gütemberg'
    },
    {
      value: 'Jovita',
      label: 'Jovita'
    },
    {
      value: 'Justiniano Posse',
      label: 'Justiniano Posse'
    },
    {
      value: 'Kilómetro 658',
      label: 'Kilómetro 658'
    },
    {
      value: 'La Batea',
      label: 'La Batea'
    },
    {
      value: 'Inriville',
      label: 'Inriville'
    },
    {
      value: 'Italó',
      label: 'Italó'
    },
    {
      value: 'La Carlota',
      label: 'La Carlota'
    },
    {
      value: 'La Carolina "El Potosi"',
      label: 'La Carolina "El Potosi"'
    },
    {
      value: 'Villa Parque Siquiman',
      label: 'Villa Parque Siquiman'
    },
    {
      value: 'Córdoba',
      label: 'Córdoba'
    },
    {
      value: 'La Playosa',
      label: 'La Playosa'
    },
    {
      value: 'La Puerta',
      label: 'La Puerta'
    },
    {
      value: 'La Quinta',
      label: 'La Quinta'
    },
    {
      value: 'Las Calles',
      label: 'Las Calles'
    },
    {
      value: 'Las Cañadas',
      label: 'Las Cañadas'
    },
    {
      value: 'Las Perdices',
      label: 'Las Perdices'
    },
    {
      value: 'Las Peñas',
      label: 'Las Peñas'
    },
    {
      value: 'Las Peñas Sud',
      label: 'Las Peñas Sud'
    },
    {
      value: 'Las Playas',
      label: 'Las Playas'
    },
    {
      value: 'Las Saladas',
      label: 'Las Saladas'
    },
    {
      value: 'Las Gramillas',
      label: 'Las Gramillas'
    },
    {
      value: 'Las Palmas',
      label: 'Las Palmas'
    },
    {
      value: 'Las Varas',
      label: 'Las Varas'
    },
    {
      value: 'Las Varillas',
      label: 'Las Varillas'
    },
    {
      value: 'Los Cisnes',
      label: 'Los Cisnes'
    },
    {
      value: 'Los Hoyos',
      label: 'Los Hoyos'
    },
    {
      value: 'Los Molinos',
      label: 'Los Molinos'
    },
    {
      value: 'Los Surgentes',
      label: 'Los Surgentes'
    },
    {
      value: 'Lutti',
      label: 'Lutti'
    },
    {
      value: 'Luca',
      label: 'Luca'
    },
    {
      value: 'Lozada',
      label: 'Lozada'
    },
    {
      value: 'Marcos Juárez',
      label: 'Marcos Juárez'
    },
    {
      value: 'Mattaldi',
      label: 'Mattaldi'
    },
    {
      value: 'Mayu Sumaj',
      label: 'Mayu Sumaj'
    },
    {
      value: 'Monte Leña',
      label: 'Monte Leña'
    },
    {
      value: 'Monte Maíz',
      label: 'Monte Maíz'
    },
    {
      value: 'Noetinger',
      label: 'Noetinger'
    },
    {
      value: 'Onagoity',
      label: 'Onagoity'
    },
    {
      value: 'Pampayasta Sud',
      label: 'Pampayasta Sud'
    },
    {
      value: 'Pascanas',
      label: 'Pascanas'
    },
    {
      value: 'Punta del Agua',
      label: 'Punta del Agua'
    },
    {
      value: 'Río Primero',
      label: 'Río Primero'
    },
    {
      value: 'San Basilio',
      label: 'San Basilio'
    },
    {
      value: 'San Clemente',
      label: 'San Clemente'
    },
    {
      value: 'San Francisco',
      label: 'San Francisco'
    },
    {
      value: 'Santa Elena',
      label: 'Santa Elena'
    },
    {
      value: 'Sauce Arriba',
      label: 'Sauce Arriba'
    },
    {
      value: 'Simbolar',
      label: 'Simbolar'
    },
    {
      value: 'Tancacha',
      label: 'Tancacha'
    },
    {
      value: 'Tanti',
      label: 'Tanti'
    },
    {
      value: 'Ticino',
      label: 'Ticino'
    },
    {
      value: 'Tosquita',
      label: 'Tosquita'
    },
    {
      value: 'Tránsito',
      label: 'Tránsito'
    },
    {
      value: 'Tuclame',
      label: 'Tuclame'
    },
    {
      value: 'Ucacha',
      label: 'Ucacha'
    },
    {
      value: 'Valle de Anisacate',
      label: 'Valle de Anisacate'
    },
    {
      value: 'Viamonte',
      label: 'Viamonte'
    },
    {
      value: 'Vicuña Mackenna',
      label: 'Vicuña Mackenna'
    },
    {
      value: 'Villa Ciudad Parque los Reartes',
      label: 'Villa Ciudad Parque los Reartes'
    },
    {
      value: 'Villa Carlos Paz',
      label: 'Villa Carlos Paz'
    },
    {
      value: 'Villa Ciudad de América',
      label: 'Villa Ciudad de América'
    },
    {
      value: 'Villa del Rosario',
      label: 'Villa del Rosario'
    },
    {
      value: 'Villa el Chacay',
      label: 'Villa el Chacay'
    },
    {
      value: 'Villa Elisa',
      label: 'Villa Elisa'
    },
    {
      value: 'Villa Gutiérrez',
      label: 'Villa Gutiérrez'
    },
    {
      value: 'Villa Parque Santa Ana',
      label: 'Villa Parque Santa Ana'
    },
    {
      value: 'Villa Río Icho Cruz',
      label: 'Villa Río Icho Cruz'
    },
    {
      value: 'Villa Sarmiento (S. A.)',
      label: 'Villa Sarmiento (S. A.)'
    },
    {
      value: 'Villa Tulumba',
      label: 'Villa Tulumba'
    },
    {
      value: 'Villa Valeria',
      label: 'Villa Valeria'
    },
    {
      value: 'Wenceslao Escalante',
      label: 'Wenceslao Escalante'
    },
    {
      value: 'Villa María',
      label: 'Villa María'
    },
    {
      value: 'Villa Nueva',
      label: 'Villa Nueva'
    },
    {
      value: 'Villa Quillinzo',
      label: 'Villa Quillinzo'
    },
    {
      value: 'Villa Rumipal',
      label: 'Villa Rumipal'
    },
    {
      value: 'Villa San Isidro',
      label: 'Villa San Isidro'
    },
    {
      value: 'Villa Santa Cruz del Lago',
      label: 'Villa Santa Cruz del Lago'
    },
    {
      value: 'Santa Rosa de Río Primero',
      label: 'Santa Rosa de Río Primero'
    },
    {
      value: 'Villa Sarmiento (G.R.)',
      label: 'Villa Sarmiento (G.R.)'
    },
    {
      value: 'Washington',
      label: 'Washington'
    },
    {
      value: 'Los Cóndores',
      label: 'Los Cóndores'
    }
  ],
  Mendoza: [
    {
      value: 'Localidades',
      label: 'Todas las localidades'
    },
    {
      value: 'General Alvear',
      label: 'General Alvear'
    },
    {
      value: 'San Rafael',
      label: 'San Rafael'
    },
    {
      value: 'Rivadavia',
      label: 'Rivadavia'
    },
    {
      value: 'Tupungato',
      label: 'Tupungato'
    },
    {
      value: 'San Carlos',
      label: 'San Carlos'
    },
    {
      value: 'Tunuyán',
      label: 'Tunuyán'
    },
    {
      value: 'Luján de Cuyo',
      label: 'Luján de Cuyo'
    },
    {
      value: 'Las Heras',
      label: 'Las Heras'
    },
    {
      value: 'Lavalle',
      label: 'Lavalle'
    },
    {
      value: 'Malargüe',
      label: 'Malargüe'
    },
    {
      value: 'Guaymallén',
      label: 'Guaymallén'
    },
    {
      value: 'Maipú',
      label: 'Maipú'
    },
    {
      value: 'Capital',
      label: 'Capital'
    },
    {
      value: 'Godoy Cruz',
      label: 'Godoy Cruz'
    },
    {
      value: 'Junín',
      label: 'Junín'
    },
    {
      value: 'San Martín',
      label: 'San Martín'
    },
    {
      value: 'Santa Rosa',
      label: 'Santa Rosa'
    },
    {
      value: 'La Paz',
      label: 'La Paz'
    }
  ],
  'La Rioja': [
    {
      value: 'Localidades',
      label: 'Todas las localidades'
    },
    {
      value: 'General Ocampo',
      label: 'General Ocampo'
    },
    {
      value: 'Chamical',
      label: 'Chamical'
    },
    {
      value: 'Arauco',
      label: 'Arauco'
    },
    {
      value: 'General Lamadrid',
      label: 'General Lamadrid'
    },
    {
      value: 'Vinchina',
      label: 'Vinchina'
    },
    {
      value: 'Capital',
      label: 'Capital'
    },
    {
      value: 'Coronel Felipe Varela',
      label: 'Coronel Felipe Varela'
    },
    {
      value: 'Castro Barros',
      label: 'Castro Barros'
    },
    {
      value: 'Chilecito',
      label: 'Chilecito'
    },
    {
      value: 'General Ángel Vicente Peñaloza',
      label: 'General Ángel Vicente Peñaloza'
    },
    {
      value: 'General Juan Facundo Quiroga',
      label: 'General Juan Facundo Quiroga'
    },
    {
      value: 'Rosario Vera Peñaloza',
      label: 'Rosario Vera Peñaloza'
    },
    {
      value: 'General San Martín',
      label: 'General San Martín'
    },
    {
      value: 'Famatina',
      label: 'Famatina'
    },
    {
      value: 'San Blas de los Sauces',
      label: 'San Blas de los Sauces'
    },
    {
      value: 'Independencia',
      label: 'Independencia'
    },
    {
      value: 'General Belgrano',
      label: 'General Belgrano'
    },
    {
      value: 'Sanagasta',
      label: 'Sanagasta'
    }
  ],
  Catamarca: [
    {
      value: 'Localidades',
      label: 'Todas las localidades'
    },
    {
      value: 'Belén',
      label: 'Belén'
    },
    {
      value: 'Hualfín',
      label: 'Hualfín'
    },
    {
      value: 'Valle Viejo',
      label: 'Valle Viejo'
    },
    {
      value: 'Ancasti',
      label: 'Ancasti'
    },
    {
      value: 'Antofagasta de la Sierra',
      label: 'Antofagasta de la Sierra'
    },
    {
      value: 'Fiambalá',
      label: 'Fiambalá'
    },
    {
      value: 'Tinogasta',
      label: 'Tinogasta'
    },
    {
      value: 'Pozo de Piedra',
      label: 'Pozo de Piedra'
    },
    {
      value: 'San Fernando',
      label: 'San Fernando'
    },
    {
      value: 'Puerta de San José',
      label: 'Puerta de San José'
    },
    {
      value: 'Puerta de Corral Quemado',
      label: 'Puerta de Corral Quemado'
    },
    {
      value: 'San José',
      label: 'San José'
    },
    {
      value: 'Santa María',
      label: 'Santa María'
    },
    {
      value: 'Aconquija',
      label: 'Aconquija'
    },
    {
      value: 'Andalgalá',
      label: 'Andalgalá'
    },
    {
      value: 'Saujil',
      label: 'Saujil'
    },
    {
      value: 'Pomán',
      label: 'Pomán'
    },
    {
      value: 'Mutquín',
      label: 'Mutquín'
    },
    {
      value: 'Santa Rosa',
      label: 'Santa Rosa'
    },
    {
      value: 'Recreo',
      label: 'Recreo'
    },
    {
      value: 'San Fernando del Valle de Catamarca',
      label: 'San Fernando del Valle de Catamarca'
    },
    {
      value: 'Icaño',
      label: 'Icaño'
    },
    {
      value: 'Paclín',
      label: 'Paclín'
    },
    {
      value: 'Tapso',
      label: 'Tapso'
    },
    {
      value: 'Londres',
      label: 'Londres'
    },
    {
      value: 'Villa Vil',
      label: 'Villa Vil'
    },
    {
      value: 'Los Varela',
      label: 'Los Varela'
    },
    {
      value: 'La Puerta',
      label: 'La Puerta'
    },
    {
      value: 'Las Juntas',
      label: 'Las Juntas'
    },
    {
      value: 'El Rodeo',
      label: 'El Rodeo'
    },
    {
      value: 'Los Altos',
      label: 'Los Altos'
    },
    {
      value: 'El Alto',
      label: 'El Alto'
    },
    {
      value: 'Huillapima',
      label: 'Huillapima'
    },
    {
      value: 'Capayán',
      label: 'Capayán'
    },
    {
      value: 'Fray Mamerto Esquiú',
      label: 'Fray Mamerto Esquiú'
    },
    {
      value: 'Corral Quemado',
      label: 'Corral Quemado'
    }
  ],
  'La Pampa': [
    {
      value: 'Localidades',
      label: 'Todas las localidades'
    },
    {
      value: 'Pichi Huinca',
      label: 'Pichi Huinca'
    },
    {
      value: 'Quehué',
      label: 'Quehué'
    },
    {
      value: 'Abramo',
      label: 'Abramo'
    },
    {
      value: 'Santa Teresa',
      label: 'Santa Teresa'
    },
    {
      value: 'General Campos',
      label: 'General Campos'
    },
    {
      value: 'Trenel',
      label: 'Trenel'
    },
    {
      value: 'Rancul',
      label: 'Rancul'
    },
    {
      value: 'Coronel Hilario Lagos',
      label: 'Coronel Hilario Lagos'
    },
    {
      value: 'Bernardo Larroude',
      label: 'Bernardo Larroude'
    },
    {
      value: 'Ceballos',
      label: 'Ceballos'
    },
    {
      value: 'Intendente Alvear',
      label: 'Intendente Alvear'
    },
    {
      value: 'Miguel Riglos',
      label: 'Miguel Riglos'
    },
    {
      value: 'Toay',
      label: 'Toay'
    },
    {
      value: 'Puelén',
      label: 'Puelén'
    },
    {
      value: 'La Maruja',
      label: 'La Maruja'
    },
    {
      value: 'Arata',
      label: 'Arata'
    },
    {
      value: 'Sarah',
      label: 'Sarah'
    },
    {
      value: 'Ingeniero Luiggi',
      label: 'Ingeniero Luiggi'
    },
    {
      value: 'Eduardo Castex',
      label: 'Eduardo Castex'
    },
    {
      value: 'Monte Nievas',
      label: 'Monte Nievas'
    },
    {
      value: 'Quemú Quemú',
      label: 'Quemú Quemú'
    },
    {
      value: 'Villa Mirasol',
      label: 'Villa Mirasol'
    },
    {
      value: 'Colonia Barón',
      label: 'Colonia Barón'
    },
    {
      value: 'Winifreda',
      label: 'Winifreda'
    },
    {
      value: 'Loventué',
      label: 'Loventué'
    },
    {
      value: 'Santa Isabel',
      label: 'Santa Isabel'
    },
    {
      value: 'Telén',
      label: 'Telén'
    },
    {
      value: 'Ataliva Roca',
      label: 'Ataliva Roca'
    },
    {
      value: 'Bernasconi',
      label: 'Bernasconi'
    },
    {
      value: 'Victorica',
      label: 'Victorica'
    },
    {
      value: 'Metileo',
      label: 'Metileo'
    },
    {
      value: 'Uriburu',
      label: 'Uriburu'
    },
    {
      value: 'Lonquimay',
      label: 'Lonquimay'
    },
    {
      value: 'Luan Toro',
      label: 'Luan Toro'
    },
    {
      value: 'Carro Quemado',
      label: 'Carro Quemado'
    },
    {
      value: 'Perú',
      label: 'Perú'
    },
    {
      value: 'Colonia Santa María',
      label: 'Colonia Santa María'
    },
    {
      value: 'Unanue',
      label: 'Unanue'
    },
    {
      value: 'Jacinto Arauz',
      label: 'Jacinto Arauz'
    },
    {
      value: 'Chacharramendi',
      label: 'Chacharramendi'
    },
    {
      value: 'Tomás Manuel Anchorena',
      label: 'Tomás Manuel Anchorena'
    },
    {
      value: 'Relmo',
      label: 'Relmo'
    },
    {
      value: 'Santa Rosa',
      label: 'Santa Rosa'
    },
    {
      value: 'La Reforma',
      label: 'La Reforma'
    },
    {
      value: 'Limay Mahuida',
      label: 'Limay Mahuida'
    },
    {
      value: 'Gobernador Duval',
      label: 'Gobernador Duval'
    },
    {
      value: 'Falucho',
      label: 'Falucho'
    },
    {
      value: 'Alta Italia',
      label: 'Alta Italia'
    },
    {
      value: 'Anguil',
      label: 'Anguil'
    },
    {
      value: 'Mauricio Mayer',
      label: 'Mauricio Mayer'
    },
    {
      value: 'General San Martín',
      label: 'General San Martín'
    },
    {
      value: 'Casa de Piedra',
      label: 'Casa de Piedra'
    },
    {
      value: 'La Humada',
      label: 'La Humada'
    },
    {
      value: 'Cuchillo Có',
      label: 'Cuchillo Có'
    },
    {
      value: 'Doblas',
      label: 'Doblas'
    },
    {
      value: 'Parera',
      label: 'Parera'
    },
    {
      value: 'Rucanelo',
      label: 'Rucanelo'
    },
    {
      value: 'Caleufú',
      label: 'Caleufú'
    },
    {
      value: 'General Pico',
      label: 'General Pico'
    },
    {
      value: 'Agustoni',
      label: 'Agustoni'
    },
    {
      value: 'Miguel Cané',
      label: 'Miguel Cané'
    },
    {
      value: 'Puelches',
      label: 'Puelches'
    },
    {
      value: 'Algarrobo del Águila',
      label: 'Algarrobo del Águila'
    },
    {
      value: 'Vértiz',
      label: 'Vértiz'
    },
    {
      value: 'Catriló',
      label: 'Catriló'
    },
    {
      value: 'Rolón',
      label: 'Rolón'
    },
    {
      value: 'Adolfo Van Praet',
      label: 'Adolfo Van Praet'
    },
    {
      value: 'Dorila',
      label: 'Dorila'
    },
    {
      value: 'Maisonnave',
      label: 'Maisonnave'
    },
    {
      value: 'Quetrequén',
      label: 'Quetrequén'
    },
    {
      value: 'Veinticinco de Mayo',
      label: 'Veinticinco de Mayo'
    },
    {
      value: 'Macachín',
      label: 'Macachín'
    },
    {
      value: 'Embajador Martini',
      label: 'Embajador Martini'
    },
    {
      value: 'Alpachiri',
      label: 'Alpachiri'
    },
    {
      value: 'Conhelo',
      label: 'Conhelo'
    },
    {
      value: 'General Acha',
      label: 'General Acha'
    },
    {
      value: 'Guatraché',
      label: 'Guatraché'
    },
    {
      value: 'Speluzzi',
      label: 'Speluzzi'
    },
    {
      value: 'La Adela',
      label: 'La Adela'
    },
    {
      value: 'Realicó',
      label: 'Realicó'
    }
  ],
  'Santiago del Estero': [
    {
      value: 'Localidades',
      label: 'Todas las localidades'
    },
    {
      value: 'Rivadavia',
      label: 'Rivadavia'
    },
    {
      value: 'Juan F. Ibarra',
      label: 'Juan F. Ibarra'
    },
    {
      value: 'General Taboada',
      label: 'General Taboada'
    },
    {
      value: 'Sarmiento',
      label: 'Sarmiento'
    },
    {
      value: 'Belgrano',
      label: 'Belgrano'
    },
    {
      value: 'Aguirre',
      label: 'Aguirre'
    },
    {
      value: 'Atamisqui',
      label: 'Atamisqui'
    },
    {
      value: 'Alberdi',
      label: 'Alberdi'
    },
    {
      value: 'Ojo de Agua',
      label: 'Ojo de Agua'
    },
    {
      value: 'Choya',
      label: 'Choya'
    },
    {
      value: 'Copo',
      label: 'Copo'
    },
    {
      value: 'Río Hondo',
      label: 'Río Hondo'
    },
    {
      value: 'Banda',
      label: 'Banda'
    },
    {
      value: 'Guasayán',
      label: 'Guasayán'
    },
    {
      value: 'Robles',
      label: 'Robles'
    },
    {
      value: 'Capital',
      label: 'Capital'
    },
    {
      value: 'Loreto',
      label: 'Loreto'
    },
    {
      value: 'Silípica',
      label: 'Silípica'
    },
    {
      value: 'Figueroa',
      label: 'Figueroa'
    },
    {
      value: 'Salavina',
      label: 'Salavina'
    },
    {
      value: 'Pellegrini',
      label: 'Pellegrini'
    },
    {
      value: 'Avellaneda',
      label: 'Avellaneda'
    },
    {
      value: 'Moreno',
      label: 'Moreno'
    },
    {
      value: 'Mitre',
      label: 'Mitre'
    },
    {
      value: 'Quebrachos',
      label: 'Quebrachos'
    },
    {
      value: 'San Martín',
      label: 'San Martín'
    },
    {
      value: 'Jiménez',
      label: 'Jiménez'
    }
  ],
  Corrientes: [
    {
      value: 'Localidades',
      label: 'Todas las localidades'
    },
    {
      value: 'Yataytí Calle',
      label: 'Yataytí Calle'
    },
    {
      value: 'Mercedes',
      label: 'Mercedes'
    },
    {
      value: 'Saladas',
      label: 'Saladas'
    },
    {
      value: 'Juan Pujol',
      label: 'Juan Pujol'
    },
    {
      value: 'Pueblo Libertador',
      label: 'Pueblo Libertador'
    },
    {
      value: 'Monte Caseros',
      label: 'Monte Caseros'
    },
    {
      value: 'Colonia Libertad',
      label: 'Colonia Libertad'
    },
    {
      value: 'Parada Pucheta',
      label: 'Parada Pucheta'
    },
    {
      value: 'Sauce',
      label: 'Sauce'
    },
    {
      value: 'Guaviraví',
      label: 'Guaviraví'
    },
    {
      value: 'Tapebicuá',
      label: 'Tapebicuá'
    },
    {
      value: 'Lavalle',
      label: 'Lavalle'
    },
    {
      value: 'Santa Lucía',
      label: 'Santa Lucía'
    },
    {
      value: 'Paso de los Libres',
      label: 'Paso de los Libres'
    },
    {
      value: 'Goya',
      label: 'Goya'
    },
    {
      value: 'Gobernador Martínez',
      label: 'Gobernador Martínez'
    },
    {
      value: '9 de Julio',
      label: '9 de Julio'
    },
    {
      value: 'Felipe Yofré',
      label: 'Felipe Yofré'
    },
    {
      value: 'Chavarría',
      label: 'Chavarría'
    },
    {
      value: 'Estación Torrent',
      label: 'Estación Torrent'
    },
    {
      value: 'Pedro R. Fernández',
      label: 'Pedro R. Fernández'
    },
    {
      value: 'Tatacuá',
      label: 'Tatacuá'
    },
    {
      value: 'La Cruz',
      label: 'La Cruz'
    },
    {
      value: 'Colonia Carlos Pellegrini',
      label: 'Colonia Carlos Pellegrini'
    },
    {
      value: 'Tabay',
      label: 'Tabay'
    },
    {
      value: 'Bella Vista',
      label: 'Bella Vista'
    },
    {
      value: 'Concepción',
      label: 'Concepción'
    },
    {
      value: 'Jose Rafael Gomez',
      label: 'Jose Rafael Gomez'
    },
    {
      value: 'Palmar Grande',
      label: 'Palmar Grande'
    },
    {
      value: 'Mburucuyá',
      label: 'Mburucuyá'
    },
    {
      value: 'San Miguel',
      label: 'San Miguel'
    },
    {
      value: 'Villa Olivari',
      label: 'Villa Olivari'
    },
    {
      value: 'Gobernador Ing. Valentín Virasoro',
      label: 'Gobernador Ing. Valentín Virasoro'
    },
    {
      value: 'Lomas de Vallejos',
      label: 'Lomas de Vallejos'
    },
    {
      value: 'Empedrado',
      label: 'Empedrado'
    },
    {
      value: 'San Antonio',
      label: 'San Antonio'
    },
    {
      value: "Colonia Liebig'S",
      label: "Colonia Liebig'S"
    },
    {
      value: 'Riachuelo',
      label: 'Riachuelo'
    },
    {
      value: 'Herlitzka',
      label: 'Herlitzka'
    },
    {
      value: 'Caá Catí',
      label: 'Caá Catí'
    },
    {
      value: 'Loreto',
      label: 'Loreto'
    },
    {
      value: 'Itá Ibaté',
      label: 'Itá Ibaté'
    },
    {
      value: 'San Carlos',
      label: 'San Carlos'
    },
    {
      value: 'Berón de Astrada',
      label: 'Berón de Astrada'
    },
    {
      value: 'Santa Ana',
      label: 'Santa Ana'
    },
    {
      value: 'San Luis del Palmar',
      label: 'San Luis del Palmar'
    },
    {
      value: 'Corrientes',
      label: 'Corrientes'
    },
    {
      value: 'Ramada Paso',
      label: 'Ramada Paso'
    },
    {
      value: 'San Cosme',
      label: 'San Cosme'
    },
    {
      value: 'Paso de la Patria',
      label: 'Paso de la Patria'
    },
    {
      value: 'Mocoretá',
      label: 'Mocoretá'
    },
    {
      value: 'San Isidro',
      label: 'San Isidro'
    },
    {
      value: 'Esquina',
      label: 'Esquina'
    },
    {
      value: 'Curuzú Cuatiá',
      label: 'Curuzú Cuatiá'
    },
    {
      value: 'Bonpland',
      label: 'Bonpland'
    },
    {
      value: 'Yapeyú',
      label: 'Yapeyú'
    },
    {
      value: 'Mariano I. Loza',
      label: 'Mariano I. Loza'
    },
    {
      value: 'Garruchos',
      label: 'Garruchos'
    },
    {
      value: 'Carolina',
      label: 'Carolina'
    },
    {
      value: 'Perugorría',
      label: 'Perugorría'
    },
    {
      value: 'Cruz de los Milagros',
      label: 'Cruz de los Milagros'
    },
    {
      value: 'Alvear',
      label: 'Alvear'
    },
    {
      value: 'Colonia Pando',
      label: 'Colonia Pando'
    },
    {
      value: 'San Roque',
      label: 'San Roque'
    },
    {
      value: 'Itatí',
      label: 'Itatí'
    },
    {
      value: 'Ituzaingó',
      label: 'Ituzaingó'
    },
    {
      value: 'San Lorenzo',
      label: 'San Lorenzo'
    },
    {
      value: 'Colonia Santa Rosa',
      label: 'Colonia Santa Rosa'
    },
    {
      value: 'Santo Tomé',
      label: 'Santo Tomé'
    }
  ],
  'Santa Fe': [
    {
      value: 'Localidades',
      label: 'Todas las localidades'
    },
    {
      value: 'Pavón',
      label: 'Pavón'
    },
    {
      value: 'Huanqueros',
      label: 'Huanqueros'
    },
    {
      value: 'Arroyo Ceibal',
      label: 'Arroyo Ceibal'
    },
    {
      value: 'Villa Ana',
      label: 'Villa Ana'
    },
    {
      value: 'Aguará Grande',
      label: 'Aguará Grande'
    },
    {
      value: 'Angeloni',
      label: 'Angeloni'
    },
    {
      value: 'San Mart',
      label: 'San Mart'
    },
    {
      value: 'Videla',
      label: 'Videla'
    },
    {
      value: 'Colonia Dolores',
      label: 'Colonia Dolores'
    },
    {
      value: 'Saladero Mariano Cabal',
      label: 'Saladero Mariano Cabal'
    },
    {
      value: 'Helvecia',
      label: 'Helvecia'
    },
    {
      value: 'Colonia Mascias',
      label: 'Colonia Mascias'
    },
    {
      value: 'Pueblo Irigoyen',
      label: 'Pueblo Irigoyen'
    },
    {
      value: 'Coronda',
      label: 'Coronda'
    },
    {
      value: 'Casalegno',
      label: 'Casalegno'
    },
    {
      value: 'Cañada Rosquín',
      label: 'Cañada Rosquín'
    },
    {
      value: 'Colonia Bigand',
      label: 'Colonia Bigand'
    },
    {
      value: 'Pavón Arriba',
      label: 'Pavón Arriba'
    },
    {
      value: 'Melincué',
      label: 'Melincué'
    },
    {
      value: 'Dos Rosas y la Legua',
      label: 'Dos Rosas y la Legua'
    },
    {
      value: 'Colonia Bossi',
      label: 'Colonia Bossi'
    },
    {
      value: 'Las Avispas',
      label: 'Las Avispas'
    },
    {
      value: 'Serodino',
      label: 'Serodino'
    },
    {
      value: 'San Jerónimo Sud',
      label: 'San Jerónimo Sud'
    },
    {
      value: 'Theobald',
      label: 'Theobald'
    },
    {
      value: 'Gregoria Pérez de Denis',
      label: 'Gregoria Pérez de Denis'
    },
    {
      value: 'Barrancas',
      label: 'Barrancas'
    },
    {
      value: 'Monje',
      label: 'Monje'
    },
    {
      value: 'Constanza',
      label: 'Constanza'
    },
    {
      value: 'San Genaro',
      label: 'San Genaro'
    },
    {
      value: 'Sauce Viejo',
      label: 'Sauce Viejo'
    },
    {
      value: 'Santa Margarita',
      label: 'Santa Margarita'
    },
    {
      value: 'Gato Colorado',
      label: 'Gato Colorado'
    },
    {
      value: 'San Antonio de Obligado',
      label: 'San Antonio de Obligado'
    },
    {
      value: 'Tacuarendí',
      label: 'Tacuarendí'
    },
    {
      value: 'Colonia Durán',
      label: 'Colonia Durán'
    },
    {
      value: 'Villa Guillermina',
      label: 'Villa Guillermina'
    },
    {
      value: 'Florencia',
      label: 'Florencia'
    },
    {
      value: 'Bella Italia',
      label: 'Bella Italia'
    },
    {
      value: 'Las Palmeras',
      label: 'Las Palmeras'
    },
    {
      value: 'Venado Tuerto',
      label: 'Venado Tuerto'
    },
    {
      value: 'El Rabón',
      label: 'El Rabón'
    },
    {
      value: 'Las Toscas',
      label: 'Las Toscas'
    },
    {
      value: 'Avellaneda',
      label: 'Avellaneda'
    },
    {
      value: 'Cañada Ombú',
      label: 'Cañada Ombú'
    },
    {
      value: 'San Bernardo',
      label: 'San Bernardo'
    },
    {
      value: 'Fortín Olmos',
      label: 'Fortín Olmos'
    },
    {
      value: 'San Guillermo',
      label: 'San Guillermo'
    },
    {
      value: 'Curupaity',
      label: 'Curupaity'
    },
    {
      value: 'Arrufo',
      label: 'Arrufo'
    },
    {
      value: 'La Rubia',
      label: 'La Rubia'
    },
    {
      value: 'Colonia Ana',
      label: 'Colonia Ana'
    },
    {
      value: 'Villa Trinidad',
      label: 'Villa Trinidad'
    },
    {
      value: 'Palacios',
      label: 'Palacios'
    },
    {
      value: 'Monigotes',
      label: 'Monigotes'
    },
    {
      value: 'Ambrosetti',
      label: 'Ambrosetti'
    },
    {
      value: 'La Lucila',
      label: 'La Lucila'
    },
    {
      value: 'Capivara',
      label: 'Capivara'
    },
    {
      value: 'Colonia la Clara',
      label: 'Colonia la Clara'
    },
    {
      value: 'Montefiore',
      label: 'Montefiore'
    },
    {
      value: 'La Sarita',
      label: 'La Sarita'
    },
    {
      value: 'Tartagal',
      label: 'Tartagal'
    },
    {
      value: 'Malabrigo',
      label: 'Malabrigo'
    },
    {
      value: 'Berna',
      label: 'Berna'
    },
    {
      value: 'Nicanor Molinas',
      label: 'Nicanor Molinas'
    },
    {
      value: 'Juan de Garay',
      label: 'Juan de Garay'
    },
    {
      value: 'Hersilia',
      label: 'Hersilia'
    },
    {
      value: 'Ceres',
      label: 'Ceres'
    },
    {
      value: 'La Cabral',
      label: 'La Cabral'
    },
    {
      value: 'San Cristóbal',
      label: 'San Cristóbal'
    },
    {
      value: 'La Criolla',
      label: 'La Criolla'
    },
    {
      value: 'Vera y Pintado',
      label: 'Vera y Pintado'
    },
    {
      value: 'Intiyaco',
      label: 'Intiyaco'
    },
    {
      value: 'La Penca y Caraguatá',
      label: 'La Penca y Caraguatá'
    },
    {
      value: 'Villa Saralegui',
      label: 'Villa Saralegui'
    },
    {
      value: 'Calchaquí',
      label: 'Calchaquí'
    },
    {
      value: 'Pozo Borrado',
      label: 'Pozo Borrado'
    },
    {
      value: 'El Arazá',
      label: 'El Arazá'
    },
    {
      value: 'La Gallareta',
      label: 'La Gallareta'
    },
    {
      value: 'Toba',
      label: 'Toba'
    },
    {
      value: 'Cayastacito',
      label: 'Cayastacito'
    },
    {
      value: 'Esther',
      label: 'Esther'
    },
    {
      value: 'Pedro Gómez Cello',
      label: 'Pedro Gómez Cello'
    },
    {
      value: 'Hugentobler',
      label: 'Hugentobler'
    },
    {
      value: 'Pueblo Marini',
      label: 'Pueblo Marini'
    },
    {
      value: 'Colonia Aldao',
      label: 'Colonia Aldao'
    },
    {
      value: 'Fidela',
      label: 'Fidela'
    },
    {
      value: 'Vila',
      label: 'Vila'
    },
    {
      value: 'Coronel Fraga',
      label: 'Coronel Fraga'
    },
    {
      value: 'San Antonio',
      label: 'San Antonio'
    },
    {
      value: 'Santa Clara de Saguier',
      label: 'Santa Clara de Saguier'
    },
    {
      value: 'Saguier',
      label: 'Saguier'
    },
    {
      value: 'Villa San José',
      label: 'Villa San José'
    },
    {
      value: 'Rafaela',
      label: 'Rafaela'
    },
    {
      value: 'Estación Clucellas',
      label: 'Estación Clucellas'
    },
    {
      value: 'Angélica',
      label: 'Angélica'
    },
    {
      value: 'Santa María Centro',
      label: 'Santa María Centro'
    },
    {
      value: 'Colonia Cello',
      label: 'Colonia Cello'
    },
    {
      value: 'Josefina',
      label: 'Josefina'
    },
    {
      value: 'Frontera',
      label: 'Frontera'
    },
    {
      value: 'Tacurales',
      label: 'Tacurales'
    },
    {
      value: 'Eusebia y Carolina',
      label: 'Eusebia y Carolina'
    },
    {
      value: 'María Juana',
      label: 'María Juana'
    },
    {
      value: 'Garibaldi',
      label: 'Garibaldi'
    },
    {
      value: 'Esmeralda',
      label: 'Esmeralda'
    },
    {
      value: 'Castelar',
      label: 'Castelar'
    },
    {
      value: 'San Vicente',
      label: 'San Vicente'
    },
    {
      value: 'Ramona',
      label: 'Ramona'
    },
    {
      value: 'Bauer y Sigel',
      label: 'Bauer y Sigel'
    },
    {
      value: 'San Mart',
      label: 'San Mart'
    },
    {
      value: 'San Jorge',
      label: 'San Jorge'
    },
    {
      value: 'Crispi',
      label: 'Crispi'
    },
    {
      value: 'Aurelia',
      label: 'Aurelia'
    },
    {
      value: 'Carlos Pellegrini',
      label: 'Carlos Pellegrini'
    },
    {
      value: 'Casas',
      label: 'Casas'
    },
    {
      value: 'El Trébol',
      label: 'El Trébol'
    },
    {
      value: 'María Susana',
      label: 'María Susana'
    },
    {
      value: 'Los Cardos',
      label: 'Los Cardos'
    },
    {
      value: 'Las Bandurrias',
      label: 'Las Bandurrias'
    },
    {
      value: 'Colonia Margarita',
      label: 'Colonia Margarita'
    },
    {
      value: 'Sastre',
      label: 'Sastre'
    },
    {
      value: 'Las Petacas',
      label: 'Las Petacas'
    },
    {
      value: 'Centeno',
      label: 'Centeno'
    },
    {
      value: 'Gálvez',
      label: 'Gálvez'
    },
    {
      value: 'Santa Clara de Buena Vista',
      label: 'Santa Clara de Buena Vista'
    },
    {
      value: 'López',
      label: 'López'
    },
    {
      value: 'Campo Piaggio',
      label: 'Campo Piaggio'
    },
    {
      value: 'Loma Alta',
      label: 'Loma Alta'
    },
    {
      value: 'Fuentes',
      label: 'Fuentes'
    },
    {
      value: 'Gessler',
      label: 'Gessler'
    },
    {
      value: 'Sa Pereyra',
      label: 'Sa Pereyra'
    },
    {
      value: 'San Agustín',
      label: 'San Agustín'
    },
    {
      value: 'San Carlos Sud',
      label: 'San Carlos Sud'
    },
    {
      value: 'San Mariano',
      label: 'San Mariano'
    },
    {
      value: 'Matilde',
      label: 'Matilde'
    },
    {
      value: 'Díaz',
      label: 'Díaz'
    },
    {
      value: 'Maciel',
      label: 'Maciel'
    },
    {
      value: 'San Eugenio',
      label: 'San Eugenio'
    },
    {
      value: 'Santo Tomé',
      label: 'Santo Tomé'
    },
    {
      value: 'Empalme San Carlos',
      label: 'Empalme San Carlos'
    },
    {
      value: 'San José del Rincón',
      label: 'San José del Rincón'
    },
    {
      value: 'Pilar',
      label: 'Pilar'
    },
    {
      value: 'Monte Vera',
      label: 'Monte Vera'
    },
    {
      value: 'Lucio V. López',
      label: 'Lucio V. López'
    },
    {
      value: 'Recreo',
      label: 'Recreo'
    },
    {
      value: 'Nuevo Torino',
      label: 'Nuevo Torino'
    },
    {
      value: 'Humboldt',
      label: 'Humboldt'
    },
    {
      value: 'Santa Rosa de Calchines',
      label: 'Santa Rosa de Calchines'
    },
    {
      value: 'Fighiera',
      label: 'Fighiera'
    },
    {
      value: 'Cayastá',
      label: 'Cayastá'
    },
    {
      value: 'Arroyo Aguiar',
      label: 'Arroyo Aguiar'
    },
    {
      value: 'Cululú',
      label: 'Cululú'
    },
    {
      value: 'Progreso',
      label: 'Progreso'
    },
    {
      value: 'Candioti',
      label: 'Candioti'
    },
    {
      value: 'Campo Andino',
      label: 'Campo Andino'
    },
    {
      value: 'Romang',
      label: 'Romang'
    },
    {
      value: 'Desvío Arijón',
      label: 'Desvío Arijón'
    },
    {
      value: 'Laguna Paiva',
      label: 'Laguna Paiva'
    },
    {
      value: 'Nelson',
      label: 'Nelson'
    },
    {
      value: 'Rivadavia',
      label: 'Rivadavia'
    },
    {
      value: 'Grutly',
      label: 'Grutly'
    },
    {
      value: 'Felicia',
      label: 'Felicia'
    },
    {
      value: 'Lehmann',
      label: 'Lehmann'
    },
    {
      value: 'Hipatía',
      label: 'Hipatía'
    },
    {
      value: 'Soutomayor',
      label: 'Soutomayor'
    },
    {
      value: 'Llambi Campbell',
      label: 'Llambi Campbell'
    },
    {
      value: 'Tacural',
      label: 'Tacural'
    },
    {
      value: 'Cabal',
      label: 'Cabal'
    },
    {
      value: 'Montes de Oca',
      label: 'Montes de Oca'
    },
    {
      value: 'Emilia',
      label: 'Emilia'
    },
    {
      value: 'Santo Domingo',
      label: 'Santo Domingo'
    },
    {
      value: 'María Luisa',
      label: 'María Luisa'
    },
    {
      value: 'La Pelada',
      label: 'La Pelada'
    },
    {
      value: 'Providencia',
      label: 'Providencia'
    },
    {
      value: 'Ituzaingó',
      label: 'Ituzaingó'
    },
    {
      value: 'Jacinto L. Arauz',
      label: 'Jacinto L. Arauz'
    },
    {
      value: 'Humberto Primo',
      label: 'Humberto Primo'
    },
    {
      value: 'Colonia Bicha',
      label: 'Colonia Bicha'
    },
    {
      value: 'Sunchales',
      label: 'Sunchales'
    },
    {
      value: 'Colonia Belgrano',
      label: 'Colonia Belgrano'
    },
    {
      value: 'Bouquet',
      label: 'Bouquet'
    },
    {
      value: 'Las Parejas',
      label: 'Las Parejas'
    },
    {
      value: 'Totoras',
      label: 'Totoras'
    },
    {
      value: 'Bustinza',
      label: 'Bustinza'
    },
    {
      value: 'Roldán',
      label: 'Roldán'
    },
    {
      value: 'Tortugas',
      label: 'Tortugas'
    },
    {
      value: 'Armstrong',
      label: 'Armstrong'
    },
    {
      value: 'Pueblo Andino',
      label: 'Pueblo Andino'
    },
    {
      value: 'Diego de Alvear',
      label: 'Diego de Alvear'
    },
    {
      value: 'San Gregorio',
      label: 'San Gregorio'
    },
    {
      value: 'Christophersen',
      label: 'Christophersen'
    },
    {
      value: 'Aldao',
      label: 'Aldao'
    },
    {
      value: 'Piñero',
      label: 'Piñero'
    },
    {
      value: 'Villa Eloísa',
      label: 'Villa Eloísa'
    },
    {
      value: 'Juncal',
      label: 'Juncal'
    },
    {
      value: 'Alcorta',
      label: 'Alcorta'
    },
    {
      value: 'Peyrano',
      label: 'Peyrano'
    },
    {
      value: 'Cañada Rica',
      label: 'Cañada Rica'
    },
    {
      value: 'Sargento Cabral',
      label: 'Sargento Cabral'
    },
    {
      value: 'Cepeda',
      label: 'Cepeda'
    },
    {
      value: 'Los Molinos',
      label: 'Los Molinos'
    },
    {
      value: 'Arequito',
      label: 'Arequito'
    },
    {
      value: 'San José de la Esquina',
      label: 'San José de la Esquina'
    },
    {
      value: 'Sanford',
      label: 'Sanford'
    },
    {
      value: 'Arteaga',
      label: 'Arteaga'
    },
    {
      value: 'Álvarez',
      label: 'Álvarez'
    },
    {
      value: 'Acebal',
      label: 'Acebal'
    },
    {
      value: 'Uranga',
      label: 'Uranga'
    },
    {
      value: 'Rueda',
      label: 'Rueda'
    },
    {
      value: 'Juan Bernabé Molina',
      label: 'Juan Bernabé Molina'
    },
    {
      value: 'Villa Mugueta',
      label: 'Villa Mugueta'
    },
    {
      value: 'Arminda',
      label: 'Arminda'
    },
    {
      value: 'Carcarañá',
      label: 'Carcarañá'
    },
    {
      value: 'Chañar Ladeado',
      label: 'Chañar Ladeado'
    },
    {
      value: 'Berabevú',
      label: 'Berabevú'
    },
    {
      value: 'Los Quirquinchos',
      label: 'Los Quirquinchos'
    },
    {
      value: 'La Chispa',
      label: 'La Chispa'
    },
    {
      value: 'Chabas',
      label: 'Chabas'
    },
    {
      value: 'Murphy',
      label: 'Murphy'
    },
    {
      value: 'Villada',
      label: 'Villada'
    },
    {
      value: 'Cañada del Ucle',
      label: 'Cañada del Ucle'
    },
    {
      value: 'Firmat',
      label: 'Firmat'
    },
    {
      value: 'Bombal',
      label: 'Bombal'
    },
    {
      value: 'Carreras',
      label: 'Carreras'
    },
    {
      value: 'Labordeboy',
      label: 'Labordeboy'
    },
    {
      value: 'Hughes',
      label: 'Hughes'
    },
    {
      value: 'Villa Cañás',
      label: 'Villa Cañás'
    },
    {
      value: 'Chovet',
      label: 'Chovet'
    },
    {
      value: 'Elortondo',
      label: 'Elortondo'
    },
    {
      value: 'Santa Isabel',
      label: 'Santa Isabel'
    },
    {
      value: 'Carmen',
      label: 'Carmen'
    },
    {
      value: 'Gödeken',
      label: 'Gödeken'
    },
    {
      value: 'María Teresa',
      label: 'María Teresa'
    },
    {
      value: 'Maggiolo',
      label: 'Maggiolo'
    },
    {
      value: 'San Francisco de Santa Fe',
      label: 'San Francisco de Santa Fe'
    },
    {
      value: 'San Eduardo',
      label: 'San Eduardo'
    },
    {
      value: 'Miguel Torres',
      label: 'Miguel Torres'
    },
    {
      value: 'Bigand',
      label: 'Bigand'
    },
    {
      value: 'Chapuy',
      label: 'Chapuy'
    },
    {
      value: 'Santa Teresa',
      label: 'Santa Teresa'
    },
    {
      value: 'Cañada de Gómez',
      label: 'Cañada de Gómez'
    },
    {
      value: 'Coronel Bogado',
      label: 'Coronel Bogado'
    },
    {
      value: 'Coronel Arnold',
      label: 'Coronel Arnold'
    },
    {
      value: 'Zavalla',
      label: 'Zavalla'
    },
    {
      value: 'Granadero Baigorria',
      label: 'Granadero Baigorria'
    },
    {
      value: 'Carrizales',
      label: 'Carrizales'
    },
    {
      value: 'San Lorenzo',
      label: 'San Lorenzo'
    },
    {
      value: 'Fray Luis Beltrán',
      label: 'Fray Luis Beltrán'
    },
    {
      value: 'Capitán Bermúdez',
      label: 'Capitán Bermúdez'
    },
    {
      value: 'Ibarlucea',
      label: 'Ibarlucea'
    },
    {
      value: 'General Lagos',
      label: 'General Lagos'
    },
    {
      value: 'Villa Amelia',
      label: 'Villa Amelia'
    },
    {
      value: 'Alvear',
      label: 'Alvear'
    },
    {
      value: 'Villa Constitución',
      label: 'Villa Constitución'
    },
    {
      value: 'Gaboto',
      label: 'Gaboto'
    },
    {
      value: 'El Sombrerito',
      label: 'El Sombrerito'
    },
    {
      value: 'Alejandra',
      label: 'Alejandra'
    },
    {
      value: 'Guadalupe Norte',
      label: 'Guadalupe Norte'
    },
    {
      value: 'Egusquiza',
      label: 'Egusquiza'
    },
    {
      value: 'Ricardone',
      label: 'Ricardone'
    },
    {
      value: 'Pujato',
      label: 'Pujato'
    },
    {
      value: 'Salto Grande',
      label: 'Salto Grande'
    },
    {
      value: 'Aarón Castellanos',
      label: 'Aarón Castellanos'
    },
    {
      value: 'Arocena',
      label: 'Arocena'
    },
    {
      value: 'Golondrina',
      label: 'Golondrina'
    },
    {
      value: 'San Bernardo',
      label: 'San Bernardo'
    },
    {
      value: 'Susana',
      label: 'Susana'
    },
    {
      value: 'Esteban Rams',
      label: 'Esteban Rams'
    },
    {
      value: 'La Camila',
      label: 'La Camila'
    },
    {
      value: 'Monte Oscuridad',
      label: 'Monte Oscuridad'
    },
    {
      value: 'Suardi',
      label: 'Suardi'
    },
    {
      value: 'La Brava',
      label: 'La Brava'
    },
    {
      value: 'Silva',
      label: 'Silva'
    },
    {
      value: 'Marcelino Escalada',
      label: 'Marcelino Escalada'
    },
    {
      value: 'Ramayón',
      label: 'Ramayón'
    },
    {
      value: 'Cacique Ariacaiquín',
      label: 'Cacique Ariacaiquín'
    },
    {
      value: 'San Justo',
      label: 'San Justo'
    },
    {
      value: 'Los Amores',
      label: 'Los Amores'
    },
    {
      value: 'Las Garzas',
      label: 'Las Garzas'
    },
    {
      value: 'Vera',
      label: 'Vera'
    },
    {
      value: 'San Fabián',
      label: 'San Fabián'
    },
    {
      value: 'La Vanguardia',
      label: 'La Vanguardia'
    },
    {
      value: 'Reconquista',
      label: 'Reconquista'
    },
    {
      value: 'Colonia Rosa',
      label: 'Colonia Rosa'
    },
    {
      value: 'Moisés Ville',
      label: 'Moisés Ville'
    },
    {
      value: 'Villa Minetti',
      label: 'Villa Minetti'
    },
    {
      value: 'Ñanducita',
      label: 'Ñanducita'
    },
    {
      value: 'Santa Fe',
      label: 'Santa Fe'
    },
    {
      value: 'Santurce',
      label: 'Santurce'
    },
    {
      value: 'Soledad',
      label: 'Soledad'
    },
    {
      value: 'Tostado',
      label: 'Tostado'
    },
    {
      value: 'Logroño',
      label: 'Logroño'
    },
    {
      value: 'Esperanza',
      label: 'Esperanza'
    },
    {
      value: 'Arroyo Leyes',
      label: 'Arroyo Leyes'
    },
    {
      value: 'Portugalete',
      label: 'Portugalete'
    },
    {
      value: 'Naré',
      label: 'Naré'
    },
    {
      value: 'Gobernador Crespo',
      label: 'Gobernador Crespo'
    },
    {
      value: 'Castellanos',
      label: 'Castellanos'
    },
    {
      value: 'Garabato',
      label: 'Garabato'
    },
    {
      value: 'Margarita',
      label: 'Margarita'
    },
    {
      value: 'Lanteri',
      label: 'Lanteri'
    },
    {
      value: 'Ingeniero Chanourdie',
      label: 'Ingeniero Chanourdie'
    },
    {
      value: 'Presidente Roca',
      label: 'Presidente Roca'
    },
    {
      value: 'Plaza Clucellas',
      label: 'Plaza Clucellas'
    },
    {
      value: 'Zenón Pereyra',
      label: 'Zenón Pereyra'
    },
    {
      value: 'Eustolia',
      label: 'Eustolia'
    },
    {
      value: 'Los Laureles',
      label: 'Los Laureles'
    },
    {
      value: 'San Javier',
      label: 'San Javier'
    },
    {
      value: 'Traill',
      label: 'Traill'
    },
    {
      value: 'Piamonte',
      label: 'Piamonte'
    },
    {
      value: 'Colonia Iturraspe',
      label: 'Colonia Iturraspe'
    },
    {
      value: 'Correa',
      label: 'Correa'
    },
    {
      value: 'Landeta',
      label: 'Landeta'
    },
    {
      value: 'Bernardo de Irigoyen',
      label: 'Bernardo de Irigoyen'
    },
    {
      value: 'Colonia San José',
      label: 'Colonia San José'
    },
    {
      value: 'M9Ximo Paz',
      label: 'M9Ximo Paz'
    },
    {
      value: 'General Gelly',
      label: 'General Gelly'
    },
    {
      value: 'Franck',
      label: 'Franck'
    },
    {
      value: 'Las Tunas',
      label: 'Las Tunas'
    },
    {
      value: 'San Jerónimo del Sauce',
      label: 'San Jerónimo del Sauce'
    },
    {
      value: 'San Carlos Centro',
      label: 'San Carlos Centro'
    },
    {
      value: 'San Carlos Norte',
      label: 'San Carlos Norte'
    },
    {
      value: 'Larrechea',
      label: 'Larrechea'
    },
    {
      value: 'San Jerónimo Norte',
      label: 'San Jerónimo Norte'
    },
    {
      value: 'Santa María Norte',
      label: 'Santa María Norte'
    },
    {
      value: 'Pujato Norte',
      label: 'Pujato Norte'
    },
    {
      value: 'Pueblo Muñoz',
      label: 'Pueblo Muñoz'
    },
    {
      value: 'Cavour',
      label: 'Cavour'
    },
    {
      value: 'Virginia',
      label: 'Virginia'
    },
    {
      value: 'Ataliva',
      label: 'Ataliva'
    },
    {
      value: 'Galisteo',
      label: 'Galisteo'
    },
    {
      value: 'Sarmiento',
      label: 'Sarmiento'
    },
    {
      value: 'Timbúes',
      label: 'Timbúes'
    },
    {
      value: 'Elisa',
      label: 'Elisa'
    },
    {
      value: 'Maua',
      label: 'Maua'
    },
    {
      value: 'Las Rosas',
      label: 'Las Rosas'
    },
    {
      value: 'Rufino',
      label: 'Rufino'
    },
    {
      value: 'Colonia Raquel',
      label: 'Colonia Raquel'
    },
    {
      value: 'Lazzarino',
      label: 'Lazzarino'
    },
    {
      value: 'Amenábar',
      label: 'Amenábar'
    },
    {
      value: 'Clason',
      label: 'Clason'
    },
    {
      value: 'Casilda',
      label: 'Casilda'
    },
    {
      value: 'Teodelina',
      label: 'Teodelina'
    },
    {
      value: 'Wheelwright',
      label: 'Wheelwright'
    },
    {
      value: 'Funes',
      label: 'Funes'
    },
    {
      value: 'Pérez',
      label: 'Pérez'
    },
    {
      value: 'Albarellos',
      label: 'Albarellos'
    },
    {
      value: 'Coronel Domínguez',
      label: 'Coronel Domínguez'
    },
    {
      value: 'Empalme Villa Constitución',
      label: 'Empalme Villa Constitución'
    },
    {
      value: 'Godoy',
      label: 'Godoy'
    },
    {
      value: 'Cafferata',
      label: 'Cafferata'
    },
    {
      value: 'Sancti Spiritu',
      label: 'Sancti Spiritu'
    },
    {
      value: 'Carmen del Sauce',
      label: 'Carmen del Sauce'
    },
    {
      value: 'Soldini',
      label: 'Soldini'
    },
    {
      value: 'Luis Palacios',
      label: 'Luis Palacios'
    },
    {
      value: 'Villa Gobernador Gálvez',
      label: 'Villa Gobernador Gálvez'
    },
    {
      value: 'Oliveros',
      label: 'Oliveros'
    },
    {
      value: 'Pueblo Esther',
      label: 'Pueblo Esther'
    },
    {
      value: 'Arroyo Seco',
      label: 'Arroyo Seco'
    }
  ],
  Tucumán: [
    {
      value: 'Localidades',
      label: 'Todas las localidades'
    },
    {
      value: 'Manuel Garcia Fernandez',
      label: 'Manuel Garcia Fernandez'
    },
    {
      value: 'San Jose de la Cocha',
      label: 'San Jose de la Cocha'
    },
    {
      value: 'Yanima',
      label: 'Yanima'
    },
    {
      value: 'El Mollar',
      label: 'El Mollar'
    },
    {
      value: 'Municipalidad de Tafi del Valle',
      label: 'Municipalidad de Tafi del Valle'
    },
    {
      value: 'Municipalidad de la Cocha',
      label: 'Municipalidad de la Cocha'
    },
    {
      value: 'El Sacrificio',
      label: 'El Sacrificio'
    },
    {
      value: 'San Pedro y San Antonio',
      label: 'San Pedro y San Antonio'
    },
    {
      value: 'Gastona y Belicha',
      label: 'Gastona y Belicha'
    },
    {
      value: 'Municipalidad de Concepcion',
      label: 'Municipalidad de Concepcion'
    },
    {
      value: 'Pampa Mayo',
      label: 'Pampa Mayo'
    },
    {
      value: 'Alpachiri y el Molino',
      label: 'Alpachiri y el Molino'
    },
    {
      value: 'Arcadia',
      label: 'Arcadia'
    },
    {
      value: 'Villa Quinteros',
      label: 'Villa Quinteros'
    },
    {
      value: 'Capitan Caceres',
      label: 'Capitan Caceres'
    },
    {
      value: 'Soldado Maldonado',
      label: 'Soldado Maldonado'
    },
    {
      value: 'Los Sosa',
      label: 'Los Sosa'
    },
    {
      value: 'Municipalidad de Simoca',
      label: 'Municipalidad de Simoca'
    },
    {
      value: 'El Timbo',
      label: 'El Timbo'
    },
    {
      value: 'Ancajuli',
      label: 'Ancajuli'
    },
    {
      value: 'Los Nogales',
      label: 'Los Nogales'
    },
    {
      value: 'El Naranjo y el Sunchal',
      label: 'El Naranjo y el Sunchal'
    },
    {
      value: 'La Esperanza',
      label: 'La Esperanza'
    },
    {
      value: 'El Cadillal',
      label: 'El Cadillal'
    },
    {
      value: 'Tapia',
      label: 'Tapia'
    },
    {
      value: 'Yerba Buena',
      label: 'Yerba Buena'
    },
    {
      value: 'Municipalidad de las Talitas',
      label: 'Municipalidad de las Talitas'
    },
    {
      value: 'Los Puestos',
      label: 'Los Puestos'
    },
    {
      value: 'El Puestito',
      label: 'El Puestito'
    },
    {
      value: 'Atahona',
      label: 'Atahona'
    },
    {
      value: 'El Bracho y el Cevilar',
      label: 'El Bracho y el Cevilar'
    },
    {
      value: 'El Naranjito',
      label: 'El Naranjito'
    },
    {
      value: 'San Pablo y Villa Nougues',
      label: 'San Pablo y Villa Nougues'
    },
    {
      value: 'Santa Lucia',
      label: 'Santa Lucia'
    },
    {
      value: 'Municipalidad de Lules',
      label: 'Municipalidad de Lules'
    },
    {
      value: 'Comuna Villa Belgrano',
      label: 'Comuna Villa Belgrano'
    },
    {
      value: 'Delfin Gallo',
      label: 'Delfin Gallo'
    },
    {
      value: 'Municipalidad de Alderetes',
      label: 'Municipalidad de Alderetes'
    },
    {
      value: 'Municipalidad de Graneros',
      label: 'Municipalidad de Graneros'
    },
    {
      value: 'Acheral',
      label: 'Acheral'
    },
    {
      value: 'Rio Colorado',
      label: 'Rio Colorado'
    },
    {
      value: 'Municipalidad de San Miguel De Tucuman',
      label: 'Municipalidad de San Miguel De Tucuman'
    },
    {
      value: 'Amberes',
      label: 'Amberes'
    },
    {
      value: 'Santa Cruz y la Tuna',
      label: 'Santa Cruz y la Tuna'
    },
    {
      value: 'Raco',
      label: 'Raco'
    },
    {
      value: 'Buena Vista',
      label: 'Buena Vista'
    },
    {
      value: 'Rumipunco',
      label: 'Rumipunco'
    },
    {
      value: 'Teniente Berdina',
      label: 'Teniente Berdina'
    },
    {
      value: 'Choromoro',
      label: 'Choromoro'
    },
    {
      value: 'Municipalidad de Trancas',
      label: 'Municipalidad de Trancas'
    },
    {
      value: 'San Pedro de Colalao',
      label: 'San Pedro de Colalao'
    },
    {
      value: 'Quilmes y los Sueldos',
      label: 'Quilmes y los Sueldos'
    },
    {
      value: 'Los Gomez',
      label: 'Los Gomez'
    },
    {
      value: 'Esquina y Mancopa',
      label: 'Esquina y Mancopa'
    },
    {
      value: 'San Ignacio',
      label: 'San Ignacio'
    },
    {
      value: 'Manuela Pedraza',
      label: 'Manuela Pedraza'
    },
    {
      value: 'Colombres',
      label: 'Colombres'
    },
    {
      value: 'Agua Dulce y la Soledad',
      label: 'Agua Dulce y la Soledad'
    },
    {
      value: 'Gdor. Piedrabuena',
      label: 'Gdor. Piedrabuena'
    },
    {
      value: 'San Javier',
      label: 'San Javier'
    },
    {
      value: 'Municipalidad de Juan Bautista Alberdi',
      label: 'Municipalidad de Juan Bautista Alberdi'
    },
    {
      value: 'Monteagudo',
      label: 'Monteagudo'
    },
    {
      value: 'El Polear',
      label: 'El Polear'
    },
    {
      value: 'Santa Ana',
      label: 'Santa Ana'
    },
    {
      value: 'Villa de Chicligasta',
      label: 'Villa de Chicligasta'
    },
    {
      value: 'Trinidad',
      label: 'Trinidad'
    },
    {
      value: 'Ciudacita',
      label: 'Ciudacita'
    },
    {
      value: 'Rio Chico y Nueva Trinidad',
      label: 'Rio Chico y Nueva Trinidad'
    },
    {
      value: 'Municipalidad de Aguilares',
      label: 'Municipalidad de Aguilares'
    },
    {
      value: 'Los Sarmiento y la Tipa',
      label: 'Los Sarmiento y la Tipa'
    },
    {
      value: 'Monte Bello',
      label: 'Monte Bello'
    },
    {
      value: 'Sargento Moya',
      label: 'Sargento Moya'
    },
    {
      value: 'Rio Seco',
      label: 'Rio Seco'
    },
    {
      value: 'San Andres',
      label: 'San Andres'
    },
    {
      value: 'Lamadrid',
      label: 'Lamadrid'
    },
    {
      value: 'San Felipe y Santa Barbara',
      label: 'San Felipe y Santa Barbara'
    },
    {
      value: 'Amaicha del Valle',
      label: 'Amaicha del Valle'
    },
    {
      value: 'Municipalidad de Yerba Buena',
      label: 'Municipalidad de Yerba Buena'
    },
    {
      value: 'Villa Padre Monti',
      label: 'Villa Padre Monti'
    },
    {
      value: 'Los Ralos',
      label: 'Los Ralos'
    },
    {
      value: 'Taco Ralo',
      label: 'Taco Ralo'
    },
    {
      value: 'Colalao del Valle',
      label: 'Colalao del Valle'
    },
    {
      value: 'Cevil Redondo',
      label: 'Cevil Redondo'
    },
    {
      value: 'Ranchillos y San Miguel',
      label: 'Ranchillos y San Miguel'
    },
    {
      value: 'El Chañar',
      label: 'El Chañar'
    },
    {
      value: 'La Florida y Luisiana',
      label: 'La Florida y Luisiana'
    },
    {
      value: 'La Ramada y la Cruz',
      label: 'La Ramada y la Cruz'
    },
    {
      value: 'Los Perez',
      label: 'Los Perez'
    },
    {
      value: 'Estacion Araoz y Tacanas',
      label: 'Estacion Araoz y Tacanas'
    },
    {
      value: 'El Mojon',
      label: 'El Mojon'
    },
    {
      value: 'Benjamin Araoz y el Tajamar',
      label: 'Benjamin Araoz y el Tajamar'
    },
    {
      value: 'Los Pereyras',
      label: 'Los Pereyras'
    },
    {
      value: 'Garmendia',
      label: 'Garmendia'
    },
    {
      value: 'Las Cejas',
      label: 'Las Cejas'
    },
    {
      value: 'Municipalidad de Monteros',
      label: 'Municipalidad de Monteros'
    },
    {
      value: '7 de Abril',
      label: '7 de Abril'
    },
    {
      value: 'Municipalidad de Bella Vista',
      label: 'Municipalidad de Bella Vista'
    },
    {
      value: 'Villa de Leales',
      label: 'Villa de Leales'
    },
    {
      value: 'Santa Rosa de Leales y L. Blanca',
      label: 'Santa Rosa de Leales y L. Blanca'
    },
    {
      value: 'Las Talas',
      label: 'Las Talas'
    },
    {
      value: 'Huasa Pampa',
      label: 'Huasa Pampa'
    },
    {
      value: 'Escaba',
      label: 'Escaba'
    },
    {
      value: 'Leon Rouges y Santa Rosa',
      label: 'Leon Rouges y Santa Rosa'
    },
    {
      value: 'Municipalidad de Tafi Viejo',
      label: 'Municipalidad de Tafi Viejo'
    },
    {
      value: 'Medina',
      label: 'Medina'
    },
    {
      value: 'Alto Verde y los Guchea',
      label: 'Alto Verde y los Guchea'
    },
    {
      value: 'Municipalidad de Burruyacu',
      label: 'Municipalidad de Burruyacu'
    },
    {
      value: 'Los Bulacios y los Villagras',
      label: 'Los Bulacios y los Villagras'
    },
    {
      value: 'Municipalidad de Banda del Rio Sali',
      label: 'Municipalidad de Banda del Rio Sali'
    },
    {
      value: 'El Cercado',
      label: 'El Cercado'
    },
    {
      value: 'Municipalidad de Famailla',
      label: 'Municipalidad de Famailla'
    },
    {
      value: 'El Manantial',
      label: 'El Manantial'
    }
  ],
  Neuquén: [
    {
      value: 'Localidades',
      label: 'Todas las localidades'
    },
    {
      value: 'Guañacos',
      label: 'Guañacos'
    },
    {
      value: 'Rincón de los Sauces',
      label: 'Rincón de los Sauces'
    },
    {
      value: 'Octavio Pico',
      label: 'Octavio Pico'
    },
    {
      value: 'Buta Ranquil',
      label: 'Buta Ranquil'
    },
    {
      value: 'Barrancas',
      label: 'Barrancas'
    },
    {
      value: 'Añelo',
      label: 'Añelo'
    },
    {
      value: 'Quili Malal',
      label: 'Quili Malal'
    },
    {
      value: 'Las Lajas',
      label: 'Las Lajas'
    },
    {
      value: 'Zapala',
      label: 'Zapala'
    },
    {
      value: 'Mariano Moreno',
      label: 'Mariano Moreno'
    },
    {
      value: 'Senillosa',
      label: 'Senillosa'
    },
    {
      value: 'Junín de los Andes',
      label: 'Junín de los Andes'
    },
    {
      value: 'Aluminé',
      label: 'Aluminé'
    },
    {
      value: 'Villa Traful',
      label: 'Villa Traful'
    },
    {
      value: 'Caviahue-Copahue',
      label: 'Caviahue-Copahue'
    },
    {
      value: 'Neuquén',
      label: 'Neuquén'
    },
    {
      value: 'Plottier',
      label: 'Plottier'
    },
    {
      value: 'Centenario',
      label: 'Centenario'
    },
    {
      value: 'Vista Alegre',
      label: 'Vista Alegre'
    },
    {
      value: 'San Patricio del Chañar',
      label: 'San Patricio del Chañar'
    },
    {
      value: 'Villa el Chocón',
      label: 'Villa el Chocón'
    },
    {
      value: 'Cutral Có',
      label: 'Cutral Có'
    },
    {
      value: 'Plaza Huincul',
      label: 'Plaza Huincul'
    },
    {
      value: 'El Sauce',
      label: 'El Sauce'
    },
    {
      value: 'Picún Leufú',
      label: 'Picún Leufú'
    },
    {
      value: 'Las Coloradas',
      label: 'Las Coloradas'
    },
    {
      value: 'Santo Tomás',
      label: 'Santo Tomás'
    },
    {
      value: 'Los Miches',
      label: 'Los Miches'
    },
    {
      value: 'El Huecú',
      label: 'El Huecú'
    },
    {
      value: 'Loncopué',
      label: 'Loncopué'
    },
    {
      value: 'Bajada del Agrio',
      label: 'Bajada del Agrio'
    },
    {
      value: 'Tricao Malal',
      label: 'Tricao Malal'
    },
    {
      value: 'Villa Curi Leuvú',
      label: 'Villa Curi Leuvú'
    },
    {
      value: 'Huinganco',
      label: 'Huinganco'
    },
    {
      value: 'Varvarco - Invernada Vieja',
      label: 'Varvarco - Invernada Vieja'
    },
    {
      value: 'Los Chihuidos',
      label: 'Los Chihuidos'
    },
    {
      value: 'Ramón Castro',
      label: 'Ramón Castro'
    },
    {
      value: 'Covunco Abajo',
      label: 'Covunco Abajo'
    },
    {
      value: 'Pilo Lil',
      label: 'Pilo Lil'
    },
    {
      value: 'Coyuco-Cochico',
      label: 'Coyuco-Cochico'
    },
    {
      value: 'Los Catutos',
      label: 'Los Catutos'
    },
    {
      value: 'Sauzal Bonito',
      label: 'Sauzal Bonito'
    },
    {
      value: 'San Martín de los Andes',
      label: 'San Martín de los Andes'
    },
    {
      value: 'Villa Pehuenia',
      label: 'Villa Pehuenia'
    },
    {
      value: 'Piedra del Águila',
      label: 'Piedra del Águila'
    },
    {
      value: 'Villa del Nahueve',
      label: 'Villa del Nahueve'
    },
    {
      value: 'Andacollo',
      label: 'Andacollo'
    },
    {
      value: 'El Cholar',
      label: 'El Cholar'
    },
    {
      value: 'Taquimilán',
      label: 'Taquimilán'
    },
    {
      value: 'Chos Malal',
      label: 'Chos Malal'
    },
    {
      value: 'Manzano Amargo',
      label: 'Manzano Amargo'
    },
    {
      value: 'Chorriaca',
      label: 'Chorriaca'
    },
    {
      value: 'Villa del Puente Picún Leufú',
      label: 'Villa del Puente Picún Leufú'
    },
    {
      value: 'Aguada San Roque',
      label: 'Aguada San Roque'
    },
    {
      value: 'Paso Aguerre',
      label: 'Paso Aguerre'
    },
    {
      value: 'Las Ovejas',
      label: 'Las Ovejas'
    },
    {
      value: 'Villa la Angostura',
      label: 'Villa la Angostura'
    }
  ],
  Salta: [
    {
      value: 'Localidades',
      label: 'Todas las localidades'
    },
    {
      value: 'La Merced',
      label: 'La Merced'
    },
    {
      value: 'Las Lajitas',
      label: 'Las Lajitas'
    },
    {
      value: 'Tolar Grande',
      label: 'Tolar Grande'
    },
    {
      value: 'Cafayate',
      label: 'Cafayate'
    },
    {
      value: 'Cerrillos',
      label: 'Cerrillos'
    },
    {
      value: 'Embarcación',
      label: 'Embarcación'
    },
    {
      value: 'Río Piedras',
      label: 'Río Piedras'
    },
    {
      value: 'General Güemes',
      label: 'General Güemes'
    },
    {
      value: 'Santa Victoria Este',
      label: 'Santa Victoria Este'
    },
    {
      value: 'Campo Quijano',
      label: 'Campo Quijano'
    },
    {
      value: 'Angastaco',
      label: 'Angastaco'
    },
    {
      value: 'Aguaray',
      label: 'Aguaray'
    },
    {
      value: 'Santa Victoria Oeste',
      label: 'Santa Victoria Oeste'
    },
    {
      value: 'Nazareno',
      label: 'Nazareno'
    },
    {
      value: 'El Bordo',
      label: 'El Bordo'
    },
    {
      value: 'Guachipas',
      label: 'Guachipas'
    },
    {
      value: 'Animaná',
      label: 'Animaná'
    },
    {
      value: 'Metán',
      label: 'Metán'
    },
    {
      value: 'San Lorenzo',
      label: 'San Lorenzo'
    },
    {
      value: 'Campo Santo',
      label: 'Campo Santo'
    },
    {
      value: 'El Tala',
      label: 'El Tala'
    },
    {
      value: 'La Candelaria',
      label: 'La Candelaria'
    },
    {
      value: 'San Ramón de la Nueva Orán',
      label: 'San Ramón de la Nueva Orán'
    },
    {
      value: 'Seclantás',
      label: 'Seclantás'
    },
    {
      value: 'Apolinario Saravia',
      label: 'Apolinario Saravia'
    },
    {
      value: 'General Mosconi',
      label: 'General Mosconi'
    },
    {
      value: 'Los Toldos',
      label: 'Los Toldos'
    },
    {
      value: 'Coronel Moldes',
      label: 'Coronel Moldes'
    },
    {
      value: 'Pichanal',
      label: 'Pichanal'
    },
    {
      value: 'Tartagal',
      label: 'Tartagal'
    },
    {
      value: 'General Ballivián',
      label: 'General Ballivián'
    },
    {
      value: 'Joaquín V. González',
      label: 'Joaquín V. González'
    },
    {
      value: 'General Pizarro',
      label: 'General Pizarro'
    },
    {
      value: 'Salta',
      label: 'Salta'
    },
    {
      value: 'Vaqueros',
      label: 'Vaqueros'
    },
    {
      value: 'El Quebrachal',
      label: 'El Quebrachal'
    },
    {
      value: 'Rosario de Lerma',
      label: 'Rosario de Lerma'
    },
    {
      value: 'El Carril',
      label: 'El Carril'
    },
    {
      value: 'Rivadavia Banda Sur',
      label: 'Rivadavia Banda Sur'
    },
    {
      value: 'Payogasta',
      label: 'Payogasta'
    },
    {
      value: 'Cachi',
      label: 'Cachi'
    },
    {
      value: 'Colonia Santa Rosa',
      label: 'Colonia Santa Rosa'
    },
    {
      value: 'El Jardín',
      label: 'El Jardín'
    },
    {
      value: 'San Antonio de los Cobres',
      label: 'San Antonio de los Cobres'
    },
    {
      value: 'Molinos',
      label: 'Molinos'
    },
    {
      value: 'Rivadavia Banda Norte',
      label: 'Rivadavia Banda Norte'
    },
    {
      value: 'Profesor Salvador Mazza',
      label: 'Profesor Salvador Mazza'
    },
    {
      value: 'El Potrero',
      label: 'El Potrero'
    },
    {
      value: 'Hipólito Yrigoyen',
      label: 'Hipólito Yrigoyen'
    },
    {
      value: 'Iruya',
      label: 'Iruya'
    },
    {
      value: 'Chicoana',
      label: 'Chicoana'
    },
    {
      value: 'San Carlos',
      label: 'San Carlos'
    },
    {
      value: 'La Poma',
      label: 'La Poma'
    },
    {
      value: 'Urundel',
      label: 'Urundel'
    },
    {
      value: 'La Viña',
      label: 'La Viña'
    },
    {
      value: 'Isla de Cañas',
      label: 'Isla de Cañas'
    },
    {
      value: 'Rosario de la Frontera',
      label: 'Rosario de la Frontera'
    },
    {
      value: 'La Caldera',
      label: 'La Caldera'
    },
    {
      value: 'El Galpón',
      label: 'El Galpón'
    }
  ],
  Chaco: [
    {
      value: 'Localidades',
      label: 'Todas las localidades'
    },
    {
      value: 'Isla del Cerrito',
      label: 'Isla del Cerrito'
    },
    {
      value: 'Chorotis',
      label: 'Chorotis'
    },
    {
      value: 'Santa Sylvina',
      label: 'Santa Sylvina'
    },
    {
      value: 'Coronel Du Graty',
      label: 'Coronel Du Graty'
    },
    {
      value: 'Hermoso Campo',
      label: 'Hermoso Campo'
    },
    {
      value: 'Samuhú',
      label: 'Samuhú'
    },
    {
      value: 'Basail',
      label: 'Basail'
    },
    {
      value: 'Puerto Vilelas',
      label: 'Puerto Vilelas'
    },
    {
      value: 'Villa Ángela',
      label: 'Villa Ángela'
    },
    {
      value: 'Fontana',
      label: 'Fontana'
    },
    {
      value: 'Barranqueras',
      label: 'Barranqueras'
    },
    {
      value: 'General Capdevila',
      label: 'General Capdevila'
    },
    {
      value: 'Cote Lai',
      label: 'Cote Lai'
    },
    {
      value: 'Puerto Tirol',
      label: 'Puerto Tirol'
    },
    {
      value: 'Colonia Popular',
      label: 'Colonia Popular'
    },
    {
      value: 'San Bernardo',
      label: 'San Bernardo'
    },
    {
      value: 'Makallé',
      label: 'Makallé'
    },
    {
      value: 'Juan José Castelli',
      label: 'Juan José Castelli'
    },
    {
      value: 'Miraflores',
      label: 'Miraflores'
    },
    {
      value: 'Laguna Blanca',
      label: 'Laguna Blanca'
    },
    {
      value: 'Lapachito',
      label: 'Lapachito'
    },
    {
      value: 'La Clotilde',
      label: 'La Clotilde'
    },
    {
      value: 'Gancedo',
      label: 'Gancedo'
    },
    {
      value: 'La Escondida',
      label: 'La Escondida'
    },
    {
      value: 'Villa Berthet',
      label: 'Villa Berthet'
    },
    {
      value: 'La Verde',
      label: 'La Verde'
    },
    {
      value: 'La Tigra',
      label: 'La Tigra'
    },
    {
      value: 'Las Palmas',
      label: 'Las Palmas'
    },
    {
      value: 'General Pinedo',
      label: 'General Pinedo'
    },
    {
      value: 'Capitán Solari',
      label: 'Capitán Solari'
    },
    {
      value: 'Puerto Bermejo',
      label: 'Puerto Bermejo'
    },
    {
      value: 'Presidencia de la Plaza',
      label: 'Presidencia de la Plaza'
    },
    {
      value: 'Campo Largo',
      label: 'Campo Largo'
    },
    {
      value: 'Corzuela',
      label: 'Corzuela'
    },
    {
      value: 'Puerto Eva Perón',
      label: 'Puerto Eva Perón'
    },
    {
      value: 'Napenay',
      label: 'Napenay'
    },
    {
      value: 'La Eduvigis',
      label: 'La Eduvigis'
    },
    {
      value: 'Presidencia Roque Sáenz Peña',
      label: 'Presidencia Roque Sáenz Peña'
    },
    {
      value: 'Las Garcitas',
      label: 'Las Garcitas'
    },
    {
      value: 'Pampa Almirón',
      label: 'Pampa Almirón'
    },
    {
      value: 'Ciervo Petiso',
      label: 'Ciervo Petiso'
    },
    {
      value: 'Avia Terai',
      label: 'Avia Terai'
    },
    {
      value: 'Laguna Limpia',
      label: 'Laguna Limpia'
    },
    {
      value: 'Gral. San Martengeneral San Martín',
      label: 'Gral. San Martengeneral San Martín'
    },
    {
      value: 'Machagai',
      label: 'Machagai'
    },
    {
      value: 'Concepción del Bermejo',
      label: 'Concepción del Bermejo'
    },
    {
      value: 'Pampa del Infierno',
      label: 'Pampa del Infierno'
    },
    {
      value: 'Presidencia Roca',
      label: 'Presidencia Roca'
    },
    {
      value: 'Pampa del Indio',
      label: 'Pampa del Indio'
    },
    {
      value: 'Los Frentones',
      label: 'Los Frentones'
    },
    {
      value: 'Tres Isletas',
      label: 'Tres Isletas'
    },
    {
      value: 'Villa Río Bermejito',
      label: 'Villa Río Bermejito'
    },
    {
      value: 'Misión Nueva Pompeya',
      label: 'Misión Nueva Pompeya'
    },
    {
      value: 'Fuerte Esperanza',
      label: 'Fuerte Esperanza'
    },
    {
      value: 'El Sauzalito',
      label: 'El Sauzalito'
    },
    {
      value: 'Colonia Benitez',
      label: 'Colonia Benitez'
    },
    {
      value: 'Colonias Elisa',
      label: 'Colonias Elisa'
    },
    {
      value: 'Colonias Unidas',
      label: 'Colonias Unidas'
    },
    {
      value: 'General Vedia',
      label: 'General Vedia'
    },
    {
      value: 'Resistencia',
      label: 'Resistencia'
    },
    {
      value: 'Enrique Urien',
      label: 'Enrique Urien'
    },
    {
      value: 'Charadai',
      label: 'Charadai'
    },
    {
      value: 'Margarita Belén',
      label: 'Margarita Belén'
    },
    {
      value: 'La Leonesa',
      label: 'La Leonesa'
    },
    {
      value: 'Charata',
      label: 'Charata'
    },
    {
      value: 'Las Breñas',
      label: 'Las Breñas'
    },
    {
      value: 'Quitilipi',
      label: 'Quitilipi'
    },
    {
      value: 'Taco Pozo',
      label: 'Taco Pozo'
    }
  ],
  Formosa: [
    {
      value: 'Localidades',
      label: 'Todas las localidades'
    },
    {
      value: 'Fortín Lugones',
      label: 'Fortín Lugones'
    },
    {
      value: 'Villa Dos Trece',
      label: 'Villa Dos Trece'
    },
    {
      value: 'San Hilario',
      label: 'San Hilario'
    },
    {
      value: 'General Güemes',
      label: 'General Güemes'
    },
    {
      value: 'General Belgrano',
      label: 'General Belgrano'
    },
    {
      value: 'Misión Taacaglé',
      label: 'Misión Taacaglé'
    },
    {
      value: 'Buena Vista',
      label: 'Buena Vista'
    },
    {
      value: 'Laguna Blanca',
      label: 'Laguna Blanca'
    },
    {
      value: 'Laguna Naik Neck',
      label: 'Laguna Naik Neck'
    },
    {
      value: 'Riacho He-He',
      label: 'Riacho He-He'
    },
    {
      value: 'Colonia Pastoril',
      label: 'Colonia Pastoril'
    },
    {
      value: 'General Mosconi',
      label: 'General Mosconi'
    },
    {
      value: 'Ingeniero Guillermo N. Juárez',
      label: 'Ingeniero Guillermo N. Juárez'
    },
    {
      value: 'Los Chiriguanos',
      label: 'Los Chiriguanos'
    },
    {
      value: 'Las Lomitas',
      label: 'Las Lomitas'
    },
    {
      value: 'Pozo del Tigre',
      label: 'Pozo del Tigre'
    },
    {
      value: 'Estanislao del Campo',
      label: 'Estanislao del Campo'
    },
    {
      value: 'Ibarreta',
      label: 'Ibarreta'
    },
    {
      value: 'Comandante Fontana',
      label: 'Comandante Fontana'
    },
    {
      value: 'Palo Santo',
      label: 'Palo Santo'
    },
    {
      value: 'Pirané',
      label: 'Pirané'
    },
    {
      value: 'Gran Guardia',
      label: 'Gran Guardia'
    },
    {
      value: 'Subteniente Perín',
      label: 'Subteniente Perín'
    },
    {
      value: 'Formosa',
      label: 'Formosa'
    },
    {
      value: 'El Colorado',
      label: 'El Colorado'
    },
    {
      value: 'Villa Escolar',
      label: 'Villa Escolar'
    },
    {
      value: 'San Martín Dos',
      label: 'San Martín Dos'
    },
    {
      value: 'Misión San Francisco de Laishí',
      label: 'Misión San Francisco de Laishí'
    },
    {
      value: 'Herradura',
      label: 'Herradura'
    },
    {
      value: 'General Lucio Victorio Mansilla',
      label: 'General Lucio Victorio Mansilla'
    },
    {
      value: 'Espinillo',
      label: 'Espinillo'
    },
    {
      value: 'Siete Palmas',
      label: 'Siete Palmas'
    },
    {
      value: 'Clorinda',
      label: 'Clorinda'
    },
    {
      value: 'Portón Negro',
      label: 'Portón Negro'
    },
    {
      value: 'Tres Lagunas',
      label: 'Tres Lagunas'
    },
    {
      value: 'Laguna Yema',
      label: 'Laguna Yema'
    },
    {
      value: 'Mayor Vicente E. Villafañe',
      label: 'Mayor Vicente E. Villafañe'
    }
  ],
  Jujuy: [
    {
      value: 'Localidades',
      label: 'Todas las localidades'
    },
    {
      value: 'Yavi',
      label: 'Yavi'
    },
    {
      value: 'El Cóndor',
      label: 'El Cóndor'
    },
    {
      value: 'Cangrejillos',
      label: 'Cangrejillos'
    },
    {
      value: 'Abra Pampa',
      label: 'Abra Pampa'
    },
    {
      value: 'Tres Cruces',
      label: 'Tres Cruces'
    },
    {
      value: 'Abralaite',
      label: 'Abralaite'
    },
    {
      value: 'Humahuaca',
      label: 'Humahuaca'
    },
    {
      value: 'Abdón Castro Tolay',
      label: 'Abdón Castro Tolay'
    },
    {
      value: 'Coranzuli',
      label: 'Coranzuli'
    },
    {
      value: 'El Aguilar',
      label: 'El Aguilar'
    },
    {
      value: 'Susques',
      label: 'Susques'
    },
    {
      value: 'Caspalá',
      label: 'Caspalá'
    },
    {
      value: 'Santa Ana',
      label: 'Santa Ana'
    },
    {
      value: 'Huacalera',
      label: 'Huacalera'
    },
    {
      value: 'Catua',
      label: 'Catua'
    },
    {
      value: 'Pampichuela',
      label: 'Pampichuela'
    },
    {
      value: 'Valle Grande',
      label: 'Valle Grande'
    },
    {
      value: 'Yuto',
      label: 'Yuto'
    },
    {
      value: 'El Talar',
      label: 'El Talar'
    },
    {
      value: 'Maimará',
      label: 'Maimará'
    },
    {
      value: 'Calilegua',
      label: 'Calilegua'
    },
    {
      value: 'Vinalito',
      label: 'Vinalito'
    },
    {
      value: 'Libertador General San Martín',
      label: 'Libertador General San Martín'
    },
    {
      value: 'Fraile Pintado',
      label: 'Fraile Pintado'
    },
    {
      value: 'Palpalá',
      label: 'Palpalá'
    },
    {
      value: 'San Salvador de Jujuy',
      label: 'San Salvador de Jujuy'
    },
    {
      value: 'Arrayanal',
      label: 'Arrayanal'
    },
    {
      value: 'La Esperanza',
      label: 'La Esperanza'
    },
    {
      value: 'El Fuerte',
      label: 'El Fuerte'
    },
    {
      value: 'Rodeíto',
      label: 'Rodeíto'
    },
    {
      value: 'Santa Clara',
      label: 'Santa Clara'
    },
    {
      value: 'La Mendieta',
      label: 'La Mendieta'
    },
    {
      value: 'San Antonio',
      label: 'San Antonio'
    },
    {
      value: 'Rosario de Río Grande',
      label: 'Rosario de Río Grande'
    },
    {
      value: 'El Carmen',
      label: 'El Carmen'
    },
    {
      value: 'Perico',
      label: 'Perico'
    },
    {
      value: 'Puesto Viejo',
      label: 'Puesto Viejo'
    },
    {
      value: 'Monterrico',
      label: 'Monterrico'
    },
    {
      value: 'Pampa Blanca',
      label: 'Pampa Blanca'
    },
    {
      value: 'Aguas Calientes',
      label: 'Aguas Calientes'
    },
    {
      value: 'Barrios',
      label: 'Barrios'
    },
    {
      value: 'Rinconada',
      label: 'Rinconada'
    },
    {
      value: 'Santa Catalina',
      label: 'Santa Catalina'
    },
    {
      value: 'Cieneguillas',
      label: 'Cieneguillas'
    },
    {
      value: 'La Quiaca',
      label: 'La Quiaca'
    },
    {
      value: 'Cusi Cusi',
      label: 'Cusi Cusi'
    },
    {
      value: 'Pumahuasi',
      label: 'Pumahuasi'
    },
    {
      value: 'Mina Pirquitas',
      label: 'Mina Pirquitas'
    },
    {
      value: 'Puesto del Marqués',
      label: 'Puesto del Marqués'
    },
    {
      value: 'Hipólito Yrigoyen',
      label: 'Hipólito Yrigoyen'
    },
    {
      value: 'Caimancito',
      label: 'Caimancito'
    },
    {
      value: 'Purmamarca',
      label: 'Purmamarca'
    },
    {
      value: 'Tilcara',
      label: 'Tilcara'
    },
    {
      value: 'San Francisco',
      label: 'San Francisco'
    },
    {
      value: 'Tumbaya',
      label: 'Tumbaya'
    },
    {
      value: 'Volcán',
      label: 'Volcán'
    },
    {
      value: 'Palma Sola',
      label: 'Palma Sola'
    },
    {
      value: 'Yala',
      label: 'Yala'
    },
    {
      value: 'El Piquete',
      label: 'El Piquete'
    },
    {
      value: 'San Pedro de Jujuy',
      label: 'San Pedro de Jujuy'
    }
  ],
  'Ciudad Autónoma de Buenos Aires': [
    {
      value: 'Localidades',
      label: 'Todas las localidades'
    },
    {
      value: 'CIUDAD DE BUENOS AIRES',
      label: 'CIUDAD DE BUENOS AIRES'
    },
    {
      value: 'CONSTITUCION',
      label: 'CONSTITUCION'
    },
    {
      value: 'MONSERRAT',
      label: 'MONSERRAT'
    },
    {
      value: 'PUERTO MADERO',
      label: 'PUERTO MADERO'
    },
    {
      value: 'RETIRO',
      label: 'RETIRO'
    },
    {
      value: 'SAN NICOLAS',
      label: 'SAN NICOLAS'
    },
    {
      value: 'SAN TELMO',
      label: 'SAN TELMO'
    },
    {
      value: 'RECOLETA',
      label: 'RECOLETA'
    },
    {
      value: 'BALVANERA',
      label: 'BALVANERA'
    },
    {
      value: 'SAN CRISTOBAL',
      label: 'SAN CRISTOBAL'
    },
    {
      value: 'BARRACAS',
      label: 'BARRACAS'
    },
    {
      value: 'BOCA',
      label: 'BOCA'
    },
    {
      value: 'NUEVA POMPEYA',
      label: 'NUEVA POMPEYA'
    },
    {
      value: 'PARQUE PATRICIOS',
      label: 'PARQUE PATRICIOS'
    },
    {
      value: 'ALMAGRO',
      label: 'ALMAGRO'
    },
    {
      value: 'BOEDO',
      label: 'BOEDO'
    },
    {
      value: 'CABALLITO',
      label: 'CABALLITO'
    },
    {
      value: 'FLORES',
      label: 'FLORES'
    },
    {
      value: 'PARQUE CHACABUCO',
      label: 'PARQUE CHACABUCO'
    },
    {
      value: 'VILLA LUGANO',
      label: 'VILLA LUGANO'
    },
    {
      value: 'VILLA RIACHUELO',
      label: 'VILLA RIACHUELO'
    },
    {
      value: 'VILLA SOLDATI',
      label: 'VILLA SOLDATI'
    },
    {
      value: 'LINIERS',
      label: 'LINIERS'
    },
    {
      value: 'MATADEROS',
      label: 'MATADEROS'
    },
    {
      value: 'PARQUE AVELLANEDA',
      label: 'PARQUE AVELLANEDA'
    },
    {
      value: 'FLORESTA',
      label: 'FLORESTA'
    },
    {
      value: 'MONTE CASTRO',
      label: 'MONTE CASTRO'
    },
    {
      value: 'VELEZ SARSFIELD',
      label: 'VELEZ SARSFIELD'
    },
    {
      value: 'VERSALLES',
      label: 'VERSALLES'
    },
    {
      value: 'VILLA LURO',
      label: 'VILLA LURO'
    },
    {
      value: 'VILLA REAL',
      label: 'VILLA REAL'
    },
    {
      value: 'VILLA DEL PARQUE',
      label: 'VILLA DEL PARQUE'
    },
    {
      value: 'VILLA DEVOTO',
      label: 'VILLA DEVOTO'
    },
    {
      value: 'VILLA GENERAL MITRE',
      label: 'VILLA GENERAL MITRE'
    },
    {
      value: 'VILLA SANTA RITA',
      label: 'VILLA SANTA RITA'
    },
    {
      value: 'COGHLAN',
      label: 'COGHLAN'
    },
    {
      value: 'SAAVEDRA',
      label: 'SAAVEDRA'
    },
    {
      value: 'VILLA PUEYRREDON',
      label: 'VILLA PUEYRREDON'
    },
    {
      value: 'VILLA URQUIZA',
      label: 'VILLA URQUIZA'
    },
    {
      value: 'BELGRANO',
      label: 'BELGRANO'
    },
    {
      value: 'COLEGIALES',
      label: 'COLEGIALES'
    },
    {
      value: 'NUÑEZ',
      label: 'NUÑEZ'
    },
    {
      value: 'PALERMO',
      label: 'PALERMO'
    },
    {
      value: 'AGRONOMIA',
      label: 'AGRONOMIA'
    },
    {
      value: 'CHACARITA',
      label: 'CHACARITA'
    },
    {
      value: 'PARQUE CHAS',
      label: 'PARQUE CHAS'
    },
    {
      value: 'PATERNAL',
      label: 'PATERNAL'
    },
    {
      value: 'VILLA CRESPO',
      label: 'VILLA CRESPO'
    },
    {
      value: 'VILLA ORTUZAR',
      label: 'VILLA ORTUZAR'
    }
  ],
  'Buenos Aires': [
    {
      value: 'Localidades',
      label: 'Todas las localidades'
    },
    {
      value: 'Bahía Blanca',
      label: 'Bahía Blanca'
    },
    {
      value: 'General Alvarado',
      label: 'General Alvarado'
    },
    {
      value: 'General Pueyrredón',
      label: 'General Pueyrredón'
    },
    {
      value: 'Mar Chiquita',
      label: 'Mar Chiquita'
    },
    {
      value: 'Pinamar',
      label: 'Pinamar'
    },
    {
      value: 'Magdalena',
      label: 'Magdalena'
    },
    {
      value: 'Vicente López',
      label: 'Vicente López'
    },
    {
      value: 'Pergamino',
      label: 'Pergamino'
    },
    {
      value: 'Rauch',
      label: 'Rauch'
    },
    {
      value: 'Salliqueló',
      label: 'Salliqueló'
    },
    {
      value: 'Coronel Pringles',
      label: 'Coronel Pringles'
    },
    {
      value: 'Saladillo',
      label: 'Saladillo'
    },
    {
      value: 'Las Flores',
      label: 'Las Flores'
    },
    {
      value: 'Rojas',
      label: 'Rojas'
    },
    {
      value: 'Escobar',
      label: 'Escobar'
    },
    {
      value: 'Bolívar',
      label: 'Bolívar'
    },
    {
      value: 'José C. Paz',
      label: 'José C. Paz'
    },
    {
      value: 'Maipú',
      label: 'Maipú'
    },
    {
      value: 'La Matanza',
      label: 'La Matanza'
    },
    {
      value: 'San Antonio de Areco',
      label: 'San Antonio de Areco'
    },
    {
      value: 'Moreno',
      label: 'Moreno'
    },
    {
      value: 'General Paz',
      label: 'General Paz'
    },
    {
      value: 'General Guido',
      label: 'General Guido'
    },
    {
      value: 'General Juan Madariaga',
      label: 'General Juan Madariaga'
    },
    {
      value: 'Tandil',
      label: 'Tandil'
    },
    {
      value: 'Coronel Suárez',
      label: 'Coronel Suárez'
    },
    {
      value: 'Adolfo Gonzales Chaves',
      label: 'Adolfo Gonzales Chaves'
    },
    {
      value: 'Villa Gesell',
      label: 'Villa Gesell'
    },
    {
      value: 'General Lavalle',
      label: 'General Lavalle'
    },
    {
      value: 'La Costa',
      label: 'La Costa'
    },
    {
      value: 'Berazategui',
      label: 'Berazategui'
    },
    {
      value: 'Tornquist',
      label: 'Tornquist'
    },
    {
      value: 'Tigre',
      label: 'Tigre'
    },
    {
      value: 'Adolfo Alsina',
      label: 'Adolfo Alsina'
    },
    {
      value: 'Pellegrini',
      label: 'Pellegrini'
    },
    {
      value: 'Villarino',
      label: 'Villarino'
    },
    {
      value: 'Puán',
      label: 'Puán'
    },
    {
      value: 'General Villegas',
      label: 'General Villegas'
    },
    {
      value: 'Castelli',
      label: 'Castelli'
    },
    {
      value: 'Almirante Brown',
      label: 'Almirante Brown'
    },
    {
      value: 'La Plata',
      label: 'La Plata'
    },
    {
      value: 'Presidente Perón',
      label: 'Presidente Perón'
    },
    {
      value: 'Brandsen',
      label: 'Brandsen'
    },
    {
      value: 'Carlos Casares',
      label: 'Carlos Casares'
    },
    {
      value: 'Carlos Tejedor',
      label: 'Carlos Tejedor'
    },
    {
      value: '9 de Julio',
      label: '9 de Julio'
    },
    {
      value: 'Pehuajó',
      label: 'Pehuajó'
    },
    {
      value: 'Trenque Lauquen',
      label: 'Trenque Lauquen'
    },
    {
      value: 'Roque Pérez',
      label: 'Roque Pérez'
    },
    {
      value: 'Olavarría',
      label: 'Olavarría'
    },
    {
      value: 'Arrecifes',
      label: 'Arrecifes'
    },
    {
      value: 'Capitán Sarmiento',
      label: 'Capitán Sarmiento'
    },
    {
      value: 'Carmen de Areco',
      label: 'Carmen de Areco'
    },
    {
      value: 'Salto',
      label: 'Salto'
    },
    {
      value: 'Merlo',
      label: 'Merlo'
    },
    {
      value: 'Esteban Echeverría',
      label: 'Esteban Echeverría'
    },
    {
      value: 'Exaltación de la Cruz',
      label: 'Exaltación de la Cruz'
    },
    {
      value: 'San Miguel',
      label: 'San Miguel'
    },
    {
      value: 'Pilar',
      label: 'Pilar'
    },
    {
      value: 'Luján',
      label: 'Luján'
    },
    {
      value: 'Junín',
      label: 'Junín'
    },
    {
      value: 'Chacabuco',
      label: 'Chacabuco'
    },
    {
      value: 'Mercedes',
      label: 'Mercedes'
    },
    {
      value: 'Hurlingham',
      label: 'Hurlingham'
    },
    {
      value: 'General Rodríguez',
      label: 'General Rodríguez'
    },
    {
      value: 'Morón',
      label: 'Morón'
    },
    {
      value: 'Lincoln',
      label: 'Lincoln'
    },
    {
      value: 'Ituzaingó',
      label: 'Ituzaingó'
    },
    {
      value: 'Suipacha',
      label: 'Suipacha'
    },
    {
      value: 'Marcos Paz',
      label: 'Marcos Paz'
    },
    {
      value: 'Tres de Febrero',
      label: 'Tres de Febrero'
    },
    {
      value: 'Chivilcoy',
      label: 'Chivilcoy'
    },
    {
      value: 'Alberti',
      label: 'Alberti'
    },
    {
      value: 'Bragado',
      label: 'Bragado'
    },
    {
      value: 'Lanús',
      label: 'Lanús'
    },
    {
      value: 'General las Heras',
      label: 'General las Heras'
    },
    {
      value: 'Lomas de Zamora',
      label: 'Lomas de Zamora'
    },
    {
      value: 'Florencio Varela',
      label: 'Florencio Varela'
    },
    {
      value: 'Quilmes',
      label: 'Quilmes'
    },
    {
      value: 'Pila',
      label: 'Pila'
    },
    {
      value: 'Navarro',
      label: 'Navarro'
    },
    {
      value: 'Cañuelas',
      label: 'Cañuelas'
    },
    {
      value: 'San Vicente',
      label: 'San Vicente'
    },
    {
      value: 'General la Madrid',
      label: 'General la Madrid'
    },
    {
      value: 'Benito Juárez',
      label: 'Benito Juárez'
    },
    {
      value: 'Balcarce',
      label: 'Balcarce'
    },
    {
      value: 'Azul',
      label: 'Azul'
    },
    {
      value: 'Guaminí',
      label: 'Guaminí'
    },
    {
      value: 'Tordillo',
      label: 'Tordillo'
    },
    {
      value: 'Avellaneda',
      label: 'Avellaneda'
    },
    {
      value: 'San Isidro',
      label: 'San Isidro'
    },
    {
      value: 'Patagones',
      label: 'Patagones'
    },
    {
      value: 'Coronel de Marina Leonardo Rosales',
      label: 'Coronel de Marina Leonardo Rosales'
    },
    {
      value: 'Colón',
      label: 'Colón'
    },
    {
      value: 'Saavedra',
      label: 'Saavedra'
    },
    {
      value: 'Monte Hermoso',
      label: 'Monte Hermoso'
    },
    {
      value: 'Lobería',
      label: 'Lobería'
    },
    {
      value: 'Berisso',
      label: 'Berisso'
    },
    {
      value: 'San Fernando',
      label: 'San Fernando'
    },
    {
      value: 'Zárate',
      label: 'Zárate'
    },
    {
      value: 'Ramallo',
      label: 'Ramallo'
    },
    {
      value: 'San Nicolás',
      label: 'San Nicolás'
    },
    {
      value: 'General Arenales',
      label: 'General Arenales'
    },
    {
      value: 'Florentino Ameghino',
      label: 'Florentino Ameghino'
    },
    {
      value: 'San Pedro',
      label: 'San Pedro'
    },
    {
      value: 'General Pinto',
      label: 'General Pinto'
    },
    {
      value: 'San Cayetano',
      label: 'San Cayetano'
    },
    {
      value: 'Tres Arroyos',
      label: 'Tres Arroyos'
    },
    {
      value: 'Coronel Dorrego',
      label: 'Coronel Dorrego'
    },
    {
      value: 'Necochea',
      label: 'Necochea'
    },
    {
      value: 'Lezama',
      label: 'Lezama'
    },
    {
      value: 'Chascomús',
      label: 'Chascomús'
    },
    {
      value: 'Punta Indio',
      label: 'Punta Indio'
    },
    {
      value: 'Campana',
      label: 'Campana'
    },
    {
      value: '25 de Mayo',
      label: '25 de Mayo'
    },
    {
      value: 'General Belgrano',
      label: 'General Belgrano'
    },
    {
      value: 'Monte',
      label: 'Monte'
    },
    {
      value: 'Lobos',
      label: 'Lobos'
    },
    {
      value: 'General Alvear',
      label: 'General Alvear'
    },
    {
      value: 'Tapalqué',
      label: 'Tapalqué'
    },
    {
      value: 'Tres Lomas',
      label: 'Tres Lomas'
    },
    {
      value: 'Ayacucho',
      label: 'Ayacucho'
    },
    {
      value: 'General San Martín',
      label: 'General San Martín'
    },
    {
      value: 'Malvinas Argentinas',
      label: 'Malvinas Argentinas'
    },
    {
      value: 'San Andrés de Giles',
      label: 'San Andrés de Giles'
    },
    {
      value: 'General Viamonte',
      label: 'General Viamonte'
    },
    {
      value: 'Daireaux',
      label: 'Daireaux'
    },
    {
      value: 'Ezeiza',
      label: 'Ezeiza'
    },
    {
      value: 'Rivadavia',
      label: 'Rivadavia'
    },
    {
      value: 'Hipólito Yrigoyen',
      label: 'Hipólito Yrigoyen'
    },
    {
      value: 'Dolores',
      label: 'Dolores'
    },
    {
      value: 'Ensenada',
      label: 'Ensenada'
    },
    {
      value: 'Laprida',
      label: 'Laprida'
    },
    {
      value: 'Leandro N. Alem',
      label: 'Leandro N. Alem'
    },
    {
      value: 'Baradero',
      label: 'Baradero'
    }
  ],
  'Tierra del Fuego': [
    {
      value: 'Localidades',
      label: 'Todas las localidades'
    },
    {
      value: 'Río Grande',
      label: 'Río Grande'
    },
    {
      value: 'Tolhuin',
      label: 'Tolhuin'
    },
    {
      value: 'Ushuaia',
      label: 'Ushuaia'
    }
  ]
};
interface props {
  value: SingleValue<Option>;
}

const SelectComponent: React.FC<props> = () => {
  const [elegido, setElegido] = useState({
    bool: false,
    prov: 'Provincias'
  });

  const { provincia, localidad } = useCustomSelector(
    (state) => state.pets.filtros
  );

  const provHandler = (option: Option | null): void => {
    if (option !== null) {
      filtrado('provincia', option.value);
      filtrado('localidad', 'Localidades');
      setElegido({
        bool: true,
        prov: option.value
      });
    }
  };

  const depHandler = (option: Option | null): void => {
    if (option !== null) {
      filtrado('localidad', option.value);
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
        options={provincias[elegido.prov as keyof Provincias]}
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
