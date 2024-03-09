import { useState } from 'react'
import './App.css'
import Dash from './Components/Dash'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UpdateForm from './Components/Form/UpdateOSForm/UpdateForm'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Dash/>}/>
        <Route path="/update/:id" element={<UpdateForm/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
