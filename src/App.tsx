import { useState } from 'react'
import './App.css'
import Dash from './Components/Dash'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UpdateForm from './Components/Form/UpdateOSForm/UpdateForm'
import NavBar from './Components/NavBar'
import Form from './Components/Form/Form'

function App() {

  return (
    <>
    <NavBar/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dash/>}/>
        <Route path="/update/:id" element={<UpdateForm/>} />
        <Route path="/create" element={<Form/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
