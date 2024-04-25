
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { collection, addDoc } from "firebase/firestore";
import { db } from '../config/fb-conf';

const AddDoc = () => {

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    async function handleForm(event) {

        try {
            console.log('Adding  User')
            event.preventDefault();
            let loginData = {
                userName: userName,
                email: email,
                password: password
            }
            console.log(loginData)
            const docRef = await addDoc(collection(db, "users"), {
                email: email,
                password: password,
                username: userName
            });
            console.log("Document written with ID: ", docRef.id);
            setUserName('');
            setEmail('');
            setPassword('');
            navigate('/');
        } catch (e) {
            console.error("Error adding document: ", e);
        }

    }


    return (
        <div className='outerContainer'>
            <div className='container'>
                <p>Firebase - Add User</p>
                <form action='POST'>
                    <input type='text' name='userName' value={userName} placeholder='Enter User Name' onChange={(e) => setUserName(e.target.value)} /><br />
                    <input type='email' name='email' value={email} placeholder='Enter Email' onChange={e => setEmail(e.target.value)} /><br />
                    <input type='password' name='password' value={password} placeholder='Enter Password' onChange={e => setPassword(e.target.value)} /><br />

                    <input type='submit' onClick={handleForm} value='Add User' /><br />
                </form>
            </div>
        </div>
    )
}

export default AddDoc
