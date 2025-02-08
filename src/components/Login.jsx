import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, NavLink } from 'react-router-dom';
import swal from 'sweetalert';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/api/login', { email, password });

            // the response data
            const { token, name, isAdmin } = response.data;

            // Save authentication details in localStorage
            localStorage.setItem(
                'auth',
                JSON.stringify({
                    token,
                    name,
                    role: isAdmin ? 'admin' : 'user', // Set role based on isAdmin flag
                })
            );

            // Show success message
            swal({
                title: "Login Successful!",
                text: `Welcome back`,
                icon: "success",
                button: "OK",
            }).then(() => {
                // Reload the page to reflect changes
                window.location.reload();
            });

            // Redirect based on user role
            if (isAdmin) {
                navigate('/admin'); // Redirect admins to the admin dashboard
            } else {
                navigate('/'); // Redirect regular users to the home page
            }
        } catch (error) {
            // Handle login errors
            swal({
                title: "Error!",
                text: error.response?.data?.message || "Login failed. Please try again.",
                icon: "error",
                button: "OK",
            });
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
                <h1 className="text-3xl font-bold text-gray-800 text-center mb-4">
                    Welcome Back!
                </h1>
                <p className="text-gray-500 text-center mb-6">
                    "Your journey to success starts here. Let's make today count!"
                </p>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
                    >
                        Login
                    </button>
                </form>
                <div className="text-center mt-6">
                    <p className="text-sm text-gray-600">
                        Don't have an account?{' '}
                        <NavLink
                            to="/signup"
                            className="text-blue-600 hover:underline font-medium"
                        >
                            Sign up here
                        </NavLink>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
