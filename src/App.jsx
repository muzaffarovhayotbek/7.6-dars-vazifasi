import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import FirstExam from './pages/FirstExam'
import MainLayouts from './layouts/MainLayouts'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element = {<MainLayouts><Home></Home></MainLayouts>}></Route>
        <Route path='/firstExam' element = {<MainLayouts><FirstExam></FirstExam></MainLayouts>}></Route>
      </Routes>
    </div>
  )
}

export default App
