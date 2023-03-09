import React, { useState } from 'react';
import axios from 'axios';
import { useCustomDispatch } from 'hooks/redux';
// import { setImagenMascota } from 'helpers';
import { setImagePet } from 'redux/slices/mascotas';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const ButtonTodos = styled(Button)({
  background: '#fff',
  marginLeft: '35%',
  [`&.MuiButton-text`]: {
    color: '#7d8bcc'
  }
});

const SelectImage = () => {
  const [image, setImage] = useState('');
  const dispatch = useCustomDispatch();
  async function uploadImage(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', 'PF-PetsHouse-ImagenesMascotas');
    await axios
      .post('https://api.cloudinary.com/v1_1/dhragsmmq/image/upload', formData)
      .then((response) => {
        dispatch(setImagePet(response.data.secure_url));
      });
  }
  return (
    <div>
      <label htmlFor="image">Imagen</label>
      <input
        type="file"
        name="image"
        // value={image}
        onChange={(e) => {
          setImage(e.target.files[0]);
        }}
      />
      <ButtonTodos
        onClick={(e) => {
          uploadImage(e);
        }}
      >
        Subir Imagen
      </ButtonTodos>
    </div>
  );
};

export default SelectImage;
