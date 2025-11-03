import { Link } from 'react-router-dom'
import './nav.css' 
 
 export default function Nav(){
    return(
        <>
    
        <nav>
            <ul>
                <li><a href=""> <Link to='/'>HOME</Link></a></li>
                <li><a href=""><Link to='/about'>ABOUT</Link></a></li>
                <li><a href=""><Link to='/contact' >CONTACT</Link></a></li>
                <li><a href=""><Link to='/services' >SERVICES</Link></a></li>
              
            </ul>
        </nav>


        </>
    )
 }
 