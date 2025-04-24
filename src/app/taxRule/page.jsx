"use client";

import Image from "next/image";
import GetAppPrimaryButton from "@/components/common/GetAppPrimaryButton";

export default function AdvancedTaxRules() {
  const taxRuleCategories = [
    {
      title: "Products",
      description: "Apply specific tax rates to individual products"
    },
    {
      title: "Collections",
      description: "Set consistent tax rates across entire product categories"
    },
    {
      title: "Countries",
      description: "Configure country-specific VAT rates (Germany at 19%, UK at 20%, etc.)"
    },
    {
      title: "Vendors",
      description: "Manage different tax rates based on suppliers"
    },
    {
      title: "Customer Tags",
      description: "Apply special tax rules to specific customer segments"
    },
    {
      title: "Product Tags",
      description: "Leverage your existing tagging system for tax organization"
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left leading-tight mb-16 md:mb-20">
          Advanced Tax Rules: Taking Control of Your Global Tax Strategy
        </h1>

        {/* Image Section */}
        <div className="mb-16 flex justify-center">
          <div className="relative w-full max-w-4xl">
            <Image
              src="https://raw.githubusercontent.com/Zegeapps/zege-assets/c2ef49133201e8337580f126383ed3f3a7dd1729/Dual%20Price%20Website%20assets/tax%20rules.svg"
              alt="Advanced tax rules illustration"
              width={800}
              height={600}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col space-y-16 max-w-none leading-[1.9] md:leading-[1.9] sm:leading-[1.7]">
            {/* Introduction Section */}
            <div className="flex flex-col space-y-6">
              <p className="text-lg sm:text-lg leading-[1.9] sm:leading-[1.7]">
                Managing tax rates for an international Shopify store can be incredibly challenging. With each country having its own VAT regulations and rates, displaying accurate pricing to customers worldwide often becomes a major headache for merchants. Most online sellers struggle with this aspect of global commerce, leading to customer confusion and lost sales.
              </p>
              <p className="text-lg sm:text-lg leading-[1.9] sm:leading-[1.7]">
                When customers shop on your store from different countries, they expect pricing that makes sense for their location. If a European customer sees prices without clear VAT information, they'll likely abandon their cart when unexpected costs appear at checkout. This issue is particularly critical in European markets, where VAT transparency isn't just good practice—it's often a legal requirement.
              </p>
            </div>

            {/* Solution Section */}
            <div className="flex flex-col space-y-4">
              <h2 className="text-2xl font-bold">
                The Solution: Advanced Tax Rules
              </h2>
              <div className="flex flex-col space-y-4">
                <p className="text-lg sm:text-lg leading-[1.9] sm:leading-[1.7]">
                  Our <span className="font-semibold">VAT: Dual Price PRO</span> app includes a powerful Advanced Tax Rules feature designed to solve these challenges. This functionality gives you complete control over how taxes are calculated and displayed across your entire Shopify store.
                </p>
                <p className="text-lg sm:text-lg leading-[1.9] sm:leading-[1.7]">
                  With our advanced tax rule engine, you can configure precise tax rates based on:
                </p>
                
                {/* Tax Rule Categories */}
                <div className="grid gap-4 md:grid-cols-2 mt-2">
                  {taxRuleCategories.map((category, index) => (
                    <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg border border-gray-100">
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-lg font-semibold leading-[1.9] sm:leading-[1.7]">
                          {category.title}
                        </h3>
                        <p className="text-base sm:text-lg leading-[1.9] sm:leading-[1.7] text-gray-700">
                          {category.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Country-Specific Rates Section */}
            <div className="flex flex-col space-y-4">
              <h2 className="text-2xl font-bold">
                Simplifying Country-Specific Tax Rates
              </h2>
              <div className="flex flex-col space-y-4">
                <p className="text-lg sm:text-lg leading-[1.9] sm:leading-[1.7]">
                  Managing different tax rates for different countries has never been easier. Our intuitive interface lets you set up country-specific rates without any coding knowledge. You can quickly configure standard rates for major markets, set up tax-exempt destinations with 0% rates, and even handle regional variations when needed.
                </p>
                
                {/* Global Tax Strategy Visual */}
                <div className="p-6 bg-gray-50 rounded-lg border border-gray-100 mt-2">
                  <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-xl font-semibold mb-2">European Union</h3>
                      <p className="text-lg">Standard rates properly configured</p>
                      <div className="mt-2 flex flex-wrap gap-2 justify-center md:justify-start">
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Germany: 19%</span>
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">France: 20%</span>
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Italy: 22%</span>
                      </div>
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-xl font-semibold mb-2">Tax-Exempt Regions</h3>
                      <p className="text-lg">Easily set up 0% tax regions</p>
                      <div className="mt-2 flex flex-wrap gap-2 justify-center md:justify-start">
                        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">USA: 0%</span>
                        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Canada: 0%</span>
                        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Asia: 0%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Conclusion Section */}
            <div className="flex flex-col space-y-4">
              <p className="text-lg sm:text-lg leading-[1.9] sm:leading-[1.7]">
                For Shopify merchants serious about international expansion, proper tax management is not optional—it's essential for both regulatory compliance and conversion optimization. Ready to optimize your global tax strategy? Install <span className="font-semibold">VAT: Dual Price PRO</span> today and take control of your international pricing display.
              </p>
            </div>
          </div>

          {/* CTA Button - Centered */}
          <div className="flex justify-center mt-16 mb-6">
            <GetAppPrimaryButton 
              bgColor="bg-[#E0E7DF]"
              textColor="text-black text-opacity-90"
              hoverBgColor="bg-[#E0E7DF]"
              href="/install-app"
            />
          </div>
        </div>
      </div>
    </section>
  );
}