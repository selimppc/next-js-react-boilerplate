import PropTypes from 'prop-types';
import { useMemo } from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import { useSettings } from '../hooks';
import palette from './palette';

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function ThemeProvider({ children }) {
  const { themeMode, themeDirection } = useSettings();
  const isLight = themeMode === 'light';

  const themeOptions = useMemo(
    () => ({
      palette: isLight ? palette.light : palette.dark,
      direction: themeDirection,
      shape: { borderRadius: 8 },
    }),
    [isLight, themeDirection]
  );

  const theme = createTheme(themeOptions);

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}
