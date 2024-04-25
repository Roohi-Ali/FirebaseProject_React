import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {

  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleForm(event) {
    event.preventDefault();
    let userData = {
      userName: userName,
      email: email,
      password: password
    }


    fetch('http://localhost:8000/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    }).then(response => response.json).then(data => {
      console.log(data)
    })
    setUserName('');
    setEmail('');
    setPassword('');
    navigate('/')
    console.log('clicked')

  }
  return (
    <div className='outerContainer'>
      <div className='container'>
        <p>Registeration Form</p>
        <form action='POST'>
          <input type='text' name='userName' value={userName} placeholder='Enter User Name' onChange={(e) => setUserName(e.target.value)} /><br />
          <input type='email' name='email' value={email} placeholder='Enter Email' onChange={e => setEmail(e.target.value)} /><br />
          <input type='password' name='password' value={password} placeholder='Enter Password' onChange={e => setPassword(e.target.value)} /><br />

          <input type='submit' onClick={handleForm} value='Submit' /><br />
        </form>
      </div>
    </div>
  )
}

export default Register

