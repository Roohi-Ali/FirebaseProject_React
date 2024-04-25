import React, {useState, useEffect} from 'react'

import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from '../config/fb-conf';


const ReadDoc = () => {
  let dataArray = []
  const [myArray, setMyArray] = useState('')
  async function getData() {
    // , 'email': doc.data().email
    const querySnapshot = await getDocs(collection(db, "users"));
    setMyArray(querySnapshot.docs)
    // querySnapshot.forEach((doc) => {
    //   // console.log(`${doc.id} => ${doc.data().email}`);
    //   dataArray.push(doc.id)
    // });
    // console.log('DataArray')
    // console.log(dataArray)
    // setMyArray(dataArray)
    // console.log('Showing MyArray')
    
  }

  async function deleteTask(index) {
      await deleteDoc(doc(db, 'users', index))
      //ill insert filter function after .then so that it rerenders in the browser, rather than going back to firebase
      getData()
  }

  return (
    <div className='outerContainer'>
      <div className='container'  style={{'alignContent': 'left'}}>
      <p style={{'textAlign':'center'}}>Getting Data from Firebase</p>
      <div style={{'textAlign':'center'}}><button onClick={getData}>Get Data</button></div><br />

        {/* <button onClick={showData}>Show Data</button> */}
        <ul>
        <li><span style={{'paddingRight':'27%'}}>User ID:</span><span>User Email:</span></li>
          { myArray && myArray.map((el, index) =>
          
            <li key={index}>
              <span className='spdiv'>{el.id}</span>
              <span className='spdiv'>{el.data().email}</span>
              <span className='spdiv'><button onClick={() => deleteTask(el.id)}>Delete</button></span>
              
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default ReadDoc
