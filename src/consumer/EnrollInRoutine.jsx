import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Axios from 'axios';

const EnrollInRoutine = () => {
    const { id } = useParams(); // Get the 'id' parameter from the URL
    const navigate = useNavigate();
    const [details, setDetails] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                console.log("Fetching details for ID:", id);
                const response = await Axios.get(`/api/get_routine/${id}`);
                console.log("Routine Data from API:", response.data);
                const routineData = response.data;
                if (!routineData.milestones) {
                    routineData.milestones = [];
                }
                setDetails(routineData);
            } catch (err) {
                console.error("Error fetching routine details:", err.message);
                setDetails(null);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchDetails();
        }
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <p className="text-center text-2xl text-gray-700 font-semibold">Loading...</p>
            </div>
        );
    }

    if (!details) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
                <p className="text-center text-lg text-gray-700">No routine data available. Please select a routine from the list.</p>
                <button
                    className="mt-5 bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700 transition duration-300"
                    onClick={() => navigate(-1)}
                >
                    Back to List
                </button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Routine Header */}
                <div className="bg-white shadow-xl rounded-lg overflow-hidden mb-8">
                    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6">
                        <h1 className="text-4xl font-extrabold text-white">{details.name}</h1>
                        <span className="inline-block mt-2 bg-white text-indigo-600 px-3 py-1 rounded-full text-sm font-medium">
                            {details.type}
                        </span>
                    </div>
                    <div className="p-6">
                        <p className="text-gray-700 text-lg">{details.description || "No description available."}</p>
                        <div className="mt-4">
                            <span className="text-gray-600 font-semibold">Duration:</span>{" "}
                            <span className="text-gray-800">{details.duration} weeks</span>
                        </div>
                    </div>
                </div>

                {/* Milestones & Steps */}
                <div className="bg-white shadow-xl rounded-lg p-6 mb-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Milestones</h2>
                    {details.milestones.length > 0 ? (
                        details.milestones.map((milestone) => (
                            <div key={milestone.id} className="mb-6 border border-gray-200 rounded-lg p-4">
                                <h3 className="text-2xl font-semibold text-indigo-600">{milestone.name}</h3>
                                {milestone.steps && milestone.steps.length > 0 ? (
                                    <ul className="mt-3 space-y-2">
                                        {milestone.steps.map((step) => (
                                            <li key={step.id} className="flex items-center">
                                                <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></div>
                                                <span className="text-gray-700 text-lg">{step.name}</span>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="mt-2 text-gray-500">No steps available</p>
                                )}
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500">No milestones available</p>
                    )}
                </div>

                {/* Enroll Button */}
                <div className="text-center">
                    <button
                        type="button"
                        className="bg-indigo-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-indigo-700 transform hover:scale-105 transition duration-300"
                    >
                        Enroll for this Routine
                    </button>
                </div>

                {/* Debugging Output: Uncomment to view raw JSON data */}
                {/* <pre className="mt-8 text-sm text-gray-600">{JSON.stringify(details, null, 2)}</pre> */}
            </div>
        </div>
    );
};

export default EnrollInRoutine;
