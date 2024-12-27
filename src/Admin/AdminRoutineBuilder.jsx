import React, { useState } from "react";
import axios from 'axios';

const AdminRoutineBuilder = () => {
    const [routineName, setRoutineName] = useState("");
    const [routineType, setRoutineType] = useState("");
    const [duration, setDuration] = useState(0);
    const [milestones, setMilestones] = useState([]);
    const [newMilestone, setNewMilestone] = useState("");
    const [newStep, setNewStep] = useState(""); // This will store the new step input
    const [routineDescription, setRoutineDescription] = useState("");

    const handleAddMilestone = () => {
        if (newMilestone.trim() !== "") {
            // Add new milestone with an empty array of steps
            setMilestones([...milestones, { name: newMilestone, steps: [] }]);
            setNewMilestone(""); // Reset the milestone input
        }
    };

    const handleAddStep = (milestoneIndex) => {
        if (newStep.trim() !== "") {
            const updatedMilestones = [...milestones];
            updatedMilestones[milestoneIndex].steps.push(newStep); // Add step to the selected milestone
            setMilestones(updatedMilestones);
            setNewStep(""); // Reset the step input
        }
    };

    const routineTypes = [
        "Health Care", "Weight Loss", "Muscle Building", "Yoga and Meditation",
        "Productivity", "Skill Development", "Time Management", "Mental Wellness",
        "Diet and Nutrition", "Sports Training", "Financial Planning", "Language Learning"
    ];

    const handleSubmitRoutine = async () => {
        const routineData = {
            routineName,
            routineType,
            duration,
            routineDescription,
            milestones,
        };

        console.log('Routine Data to be sent:', routineData); // Debug: Log the data being sent

        try {
            const response = await axios.post('/api/routine', routineData);
            console.log('Routine added successfully:', response.data);
            alert('Routine added successfully!');
        } catch (error) {
            if (error.response) {
                console.error('Backend error:', error.response.data);
                alert(`Error from server: ${error.response.data.message || 'Unknown error'}`);
            } else {
                console.error('Network Error:', error.message);
                alert('Network Error: Please check your backend or try again later.');
            }
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-md p-6">
                <h1 className="text-2xl font-bold text-gray-700 mb-6">Routine Builder</h1>

                {/* Routine Name */}
                <div className="mb-4">
                    <label className="block text-gray-600 font-medium mb-2" htmlFor="routineName">
                        Routine Name
                    </label>
                    <input
                        type="text"
                        id="routineName"
                        value={routineName}
                        onChange={(e) => setRoutineName(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
                        placeholder="Enter routine name"
                    />
                </div>

                {/* Routine Type */}
                <div className="mb-4">
                    <label className="block text-gray-600 font-medium mb-2" htmlFor="routineType">
                        Routine Type
                    </label>
                    <select
                        id="routineType"
                        value={routineType}
                        onChange={(e) => setRoutineType(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
                    >
                        <option value="">Select a type</option>
                        {routineTypes.map((type, index) => (
                            <option key={index} value={type}>
                                {type}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Duration */}
                <div className="mb-4">
                    <label className="block text-gray-600 font-medium mb-2" htmlFor="duration">
                        Duration (in weeks)
                    </label>
                    <input
                        type="number"
                        id="duration"
                        value={duration}
                        onChange={(e) => setDuration(Number(e.target.value) || "")}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
                        placeholder="Enter duration (e.g., 8)"
                    />
                </div>

                {/* Routine Description */}
                <div className="mb-4">
                    <label className="block text-gray-600 font-medium mb-2" htmlFor="routineDescription">
                        Routine Description
                    </label>
                    <textarea
                    
                        id="routineDescription"
                        value={routineDescription}
                        onChange={(e) => setRoutineDescription(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
                        placeholder="Enter a brief description of the routine"
                        rows="4"
                        maxLength={200}
                        minLength={50}
                    />
                </div>

                {/* Milestones */}
                <div className="mb-6">
                    <label className="block text-gray-600 font-medium mb-2">
                        Weekly/Bi-Weekly Milestones
                    </label>
                    <div className="flex flex-col sm:flex-row items-center gap-2">
                        <input
                            type="text"
                            value={newMilestone}
                            onChange={(e) => setNewMilestone(e.target.value)}
                            className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
                            placeholder="Enter milestone"
                        />
                        <button
                            onClick={handleAddMilestone}
                            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                        >
                            Add
                        </button>
                    </div>
                    <ul className="mt-3 list-disc pl-5">
                        {milestones.map((milestone, index) => (
                            <li key={index} className="text-gray-600">
                                <div className="font-semibold">{milestone.name}</div>
                                <div className="ml-4">
                                    <input
                                        type="text"
                                        value={newStep}
                                        onChange={(e) => setNewStep(e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
                                        placeholder="Enter step"
                                    />
                                    <button
                                        onClick={() => handleAddStep(index)}
                                        className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 mt-2"
                                    >
                                        Add Step
                                    </button>
                                    <ul className="mt-3 list-disc pl-5">
                                        {milestone.steps.map((step, idx) => (
                                            <li key={idx} className="text-gray-600">{step}</li>
                                        ))}
                                    </ul>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Submit Button */}
                <button
                    onClick={handleSubmitRoutine}
                    className="w-full bg-indigo-500 text-white py-3 rounded-md hover:bg-indigo-600 transition"
                >
                    Submit Routine
                </button>
            </div>
        </div>
    );
};

export default AdminRoutineBuilder;
