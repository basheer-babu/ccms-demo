import React from 'react';
import {Outlet, Link} from "react-router-dom";
import NavBar from './NavBar';

const Header = () => (
 <>
 <NavBar/>
 {/* <header className="bg-gray-200 p-6">
    <div className="flex items-center justify-between flex-wrap">
      <div className="block">
        <Link to="/"><span className="font-semibold text-xl tracking-tight text-gray-800">CCMS</span></Link>
      </div>
      <nav className="block">
        <Link to="/"><span className="inline-block text-gray-800 hover:text-gray-600 mr-4">Home</span></Link>
        <Link to="/about"><span className="inline-block text-gray-800 hover:text-gray-600 mr-4">About</span></Link>
        <Link to="/contact"><span className="inline-block text-gray-800 hover:text-gray-600 mr-4">Contact</span></Link>
        <Link to="/login"><span className="inline-block px-4 py-2 leading-none border rounded text-gray-600 border-gray-600 hover:text-gray-900 hover:border-gray-900">Login</span></Link>
      </nav>
      
    </div>
  </header> */}
  <Outlet/>
  
  </> 
);
export default Header;