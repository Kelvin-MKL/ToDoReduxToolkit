import { Link } from 'react-router-dom'

const Navbar = () => {
    return ( 
    <>
        
        <nav className="nav-menu">
            <button>Hambuger</button>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/form">Memo list</Link>
                    </li>
                    <li>
                        <Link to="/todo">To do</Link>
                    </li>
  

  
  
                </ul>
            </div>
            
            

        </nav>

    </>

     );
}
 
export default Navbar;