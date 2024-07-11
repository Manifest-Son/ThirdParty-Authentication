import './App.css'
import Login from './pages/Login/Login'
import Signin from './pages/Signin/Signin'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/signin" element={<Signin />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
