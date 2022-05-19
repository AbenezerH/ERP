import React from 'react'
import * as FaIcons  from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';   
import { NavLink } from 'react-router-dom';  
import './signup.js';
import './login.js';
import { Link } from 'react-router-dom';
export const sidebarData = [
    
    {
        title: <h3>Home</h3>,
        path: '/home',
        Icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    
    {
        title: <h3>Sales</h3>,
        path: '/sales',
        Icon: <FaIcons.FaCartPlus/>,
        cName: 'nav-text'
    },
    
    {
        title: <h3>Payroll</h3>,
        path: '/payroll',
        Icon: <IoIcons.IoMdPeople/>,
        cName: 'nav-text'
    },
    
    {
        title: <h3>Inventory</h3>,
        path: '/inventory',
        Icon: <IoIcons.IoMdHelpCircle/>,
        cName: 'nav-text'
    },
    {
        title: <h3>Reports</h3>,
        path: '/reports',
        Icon: <IoIcons.IoIosPaper/>,
        cName: 'nav-text'
    },
  
]
