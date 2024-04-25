import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const FirebaseLogin = () => {

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleForm(event) {
    console.log('clicked1')
    event.preventDefault();
    let loginData = {
      userName: userName,
      email: email,
      password: password
    }
    console.log(loginData)

    fetch('http://localhost:8000/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(loginData)
    }).then(response => response.json).then(data => {
        console.log(data)
      })

    console.log('clicked')

  }
  return (
    <div className='outerContainer'>
      <div className='container'>
        <p>Login Form</p>
        <form action='POST'>
          <input type='text' name='userName' placeholder='Enter User Name' onChange={(e) => setUserName(e.target.value)} /><br />
          <input type='email' name='email' placeholder='Enter Email' onChange={e => setEmail(e.target.value)} /><br />
          <input type='password' name='password' placeholder='Enter Password' onChange={e => setPassword(e.target.value)} /><br />
          
          <Link to='/'><input type='submit' onClick={handleForm} value='Submit' /></Link><br />
        </form>
      </div>
    </div>
  )
}

export default FirebaseLogin
