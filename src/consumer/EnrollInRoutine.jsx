import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Axios from 'axios';

const EnrollInRoutine = () => {
    const { id } = useParams();  // Get the 'id' parameter from the URL
    const navigate = useNavigate();
    const [details, setDetails] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const response = await Axios.get(`/api/get_routine/${id}`);
                console.log(response.data);  // Log the response to check the structure

                // Parse the milestones and their 'name' if it's a stringified JSON
                const milestones = response.data.milestones.map(milestone => {
                    // Check if the 'name' is a string and parse it
                    const parsedMilestone = typeof milestone.name === 'string' ? JSON.parse(milestone.name) : milestone;

                    return {
                        ...milestone,
                        name: parsedMilestone.name,
                        steps: parsedMilestone.steps || [] // Set steps to an empty array if not available
                    };
                });

                setDetails({
                    ...response.data,
                    milestones: milestones, // Update the milestones state with parsed data
                });

                setLoading(false);
            } catch (err) {
                console.error("Error fetching routine details:", err.message);
                setLoading(false);
            }
        };

        if (id) {
            fetchDetails();
        } else {
            setLoading(false);
        }
    }, [id]);







    if (loading) {
        return <p className="text-center text-gray-700">Loading...</p>;
    }

    if (!details) {
        return (
            <div className="text-center mt-10 text-gray-700">
                <p>No routine data available. Please select a routine from the list.</p>
                <button
                    className="bg-indigo-500 text-white font-medium py-2 px-4 rounded mt-5 hover:bg-indigo-600 transition-colors"
                    onClick={() => navigate(-1)}
                >
                    Back to List
                </button>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-6 py-8">
            {/* Routine Header */}
            <div className="mb-8">
                <span className="inline-block bg-indigo-500 text-white text-sm font-medium px-3 py-1 mt-4 rounded">
                    {details.type}
                </span>
                
                <h1 className="text-3xl font-bold text-gray-900">{details.name}</h1>
                <p className="text-lg text-gray-700 mt-2">{details.description || "No description available."}</p>
               
            </div>

            {/* Routine Details */}
            <div className="bg-white shadow rounded-lg p-6 mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Routine Overview</h2>
                <p><strong>Duration:</strong> {details.duration} weeks</p>
            </div>

            {/* Milestones */}
            <div className="bg-white shadow rounded-lg p-6 mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Milestones</h2>
                <ul className="list-disc ml-6">
                    {details.milestones?.map((milestone, index) => (
                        <li key={index} className="mb-4">
                            <strong>{milestone.name}</strong>
                            <ul className="list-inside ml-6">
                                {milestone.steps?.map((step, stepIndex) => (
                                    <li key={stepIndex} className="mb-2">
                                        <strong>Step {stepIndex + 1}:</strong> {step}
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Enroll Button */}
            <button
                type="button"
                className="bg-indigo-500 text-white px-6 py-2 rounded-md hover:bg-indigo-600"
            >
                Enroll for this Routine
            </button>



        </div>
    );
};

export default EnrollInRoutine;
