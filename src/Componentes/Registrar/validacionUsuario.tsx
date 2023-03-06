// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function validateUser(user: any) {
  const error = {
    name: '',
    email: '',
    password: '',
    password2: '',
    image: ''
  };
  if (user.name !== '') {
    if (!/^([\w]{2,})+\s+([\w\s]{2,})+$/i.test(user.name))
      error.name =
        'El nombre debe contar al menos con 2 caracteres y un espacio';
  }
  if (user.email !== '') {
    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(user.email))
      error.email = 'No es un mail valido';
  }
  if (user.password !== '') {
    if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(user.password))
      error.password =
        'La contraseña debe tener al menos 8 caracteres, una minuscula, una mayuscula y un numero';
  }
  if (user.image !== '') {
    if (!/([a-z\-_0-9/:.]*\.(jpg|jpeg|png))/i.test(user.image))
      error.image = 'La imagen debe tener formato .jpg o .png';
  }
  if (user.password !== user.password2) {
    error.password2 = 'Las contraseñas no corresponden';
  }
  return error;
}

export default validateUser;
