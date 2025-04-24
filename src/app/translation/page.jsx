"use client";

import Image from "next/image";
import GetAppPrimaryButton from "@/components/common/GetAppPrimaryButton";

export default function TranslateTaxLabels() {
  const translationExamples = [
    {
      country: "Germany",
      language: "German",
      includedLabel: "inkl. MwSt.",
      excludedLabel: "zzgl. MwSt.",
    },
    {
      country: "France",
      language: "French",
      includedLabel: "TTC",
      excludedLabel: "HT",
    },
    {
      country: "Italy",
      language: "Italian",
      includedLabel: "IVA incl.",
      excludedLabel: "IVA escl.",
    },
    {
      country: "Spain",
      language: "Spanish",
      includedLabel: "IVA incl.",
      excludedLabel: "IVA excl.",
    },
    {
      country: "Netherlands",
      language: "Dutch",
      includedLabel: "Incl. BTW",
      excludedLabel: "Incl. BTW",
    },
    {
      country: "Poland",
      language: "Polish",
      includedLabel: "z VAT",
      excludedLabel: "bez VAT",
    },
    {
      country: "Sweden",
      language: "Swedish",
      includedLabel: "Inkl. moms",
      excludedLabel: "Exkl. moms",
    },
  ];

  const setupSteps = [
    {
      title: "Access the Translation Feature",
      details:
        'Log in to your Shopify admin dashboard, navigate to the VAT Dual Price PRO app, click on the "Translation" tab in the app\'s navigation menu.',
    },
    {
      title: "Add a New Language",
      details:
        'Click the "Add Languages" button at the top of the page, select the language you want to add from the dropdown menu (you can search or scroll through the list).',
    },
    {
      title: "Enter Your Translations",
      details:
        'For each language you add, you\'ll need to provide two translations: Include Label (e.g., "inkl. MwSt." for German) and Exclude Label (e.g., "zzgl. MwSt." for German).',
    },
    {
      title: "Save Your Changes",
      details:
        'Click the "Save" button to apply your translations. Repeat the process for each language your store supports.',
    },
    {
      title: "Verify the Results",
      details:
        "Visit your online store and switch between different language versions. Confirm that the tax labels update correctly based on the selected language.",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left leading-tight mb-16 md:mb-20">
          Translate Tax Labels for International Customers with VAT Dual Pricing
          PRO
        </h1>

        {/* Image Section */}
        <div className="mb-16 flex justify-center">
          <div className="relative w-full max-w-4xl">
            <Image
              src="https://raw.githubusercontent.com/Zegeapps/zege-assets/c2ef49133201e8337580f126383ed3f3a7dd1729/Dual%20Price%20Website%20assets/translation.svg"
              alt="Tax label translation illustration"
              width={800}
              height={600}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col space-y-16 max-w-none leading-[1.9]">
            {/* Introduction Section */}
            <div className="flex flex-col space-y-6">
              <p className="text-lg leading-[1.9]">
                In today's global marketplace, providing a seamless shopping
                experience for international customers is essential for
                e-commerce success. While many Shopify apps can display dual
                pricing (tax included and excluded), they typically show these
                labels only in English—creating an inconsistent experience for
                your international shoppers.
              </p>
              <p className="text-lg leading-[1.9]">
                <span className="font-semibold">VAT Dual Price PRO</span>{" "}
                stands out by offering a unique Tax Label Translation feature
                that allows you to display these tax labels in your customers'
                native languages. This guide will walk you through the simple
                process of setting up translated tax labels for any language
                your store supports.
              </p>
            </div>

            {/* Problem Section */}
            <div className="flex flex-col space-y-4">
              <h2 className="text-2xl font-bold">
                The Problem with Standard Dual Pricing Apps
              </h2>
              <div className="flex flex-col space-y-4">
                <p className="text-lg leading-[1.9]">
                  When using standard dual pricing apps, your store might look
                  like this to international customers:
                </p>
                <ul className="space-y-2 leading-[1.9]">
                  <li className="text-lg leading-[1.9]">
                    German customers see: "89,25 €{" "}
                    <span className="font-semibold">Tax Excluded</span> | 94,25
                    € <span className="font-semibold">Tax Included</span>"
                  </li>
                  <li className="text-lg leading-[1.9]">
                    French customers see: "89,25 €{" "}
                    <span className="font-semibold">Tax Excluded</span> | 94,25
                    € <span className="font-semibold">Tax Included</span>"
                  </li>
                </ul>
                <p className="text-lg leading-[1.9]">
                  Even if the rest of your store is perfectly translated, these
                  English tax labels remain unchanged, creating a disjointed
                  experience for non-English speakers.
                </p>
              </div>
            </div>

            {/* Advantage Section */}
            <div className="flex flex-col space-y-4">
              <h2 className="text-2xl font-bold">
                The VAT Dual Price PRO Advantage
              </h2>
              <div className="flex flex-col space-y-4">
                <p className="text-lg leading-[1.9]">
                  Our app uniquely solves this problem by allowing you to
                  translate these tax labels to match your customers' language
                  preferences. With the Tax Label Translation feature, your
                  store can display:
                </p>
                <ul className="space-y-2 leading-[1.9]">
                  <li className="text-lg leading-[1.9]">
                    For German customers: "89,25 €{" "}
                    <span className="font-semibold">zzgl. MwSt.</span> | 94,25 €{" "}
                    <span className="font-semibold">inkl. MwSt.</span>"
                  </li>
                  <li className="text-lg leading-[1.9]">
                    For French customers: "89,25 €{" "}
                    <span className="font-semibold">HT</span> | 94,25 €{" "}
                    <span className="font-semibold">TTC</span>"
                  </li>
                </ul>
              </div>
            </div>

            {/* Setup Guide Section */}
            <div className="flex flex-col space-y-4">
              <h2 className="text-2xl font-bold">
                Setting Up Tax Label Translation: Step-by-Step Guide
              </h2>
              <div className="flex flex-col space-y-6">
                <p className="text-lg leading-[1.9]">
                  Setting up translated tax labels with VAT Dual Price PRO
                  takes less than a minute. Here's how:
                </p>
                <div className="grid gap-6">
                  {setupSteps.map((step, index) => (
                    <div key={index} className="flex gap-4 items-start">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-yellow-200 text-neutral-800 font-semibold text-lg">
                          {index + 1}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold leading-[1.9]">
                          {step.title}
                        </h3>
                        <p className="text-base leading-[1.9] text-gray-700 mt-1">
                          {step.details}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Translation Table Section */}
            <div className="flex flex-col space-y-4">
              <h2 className="text-2xl font-bold">
                Common Tax Label Translations for European Markets
              </h2>
              <div className="flex flex-col space-y-4">
                <p className="text-lg leading-[1.9]">
                  To help you get started, here are common tax label
                  translations for major European markets:
                </p>

                {/* Tax Translation Table */}
                <div className="overflow-hidden rounded-lg shadow">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Country
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Language
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Tax Included Label
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Tax Excluded Label
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {translationExamples.map((example, index) => (
                        <tr
                          key={index}
                          className={
                            index % 2 === 0 ? "bg-gray-50" : "bg-white"
                          }
                        >
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {example.country}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {example.language}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                            {example.includedLabel}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600">
                            {example.excludedLabel}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Conclusion Section */}
            <div className="flex flex-col space-y-4">
              <p className="text-lg leading-[1.9]">
                By implementing these translated tax labels, you'll create a
                more localized, professional shopping experience for your
                international customers—leading to increased trust, lower cart
                abandonment rates, and ultimately, more sales.
              </p>
              <p className="text-lg leading-[1.9]">
                Don't let language barriers prevent your international customers
                from understanding your pricing. Install{" "}
                <span className="font-semibold">VAT Dual Price PRO</span>{" "}
                today and take advantage of our unique Tax Label Translation
                feature to create a truly global shopping experience.
              </p>
            </div>
          </div>

          {/* CTA Button - Centered */}
          <div className="flex justify-center mt-16 mb-6">
            <GetAppPrimaryButton
              bgColor="bg-[#FCC737]"
              textColor="text-grey-600"
              hoverBgColor="bg-[#FCC737]"
              href="/install-app"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
