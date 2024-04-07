
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Components/Login'
import Dashboard from './Components/Dashboard'
import Home from './Components/Home'
import Worker from './Components/Worker'
import Category from './Components/Category'
import Profile from './Components/Profile'
import AddCategory from './Components/AddCategory'
import AddWorker from './Components/AddWorker'
import EditWorker from './Components/EditWorker'
import Start from './Components/Start'
import WorkerLogin from './Components/WorkerLogin'
import WorkerDetail from './Components/WorkerDetail'
import PrivateRoute from './Components/PrivateRoute'




function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Start />}></Route>
        <Route path='/adminlogin' element={<Login />}></Route>
        <Route path='/worker_login' element={<WorkerLogin />}></Route>
        <Route path='/worker_detail/:id' element={<WorkerDetail />}></Route>
        <Route path='/dashboard' element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }>
          <Route path='' element={<Home />}></Route>
          <Route path='/dashboard/worker' element={<Worker />}></Route>
          <Route path='/dashboard/category' element={<Category />}></Route>
          <Route path='/dashboard/profile' element={<Profile />}></Route>
          <Route path='/dashboard/add_category' element={<AddCategory />}></Route>
          <Route path='/dashboard/add_worker' element={<AddWorker />}></Route>
          <Route path='/dashboard/edit_worker/:id' element={<EditWorker />}></Route>

        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
