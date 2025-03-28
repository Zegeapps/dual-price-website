import Link from "next/link";
import React from "react";

export default function Pricing() {
  const plans = [
    {
      id: "basicMonthly",
      name: "Basic Monthly",
      amount: "9.00",
      bgColor: "bg-white",
      dotBorderColor: "border-orange-500",
      dotBgColor: "bg-orange-500",
      features: [
        "Display dual prices for all products",
        "Seamless dual price integration on product detail, listing, catalog, and home pages",
        "Easy install—We'll set up Dual price app",
        "Advanced UI customization for dual prices",
        "Expert assistance any time",
        "Custom Features for your needs",
      ],
    },
    {
      id: "proMonthly",
      name: "Pro Monthly",
      amount: "19.00",
      bgColor: "bg-white",
      dotBorderColor: "border-orange-500",
      dotBgColor: "bg-orange-500",
      isPopular: true,
      features: [
        "All Basic Plan features included",
        "Dual pricing on cart pages and cart drawer",
        "Advanced tax rule configuration",
        "Country-specific tax rate settings",
        "Custom tax label translation by country",
        "Priority custom feature development",
      ],
    },
  ];

  return (
    <div className="bg-gray-50 border-b border-neutral-100 py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            Find the right plan for your needs.
          </h2>
          <p className="text-gray-600 mt-2">
            Grow better with the right plan. Try it for 7 days free.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 justify-center">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`w-full md:w-96 border border-neutral-200 ${plan.bgColor} rounded-md overflow-hidden relative`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0 bg-black text-white text-xs font-bold px-3 py-1 rounded-bl">
                  Most Popular
                </div>
              )}
              <div className="pt-10 px-6 pb-6">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 mr-2">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect x="3" y="3" width="7" height="7" fill="black" />
                      <rect x="14" y="3" width="7" height="7" fill="black" />
                      <rect x="3" y="14" width="7" height="7" fill="black" />
                      {plan.id === "proMonthly" && (
                        <rect x="14" y="14" width="7" height="7" fill="black" />
                      )}
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                </div>

                <div className="mb-6">
                  <div className="text-3xl font-bold">
                    ${plan.amount}{" "}
                    <span className="text-lg font-normal">USD</span>
                  </div>
                  <div className="text-gray-600">7-day free trial</div>
                </div>

                <Link
                  href="https://apps.shopify.com"
                  className="flex items-center justify-center w-full bg-neutral-900 text-white font-medium py-3 px-4 rounded mb-3 hover:bg-neutral-800 transition"
                >
                  <span>Purchase</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2"
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>

                <div className="mt-6 space-y-3">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div
                        className={`flex-shrink-0 w-5 h-5 rounded-full border ${plan.dotBorderColor} flex items-center justify-center mr-3 mt-0.5`}
                      >
                        <div
                          className={`w-2.5 h-2.5 rounded-full ${plan.dotBgColor}`}
                        ></div>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
