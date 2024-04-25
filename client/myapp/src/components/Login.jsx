import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();




  function handleForm(event) {
    event.preventDefault();
    let loginData = {
      userName: userName,
      email: email,
      password: password
    }
    console.log(loginData)


    fetch('http://localhost:8000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(loginData)
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
        <p>Login Form</p>
        <p>This form posts the Login data to the server at port 8000, address; http://localhost:8000/login</p>
        <form action='POST'>
          <input type='text' name='userName' value = {userName} placeholder='Enter User Name' onChange={(e) => setUserName(e.target.value)} /><br />
          <input type='email' name='email' value = {email} placeholder='Enter Email' onChange={e => setEmail(e.target.value)} /><br />
          <input type='password' name='password' value = {password} placeholder='Enter Password' onChange={e => setPassword(e.target.value)} /><br />

          <input type='submit' onClick={handleForm} value='Submit' /><br />
        </form>
      </div>
    </div>
  )
}

export default Login
