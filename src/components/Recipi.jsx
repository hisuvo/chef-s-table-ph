import { useEffect, useState } from "react";
import { FaFire } from "react-icons/fa";
import { GiRiceCooker } from "react-icons/gi";
import { MdOutlineTimer } from "react-icons/md";


const Recipi = ({ handleRecipi }) => {
    const [recipi, setRecipi] = useState([])
    useEffect(() => {
        fetch("../../public/recipes.json")
            .then(res => res.json())
            .then(data => setRecipi(data))
    }, [])
    return (
        <div className="w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
            {recipi.map((item, index) =>
            (<div key={index} className="card bg-base-100 p-4 border-2 rounded-lg space-y-6">
                <figure>
                    <img
                        src={item.image}
                        alt="recipi" />
                </figure>
                <div className="space-y-3">
                    <h2 className="card-title text-xl font-semibold">{item.name}</h2>
                    <p>{item.description}</p>
                    {/* divider here */}
                    <div className="divider"></div>
                    {/* Ingredient add here */}
                    <div className="mx-2">
                        <h2 className="text-lg font-medium">
                            Ingredients: {item.ingredients.length}
                        </h2>

                        <div className='mx-2'>
                            {item.ingredients.map((ingredient, index) =>
                                <li key={index}>{ingredient}</li>
                            )}
                        </div>
                    </div>
                    {/* divider */}
                    <div className="divider"></div>
                    {/* Timer part */}
                    <div className="flex justify-between text-lg font-semibold">
                        <p className="flex justify-center items-center gap-2"><MdOutlineTimer />{item.prep_time} Mins</p>
                        <p className="flex justify-center items-center gap-2"><GiRiceCooker />
                            {item.cook_time} Mins</p>
                        <p className="flex justify-center items-center gap-2"><FaFire /> {item.calories}Cal</p>
                    </div>
                    {/* button add here */}
                    <div className="card-actions">
                        <button onClick={() => handleRecipi(item)}
                            className="btn text-[1.2rem] font-medium px-8 bg-green-300"
                        >Want to Cook</button>
                    </div>
                </div>
            </div>)
            )}
        </div>
    );
};

export default Recipi;