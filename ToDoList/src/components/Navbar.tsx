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
                        <IconHome onClick={() => console.log("n1o")}></IconHome>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <IconHome onClick={() => console.log("n1o")}></IconHome>
                        <Link to="/form">Memo</Link>
                    </li>
                    <li>
                        <IconHome onClick={() => console.log("n1o")}></IconHome>
                        <Link to="/todo">To do</Link>
                    </li>
  

  
  
                </ul>
            </div>
            
            

        </nav>

    </>

     );
}
 
export default Navbar;