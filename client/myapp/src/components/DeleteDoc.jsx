
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { db } from '../config/fb-conf';
import { doc, deleteDoc } from "firebase/firestore";


const DeleteDoc = () => {

    const [email, setEmail] = useState('');

    async function handleForm(event) {

        try {
            await deleteDoc(doc(db, "users", "0Eoe5gCr8r8zGY8LJOTs"));
            console.log('Deleted')

          } catch (e) {
            console.error("Error deleting document: ", e);
          }
       
    }

  return (
    <div>
      <div className='outerContainer'>
                <div className='container'>
                    <p>Delete Form</p>
                    <form action='POST'>
                    <input type='email' name='email' placeholder='Enter Email' onChange={e => setEmail(e.target.value)} /><br />
                    <Link to='/'><input type='submit' onClick={handleForm} value='Delete User' /></Link><br />
                    </form>
                </div>
            </div>
    </div>
  )
}

export default DeleteDoc
