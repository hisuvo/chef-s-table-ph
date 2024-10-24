import { useState } from 'react';
const sidebar = ({ recipiQueue }) => {

    // Hnadle current cookig prepierd
    const [prepires, setPrepires] = useState([]);
    const [prepirTime, setPrepirTime] = useState(0);
    const [prepirCal, setPrepircal] = useState(0);

    const handlePrepire = (prep, time, cal) => {
        const isExist = prepires.find((previousPrep) => previousPrep.id === prep.id)
        const newPerpires = [...prepires, prep]

        isExist ? alert("it's already prepired") : setPrepires(newPerpires)

        // total time
        const newPrepireTime = Number(prepirTime) + Number(time)
        setPrepirTime(newPrepireTime)

        // total cal
        const newPrepireCal = Number(prepirCal) + Number(cal)
        setPrepircal(newPrepireCal)
    }

    console.log(prepirTime)

    return (
        <div className="w-1/3 border-2 p-4 rounded-lg">
            {/* Want to cook part */}
            <div>
                <h2 className="text-2xl font-semibold text-center">Want to Cook: {recipiQueue.length <= 9 ? `0${recipiQueue.length}` : recipiQueue.length}</h2>
                <div className="divider"></div>
                {/* recipi card */}
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className='text-lg font-semibold'>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                recipiQueue.map((recipi, index) => <tr key={index} className='hover:bg-green-50 text-lg'>
                                    <th>{++index}</th>
                                    <td>{recipi.name}</td>
                                    <td>{recipi.cook_time}</td>
                                    <td>{recipi.calories}</td>
                                    <td><button onClick={() => handlePrepire(recipi, recipi.cook_time, recipi.calories)} className="btn bg-green-300">prep</button></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Add current cook part */}
            <div className="mt-12">
                <h2 className="text-2xl mt-6 font-semibold text-center">Currently cooking: {recipiQueue.length <= 9 ? `0${recipiQueue.length}` : recipiQueue.length}</h2>
                <div className="divider"></div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className='text-lg font-semibold'>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                prepires.map((prepire, index) => <tr key={index} className='text-lg hover:bg-green-50'>
                                    <th>{++index}</th>
                                    <td>{prepire.name}</td>
                                    <td>{prepire.cook_time}</td>
                                    <td>{prepire.calories}</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Total carolis */}
            <div className='mt-14 text-xl font-semibold'>
                <h1 className="text-2xl mt-6 font-semibold text-center">Total Count </h1>
                <div className="divider"></div>
                <div className='flex justify-between items-center'>
                    <h2>Total Time: {prepirTime} min</h2>
                    <h2>Total Calories: {prepirCal} cal </h2>
                </div>
            </div>

        </div>
    );
};

export default sidebar;

/**
 * {
    "id": 4,
    "image": "https://i.ibb.co.com/Rp3pmXV/Project-Cover8.png",
    "name": "Mango Smoothie",
    "description": "A refreshing smoothie with ripe mango, banana, and yogurt.",
    "ingredients": [
        "Mango",
        "Banana",
        "Greek yogurt",
        "Honey",
        "Almond milk",
        "Ice cubes"
    ],
    "prep_time": "5 minutes",
    "cook_time": "0 minutes",
    "calories": 200
}
 */