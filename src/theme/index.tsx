import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

interface Props {
  children: React.ReactNode;
}

enum themePalette {
  lightPurple = '#a6b2ed'
}

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: themePalette.lightPurple,
      contrastText: '#fff'
    }
  }
});

const MuiThemeProvider: React.FC<Props> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MuiThemeProvider;
