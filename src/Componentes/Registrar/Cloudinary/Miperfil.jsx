import React, { useState } from 'react';
import axios from 'axios';
import { useCustomDispatch } from 'hooks/redux';
// import { setImagenMascota } from 'helpers';
import { setImageUser } from 'redux/slices/users';

const SelectImage = () => {
  const [image, setImage] = useState('');
  const dispatch = useCustomDispatch();
  async function uploadImage(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', 'PF-PetsHouse-ImagenesUsuarios');
    await axios
      .post('https://api.cloudinary.com/v1_1/dhragsmmq/image/upload', formData)
      .then((response) => {
        dispatch(setImageUser(response.data.secure_url));
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
      <button
        onClick={(e) => {
          uploadImage(e);
        }}
      >
        Subir Imagen
      </button>
    </div>
  );
};

export default SelectImage;
