import React from 'react';
import Button from '../ui/Button';
import { FaCheck } from 'react-icons/fa';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: 'Free',
      description: 'Perfect for individuals and small teams getting started.',
      features: [
        'Up to 5 team members',
        '5 active projects',
        'Basic analytics',
        'Email support',
        '1GB storage',
      ],
      popular: false,
    },
    {
      name: 'Professional',
      price: '$29',
      period: '/month',
      description: 'Best for growing teams that need more power.',
      features: [
        'Up to 20 team members',
        'Unlimited projects',
        'Advanced analytics',
        'Priority support',
        '10GB storage',
        'Custom workflows',
        'API access',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: '$99',
      period: '/month',
      description: 'For large organizations with advanced needs.',
      features: [
        'Unlimited team members',
        'Unlimited projects',
        'Enterprise analytics',
        '24/7 phone support',
        'Unlimited storage',
        'Custom integrations',
        'SSO & advanced security',
        'Dedicated account manager',
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your needs. No hidden fees.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 ${
                plan.popular
                  ? 'bg-primary-600 text-white shadow-2xl scale-105'
                  : 'bg-white text-gray-900 shadow-lg border border-gray-200'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-secondary-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mb-4">
                <span className={`text-4xl font-extrabold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.price}
                </span>
                {plan.period && (
                  <span className={`text-lg ${plan.popular ? 'text-primary-200' : 'text-gray-600'}`}>
                    {plan.period}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className={`mb-6 ${plan.popular ? 'text-primary-100' : 'text-gray-600'}`}>
                {plan.description}
              </p>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <FaCheck
                      className={`mt-1 flex-shrink-0 ${
                        plan.popular ? 'text-secondary-400' : 'text-primary-600'
                      }`}
                    />
                    <span className={plan.popular ? 'text-white' : 'text-gray-700'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                variant={plan.popular ? 'secondary' : 'primary'}
                className="w-full"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
