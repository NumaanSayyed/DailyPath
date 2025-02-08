import { ArrowPathIcon, CalendarIcon, ChartBarIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import muscleblazeLogo from "../images/image.png";
import wellcoreLogo from "../images/wellcore.png";
import gncLogo from "../images/gnc.png";
import avvatarLogo from "../images/avvatar.png";
import nutrabayLogo from "../images/nutrabay2.png";
import muscletechLogo from "../images/muscletech.png";


const features = [
    {
        name: 'Personalized Routines',
        description:
            'Create and customize daily routines that fit your lifestyle. Track your tasks and stay consistent every day.',
        icon: CalendarIcon,
    },
    {
        name: 'Progress Insights',
        description:
            'Visualize your progress with insightful charts and reports. See how far you’ve come and identify areas for improvement.',
        icon: ChartBarIcon,
    },
    {
        name: 'Automated Reminders',
        description:
            'Never miss a step with our automated reminders. Get notifications to keep you on track with your goals.',
        icon: ArrowPathIcon,
    },
    {
        name: 'Achievement Tracking',
        description:
            'Celebrate milestones with built-in achievement tracking. Unlock badges and stay motivated to reach new heights.',
        icon: CheckCircleIcon,
    },
];

const brands = [
    {
        name: 'MuscleBlaze',
        logo: muscleblazeLogo,
        description: 'MuscleBlaze offers top-notch supplements and fitness products to fuel your fitness journey.',
    },
    {
        name: 'WellCore',
        logo: wellcoreLogo,
        description: 'WellCore is a trusted brand for innovative and quality health solutions.',
    },
    {
        name: 'Avvatar',
        logo: avvatarLogo,
        description: 'Avvatar empowers you to live a healthier, more active lifestyle with premium products.',
    },
    {
        name: 'MuscleTech',
        logo: muscletechLogo,
        description: 'MuscleTech specializes in performance-driven fitness gear for athletes.',
    },
    {
        name: 'Nutrabay',
        logo: nutrabayLogo,
        description: 'Nutrabay provides holistic solutions for your wellness and mindfulness needs.',
    },
    {
        name: 'GNC',
        logo: gncLogo,
        description: 'GNC delivers cutting-edge equipment to enhance your workout efficiency.',
    },
];
export default function Features() {
    useEffect(() => {
        Aos.init(({once: true}))
    }, []);

    return (
        <>
            {/* Features Section */}
            <section className="py-10">
                {/* Features Intro Section */}
                <div
                    className="mx-auto max-w-7xl lg:text-center py-24 px-6 bg-gradient-to-r from-indigo-600 to-indigo-900 rounded-xl shadow-xl"
                    data-aos="fade-right"
                >
                    <h2 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-tight mb-6">
                        Unlock Your Potential
                    </h2>
                    <p className="text-lg font-semibold text-indigo-100 mb-8">
                        Start your journey towards a better and more organized life with powerful tools designed just for you.
                    </p>
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-indigo-500 opacity-50"></div>
                        <p className="relative text-lg text-indigo-100 font-semibold max-w-2xl mx-auto">
                            Discover the features that make DailyPath the ultimate companion to achieve your fitness and wellness goals.
                        </p>
                    </div>
                </div>

                {/* Features Main Content */}

                {/* Heading Section */}
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16"data-aos="fade-left">
                    {/* Heading Section */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl" >
                            Explore Our Features
                        </h2>
                        <p className="mt-4 text-lg text-gray-600">
                            Discover what makes <span className="text-black font-bold">DailyPath</span> unique and effective.
                        </p>
                    </div>

                    {/* Features Section */}
                    <div
                        className="grid max-w-xl gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"
                        data-aos="fade-up"
                    >
                        {features.map((feature) => (
                            <div
                                key={feature.name}
                                className="group relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 hover:bg-indigo-600"
                            >
                                <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14">
                                    <feature.icon
                                        className="h-6 w-6 text-indigo-600 group-hover:text-white group-hover:stroke-indigo-600"
                                        aria-hidden="true"
                                    />
                                </div>
                                <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">
                                    {feature.name}
                                </h4>
                                <p className="text-sm font-normal text-gray-500 leading-5 transition-all duration-500 group-hover:text-white">
                                    {feature.description}
                                </p>
                            </div>
                        ))}

                    </div>
                </div>

                {/* Our Brands Section */}
                <div className="py-24 bg-gray-900 text-white mt-12">
                    <div className="mx-auto max-w-7xl px-6 text-center mb-16" data-aos="fade-up">
                        <h2 className="text-4xl font-bold">Our Trusted Brands</h2>
                        <p className="text-lg">
                            Collaborating with the best brands to ensure top-notch quality and reliability.
                        </p>
                    </div>
                    <div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mx-auto max-w-7xl"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        {brands.map((brand) => (
                            <div
                                key={brand.name}
                                className="group relative w-full h-60 perspective"
                            >
                                {/* Flip Card Inner */}
                                <div className="relative w-full h-full transition-transform duration-700 transform group-hover:rotate-y-180">
                                    {/* Front Side */}
                                    <div className="absolute inset-0 bg-gray-800 rounded-xl p-6 flex flex-col items-center justify-center backface-hidden">
                                        <img
                                            src={brand.logo}
                                            alt={`${brand.name} logo`}
                                            className="h-20 w-auto mb-4"
                                        />
                                        <h4 className="text-xl font-semibold">{brand.name}</h4>
                                    </div>
                                    {/* Back Side */}
                                    <div className="absolute inset-0 bg-slate-500 text-white rounded-xl p-6 flex items-center justify-center text-center rotate-y-180 backface-hidden">
                                        <p className="text-sm">{brand.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </section>
        </>
    );
}
