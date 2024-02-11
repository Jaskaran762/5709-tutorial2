import React from 'react';
import { Typography } from '@mui/material';

const ProfilePage: React.FC = () => {
  // Dummy data
  const firstName = 'Jaskaran';
  const lastName = 'Singh';
  const email = 'js356337@dal.ca';

  return (
    <div>
      <Typography variant="h4">Profile Details</Typography>
      <Typography variant="body1">First Name: {firstName}</Typography>
      <Typography variant="body1">Last Name: {lastName}</Typography>
      <Typography variant="body1">Email: {email}</Typography>
    </div>
  );
};

export default ProfilePage;
