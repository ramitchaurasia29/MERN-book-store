import { Route, Routes } from 'react-router-dom'
import './App.css'

import CreateBook from './pages/CreateBooks';
import ShowBook from './pages/ShowBook';
import EditBook from './pages/EditBook';
import DeleteBook from './pages/DeleteBook';
import Home from './pages/Home';


function App() {
 

  return (
    <>
    <div className='bg-slate-200 h-screen'>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/books/create' element={<CreateBook />} />
      <Route path='/books/details/:id' element={<ShowBook />} />
      <Route path='/books/edit/:id' element={<EditBook />} />
      <Route path='/books/delete/:id' element={<DeleteBook />} />
      </Routes>       
      </div>
    </>
  )
}

export default App
