"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";

// Feature data array
const featuresData = [
  {
    id: 1,
    title: "Display VAT-Inclusive & Exclusive Prices",
    description:
      "Show both tax-inclusive and tax-exclusive prices simultaneously, giving customers complete transparency before they reach checkout. Display consistent pricing on product pages, collection pages, search results, and cart pages, with zero delay—just like the default price rendering in your store.",
    extendedDescription: `
            <h4>Why this matters:</h4>
            <ul>
                <li>B2B customers can immediately see the prices before tax</li>
                <li>B2C customers can see the final price they'll pay</li>
                <li>Reduces cart abandonment by eliminating price surprises</li>
                <li>Improves trust and transparency with your customers</li>
            </ul>
            
            <h4>Key capabilities:</h4>
            <ul>
                <li>Display dual prices on product pages, collection pages, search results, and cart pages</li>
                <li>Zero delay in price rendering - works just as fast as your store's default pricing</li>
                <li>Fully customizable price format and styling to match your brand</li>
                <li>Compatible with all major Shopify themes</li>
            </ul>
            
            <p>No more customer confusion about whether taxes are included or not. With VAT: Dual Pricing PRO, you can satisfy the expectations of both B2B and B2C customers with a single, elegant solution.</p>
        `,
    image: "/display-prices.svg",
    altText: "VAT Inclusive & Exclusive Prices Feature",
    background: "bg-orange-50",
    linkColor: "text-orange-600 hover:text-orange-700",
  },
  {
    id: 2,
    title:
      "Advanced Tax Rules: Location, Product, Collection-Based VAT Control",
    description:
      "Display the right tax rates for the right customers based on their location. Set country-specific VAT rates, configure zero-tax regions, and apply custom rules to specific products or collections—all with an intuitive interface that puts you in complete control of your global tax strategy.",
    extendedDescription: `
            <h4>Powerful location-based tax rules:</h4>
            <ul>
                <li>Set country-specific VAT rates to ensure compliance with local regulations</li>
                <li>Configure zero-tax regions for international customers</li>
                <li>Automatic address-based tax calculation</li>
                <li>Support for EU VAT, UK VAT, US Sales Tax, and other tax systems</li>
            </ul>
            
            <h4>Product and collection-specific rules:</h4>
            <ul>
                <li>Apply different tax rates to specific products</li>
                <li>Create collection-based tax rules for groups of products</li>
                <li>Support for products with variable tax rates (like food items vs. luxury goods)</li>
                <li>Exclude certain products from tax calculations</li>
            </ul>
            
            <p>With our intuitive interface, you can set up complex tax rules without any coding knowledge. Our tax engine handles all the complexity behind the scenes, ensuring accurate tax calculations for every customer, every time.</p>
        `,
    image: "/tax-rules.svg",
    altText: "Advanced Tax Rules Feature",
    background: "bg-purple-50",
    linkColor: "text-purple-600 hover:text-purple-700",
  },
  {
    id: 3,
    title: "Translate Tax Labels for International Customers",
    description:
      "Tax Label Translation feature that allows you to display these tax labels in your customers' native languages. Switch from 'Tax Included' to 'TTC' in France or 'inkl. MwSt.' in Germany. Labels are fully customizable in local languages. The app automatically shows appropriate labels based on store language.",
    extendedDescription: `
            <h4>Why localized tax labels matter:</h4>
            <ul>
                <li>Improves customer understanding of pricing</li>
                <li>Creates a more professional impression for international shoppers</li>
                <li>Reduces confusion and support queries about taxes</li>
                <li>Demonstrates commitment to serving global markets</li>
            </ul>
            
            <h4>Key capabilities:</h4>
            <ul>
                <li>Automatically switch labels based on customer language (e.g., "Tax Included" to "TTC" in France)</li>
                <li>Fully customizable labels for each language your store supports</li>
                <li>Support for right-to-left languages</li>
                <li>Easy-to-use translation interface - no coding required</li>
            </ul>
            
            <p>With our translation features, you can ensure that your tax information is presented correctly and naturally to every customer, regardless of their location or language preferences.</p>
        `,
    image: "/translation.svg",
    altText: "Translate Tax Labels Feature",
    background: "bg-blue-50",
    linkColor: "text-blue-600 hover:text-blue-700",
  },
  {
    id: 4,
    title: "Setup Support: Hassle-Free Implementation",
    description:
      "Let our experts handle the entire configuration process. Simply install the app, complete basic settings, and submit a support ticket. We'll configure everything in a duplicate theme first, ensuring perfect functionality before applying changes to your live store—all without disrupting your sales.",
    extendedDescription: `
            <h4>How our setup support works:</h4>
            <ul>
                <li>Install the app and complete the basic settings</li>
                <li>Submit a support ticket with your specific requirements</li>
                <li>Our team configures everything in a duplicate theme first</li>
                <li>We thoroughly test the implementation to ensure perfect functionality</li>
                <li>Once approved, we apply the changes to your live theme</li>
            </ul>
            
            <h4>Benefits of our setup service:</h4>
            <ul>
                <li>Zero disruption to your live store during setup</li>
                <li>Implementation by experts who understand the nuances of tax display</li>
                <li>Custom configuration tailored to your specific business needs</li>
                <li>Peace of mind knowing your tax display is properly implemented</li>
            </ul>
            
            <p>With our setup support, you can start enjoying the benefits of VAT: Dual Pricing PRO without having to worry about the technical details of implementation.</p>
        `,
    image: "/support.svg",
    altText: "Setup Support Feature",
    background: "bg-amber-50",
    linkColor: "text-orange-600 hover:text-orange-700",
  },
];

// Feature Card Component
const FeatureCard = ({ feature }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className={`${feature.background} rounded-xl overflow-hidden border border-neutral-200`}
    >
      <div className="relative w-full h-56 sm:h-64">
        <Image
          src={feature.image}
          alt={feature.altText}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
        <p className="text-gray-700 mb-4">{feature.description}</p>

        {/* Expanded content */}
        {expanded && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div
              className="prose prose-sm max-w-none"
              dangerouslySetInnerHTML={{ __html: feature.extendedDescription }}
            />
          </div>
        )}

        {/* Toggle button */}
        <button
          onClick={toggleExpand}
          className={`font-medium inline-flex items-center ${feature.linkColor}`}
        >
          {expanded ? "See less" : "See more"}
          {expanded ? (
            <ChevronUp className="ml-1 h-4 w-4" />
          ) : (
            <ChevronDown className="ml-1 h-4 w-4" />
          )}
        </button>
      </div>
    </div>
  );
};

export function FeaturesSection() {
  return (
    <div className="bg-white border-b border-neutral-300">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row">
          {/* Sticky Title Section - 40% width on desktop */}
          <div className="lg:w-2/5 mb-10 lg:mb-0 lg:sticky lg:top-24 lg:self-start">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Our Key Features
            </h2>
          </div>
          {/* Scrollable Features Card Section - 60% width on desktop */}
          <div className="lg:w-3/5 space-y-8">
            {featuresData.map((feature) => (
              <FeatureCard key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
