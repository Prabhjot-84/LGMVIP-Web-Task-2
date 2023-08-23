import './App.css';
import { useState } from 'react';
import { styled, CircularProgress } from '@mui/material';
import Navbar from './components/Navbar';
import Users from './components/Users';

const Page = styled('div')`
  background: whitesmoke;
  height: 100vh;
  width: 100vw;
`;

const UserCards = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 85vh;
  width: 66vw;
  padding: 1vh 17vw;
`;

const LoadingSrc = styled(CircularProgress)`
  position: absolute;
  color: purple;
  top: 45%;
  left: 45%;
`;

function App() {

  const [users, setUsers] = useState(['']);
  const [visibility, setvisibility] = useState(false);
  const [loading, setloading] = useState(false);

  return (
    <Page>
      
      <Navbar users={users} setusers={setUsers} setvisibility={setvisibility} setloading={setloading} />

      {visibility && <UserCards>
        {users.map((user, index) => (
            <Users users={user} key={index}/>
        ))}
      </UserCards>}

      {loading && <LoadingSrc size={90}/>}

    </Page>
  );
}

export default App;
