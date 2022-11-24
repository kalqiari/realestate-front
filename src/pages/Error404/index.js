import React from 'react';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {grey} from '@mui/material/colors';
import {ReactComponent as Logo} from '../../resources/icons/404.svg';
import {useTheme} from '@mui/material';

const Error404 = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const onGoBackToHome = () => {
    navigate("/");
  };

  return (
    <dev>
      <Box
        sx={{
          py: {xl: 8},
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Box
          sx={{
            mb: {xs: 4, xl: 8},
            width: '100%',
            maxWidth: {xs: 200, sm: 300, xl: 706},
            '& svg': {
              width: '100%',
              maxWidth: 400,
            },
          }}
        >
          <Logo fill={theme.palette.primary.main} />
        </Box>
        <Box
          sx={{
            mb: {xs: 4, xl: 5},
          }}
        >
          <Box
            variant='h3'
            sx={{
              mb: {xs: 3, xl: 4},
              fontSize: {xs: 20, md: 24},
              fontWeight: "normal",
            }}
          >
              404 Error.
          </Box>
          <Box
            sx={{
              mb: {xs: 4, xl: 5},
              color: grey[600],
              fontSize: 16,
              fontWeight: "normal",
            }}
          >
            <Typography>
                We can't find the page that
            </Typography>
            <Typography>
                you are looking for.
            </Typography>
          </Box>
          <Button
            variant='contained'
            color='primary'
            sx={{
              fontWeight: "normal",
              fontSize: 16,
              textTransform: 'capitalize',
            }}
            onClick={onGoBackToHome}
          >
            Back to Home
          </Button>
        </Box>
      </Box>
    </dev>
  );
};

export default Error404;
