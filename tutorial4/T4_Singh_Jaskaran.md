# Tutorial3

* *Date Created*: 19 FEBRUARY 2024
* *Last Modification Date*: 19 FEBRUARY 2024
* *Tutorial URL*: <https://main--tutorial4-jaskaran-5709.netlify.app//>
* *Git URL*: <https://git.cs.dal.ca/singh16/csci-5709-tutorials/-/tree/main/tutorial4?ref_type=heads>

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

### login.tsx

*Lines 82 - 125*

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

### dashboard.tsx

```
<Container maxWidth="md" sx={{ marginTop: 2 }}>
      {/* Search box */}
      <TextField
        label="Search by Name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        fullWidth
        margin="normal"
        variant="outlined"
      />
      
      {/* Display users or message */}
      {filteredUsers.length === 0 ? (
        <Typography variant="h6" align="center" color="textSecondary" sx={{ marginTop: 2 }}>
          No users found.
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {filteredUsers.map(user => (
            <Grid item xs={12} sm={6} md={4} key={user.id}>
              <Link to={`/profile/${user._id}`} style={{ textDecoration: 'none' }}>
                <Card>
                  <CardMedia
                    component="img"
                    height="200"
                    image={user.picture}
                    alt={`${user.name} `}
                  />
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {user.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {user.email}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      )}
</Container>
```

The code above was created by adapting the code in [Material UI - Layouts](https://mui.com/material-ui/react-grid/) as shown below:

```
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
    </Box>
  );
}

```

### profile.tsx

```
<Container maxWidth="md" sx={{ marginTop: 2 }}>
      <Typography variant="h4" gutterBottom>
        {user.name}'s Profile
      </Typography>
      <Typography variant="body1" gutterBottom>
        Email: {user.email}
      </Typography>
      <Typography variant="body1" gutterBottom>
        Balance: {user.balance}
      </Typography>
      <Typography variant="body1" gutterBottom>
        Gender: {user.gender}
      </Typography>
      <Typography variant="body1" gutterBottom>
        Address: {user.address}
      </Typography>
      <Typography variant="body1" gutterBottom>
        About: {user.about}
      </Typography>
      <Typography variant="body1" gutterBottom>
        Friends: 
          {user.friends.map((friend: any) => (
            <span key={friend.id}>{friend.name}, </span>
          ))}
      </Typography>
      <Typography variant="body1" gutterBottom>
        Greeting: {user.greeting}
      </Typography>
      <Typography variant="body1" gutterBottom>
        Favorite Fruit: {user.favoriteFruit}
      </Typography>
</Container>
```

The code above was created by adapting the code in [Material UI - Typography](https://mui.com/material-ui/react-typography/) as shown below:

```
<Typography variant="h1" component="h2">
  h1. Heading
</Typography>
```
