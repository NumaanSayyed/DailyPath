import React, { useState, useEffect, useCallback } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import routine from '../images/fitness_routine.png';

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState('');
    const [userRole, setUserRole] = useState('');
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    // Function to update authentication state
    const updateAuthState = useCallback(() => {
        const auth = JSON.parse(localStorage.getItem('auth'));
        if (auth?.token) {
            setIsLoggedIn(true);
            setUserName(auth.name || 'User');
            setUserRole(auth.role || 'user');
        } else {
            setIsLoggedIn(false);
            setUserName('');
            setUserRole('');
        }
    }, []);

    // Effect to load auth state on mount
    useEffect(() => {
        updateAuthState();

        // Listen for manual changes to localStorage (e.g., other tabs)
        const handleStorageChange = (event) => {
            if (event.key === 'auth') {
                updateAuthState();
            }
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, [updateAuthState]);

    // Handle Logout
    const handleLogout = () => {
        localStorage.removeItem('auth');
        updateAuthState(); // Update state immediately
        navigate('/login');
    };

    return (
        <header>
            <nav className="bg-white border-gray-200 dark:bg-gray-900 rounded-xl m-2">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    {/* Logo */}
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img
                            src={routine}
                            alt="DailyPath Logo"
                            className="w-20 h-20 object-contain rounded-full"
                        />
                        <span className="ml-3 text-xl text-white">DailyPath</span>
                    </div>

                    {/* Auth Section */}
                    <div className="flex md:order-2 space-x-3 md:space-x-6 rtl:space-x-reverse items-center">
                        {isLoggedIn ? (
                            <>
                                <img
                                    src={`https://ui-avatars.com/api/?name=${encodeURIComponent(userName)}`}
                                    alt="Avatar"
                                    className="w-10 h-10 rounded-full border-2 border-gray-300"
                                />
                                <span className="text-white font-medium hidden md:block">
                                    {userRole === 'admin' ? `Welcome Admin` : `Welcome back, ${userName}!`}
                                </span>

                                <button
                                    onClick={handleLogout}
                                    className="text-white bg-red-600 hover:bg-red-700 py-2 px-4 rounded-lg"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <NavLink
                                    to="/signup"
                                    className="text-white bg-blue-700 hover:bg-white hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-lg px-6 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Sign up
                                </NavLink>
                                <NavLink
                                    to="/login"
                                    className="text-white bg-blue-700 hover:bg-white hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-lg px-6 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Login
                                </NavLink>
                            </>
                        )}
                        {/* Hamburger Button for Small Devices */}
                        <button
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-label="Toggle Menu"
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 17 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 1h15M1 7h15M1 13h15"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Navbar Items */}
                    <div
                        className={`items-center justify-between ${menuOpen ? 'block' : 'hidden'
                            } w-full md:flex md:w-auto md:order-1`}
                    >
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border text-lg border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        isActive
                                            ? 'block py-2 px-3 md:p-0 text-blue-700 font-bold transform transition-transform hover:scale-110'
                                            : 'block py-2 px-3 md:p-0 text-gray-900 rounded font-bold md:font-normal hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transform transition-transform hover:scale-110'
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={userRole === 'admin' ? '/admin' : '/routines'}
                                    className={({ isActive }) =>
                                        isActive
                                            ? 'block py-2 px-3 md:p-0 text-blue-700 font-bold transform transition-transform hover:scale-110'
                                            : 'block py-2 px-3 md:p-0 text-gray-900 rounded font-bold md:font-normal hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transform transition-transform hover:scale-110'
                                    }
                                >
                                    {userRole === 'admin' ? 'Routine Builder' : 'Routines'}
                                </NavLink>
                            </li>
                            {userRole !== 'admin' && (
                                <li>
                                    <NavLink
                                        to="/progress"
                                        className={({ isActive }) =>
                                            isActive
                                                ? 'block py-2 px-3 md:p-0 text-blue-700 font-bold transform transition-transform hover:scale-110'
                                                : 'block py-2 px-3 md:p-0 text-gray-900 rounded font-bold md:font-normal hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transform transition-transform hover:scale-110'
                                        }
                                    >
                                        Progress
                                    </NavLink>
                                </li>
                            )}
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        isActive
                                            ? 'block py-2 px-3 md:p-0 text-blue-700 font-bold transform transition-transform hover:scale-110'
                                            : 'block py-2 px-3 md:p-0 text-gray-900 rounded font-bold md:font-normal hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transform transition-transform hover:scale-110'
                                    }
                                >
                                    Contact Us
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
