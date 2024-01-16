import React from 'react'
import Logo from '/logo.svg'
import '../index.css'
const Navbar = () => {
  return (
    <nav className='w-full h-[80px] items-center my-6 flex justify-between mx-auto'>
        <div>
            <img src={Logo} alt='logo' className='w-[191px] h-[39px] ml-[104px]'/>
        </div>
        <div className='text-[#3A3740] inline-flex items-center gap-[40px] text-[18px] font-[400] mr-9 '>
          <a href="#">Home</a>
          <a href="#">Flashcard</a>
          <a href="#">Contact</a>
          <a href="#">FAQ</a>
          <button className='btn-padding text-white'>Login</button>
        </div>
    </nav>
  )
}

export default Navbar