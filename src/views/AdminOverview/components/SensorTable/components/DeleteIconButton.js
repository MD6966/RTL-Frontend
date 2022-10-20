import React from 'react';
import { CircularProgress, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

export default function DeleteIconButton(props) {
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
      {loading ? <CircularProgress size={20} /> : <DeleteIcon />}
    </IconButton>
  );
}
