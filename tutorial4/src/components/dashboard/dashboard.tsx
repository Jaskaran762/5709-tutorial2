import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Grid, Card, CardContent, Typography, CardMedia, TextField } from '@mui/material';
import { Link } from 'react-router-dom';

const DashboardPage: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    // Fetch users from the API
    axios.get('https://express-t4.onrender.com/api/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  // Filter users based on search query
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
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
  );
};

export default DashboardPage;
