import bannerstack from '../assets/banner-stack.png'

const Bannar = () => {
    return (
        <>
            <div className=' flex flex-col md:flex-row justify-center items-center text-left container pt-5 mx-auto px-5 md:gap-10 mt-20 md:mb-0'>
                <div className=' w-full text-center gap-5 snap-align-n container mx-auto md:max-w-lg'>
                    <h2 className='text-5xl md:text-5xl font-extrabold'> Build Your Ideal </h2>
                    <h2 className=' inline-block text-5xl font-extrabold bg-linear-to-r from-amber-500 via-pink-600 to-purple-800 bg-clip-text md:text-5xl text-transparent'>
                        Development Stack</h2>
                    <p className='md:text-lg mt-4'>Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that fits your
                        next project.</p>
                    <div className='flex justify-center gap-4 md:mb-10 mt-10'>
                        <button className='bg-linear-to-r from-amber-500 via-pink-600 to-purple-800 text-white rounded-sm px-5 py-2 '>
                            Explore Technologies
                        </button>
                        <button className='bg-white outline-gray-400 text-gray-600 rounded-sm px-5 py-2 border'>
                            Learn More
                        </button>
                    </div>
                </div>
                <img src={bannerstack} alt="Banner Stack" className='w-full max-w-sm md:max-w-lg' />
            </div>

        </>

    );
};

export default Bannar;