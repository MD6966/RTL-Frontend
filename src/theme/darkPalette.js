const white = '#FFFFFF';
const black = '#000000';

export default {
  type: 'dark',
  black,
  white,
  action: {
    active: 'rgba(255, 255, 255, 0.54)',
    hover: 'rgba(255, 255, 255, 0.04)',
    selected: 'rgba(255, 255, 255, 0.08)',
    disabled: 'rgba(255, 255, 255, 0.26)',
    disabledBackground: 'rgba(255, 255, 255, 0.12)',
    focus: 'rgba(255, 255, 255, 0.12)'
  },
  background: {
    default: '#1c2025',
    dark: '#1c2025',
    light: '#323232',
    paper: '#282C34'
  },
  primary: {
    main: '#323232',
    dark: '#adb0bb'
  },
  secondary: {
    main: '#adb0bb'
  },
  text: {
    primary: '#adb0bb',
    secondary: '#adb0bb'
  }
};
