import { createMuiTheme } from '@material-ui/core';

import palette from './palette';
import darkPalette from './darkPalette';
import typography from './typography';
import darkTypography from './darkTypography';
import { softShadows, strongShadows } from './shadows';
import overrides from './overrides';
import darkOverrides from './darkOverrides';

export function createTheme(settings) {
  if (settings === 'dark') {
    const darkTheme = createMuiTheme({
      palette: darkPalette,
      typography: darkTypography,
      overrides: darkOverrides,
      shadows: strongShadows
    });
    return darkTheme;
  } else {
    const theme = createMuiTheme({
      palette,
      typography,
      overrides,
      shadows: softShadows
    });
    return theme;
  }
}
