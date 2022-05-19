
import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { sidebarData } from './sidebarData';
import './Navbar.css';
import {IconContext} from 'react-icons';

function Navbar() {
    const [sidebar, setsidebar] = useState(false);
    const showSidebar = () => setsidebar(!sidebar);
            
  return (
<>
<IconContext.Provider value={{color:'#fff'}}></IconContext.Provider>
    <div className='navbar'>
      <Link to='#' className='menu-bars'>
      <FaIcons.FaBars onClick={showSidebar} /> 
      </Link>
      
    
     </div>   
     <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
         <ul className='nav-menu-items' onClick={showSidebar}>
             <li className='navbar-toggle'>
                 <Link to='#' className='menu-bars'>
                  <AiIcons.AiOutlineClose/>
                 </Link>
             </li>
             {sidebarData.map((item,index) =>{
                 return(
                     <li key={index} className={item.cName}>
                         <Link to={item.path}>
                             {item.Icon}
                             <span>{item.title}</span>
                         </Link>
                     </li>
                 )
             }) 
            }
         </ul>
     </nav>
</>
 );
  }
  
export default Navbar;