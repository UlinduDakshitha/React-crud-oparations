import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import StudentTable from './StudentCrud/StudentTable'
import EditStudent from './StudentCrud/EditStudent'
import ViewDetails from './StudentCrud/ViewDetails'
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<StudentTable />} />
          <Route path='/StudentCrud' element={<StudentTable />} />
          <Route path='/StudentCrud/create' element={<StudentTable />} />
          <Route path='/StudentCrud/edit/:StudentId' element={<EditStudent />} />
          <Route path='/StudentCrud/view/:StudentId' element={<ViewDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
