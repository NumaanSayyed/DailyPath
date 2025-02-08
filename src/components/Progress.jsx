import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Progress() {
    // Sample routine data fetched from routines page or API
    const [routines, setRoutines] = useState([]);

    useEffect(() => {
        // Mock data for routines fetched
        const fetchedRoutines = [
            { id: 1, name: 'Morning Yoga', progress: 80 },
            { id: 2, name: 'Weight Training', progress: 50 },
            { id: 3, name: 'Cardio', progress: 65 },
        ];
        setRoutines(fetchedRoutines);
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 py-8">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold text-center mb-8 text-blue-700">My Progress</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {routines.map((routine) => (
                        <div
                            key={routine.id}
                            className="bg-white shadow-md rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
                        >
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">{routine.name}</h2>
                            <div className="relative w-full bg-gray-200 rounded-full h-4">
                                <div
                                    className="bg-blue-600 h-4 rounded-full"
                                    style={{ width: `${routine.progress}%` }}
                                ></div>
                            </div>
                            <p className="mt-2 text-gray-600">Progress: {routine.progress}%</p>
                            <Link
                                to={`/routines/${routine.id}`}
                                className="mt-4 inline-block bg-blue-500 text-white text-sm font-medium py-2 px-4 rounded-lg hover:bg-blue-700"
                            >
                                View Routine
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Progress;
