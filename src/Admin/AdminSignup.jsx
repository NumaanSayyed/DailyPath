import React, { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { NavLink } from 'react-router-dom';

export default function AdminSignup() {
    const [formData, setFormData] = useState({
        brandName: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
        website: '',
        description: '',
        address: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (formData.password !== formData.confirmPassword) {
            swal({
                title: "Password Mismatch!",
                text: "Passwords do not match. Please try again.",
                icon: "error",
                button: "OK",
            });
            return;
        }
    
        try {
            const response = await axios.post('/api/admin/signup', formData);
    
            if (response.status === 201) { // Assuming 201 for successful signup
                const { user } = response.data;
    
                // Store user data in local storage
                localStorage.setItem(
                    'auth',
                    JSON.stringify({
                        user,
                    })
                );
    
                swal({
                    title: "Account Created!",
                    text: "Your account has been successfully created.",
                    icon: "success",
                    button: "OK",
                });
    
                // Reset form data
                setFormData({
                    brandName: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                    phone: '',
                    website: '',
                    description: '',
                    address: '',
                });
            } else {
                throw new Error("Unexpected response from the server");
            }
        } catch (error) {
            console.error("Error during signup: ", error);
    
            const errorMessage = error.response?.data?.message || "Something went wrong. Please try again.";
            swal({
                title: "Error!",
                text: errorMessage,
                icon: "error",
                button: "OK",
            });
        }
    };
    

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 py-12">
            <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-8">
                <h1 className="text-3xl font-bold text-gray-800 text-center mb-4">
                    Fitness Brand Admin Signup
                </h1>
                <p className="text-gray-500 text-center mb-6">
                    Register your brand and start creating personalized fitness routines.
                </p>
                <form onSubmit={handleSubmit}>
                    {/* Form Fields */}
                    {[
                        { label: 'Brand Name', name: 'brandName', type: 'text', placeholder: 'Your Brand Name' },
                        { label: 'Email Address', name: 'email', type: 'email', placeholder: 'Your Email' },
                        { label: 'Phone Number', name: 'phone', type: 'text', placeholder: 'Phone Number' },
                        { label: 'Website', name: 'website', type: 'url', placeholder: 'Website URL' },
                        { label: 'Brand Description', name: 'description', type: 'textarea', placeholder: 'Describe your brand' },
                        { label: 'Address', name: 'address', type: 'text', placeholder: 'Brand Address' },
                    ].map((field) => (
                        <div className="mb-4" key={field.name}>
                            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor={field.name}>
                                {field.label}
                            </label>
                            {field.type === 'textarea' ? (
                                <textarea
                                    name={field.name}
                                    id={field.name}
                                    placeholder={field.placeholder}
                                    value={formData[field.name]}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                ></textarea>
                            ) : (
                                <input
                                    type={field.type}
                                    name={field.name}
                                    id={field.name}
                                    placeholder={field.placeholder}
                                    value={formData[field.name]}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            )}
                        </div>
                    ))}

                    {/* Password Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        {[
                            { label: 'Password', name: 'password', type: 'password', placeholder: 'Password' },
                            { label: 'Confirm Password', name: 'confirmPassword', type: 'password', placeholder: 'Confirm Password' },
                        ].map((field) => (
                            <div key={field.name}>
                                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor={field.name}>
                                    {field.label}
                                </label>
                                <input
                                    type={field.type}
                                    name={field.name}
                                    id={field.name}
                                    placeholder={field.placeholder}
                                    value={formData[field.name]}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                        ))}
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                        >
                            Sign Up
                        </button>
                    </div>

                    <div className="text-center mt-6">
                        <p className="text-sm text-gray-600">
                            Already have an account?{" "}
                            <NavLink
                                to="/login"
                                className="text-blue-600 hover:underline font-medium"
                            >
                                Login here
                            </NavLink>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}
