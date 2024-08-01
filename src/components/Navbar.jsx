import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Chat App</span>
      <div className='user'>
        <img src="https://www.thefamouspeople.com/profiles/images/alia-bhatt-4.jpg" alt="" />
        <span>Alia</span>
        <button>Log Out</button>
      </div>
    </div>
  )
}

export default Navbar