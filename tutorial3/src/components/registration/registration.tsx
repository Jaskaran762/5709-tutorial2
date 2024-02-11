import React, { useState } from 'react';
import { TextField, Button, Box, Container, Typography } from '@mui/material';

const RegistrationPage: React.FC = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [firstNameError, setFirstNameError] = useState<string>('');
  const [lastNameError, setLastNameError] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [confirmPasswordError, setConfirmPasswordError] = useState<string>('');

  const validatePasswordStrength = (password: string): string => {
    return password.length < 8 ? 'Password should be at least 8 characters long' : '';
  };

  const handleFirstNameChange = (value: string) => {
    setFirstName(value);
    if (value && firstNameError) {
      setFirstNameError('');
    }
  };

  const handleLastNameChange = (value: string) => {
    setLastName(value);
    if (value && lastNameError) {
      setLastNameError('');
    }
  };

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

  const handleConfirmPasswordChange = (value: string) => {
    setConfirmPassword(value);
    if (value && confirmPasswordError) {
      setConfirmPasswordError('');
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let status = false;
    // Perform validation
    if (!firstName) {
      setFirstNameError('First name is required');
      status = true;
    }
    if (!lastName) {
      setLastNameError('Last name is required');
      status = true;
    }
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
    } else if (password.length < 8) {
      setPasswordError('Password should be at least 8 characters long');
      status = true;
    }
    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
      status = true;
    } else if (confirmPassword.length === 0) {
      setConfirmPasswordError('Password cannot be empty');
      status = true;
    }
    // Redirect to profile page
    if (!status) {
      window.location.href = '/profile';
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
          Registration
        </Typography>
        <TextField
          label="First Name"
          value={firstName}
          onChange={(e) => handleFirstNameChange(e.target.value)}
          error={!!firstNameError}
          helperText={firstNameError}
          required
        />
        <TextField
          label="Last Name"
          value={lastName}
          onChange={(e) => handleLastNameChange(e.target.value)}
          error={!!lastNameError}
          helperText={lastNameError}
          required
        />
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
          helperText={passwordError || validatePasswordStrength(password)}
          required
        />
        <TextField
          label="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={(e) => handleConfirmPasswordChange(e.target.value)}
          error={!!confirmPasswordError}
          helperText={confirmPasswordError}
          required
        />
        <Box mt={2}>
          <Button type="submit" variant="contained" color="primary">
            Register
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default RegistrationPage;
