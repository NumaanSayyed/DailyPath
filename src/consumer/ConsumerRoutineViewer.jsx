import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
        navigate(`/enroll/${routine.id}`);
    };

    return (
        <section className="min-h-screen bg-gray-100 py-10 px-4">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
                    Explore Our Routines
                </h1>
                {/* FLEX CONTAINER - Routines arranged horizontally */}
                <div className="flex flex-wrap justify-center gap-8">
                    {routines.map((routine) => (
                        <div
                            key={routine.id}
                            className="bg-white rounded-lg shadow-2xl transform hover:scale-105 transition duration-300 flex flex-col h-full"
                            style={{ width: '320px', minHeight: '350px' }} // Ensures uniform height
                        >
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="mb-4 flex items-center">
                                    <span className="inline-block bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full mr-2">
                                        {routine.type}
                                    </span>
                                    <span className="text-sm text-gray-600">
                                        Duration: {routine.duration} Weeks
                                    </span>
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                                    {routine.name}
                                </h2>
                                <p className="text-gray-600 flex-grow">
                                    {routine.description || "No description available"}
                                </p>
                                {/* BUTTON ALWAYS AT THE BOTTOM */}
                                <div className="mt-auto">
                                    <button
                                        onClick={() => handleEnroll(routine)}
                                        className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition duration-300"
                                    >
                                        Enroll in Routine
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ConsumerRoutineViewer;
