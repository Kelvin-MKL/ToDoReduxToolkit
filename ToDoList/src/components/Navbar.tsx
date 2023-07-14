import { NavLink as Link } from 'react-router-dom'
import Hamburger from '../components/utilities/Hamburger'
import { useState } from 'react'
import { AiFillHome as IconHome } from 'react-icons/Ai'
import { CgColorPicker as IconColorPicker } from 'react-icons/Cg'
import { RiTodoLine as IconToDo } from 'react-icons/Ri'
import { IoMdAdd as IconAdd } from 'react-icons/Io'
 

const Navbar = () => {
    const [expand, setExpand] = useState(true);

    return ( 
    <>
        <nav className={expand? "nav-menu" : "nav-menu toggle"}>
            <div onClick={() => setExpand(!expand)}><Hamburger isExpanded={expand}/></div>
            
            
            <div>
                <ul>
                    <li>
                        {expand? <><IconHome className="icon"/><Link to="/">Home</Link></> : <Link to="/"><IconHome/></Link>}
                        
                    </li>
                    <li>
                        {expand? <><IconAdd className="icon"/><Link to="/chart">Chart</Link></> : <Link to="/chart"><IconAdd /></Link>}   
                    </li>
                    <li>
                        {expand? <><IconToDo className="icon"/><Link to="/todo">Memo</Link></> : <Link to="/todo"><IconToDo/></Link>}
                    </li>
                    <li>
                        {expand? <><IconColorPicker className="icon"/><Link to="/colorpicker">Pick</Link></> : <Link to="/colorpicker"><IconColorPicker onClick={() => console.log("n1o")}></IconColorPicker></Link>}
                    </li>
  

  
  
                </ul>
            </div>
            
            

        </nav>

    </>

     );
}
 
export default Navbar;