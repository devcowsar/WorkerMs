
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Components/Login'
import Dashboard from './Components/Dashboard'
import Home from './Components/Home'
import Worker from './Components/Worker'
import Category from './Components/Category'
import Profile from './Components/Profile'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/adminlogin' element={<Login />}></Route>
        <Route path='/dashboard' element={<Dashboard />}>
          <Route path='' element={<Home />}></Route>
          <Route path='/dashboard/worker' element={<Worker />}></Route>
          <Route path='/dashboard/category' element={<Category />}></Route>
          <Route path='/dashboard/profile' element={<Profile />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
