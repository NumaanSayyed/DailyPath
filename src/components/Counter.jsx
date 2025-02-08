import React from 'react';
import { useEffect } from 'react';
import CountUp from 'react-countup';
import Aos from 'aos';
import 'aos/dist/aos.css';

function CounterSection() {
    useEffect(() => {
        Aos.init({ duration: 2000, once: true });


    }, [])


    return (
        <div className="bg-gray-900 py-16 mt-4 border rounded-lg" data-aos="fade-left">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 sm:gap-x-16 text-center">
                    {/* Counter 1 */}
                    <div className="flex flex-col items-center">
                        <h3 className="text-5xl font-extrabold text-white tracking-tight mb-3">
                            <CountUp end={15} duration={6} />+
                        </h3>
                        <p className="text-lg font-medium text-gray-300">
                            Brands Collaborating
                        </p>
                        <div className="w-12 h-1 bg-indigo-500 mt-3"></div>
                    </div>

                    {/* Counter 2 */}
                    <div className="flex flex-col items-center">
                        <h3 className="text-5xl font-extrabold text-white tracking-tight mb-3">
                            <CountUp end={500} duration={8} />+
                        </h3>
                        <p className="text-lg font-medium text-gray-300">
                            Trusted Users
                        </p>
                        <div className="w-12 h-1 bg-indigo-500 mt-3"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CounterSection;
