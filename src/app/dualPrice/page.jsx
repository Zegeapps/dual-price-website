"use client";

import Image from "next/image";
import Link from "next/link";
import GetAppPrimaryButton from "@/components/common/GetAppPrimaryButton";

export default function DualPrice() {
  const features = [
    {
      title: "Dual Price Display",
      description: "Show both tax-inclusive and tax-exclusive prices simultaneously across your store. You can also choose to display only included/excluded or both.",
    },
    {
      title: "Store-Wide Coverage",
      description: "Ensure consistent pricing visibility on product pages, collection pages, search results, and the cart.",
    },
    {
      title: "Location-Based Rates",
      description: "Automatically calculate and display the correct VAT rates based on the customer's country.",
    },
    {
      title: "Product-Specific Rules",
      description: "Set different tax rates for specific products or collections.",
    },
    {
      title: "Tax Exemptions",
      description: "Easily configure which countries, products, or collections should be tax-exempt.",
    },
    {
      title: "Tax Label Translation",
      description: "Automatically translate included and excluded price labels into different languages, displaying them based on the customer's location.",
    },
    {
      title: "Simple Setup",
      description: "Configure once, and let the app handle the rest with minimal impact on page load speed.",
    },
    {
      title: "Setup Assistance",
      description: "Get personalized help configuring your store for optimal compliance and performance.",
    },
  ];

  return (
    <section className="py-16 md:py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left leading-tight mb-16 md:mb-20">
          Transform Your International Shopify Sales with Clear VAT Dual Pricing
        </h1>

        {/* Image Section */}
        <div className="mb-16 flex justify-center">
          <div className="relative w-full max-w-4xl">
            <Image
              src="https://raw.githubusercontent.com/Zegeapps/zege-assets/c2ef49133201e8337580f126383ed3f3a7dd1729/Dual%20Price%20Website%20assets/display-dual-price.svg"
              alt="VAT dual pricing display example"
              width={800}
              height={600}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg mb-6">
              For Shopify merchants selling across borders, unclear VAT pricing
              has been a silent conversion killer. When international customers
              can't easily determine whether taxes are included in your prices,
              they often abandon their carts due to unexpected costs at checkout.
              This issue is particularly severe for stores selling to European
              markets, where VAT regulations are strict, and customers expect
              transparent pricing. When selling across borders, displaying the
              correct VAT information isn't just about compliance—it's about
              transparency and customer trust.
            </p>

            <p className="text-lg mb-6">
              Our <span className="font-semibold">VAT: Dual Price PRO</span> app
              solves this challenge with a simple yet powerful approach—displaying
              both tax-inclusive and tax-exclusive prices throughout your entire
              Shopify store. Our app ensures a consistent experience everywhere,
              from collection pages to search results, and even on cart pages or
              drawers.
            </p>

            <p className="text-lg mb-10">
              This straightforward app automatically calculates and displays VAT
              prices based on your configuration, ensuring that customers see the
              appropriate pricing information according to their location and
              applicable tax rules.
            </p>

            <h2 className="text-2xl font-bold mb-6">Key Features</h2>
            
            <ol className="space-y-4 pl-6 mb-10">
              {features.map((feature, index) => (
                <li key={index} className="text-lg">
                  <span className="font-semibold">{feature.title}</span> – {feature.description}
                </li>
              ))}
            </ol>

            <p className="text-lg mb-6">
              Leading international Shopify merchants have realized that
              transparent pricing isn't just about compliance—it's a conversion
              strategy. By eliminating unpleasant surprises at checkout, you
              showcase professionalism and attention to detail, building immediate
              trust with international shoppers.
            </p>

            <p className="text-lg mb-12">
              If you're serious about growing your global customer base, you can't
              afford to overlook proper VAT display. Install{" "}
              <span className="font-semibold">VAT: Dual Price PRO</span> today and join
              the growing community of Shopify merchants who know that clear
              pricing leads to confident customers—and higher conversion rates.
            </p>
          </div>

          {/* CTA Button - Centered */}
          <div className="flex justify-center mt-10 mb-6">
            {/* Using the GetAppPrimaryButton directly to avoid nested anchor tags */}
            <GetAppPrimaryButton href="/install-app" />
          </div>
        </div>
      </div>
    </section>
  );
}