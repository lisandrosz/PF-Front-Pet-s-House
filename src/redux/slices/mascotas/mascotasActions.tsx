import axios from 'axios'
import store from 'redux/store'
import  { setAllPets } from './index'

export interface Pet {
    id: number;
    name: string;
    image: string;
    age: number;
    description: string;
    size: string;
    healthBook: boolean;
    animal: string;
    active: boolean;
    provincia: string;
    localidad: string;
    sex: string,
    userId: number | null
  }


  export const getPetsApi= async ()=>{
   await axios.get<Pet[]>("http://localhost:3001/pets")
    .then((data)=> store.dispatch(setAllPets(data.data)))
    .catch(e=> console.log(e))
} 