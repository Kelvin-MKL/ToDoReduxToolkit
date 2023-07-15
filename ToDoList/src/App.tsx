import './App.css'
import './Navbar.css'
import './Upperbar.css'
import './Utilities.css'
import './ColorPicker.css'
import ToDoList from './components/ToDoList'
import Navbar from './components/Navbar'
import Upper from './components/Upperbar'
import Home from './components/Home'
import Weather from './components/Weather'
import ColorPicker from './components/ColorPicker'
import Chart from './components/Chart'
import Hints from './components/Hints'
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
              <Route path='/weather' element={<Weather/>}></Route>
              <Route path='/chart' element={<Chart/>}></Route>
              <Route path='/todo' element={<ToDoList/>}></Route>
              <Route path='/colorpicker' element={<ColorPicker/>}></Route>
              <Route path='/hints' element={<Hints/>}></Route>

              
            </Routes>
          </div>
        </div>
    </div>
  )
}

export default App
