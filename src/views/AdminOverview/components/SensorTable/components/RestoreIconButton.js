import React from 'react';
import { CircularProgress, IconButton } from '@material-ui/core';
import RestoreIcon from '@material-ui/icons/RestoreFromTrash';

export default function RestoreIconButton(props) {
  const { value, del } = props;
  const [loading, setLoading] = React.useState(false);

  const handleTrash = async () => {
    setLoading(true);
    const data = await del(value);
    setLoading(false);
  };

  return (
    <IconButton
      key={value}
      aria-label="delete"
      onClick={() => handleTrash(value)}>
      {loading ? <CircularProgress size={20} /> : <RestoreIcon />}
    </IconButton>
  );
}
