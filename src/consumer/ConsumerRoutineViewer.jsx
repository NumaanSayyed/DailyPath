import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const ConsumerRoutineViewer = () => {
    const [routines, setRoutines] = useState([]);

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

    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <div className="-my-8 divide-y-2 divide-gray-100">
                    {routines.map((routine) => (
                        <div key={routine.id} className="py-8 flex flex-wrap md:flex-nowrap">
                            {/* Routine Type and Duration */}
                            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                <span className="font-semibold title-font text-gray-700">{routine.type}</span>
                                <span className="mt-1 text-sm text-gray-500">{routine.duration}</span>
                            </div>

                            {/* Routine Name and Description */}
                            <div className="md:flex-grow">
                                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{routine.name}</h2>
                                <p className="leading-relaxed">{routine.description || "No description available"}</p>
                                <a className="text-indigo-500 inline-flex items-center mt-4">
                                    Learn More
                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ConsumerRoutineViewer;
