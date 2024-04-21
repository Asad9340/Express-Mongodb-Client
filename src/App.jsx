import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';
function App() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setUser(data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const user = { name, email }
    console.log(user);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" id="" />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <input type="submit" value="Add User" />
      </form>
      <h1>Learning Express JS</h1>
      <p>User Number: {user.length}</p>
    </>
  );
}

export default App;
