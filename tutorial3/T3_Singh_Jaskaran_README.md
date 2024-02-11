# Tutorial3

* *Date Created*: 10 FEBRUARY 2024
* *Last Modification Date*: 11 FEBRUARY 2024
* *Tutorial URL*: <https://main--feature-jaskaran-assignment1.netlify.app/>
* *Git URL*: <https://git.cs.dal.ca/singh16/csci-5709-assignments/-/tree/main/assignment1>

## Authors

* [Jaskaran Singh](js356337@dal.ca)

## Deployment

I created a mirror repository on github from gitlab and deployed on netlify. Configued the built settings of Netlify as required and the website is live on above URL.

## Built With

React + TypeScript + Vite

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Sources Used

### registration.tsx

*Lines 95 - 158*

```
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

```

The code above was created by adapting the code in [Material UI - SIGNUP](https://github.com/mui/material-ui/blob/v5.15.9/docs/data/material/getting-started/templates/sign-up/SignUp.tsx) as shown below:


```
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function SignUp() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
```

*Line 70

```
else if (!/\S+@\S+\.\S+/.test(email)) {
```

The code above was created by using tool [Regex Generator](https://regex-generator.olafneumann.org/?sampleText=JAS%40GMAIL.COM&flags=Pi&selection=0%7CRFC2822%20e-mail) for creating regular expression for email address: