import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import styled from '@emotion/styled';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const UserCard = styled(Card)(({ backgroundImage }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  height: '25vh',
  width: '16vw',
  padding: '40px 20px 10px 20px',
  borderRadius: '7px',
  backgroundImage: `${backgroundImage}`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}));


const UserCardMedia = styled(CardMedia)`
  height: 125px;
  width: 125px;
  border-radius: 50%;
  border: none;
`;

const UserCardContent = styled(CardContent)`
  text-align: center;
`;

const TextContent = styled(Typography)`
  color: black;
`;


const Users = (props) => {

  const [randomColor, setRandomColor] = useState('#000000');

  const generateRandomColor = () => {
    const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setRandomColor(color);
  };

  useEffect(() => {
    generateRandomColor();
  }, []);

  return (
    <UserCard style={{ backgroundImage: `linear-gradient(to bottom, ${randomColor} 40%, white 40%)`}} >

      <UserCardMedia component="img" image={props.users.avatar} />

      <UserCardContent>
        <TextContent>
          {props.users.first_name} {props.users.last_name}
        </TextContent>
        <TextContent>
          {props.users.email}
        </TextContent>
      </UserCardContent>

    </UserCard>
  )
}

export default Users