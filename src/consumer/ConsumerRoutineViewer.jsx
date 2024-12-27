import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const ConsumerRoutineViewer = () => {
    const [routines, setRoutines] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchRoutines = async () => {
            try {
                const response = await Axios.get('/api/get_routines');
                setRoutines(response.data);
            } catch (error) {
                console.error('Error fetching routines:', error.message);
            }
        };

        fetchRoutines();
    }, []);

    const handleEnroll = (routine) => {
        console.log(routine);
        navigate(`/enroll/${routine.id}`);  // Ensure that the id is passed as part of the URL
    };




    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <div className="-my-8 divide-y-2 divide-gray-100">
                    {routines.map((routine) => (
                        <div key={routine.id} className="py-8 flex flex-wrap md:flex-nowrap">
                            {/* Routine Type and Duration */}
                            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                <span className="font-semibold title-font text-gray-700">Type: {routine.type}</span>
                                <span className="mt-1 text-sm text-gray-500">Duration: {routine.duration} Weeks</span>
                            </div>

                            {/* Routine Name and Description */}
                            <div className="md:flex-grow">
                                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{routine.name}</h2>
                                <p className="leading-relaxed mb-4">{routine.description || "No description available"}</p>
                                <button
                                    className="bg-indigo-500 text-white font-medium py-2 px-4 rounded mt-5 hover:bg-indigo-600 transition-colors"
                                    onClick={() => handleEnroll(routine)} // Pass the whole routine object
                                >
                                    Enroll in Routine
                                </button>


                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ConsumerRoutineViewer;
