import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import StudentTable from './StudentCrud/StudentTable'
import CreateStudent from './StudentCrud/CreateStudent'
import EditStudent from './StudentCrud/EditStudent'
import ViewDetails from './StudentCrud/ViewDetails'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<StudentTable />} />
          <Route path='/StudentCrud' element={<StudentTable />} />
          <Route path='/StudentCrud/create' element={<CreateStudent />} />
          <Route path='/StudentCrud/edit/:StudentId' element={<EditStudent />} />
          <Route path='/StudentCrud/view/:StudentId' element={<ViewDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
