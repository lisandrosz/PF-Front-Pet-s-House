import React, { useState } from 'react';
import { searchPet } from 'helpers';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto'
  }
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(0)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch'
    }
  }
}));

const SearchBar: React.FC = () => {
  const [name, setName] = useState('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setName(e.target.value);
  }

  const handleSubmit = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    e.preventDefault();

    if (name.length > 0) {
      searchPet(name);
      setName('');
    }
  };
  return (
    <Search>
      <StyledInputBase
        onChange={handleChange}
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
      />
      <Button onClick={handleSubmit}>
        <SearchIcon sx={{ color: 'white' }}></SearchIcon>
      </Button>
    </Search>
    // <div>
    //   <input
    //     type="text"
    //     value={name}
    //     placeholder="Buscar..."
    //     onChange={handleChange}
    //   />
    //   <button type="submit" onClick={handleSubmit}>
    //     Buscar
    //   </button>
    // </div>
  );
};

export default SearchBar;
