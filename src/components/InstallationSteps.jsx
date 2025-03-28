import React from "react";

const stepsData = [
  {
    number: 1,
    title: "Installation and Activation",
    description:
      "Install the app and select a plan. For just $7, you can display dual prices on your store. Once purchased, enable the app to begin the setup process.",
    numberColor: "bg-amber-500",
  },
  {
    number: 2,
    title: "Configure Settings",
    description:
      "Navigate to the settings page to customize your configuration. Set your tax percentage, tax labels, display size, colors, and other appearance options to match your store's branding.",
    numberColor: "bg-sky-500",
  },
  {
    number: 3,
    title: "Request Setup Assistance",
    description:
      "Submit a support ticket for assistance. A small configuration in your theme editor is needed to display dual prices. Our team will handle all technical adjustments.",
    numberColor: "bg-purple-500",
  },
];

export default function InstallationSteps() {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            HOW IT WORKS
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            3 steps to show dual prices
          </h2>
        </div>

        {/* Desktop View */}
        <div className="hidden md:block">
          {/* Number circles with connecting lines */}
          <div className="grid grid-cols-3 gap-8 mb-6">
            {stepsData.map((step, index) => (
              <div
                key={`circle-${index}`}
                className="flex flex-col items-center"
              >
                <div className="relative w-full flex justify-center">
                  <div
                    className={`w-12 h-12 flex items-center justify-center rounded-full ${step.numberColor} text-white text-xl font-bold z-10`}
                  >
                    {step.number}
                  </div>

                  {/* Connecting lines */}
                  {index === 0 && (
                    <div className="absolute top-1/2 left-1/2 w-1/2 h-px bg-gray-300"></div>
                  )}
                  {index === 1 && (
                    <div className="absolute top-1/2 w-full h-px bg-gray-300"></div>
                  )}
                  {index === 2 && (
                    <div className="absolute top-1/2 right-1/2 w-1/2 h-px bg-gray-300"></div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="grid grid-cols-3 gap-8">
            {stepsData.map((step, index) => (
              <div
                key={`content-${index}`}
                className="flex flex-col items-center text-center"
              >
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden space-y-8">
          {stepsData.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full ${step.numberColor} text-white text-sm font-bold mb-3`}
              >
                {step.number}
              </div>
              <h3 className="text-lg font-bold mb-2">{step.title}</h3>
              <p className="text-gray-700 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
