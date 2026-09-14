import { use, useState } from 'react';
import { type ItechnologiesCardType } from '../types/technologiescardtype';
import Yourstack from './yourstack';
import { TiStar } from "react-icons/ti";
import { GiCheckMark } from "react-icons/gi";
import { toast } from 'react-toastify';

interface TechnologiesCardProps {
    technologiesCardPromise: Promise<ItechnologiesCardType[]>;
}

const TechnologiesCard = ({
    technologiesCardPromise
}: TechnologiesCardProps) => {

    const technologiesCard = use(technologiesCardPromise);
    const [yourStack, setYourStack] = useState<ItechnologiesCardType[]>([]);

    const addToStack = (technologies: ItechnologiesCardType) => {
        const isAlreadyAdded = yourStack.some((item) => item.id === technologies.id)
        if(isAlreadyAdded){
            toast.error("Duplicate attempt stack")
            return;
        }

        setYourStack((previousStack) => [
            ...previousStack,
            technologies,
        ]);
        toast.success(`${technologies.name} added to your stack!`);

    };

    return (
        <div className="container  px-6 mx-auto mb-20 ">
            <div className='py-10  text-center space-y-2'>
    <h2 className='inline-block text-3xl md:text-5xl font-extrabold whitespace-nowrap'>Explore the{" "}<span className=' inline-block md:text-5xl text-3xl font-extrabold bg-linear-to-r from-amber-500 via-pink-600 to-purple-800 bg-clip-text text-transparent'>Technologies </span></h2>
                <p className='text-gray-500 text-xs whitespace-nowrap'>Pick one technology per category to built your ideal stack.</p>

            </div>
            <div className="flex flex-col lg:flex-row gap-4">
                <div className="grid-cols-1lg:flex-1 grid sm:grid-cols-2 xl:grid-cols-3 gap-6">

                    {technologiesCard.map((technologies) => {
                        const isAdded = yourStack.some((item) => item.id === technologies.id);

                        return (

                            <div
                                key={technologies.id}
                                className={`border  rounded-xl p-5 shadow-sm hover:shadow-md hover:-translate-y-4 transition-all duration-300 ${isAdded ? " border-pink-600 "
                                    : "border-gray-200"
                                    }`}
                            >

                                <div className="flex items-center justify-between gap-3">

                                    <img
                                        src={technologies.icon}
                                        alt={technologies.name}
                                        className="w-10 h-10 object-contain"
                                    />

                                    <button
                                        className="px-3 py-1 rounded-full border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white transition text-sm"
                                    >
                                        {technologies.badge}
                                    </button>

                                </div>


                                <h2 className="text-xl font-bold mt-4">
                                    {technologies.name}
                                </h2>

                                <p className="text-gray-500 text-sm mt-2">
                                    {technologies.description}
                                </p>

                                <div className='flex justify-between items-center   mt-5 text-sm'>
                                    <button className="text-gray-500 bg-gray-200 border-b-gray-400 rounded-lg px-2 ">
                                        {technologies.category}
                                    </button>

                                    <p className="text-sm text-gray-500 ">
                                        {technologies.difficulty}
                                    </p>
                                    <span className='flex justify-between items-center gap-1'>
                                        <TiStar /> {technologies.rating}
                                    </span>

                                </div>



                                <button
                                    onClick={() => addToStack(technologies)}
                                    className={`w-full mt-5 py-2 rounded-lg transition ${isAdded
                                        ? "bg-pink-200 text-pink-500"
                                        : "bg-black text-white hover:bg-gray-800"
                                        }`}
                                >
                                    {isAdded
                                        ? <span className='flex justify-center items-center'><GiCheckMark /> Added to Stack</span>
                                        : "Add to Stack"}
                                </button>

                            </div>
                        );
                    })}

                </div>
                <div className="w-full lg:w-80">
                <Yourstack
                    technologiesCard={yourStack}
                    setYourStack={setYourStack}
                />
</div>
            </div>


        </div>
    );
};

export default TechnologiesCard;