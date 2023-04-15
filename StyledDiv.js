import { styled } from '@mui/material/styles';

const PREFIX = 'Demo';

export const classes = {
    container: `${PREFIX}-container`,
    text: `${PREFIX}-text`,
  };

export const StyledDiv = styled('div')(({ theme }) => ({
    [`&.${classes.container}`]: {
      display: 'flex',
      marginBottom: theme.spacing(2),
      justifyContent: 'flex-end',
    },
    [`& .${classes.text}`]: {
      ...theme.typography.h6,
      marginRight: theme.spacing(2),
    },
  }));