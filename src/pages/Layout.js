import React from 'react'
import {Outlet, Link} from "react-router-dom";
function Layout() {
  return (
    <div>Layout
        <ul>
           <li><Link to="/">Home</Link></li> 
            <li><Link to="/about">about</Link></li>
            <li><Link to="/contact">contact</Link></li>
        </ul>
        <Outlet/>

    </div>
  )
}

export default Layout