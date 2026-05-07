import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'How do I get started with ProjectFlow?',
      answer: 'Simply sign up for a free account, create your first project, and invite your team members. Our intuitive interface makes it easy to get started in minutes.',
    },
    {
      question: 'Can I upgrade or downgrade my plan at any time?',
      answer: 'Yes! You can change your plan at any time. When you upgrade, you will be charged the prorated difference. When you downgrade, the new rate will apply on your next billing cycle.',
    },
    {
      question: 'Is my data secure?',
      answer: 'Absolutely. We use bank-level encryption, regular security audits, and comply with industry standards including GDPR and SOC 2. Your data is backed up daily and stored in secure, redundant data centers.',
    },
    {
      question: 'Do you offer a free trial?',
      answer: 'Yes! Our Starter plan is free forever. For Professional and Enterprise plans, we offer a 14-day free trial with full access to all features.',
    },
    {
      question: 'Can I integrate with other tools?',
      answer: 'Yes, ProjectFlow integrates with popular tools like Slack, GitHub, Google Drive, and many more. Our API also allows for custom integrations.',
    },
    {
      question: 'What kind of support do you offer?',
      answer: 'Starter plans include email support. Professional plans get priority email support. Enterprise plans include 24/7 phone support and a dedicated account manager.',
    },
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Got questions? We have answers.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
              >
                <span className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <FaChevronUp className="text-primary-600 flex-shrink-0" />
                ) : (
                  <FaChevronDown className="text-primary-600 flex-shrink-0" />
                )}
              </button>
              
                  
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                
              {openIndex === index && (
                <div className="px-6 py-4 bg-white border-t border-gray-200">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
