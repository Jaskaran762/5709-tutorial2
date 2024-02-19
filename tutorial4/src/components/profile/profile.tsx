import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

const ProfilePage: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const { userId } = useParams();

  useEffect(() => {
    // user profile details from the API
    axios.get(`https://express-t4.onrender.com/api/users/${userId}`)
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.error('Error fetching user profile:', error);
      });
  }, [userId]);

  if (!user) {
    return (
      <Container maxWidth="md" sx={{ marginTop: 2 }}>
        <Typography variant="h4">Loading...</Typography>
      </Container>
    );
  }

  return (
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
  );
};

export default ProfilePage;
