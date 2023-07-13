import './App.css'
import './Navbar.css'
import './Upperbar.css'
import './Utilities.css'
import './ColorPicker.css'
import Form from './components/Form'
import ToDoList from './components/ToDoList'
import Navbar from './components/Navbar'
import Upper from './components/Upperbar'
import Home from './components/Home'
import ColorPicker from './components/ColorPicker'
import {Routes, Route} from 'react-router-dom'


function App() {


  return (
    <div className="outter">
        <Navbar />

        <div className="main-container">
          <Upper />
          <div className="middle">
            <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/todo' element={<ToDoList/>}></Route>
              <Route path='/form' element={<Form/>}></Route>
              <Route path='/colorpicker' element={<ColorPicker/>}></Route>

              
            </Routes>
          </div>
        </div>
    </div>
  )
}

export default App
