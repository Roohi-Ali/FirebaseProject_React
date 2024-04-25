import Header from './components/Header'
import {Route, Routes, Navigate } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import AddDoc from './components/AddDoc'
import ReadDoc from './components/ReadDoc'
import DeleteDoc from './components/DeleteDoc'
import FileUpload from './components/FileUpload'

function App() {
return(
  <>  
  <h1>My App</h1>
  <Header/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/*' element={<Navigate to='/' />} />
    <Route path='/firebaseAdd' element={<AddDoc/>}/>
    <Route path='/firebaseRead' element={<ReadDoc/>}/>
    <Route path='/firebaseDelete' element={<DeleteDoc/>}/>
    <Route path='/fileUpload' element={<FileUpload/>}/>
  </Routes>
  </>
)
}

export default App
