import React from 'react';
import RoutineImage from '../images/hero-routine.png';
import { Link } from 'react-router-dom';
function Hero() {
    return (
        <>
            <section className="text-gray-600 body-font ">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                            Achieve Your Goals with DailyPath
                            <br className="hidden lg:inline-block" /> Your Personalized Routine Tracker
                        </h1>
                        <p className="mb-8 leading-relaxed text-gray-700">
                            DailyPath helps you stay on track with your personal routines, manage milestones, and monitor your progress in a simple and effective way.
                        </p>
                        <div className="flex justify-center">
                            <Link to='/routines' className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                Start Your Routine
                            </Link>
                            
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img
                            className="hidden object-cover object-center rounded md:block"
                            alt="hero"
                            src={RoutineImage}
                        />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;
