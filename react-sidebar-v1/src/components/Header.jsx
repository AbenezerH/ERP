import React from "react";
import { Outlet } from "react-router-dom";

export default function Header(){
    return(

        <div className="big-container">
            <div className="header">
                <h1 className="page-title">  MANUFACTURER ERP SYSTEM</h1>
                <button className='btn'>New</button>
                <button className='btn'>Edit</button>
                <button className='btn'>Save</button>
                <button className='btn'>Print</button>
                <button className='btn'>Close</button>
                <button className='btn'>Delete</button>
            </div>

            <hr/>

            <Outlet />
        </div>


    )
}