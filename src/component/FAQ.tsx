// src/components/FAQ.tsx
import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What are the delivery charges?",
    answer: "Delivery charges depend on your location and the delivery method you choose.",
  },
  {
    question: "What is the estimated delivery time?",
    answer: "Delivery times vary based on location. Typically, it takes 3-5 business days.",
  },
  {
    question: "What should I do if my parcel is delayed?",
    answer: "Please contact our customer service for assistance regarding delayed parcels.",
  },
  {
    question: "Can I track my order?",
    answer: "Yes, you will receive a tracking number once your order is shipped.",
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship to select international locations.",
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-3xl mx-auto mt-10">
      <h1 className="text-3xl font-bold text-center mb-6">FAQ</h1>
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-gray-300">
          <button
            className="w-full text-left py-4 focus:outline-none"
            onClick={() => toggleFAQ(index)}
          >
            <h2 className="text-xl font-semibold text-gray-800">
              {faq.question}
            </h2>
          </button>
          {openIndex === index && (
            <p className="py-2 text-gray-600">
              {faq.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;