import React from 'react'
import "./Components.css"
import {Link} from "react-router-dom";

function Nav() {
    const Navstyle = {
        color: 'white'
        
    }
    return (
        <div>
        <nav className="Main">
            <div className="nav">
           
           
            <ul className="nav-links" >
              <Link style={Navstyle} to='/home'>
                  <li>
Our subscriptions</li>
              </Link>
       
               <Link  style={Navstyle} to='/movies'>
                <li>Movies</li>
                 </Link>
                
            </ul> 
           
            </div>
        </nav> 
        
        </div>
    )
}

export default Nav
