import React from 'react'
import pic from '../../img/sp_logo.jpg'

const Navbar = () => {
  return (
   <nav className='navbar navbar-expand-lg '>
       <div className='container-fluid'>

       <img src={pic} className='navbar-brand' />
           <div className='container '>
           <h1>YOUR SPOTTABL TEAM</h1>
           <p>Spottabl Supports you all throughout</p>
           </div>
       </div>

   </nav>
  )
}

export default Navbar