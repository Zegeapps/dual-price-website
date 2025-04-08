"use client";

import Link from "next/link";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Pricing() {
  // Reference to the pricing section
  const pricingSectionRef = useRef(null);
  
  // Check if the section is in view
  const isInView = useInView(pricingSectionRef, {
    once: true,
    amount: 0.2, // Trigger when 20% of the element is visible
  });

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
    <div 
      className="bg-gray-50 border-b border-neutral-100 py-24"
      ref={pricingSectionRef}
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            Find the right plan for your needs.
          </h2>
          <p className="text-gray-600 mt-2">
            Grow better with the right plan. Try it for 7 days free.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-6 justify-center">
          {plans.map((plan, planIndex) => (
            <motion.div
              key={plan.id}
              className={`w-full md:w-96 border border-neutral-200 ${plan.bgColor} rounded-md overflow-hidden relative`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.6,
                delay: 0.2 * planIndex,
              }}
            >
              {plan.isPopular && (
                <motion.div 
                  className="absolute top-0 right-0 bg-orange-400 text-white text-xs font-bold px-3 py-1 rounded-bl z-20"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.4 + (0.2 * planIndex), duration: 0.3 }}
                >
                  Most Popular
                </motion.div>
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
                  <h3 className="text-2xl font-medium">{plan.name}</h3>
                </div>

                <div className="mb-6">
                  <div className="text-3xl font-semibold">
                    ${plan.amount}{" "}
                    <span className="text-lg font-normal">USD</span>
                  </div>
                  <div className="text-gray-600">7-day free trial</div>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.4 + (0.2 * planIndex), duration: 0.5 }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Link
                    href="https://apps.shopify.com"
                    className="flex items-center justify-center w-full bg-neutral-900 text-white font-medium py-3 px-4 rounded mb-3 hover:bg-neutral-800 transition"
                  >
                    <span>Install App</span>
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
                </motion.div>

                <motion.div 
                  className="mt-6 space-y-3"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.5 + (0.2 * planIndex), duration: 0.5 }}
                >
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
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
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}