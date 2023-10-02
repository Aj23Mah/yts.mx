
import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

const Nav = () => {
  const navItems = [
    {label:'Home', path:''},
    {label:'4k', path:''},
    {label:'Tranding', path:''},
    {label:'Browser Movies', path:''},
  ]
  return <nav>
    <div className="logo">
      <img src="https://repository-images.githubusercontent.com/580417416/68b872ed-fb38-4fa9-bb3a-2e8c3450d3a8" alt="logo" />
      {/* <img src="../../assets/images/ytsmx.png" alt="logo" /> */}
    </div>

    <div className='nav_items'>
      <div className='search_box'>
        <div className="search_icon">
        <span class="material-symbols-outlined">
          search
        </span>
        </div>
        <input type="text" placeholder='Quick Search' />
      </div>
      <div className="nav_list">
        {navItems.map((v,key) => 
          <div className='list' key={key}> 
            <div>{v.label}</div>
          </div>
        )}
        
      </div>
      <div className="btn">
        <button>Login</button>
        <button>Register</button>
      </div>
    </div>
    
  </nav>
}

export default Nav