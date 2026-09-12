import bannerstack from '../assets/banner-stack.png'

const Bannar = () => {
    return (
     <>
     <div className=' flex justify-center items-center text-left container mx-auto gap-10 my-20'>
        <div className='  gap-5 snap-align-n container mx-auto  max-w-lg'>
        <h2 className='text-5xl font-extrabold'> Build Your Ideal </h2>
        <h2 className=' inline-block text-5xl font-extrabold bg-linear-to-r from-amber-500 via-pink-600 to-purple-800 bg-clip-text text-transparent'>
  Development Stack</h2>
        <p className='text-lg mt-4'>Explore frontend, backend, database, and tooling options,
compare them side by side, and put together the stack that fits your
next project.</p>
<div className='flex gap-4'>
<button className='bg-linear-to-r from-amber-500 via-pink-600 to-purple-800 text-white rounded-sm px-5 py-2 '>
  Explore Technologies
</button>
<button className='bg-white outline-gray-400 text-gray-600 rounded-sm px-5 py-2 border'>
  Learn More
</button> </div>


</div>
     <img src={bannerstack} alt="Banner Stack" />
     </div>
       
     </>
        
    );
};

export default Bannar;