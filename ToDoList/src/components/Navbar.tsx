import { NavLink as NLink } from 'react-router-dom'
import Hamburger from '../components/utilities/Hamburger'
import { useState } from 'react'
import { AiFillHome as IconHome } from 'react-icons/Ai'
import { CgColorPicker as IconColorPicker } from 'react-icons/Cg'
import { RiTodoLine as IconToDo } from 'react-icons/Ri'
import { IoMdAdd as IconAdd } from 'react-icons/Io'
import { TiWeatherPartlySunny as IconWeather} from 'react-icons/Ti'
import { MdOutlineTipsAndUpdates as IconTips } from 'react-icons/Md'
 
const Navbar = () => {
    const [expand, setExpand] = useState(true);

    return ( 
    <>
        <nav className={expand? "nav-menu" : "nav-menu toggle"}>
            <div onClick={() => setExpand(!expand)}><Hamburger isExpanded={expand}/></div>
            
            
            <div>
                <ul>
                    <li>
                        {expand? <div className="link-wrapper"><IconHome className="icon"/><NLink to="/">Home</NLink></div> : <NLink  to="/"><IconHome className="icon"/></NLink>}
                        
                    </li>
                    <li>
                        {expand? <><IconWeather className="icon"/><NLink to="/weather">Weather</NLink></> : <NLink to="/weather"><IconWeather className="icon"/></NLink>}   
                    </li>
                    <li>
                        {expand? <><IconAdd className="icon"/><NLink to="/chart">Chart</NLink></> : <NLink to="/chart"><IconAdd className="icon"/></NLink>}   
                    </li>
                    <li>
                        {expand? <><IconToDo className="icon"/><NLink to="/todo">Memo</NLink></> : <NLink to="/todo"><IconToDo className="icon"/></NLink>}
                    </li>
                    <li>
                        {expand? <><IconColorPicker className="icon"/><NLink to="/colorpicker">Pick</NLink></> : <NLink to="/colorpicker"><IconColorPicker className="icon"/></NLink>}
                    </li>
                    <li>
                        {expand? <><IconTips className="icon"/><NLink to="/hints">Tips</NLink></> : <NLink to="/hints"><IconTips className="icon"/></NLink>}
                    </li>
  

  
  
                </ul>
            </div>
            
            

        </nav>

    </>

     );
}
 
export default Navbar;