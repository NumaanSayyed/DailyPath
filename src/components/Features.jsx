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
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold text-indigo-600">Unlock Your Potential</h2>
                    <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                        Tools to Simplify and Elevate Your Daily Journey
                    </p>
                    <p className="mt-6 text-lg text-gray-600">
                        DailyPath is your companion for building habits, achieving goals, and staying organized with ease.
                        Experience a smarter way to plan your day and accomplish more.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative pl-16">
                                <dt className="text-base font-semibold text-gray-900">
                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                        <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-2 text-base text-gray-600">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
}
