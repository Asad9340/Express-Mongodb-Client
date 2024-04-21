import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
function App() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setUser(data))
  },[])
  return (
    <>
      <h1>Learning Express JS</h1>
      <p>User Number: { user.length}</p>
    </>
  )
}

export default App
