import { Link } from 'react-router-dom'
import Hamburger from '../components/utilities/Hamburger'
import { useState } from 'react'
import { AiFillHome as IconHome } from 'react-icons/Ai'


const Navbar = () => {
    const [expand, setExpand] = useState(true);

    return ( 
    <>
        <nav className={expand? "nav-menu" : "nav-menu toggle"}>
            <div onClick={() => setExpand(!expand)}><Hamburger/></div>
            
            
            <div>
                <ul>
                    <li>
                        {expand? <section><IconHome className="icon"/><Link to="/">Home</Link></section> : <Link to="/"><IconHome/></Link>}
                        
                    </li>
                    <li>
                        {expand? <span><IconHome className="icon"/><Link to="/form">Memo</Link></span> : <Link to="/form"><IconHome /></Link>}   
                    </li>
                    <li>
                        {expand? <><IconHome className="icon"/><Link to="/todo">To Do</Link></> : <Link to="/todo"><IconHome onClick={() => console.log("n1o")}></IconHome></Link>}
                    </li>
  

  
  
                </ul>
            </div>
            
            

        </nav>

    </>

     );
}
 
export default Navbar;