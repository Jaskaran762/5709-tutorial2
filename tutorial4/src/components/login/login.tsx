import React, { useState } from 'react';
import { TextField, Button, Box, Container, Typography, Snackbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

interface LoginPageProps {
  onLogin: () => void; 
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => { // Accept onLogin prop

  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>('');

  const handleEmailChange = (value: string) => {
    setEmail(value);
    if (value && emailError) {
      setEmailError('');
    }
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    if (value && passwordError) {
      setPasswordError('');
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let status = false;
    // Perform validation
    if (!email) {
      setEmailError('Email is required');
      status = true;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Please enter a valid email');
      status = true;
    }
    if (!password) {
      setPasswordError('Password is required');
      status = true;
    }
    
    // If no validation errors, proceed with API call
    if (!status) {
      try {
        const response = await axios.post('https://express-t4.onrender.com/api/login', {
          username: email,
          password: password
        });
        
        if (response.status === 200) {
          // Redirect to dashboard upon successful login
          onLogin(); // Call the onLogin callback
          navigate('/dashboard');
        } else {
          //login failure
          setSnackbarMessage('Login failed. Please check your credentials and try again.');
          setSnackbarOpen(true);
          console.error('Login failed:', response.statusText);
        }
      } catch (error) {
        // network or server errors
        setSnackbarMessage('An error occurred while logging in. Please try again later.');
        setSnackbarOpen(true);
        console.error('An error occurred while logging in:', error);
      }
    }
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: 2, border: '1px solid #ccc', borderRadius: '4px', padding: '10px' }}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          '& .MuiTextField-root': { m: 1, width: '60ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
        <TextField
          label="Email"
          value={email}
          onChange={(e) => handleEmailChange(e.target.value)}
          error={!!emailError}
          helperText={emailError}
          required
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => handlePasswordChange(e.target.value)}
          error={!!passwordError}
          helperText={passwordError}
          required
        />
        <Box mt={2}>
          <Button type="submit" variant="contained" color="primary">
            Login
          </Button>
        </Box>
      </Box>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message={snackbarMessage}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      />
    </Container>
  );
};

export default LoginPage;
