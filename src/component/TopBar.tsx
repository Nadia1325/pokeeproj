import React from "react";
import { Link } from 'react-router-dom';
const TopBar: React.FC = () => {
  return (

    
    <div className="bg-yellow-400 text-black text-sm py-2 px-6 flex justify-between items-center">
      <div className="flex space-x-4">
        <select className="bg-yellow-400 focus:outline-none">
          <option>ENGLISH</option>
          <option>FRENCH</option>
        </select>
        <select className="bg-yellow-400 focus:outline-none">
          <option>$ DOLLAR (US)</option>
          <option>€ EURO</option>
        </select>
      </div>
      <div className="flex space-x-4">
        <span>WELCOME TO OUR STORE!</span>
        <a href="#" className="hover:underline">BLOG</a>
        <a href="#" className="hover:underline">FAQ</a>
        
        <Link to="/Contact" className="text-black hover:text-yellow-500">
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default TopBar;