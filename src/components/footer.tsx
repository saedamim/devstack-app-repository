import logo from '../assets/logo-text.png'

const Footer = () => {
    return (
        <>
        <div className='container mx-auto md:px-8  px-8 my-10'>
        <div className='flex flex-col md:flex-row justify-between gap-10 my-10'>
        <div className='w-full text-center md:max-w-sm'>
            <img src={logo} alt="Logo" className='w-32 mx-auto md:mx-0' />
            <p className='text-gray-500'>Curated tools, technologies, and resources for developers building
modern software.</p>
           <ul className='flex justify-center gap-5 my-5'>
                <li><a href="https://github.com">Github</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="https://linkedin.com">LinkedIn</a></li>
            </ul>
        </div>
        <div>
            <p style={{ fontWeight: "bold" }}>
  PRODUCT</p>
            <ul className='text-gray-500'>
                <li>Home</li>
                <li>Technologies</li>
                <li>Projects</li>
            </ul>
        </div>
        <div>
            <p style={{ fontWeight: "bold" }}>
  COMPANY</p>
            <ul className='text-gray-500'>
                <li>About</li>
                <li>Contact</li>
                <li>Careers</li>
            </ul>
        </div>
        <div>
            <p style={{ fontWeight: "bold" }}>
  LEGAL</p>
            <ul className='text-gray-500'>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
            </ul>
        </div>
        </div>
<div className='flex  flex-col md:flex-row justify-between container mx-auto gap-4 my-5 border-t border-gray-400 pt-5'>
    <p className= 'text-sm text-gray-500'>© 2023 DevStack. All rights reserved.</p>
    <ul className='flex  text-sm gap-5 text-gray-400'>
        <li>Privacy</li>
        <li>Terms</li>
    </ul>
</div>
  </div> 
 
        </>
        
    );
};

export default Footer;