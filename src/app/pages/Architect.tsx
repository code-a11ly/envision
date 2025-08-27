'use client'
import React, { useState } from "react";
import { flow } from "./flow";

const Chatbot: React.FC = () => {
  const [currentStep, setCurrentStep] = useState("start");
  const [history, setHistory] = useState<string[]>([]); // stores chosen options

  const step = flow[currentStep];

  const handleOptionClick = (option: { label: string; next: string }) => {
    setHistory((prev) => [...prev, option.label]); // store chosen label
    setCurrentStep(option.next);
  };

  // Join all chosen options into one string
  const summary = history.join(" -> ");

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-2xl shadow">
      <div className="mb-4 p-3 text-black">
        <p className="text-lg font-medium">{step.message}</p>
      </div>

      <div className="flex space-y-2">
        {step.options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => handleOptionClick(opt)}
            className="w-full p-2 border border-gray-100 text-gray-400 font-bold rounded-xl shadow-lg hover:bg-gray-300 m-2"
          >
            {opt.label}
          </button>
        ))}
      </div>

      {history.length > 0 && (
        <div className="mt-6 p-3 bg-white rounded-xl shadow-sm text-sm text-gray-600">
          <strong>Summary:</strong> {summary}
        </div>
      )}
    </div>
  );
};

export default Chatbot;
