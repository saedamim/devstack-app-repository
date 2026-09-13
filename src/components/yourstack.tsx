import { VscClose } from "react-icons/vsc";
import type { ItechnologiesCardType } from "../types/technologiescardtype";
import { toast } from "react-toastify";

interface YourstackProps {
    technologiesCard: ItechnologiesCardType[];
    setYourStack: React.Dispatch<
        React.SetStateAction<ItechnologiesCardType[]>
    >;
}

const Yourstack = ({
    technologiesCard,
    setYourStack,
}: YourstackProps) => {

    const removeFromStack = (id: number) => {
        const removedTechnology = technologiesCard.find(
            (technologies) => technologies.id === id
        );
        setYourStack((previousStack) =>
            previousStack.filter(
                (technologies) => technologies.id !== id
            )
        );
         toast.success(`${removedTechnology?.name} removed from your stack!`);
    };
    const removeAll = () => {
        setYourStack([]);
         toast.success("All technologies removed from your stack!");
    };

     

    return (
        <div className="min-w-xs h-fit border border-gray-200 rounded-xl p-5">


            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-xl font-bold">
                        Your Stack
                    </h2>
                    <p className="text-sm text-gray-500">
                     {technologiesCard.length >0 && technologiesCard.length}   {technologiesCard.length === 0 ? "No technologies selected yet" : "Technology Selected"}
                    </p>
                </div>


                

            </div> 


            {technologiesCard.length === 0 ? (

                <div className="text-center text-gray-400 mt-10">
                    <p className="text-sm border border-dashed border-gray-300 py-2 rounded-3xl mt-2">
                        Your Stack is empty.
                    </p>
                </div>

            ) : (


                <div className="space-y-3 mt-6">

                    {technologiesCard.map((technologies) => (

                        <div
                            key={technologies.id}
                            className="flex items-center justify-between border rounded-lg p-4"
                        >

                            <img
                                src={technologies.icon}
                                alt={technologies.name}
                                className="w-10 h-10"
                            />

                            <div className="flex-1 ml-4">

                                <h3 className="font-semibold">
                                    {technologies.name}
                                </h3>

                                <p className="text-sm text-gray-400">
                                    {technologies.category}
                                </p>

                            </div>


                            <button
                                onClick={() => removeFromStack(technologies.id)}
                                className="text-gray-500 hover:text-red-500"
                            >
                                <VscClose />
                            </button>

                        </div>

                    ))}
                 {technologiesCard.length > 0 && (
                    <button
                        onClick={removeAll}
                        className="rounded-2xl w-full py-2 border border-pink-400 bg-pink-200 text-sm text-pink-500 hover:text-red-700"
                    >
                        Remove All
                    </button>
                )}
                </div>

            )}

        </div>
    );
};

export default Yourstack;