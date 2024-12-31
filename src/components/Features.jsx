import { ArrowPathIcon, CalendarIcon, ChartBarIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

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

export default function Features() {
    return (
        <>
            {/* Features upper section  */}
            <section class="py-24 ">
                <div className="mx-auto max-w-7xl lg:text-center py-24 px-6 bg-gradient-to-r from-indigo-600 to-indigo-900 rounded-xl shadow-xl">
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

                

                {/* features main-content section  */}
                <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16">
                    <div class="mb-10 lg:mb-16 flex justify-center items-center flex-col gap-x-0 gap-y-6 lg:gap-y-0 lg:flex-row lg:justify-between max-md:max-w-lg max-md:mx-auto">
                        <div class="relative w-full text-center lg:text-left lg:w-2/4">
                            <h2 class="text-4xl font-bold text-gray-900 leading-[3.25rem] lg:mb-6 mx-auto max-w-max lg:max-w-md lg:mx-0">Tools to Simplify and Elevate Your Daily Journey</h2>
                        </div>
                        <div class="relative w-full text-center  lg:text-left lg:w-2/4">
                            <p class="text-lg font-normal text-black-500 mb-5">DailyPath is your companion for building habits, achieving goals, and staying organized with ease.
                                Experience a smarter way to plan your day and accomplish more</p>

                        </div>
                    </div>

                    <div className="grid max-w-xl gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {features.map((feature) => (
                            <div
                                key={feature.name}
                                className="group relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 hover:bg-indigo-600"
                            >
                                <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14">
                                    {/* Ensure heroicon color adapts on hover */}
                                    <feature.icon
                                        className="h-6 w-6 text-indigo-600 group-hover:text-indigo-600 group-hover:stroke-indigo-600"
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
            </section>


        </>
    );
}
