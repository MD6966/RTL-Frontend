import palette from '../darkPalette';
import typography from '../darkTypography';

export default {
  root: {
    ...typography.body1,
    borderBottom: `1px solid ${palette.divider}`
  }
};
