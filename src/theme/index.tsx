import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

interface Props {
  children: React.ReactNode;
}

enum themePalette {
  lightPurple = '#a6b2ed',
  orangeColor = '#efa02a'
}

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: themePalette.lightPurple,
      contrastText: '#fff'
    },
    secondary: {
      main: themePalette.orangeColor,
      contrastText: '#fff'
    }
  }
});

const MuiThemeProvider: React.FC<Props> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MuiThemeProvider;
