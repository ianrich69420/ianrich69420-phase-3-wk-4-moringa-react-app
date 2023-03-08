import { useState, useEffect } from 'react';
import './App.css';
import Login from  './components/Login';

function App() {
  const userDatabase = 'http://localhost:9292/users'
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch(userDatabase)
    .then(r => r.json())
    .then(users => setUsers(users))
  }, []);

  return (
    <Login users={users} />
  )
}

export default App;
