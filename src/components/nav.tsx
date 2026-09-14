import logo from '../assets/logo-text.png'
import { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
const Nav = () => {
     const [menuOpen, setMenuOpen] = useState(false)
    return (
       
 <nav className='fixed top-0 left-0 right-0  z-50 px-3 bg-white shadow-sm '>
     <div className=' flex justify-between container mx-auto items-center my-5' >
        <button  onClick={() => setMenuOpen(!menuOpen)}
              className='text-2xl md:hidden' ><RxHamburgerMenu />
              </button>
         <img src= {logo}  className='w-32 md:w-auto' />
        <ul className=' hidden md:flex gap-10 font-light'>
           <li className='text-pink-500'>Home</li>
           <li>Technologies</li>
           <li>Projects</li>
           <li>About</li>
           <li>Contact</li>
        </ul>
      <div className='flex gap-5'>
       <p className=' sm:block my-auto'>Sign In</p>
         <button className='bg-pink-500 text-white md:px-5 py-2 px-4 rounded-full'>Sign Up</button>
      </div>
    </div> 
    {menuOpen && (
        <div className='md:hidden bg-white shadow-md px-6 py-5'>

          <ul className='flex flex-col gap-5'>
            <li className='text-pink-500'>Home</li>
            <li>Technologies</li>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
          </ul>

          <p className='mt-5'>Sign In</p>

          </div>
    )}
        </nav>
    );
};

export default Nav;