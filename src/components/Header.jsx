import React from 'react';
import { NavLink } from 'react-router-dom';
import routine from '../images/fitness_routine.png'
function Header() {
    return (
        <>
<<<<<<< HEAD
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

=======
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                        <span className="ml-3 text-xl">DailyPath</span>
                    </a>
                    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
                        <Link to='/' className="mr-5 hover:text-gray-900 hover:scale-110">Home</Link>
                        <Link to="/routines" className="mr-5 hover:text-gray-900 hover:scale-110"> Routines</Link>
                        <Link to="/milestones" className="mr-5 hover:text-gray-900 hover:scale-110">Milestones</Link>
                        <Link to="/progress" className="mr-5 hover:text-gray-900 hover:scale-110">Progress</Link>
                    </nav>
                    <Link to={'/signup'}  className="inline-flex items-center bg-indigo-500 border-0 py-1 px-3 focus:outline-none  hover:bg-indigo-600 text-white rounded-xl text-base mt-4 md:mt-0">
                       SignUp
                    </Link>
                </div>
>>>>>>> numan
            </header>
        </>
    );
}

export default Header;
