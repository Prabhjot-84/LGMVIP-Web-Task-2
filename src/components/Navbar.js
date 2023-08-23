import React from 'react'
import { AppBar, Toolbar, styled } from '@mui/material';

const Nav = styled(AppBar)`
  background: blue;
  height: 12vh;
  justify-content: center;
  padding: 0 4vw;
  position: relative;
  box-shadow: none;
`;

const InnerNav = styled(Toolbar)`
  justify-content: space-between;
`;

const Logo = styled('h2')`
  color: white;
  font-family: Merienda;
`;

const GetButton = styled('button')`
  height: 60px;
  width: 175px;
  border-radius: 7px;
  font-size: 1.5rem;
  background: red;
  border: none;
  outline: none;
  color: white;
  font-family: Merriweather Sans;
  cursor: pointer;
`;

const Navbar = (props) => {

  function GetUsers () {

    props.setloading(true);

    setTimeout( () => {
      fetch("https://reqres.in/api/users?page=1")
      .then(response => { return response.json() })
      .then(data => { props.setusers(data.data) })
      props.setloading(false);
      props.setvisibility(true);

    }, 3500)

  }

  return (
    <Nav>
        <InnerNav>
          <Logo> LGM Internship Task </Logo>
          <GetButton onClick={GetUsers}> Get Users </GetButton>
        </InnerNav>
      </Nav>
  )
}

export default Navbar