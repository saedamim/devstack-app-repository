import logo from '../assets/logo-text.png'

const Nav = () => {
    return (
        <>
 <nav className='fixed top-0 left-0 right-0  z-50 bg-white shadow-sm '>
     <div className='flex justify-between container mx-auto my-5' >
         <img src= {logo} />
        <ul className='flex gap-10 font-light'>
           <li className='text-pink-500'>Home</li>
           <li>Technologies</li>
           <li>Projects</li>
           <li>About</li>
           <li>Contact</li>
        </ul>
      <div className='flex gap-5'>
       <p className='my-auto'>Sign In</p>
         <button className='bg-pink-500 text-white px-5 py-2 rounded-full'>Sign Up</button>
      </div>
    </div>  
     </nav>
        </>
    
    );
};

export default Nav;