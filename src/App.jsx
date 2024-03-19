import { useState } from 'react';
import './App.css'
import User from './components/User'
import Form from './components/Form';

function App() {

  const [users, setUsers] = useState([]);

  const onUpdate = (user, index) => {
    console.log('Updated', user)
    const _users = [...users];
    _users[index] = user;
    setUsers(_users);
  };

  const onClickAddButton = () => {
    const _users = [...users];
    _users.push('User' + (_users.length + 1));
    setUsers(_users);
  }


  return (
    <>
    <Form/>
      <h1>Hello</h1>
      <button onClick={onClickAddButton}>Add User</button>
      <button onClick={()=>{
        const _users = [...users];
        _users[Math.round(Math.random()*_users.length)] = 'User ' + Math.random() + 'Updated';
        setUsers(_users);
      
      }}>Update User</button>
      <div style={{ display: 'flex', flexFlow:'wrap' }}>
        {
          users.map((user, index) => {
            return <User key={index} name={user} edit={<span>@</span>} onUpdate={(u)=>{
              onUpdate(u, index)
            }} />
          })
        }
      </div>
    </>
  )
}

export default App
