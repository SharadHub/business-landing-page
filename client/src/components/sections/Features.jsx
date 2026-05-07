import React from 'react';
import { FaTasks, FaClock, FaUsers, FaChartBar, FaShieldAlt, FaCloud } from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      icon: FaTasks,
      title: 'Task Management',
      description: 'Organize tasks with drag-and-drop, set deadlines, and track progress effortlessly.',
    },
    {
      icon: FaClock,
      title: 'Time Tracking',
      description: 'Monitor time spent on projects with built-in timers and detailed reports.',
    },
    {
      icon: FaUsers,
      title: 'Team Collaboration',
      description: 'Work together in real-time with comments, mentions, and file sharing.',
    },
    {
      icon: FaChartBar,
      title: 'Analytics & Reports',
      description: 'Get insights into team performance with customizable dashboards and reports.',
    },
    {
      icon: FaShieldAlt,
      title: 'Enterprise Security',
      description: 'Your data is protected with bank-level encryption and compliance standards.',
    },
    {
      icon: FaCloud,
      title: 'Cloud Sync',
      description: 'Access your projects from anywhere with automatic cloud synchronization.',
    },
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Powerful features designed to help teams work smarter and deliver faster.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="text-primary-600 text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
