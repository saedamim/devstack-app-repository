import logo from '../assets/logo-text.png'

const Footer = () => {
    return (
        <>
        <div className='container mx-auto  px-8 my-10'>
        <div className='flex justify-between  my-20'>
        <div>
            <img src={logo} alt="Logo" />
            <p className='text-gray-500'>Curated tools, technologies, and resources for developers building
modern software.</p>
           <ul className='flex gap-5 '>
                <li><a href="https://github.com">Github</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="https://linkedin.com">LinkedIn</a></li>
            </ul>
        </div>
        <div>
            <p className='text-black' font-weight='bold'>PRODUCT</p>
            <ul className='text-gray-500'>
                <li>Home</li>
                <li>Technologies</li>
                <li>Projects</li>
            </ul>
        </div>
        <div>
            <p className='text-black' font-weight='bold'>COMPANY</p>
            <ul className='text-gray-500'>
                <li>About</li>
                <li>Contact</li>
                <li>Careers</li>
            </ul>
        </div>
        <div>
            <p className='text-black' font-weight='bold'>LEGAL</p>
            <ul className='text-gray-500'>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
            </ul>
        </div>
        </div>
<div className='flex justify-between container mx-auto my-10 border-t border-gray-400 pt-5'>
    <p className='text-gray-500'>© 2023 DevStack. All rights reserved.</p>
    <ul className='flex gap-5 text-gray-400'>
        <li>Privacy</li>
        <li>Terms</li>
    </ul>
</div>
   
 </div>
        </>
        
    );
};

export default Footer;