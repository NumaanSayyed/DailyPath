import React, { useState } from "react";
import axios from 'axios';

const AdminRoutineBuilder = () => {
    const [routineName, setRoutineName] = useState("");
    const [routineType, setRoutineType] = useState("");
    const [duration, setDuration] = useState();
    const [milestones, setMilestones] = useState([]);
    const [newMilestone, setNewMilestone] = useState("");
    const [routineDescription, setRoutineDescription] = useState("");

    const handleAddMilestone = () => {
        if (newMilestone.trim() !== "") {
            setMilestones([...milestones, { 
                name: newMilestone.trim(), 
                steps: [],
                newStep: ""  // Each milestone now has its own step input state
            }]);
            setNewMilestone("");
        }
    };

    const handleMilestoneStepChange = (milestoneIndex, value) => {
        const updatedMilestones = [...milestones];
        updatedMilestones[milestoneIndex].newStep = value;
        setMilestones(updatedMilestones);
    };

    const handleAddStep = (milestoneIndex) => {
        const updatedMilestones = [...milestones];
        const currentMilestone = updatedMilestones[milestoneIndex];
        
        if (currentMilestone.newStep.trim() !== "") {
            currentMilestone.steps.push(currentMilestone.newStep.trim());
            currentMilestone.newStep = "";  // Clear input after adding
            setMilestones(updatedMilestones);
        }
    };

    const routineTypes = [
        "Health Care", "Weight Loss","Weight Gain","Muscle Building","Strength Training", "Cardio", "High-Intensity Training", "Yoga and Meditation","Plyometrics", "Calisthenics", "Mixed Training",
        "Productivity", "Skill Development", "Time Management", "Mental Wellness",
        "Diet and Nutrition", "Sports Training", "Financial Planning", "Language Learning"
    ];

    const handleSubmitRoutine = async () => {
        // Remove temporary newStep property before submitting
        const submitData = {
            routineName,
            routineType,
            duration,
            routineDescription,
            milestones: milestones.map(({ newStep, ...rest }) => rest)
        };

        try {
            const response = await axios.post('/api/routine', submitData);
            console.log('Routine added successfully:', response.data);
            alert('Routine added successfully!');
            
            // Reset form
            setRoutineName("");
            setRoutineType("");
            setDuration(0);
            setMilestones([]);
            setRoutineDescription("");
        } catch (error) {
            console.error('Submission error:', error);
            alert(error.response?.data?.message || 'Error submitting routine');
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-md p-6">
                <h1 className="text-2xl font-bold text-gray-700 mb-6">Routine Builder</h1>

                {/* Routine Name */}
                <div className="mb-4">
                    <label className="block text-gray-600 font-medium mb-2">Routine Name</label>
                    <input
                        type="text"
                        value={routineName}
                        onChange={(e) => setRoutineName(e.target.value)}
                        className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
                        placeholder="Enter routine name"
                    />
                </div>

                {/* Routine Type */}
                <div className="mb-4">
                    <label className="block text-gray-600 font-medium mb-2">Routine Type</label>
                    <select
                        value={routineType}
                        onChange={(e) => setRoutineType(e.target.value)}
                        className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
                    >
                        <option value="">Select a type</option>
                        {routineTypes.map((type, index) => (
                            <option key={index} value={type}>{type}</option>
                        ))}
                    </select>
                </div>

                {/* Duration */}
                <div className="mb-4">
                    <label className="block text-gray-600 font-medium mb-2">Duration (weeks)</label>
                    <input
                        type="number"
                        value={duration}
                        onChange={(e) => setDuration(Number(e.target.value))}
                        className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
                        placeholder="Enter duration in weeks"
                    />
                </div>

                {/* Routine Description */}
                <div className="mb-4">
                    <label className="block text-gray-600 font-medium mb-2">Description</label>
                    <textarea
                        value={routineDescription}
                        onChange={(e) => setRoutineDescription(e.target.value)}
                        className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
                        placeholder="Describe the routine"
                        rows="4"
                    />
                </div>

                {/* Milestones Section */}
                <div className="mb-6">
                    <label className="block text-gray-600 font-medium mb-2">Milestones</label>
                    <div className="flex gap-2 mb-4">
                        <input
                            type="text"
                            value={newMilestone}
                            onChange={(e) => setNewMilestone(e.target.value)}
                            className="flex-1 px-4 py-2 border rounded-md"
                            placeholder="New milestone name"
                        />
                        <button
                            onClick={handleAddMilestone}
                            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                        >
                            Add Milestone
                        </button>
                    </div>

                    {milestones.map((milestone, index) => (
                        <div key={index} className="mb-4 p-4 border rounded-md">
                            <div className="font-semibold mb-2">{milestone.name}</div>
                            
                            <div className="flex gap-2 mb-2">
                                <input
                                    type="text"
                                    value={milestone.newStep}
                                    onChange={(e) => handleMilestoneStepChange(index, e.target.value)}
                                    className="flex-1 px-4 py-2 border rounded-md"
                                    placeholder="Add step to milestone"
                                />
                                <button
                                    onClick={() => handleAddStep(index)}
                                    className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                                >
                                    Add Step
                                </button>
                            </div>

                            <ul className="list-disc pl-6">
                                {milestone.steps.map((step, stepIndex) => (
                                    <li key={stepIndex} className="text-gray-600">{step}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <button
                    onClick={handleSubmitRoutine}
                    className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition"
                >
                    Create Routine
                </button>
            </div>
        </div>
    );
};

export default AdminRoutineBuilder;