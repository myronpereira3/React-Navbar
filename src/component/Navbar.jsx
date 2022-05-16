import React from 'react'
import "./Style.css"

let Navbar=()=>{
    return (<nav>
       <div>
           <h1>LOGOBAKERY</h1>
       </div>
       <ul>
           <li><a href="">Services</a></li>
           <li><a href="">Projects</a></li>
           <li><a href="">About</a></li>
       </ul>
       <div>
           <button>Contact</button>
       </div>
       </nav>
    )
}

export default Navbar;