import React from 'react';
import { FaPlus, FaCog, FaRocket } from 'react-icons/fa';

const HowItWorks = () => {
  const steps = [
    {
      icon: FaPlus,
      title: 'Create Your Project',
      description: 'Sign up and create your first project in seconds. Choose from templates or start from scratch.',
    },
    {
      icon: FaCog,
      title: 'Customize & Configure',
      description: 'Set up your team, define workflows, and customize the platform to match your needs.',
    },
    {
      icon: FaRocket,
      title: 'Launch & Collaborate',
      description: 'Invite your team, start collaborating, and watch your productivity soar.',
    },
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get started in three simple steps. No complex setup required.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg" aria-hidden="true">
                {index + 1}
              </div>
              
              {/* Step Content */}
              <div className="bg-white rounded-xl p-8 pt-12 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <step.icon className="text-primary-600 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  {step.description}
                </p>
              </div>

              {/* Connector Line (Desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary-300"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
