import React from 'react';
import { NavLink } from 'react-router-dom';
import routine from '../images/fitness_routine.png'
function Header() {
    return (
        <>
            <header>
                <nav className="bg-white border-gray-200 dark:bg-gray-900 rounded-xl m-2">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        <a className="flex items-center space-x-3 rtl:space-x-reverse">
                            <img src={routine} alt="DailyPath Logo" className="w-20 h-20 object-contain rounded-full" />
                            <span className="ml-3 text-xl text-white">DailyPath</span>
                        </a>

                        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                            <NavLink
                                to={'/signup'}
                                className="text-white bg-blue-700 hover:bg-white hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-lg px-6 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Sign up
                            </NavLink>


                            {/* This button will appear in the small devices in navbar to see the nav items
                             */}
                            <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                                </svg>
                            </button>
                        </div>

                        {/* This is the navbar NavLinks  */}
                        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
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
                                        to="/routines"
                                        className={({ isActive }) =>
                                            isActive
                                                ? 'block py-2 px-3 md:p-0 text-blue-700 font-bold transform transition-transform hover:scale-110'
                                                : 'block py-2 px-3 md:p-0 text-gray-900 rounded font-bold md:font-normal hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transform transition-transform hover:scale-110'
                                        }
                                    >
                                        My Routines
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/milestones"
                                        className={({ isActive }) =>
                                            isActive
                                                ? 'block py-2 px-3 md:p-0 text-blue-700 font-bold transform transition-transform hover:scale-110'
                                                : 'block py-2 px-3 md:p-0 text-gray-900 rounded font-bold md:font-normal hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transform transition-transform hover:scale-110'
                                        }
                                    >
                                        MileStones
                                    </NavLink>
                                </li>
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
                            </ul>

                        </div>
                    </div>
                </nav>

            </header>
        </>
    );
}

export default Header;
