"use client";

import Image from "next/image";
import GetAppPrimaryButton from "./common/GetAppPrimaryButton";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

/**
 * Features data structure for better maintainability
 * Each feature contains all necessary data in one place
 */
const FEATURES = [
  {
    id: "display-prices",
    title: "Display VAT-Inclusive & Exclusive Prices",
    description_line1:
      "Show both tax-inclusive and tax-exclusive prices simultaneously, giving customers complete transparency before they reach checkout.",
    description_line2:
      " Display consistent pricing on product pages, collection pages, search results, and cart pages, with zero delay—just like the default price rendering in your store.",
    imageSrc:
      "https://raw.githubusercontent.com/Zegeapps/zege-assets/c2ef49133201e8337580f126383ed3f3a7dd1729/Dual%20Price%20Website%20assets/display-dual-price.svg",
    imageAlt: "Dual pricing display example",
    hasButton: true,
    buttonColor: "bg-[#FB7C33]",
    buttonTextColor: "text-white",
  },
  {
    id: "tax-rules",
    title: "Advance Tax Rules",
    description_line1:
      "Display the right tax rates for the right customers based on their location.",
    description_line2:
      "Set country-specific VAT rates, configure zero-tax regions, and apply custom rules to specific products or collections—all with an intuitive interface that puts you in complete control of your global tax strategy.",
    imageSrc:
      "https://raw.githubusercontent.com/Zegeapps/zege-assets/c2ef49133201e8337580f126383ed3f3a7dd1729/Dual%20Price%20Website%20assets/tax%20rules.svg",
    imageAlt: "Advanced tax rules configuration",
    hasButton: true,
    buttonColor: "bg-[#E0E7DF]",
    buttonTextColor: "text-black text-opacity-90",
  },
  {
    id: "translation",
    title: "Translate Tax Labels for International Customers",
    description_line1:
      "Tax Label Translation feature that allows you to display these tax labels in your customers' native languages. ",
    description_line2:
      "Switch from 'Tax Included' to 'TTC' in France or 'inkl. MwSt.' in Germany. Labels are fully customizable in local languages. The app automatically shows appropriate labels based on store language.",
    imageSrc:
      "https://raw.githubusercontent.com/Zegeapps/zege-assets/c2ef49133201e8337580f126383ed3f3a7dd1729/Dual%20Price%20Website%20assets/translation.svg",
    imageAlt: "Tax label translation to multiple languages",
    hasButton: true,
    buttonColor: "bg-[#FCC737]",
    buttonTextColor: "text-black text-opacity-80",
  },
  {
    id: "support",
    title: "Setup Support: Hassle-Free Implementation",
    description_line1:
      "Let our experts handle the entire configuration process.",
    description_line2:
      "Simply install the app, complete basic settings, and submit a support ticket. We'll configure everything in a duplicate theme first, ensuring perfect functionality before applying changes to your live store—all without disrupting your sales.",
    imageSrc:
      "https://raw.githubusercontent.com/Zegeapps/zege-assets/c2ef49133201e8337580f126383ed3f3a7dd1729/Dual%20Price%20Website%20assets/support.svg",
    imageAlt: "Hassle-free setup support illustration",
    hasButton: false,
  },
];

// Animation variants for the feature sections
const featureVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// Animation variants for the images
const imageVariants = {
  hidden: (isEven) => ({ 
    opacity: 0, 
    x: isEven ? -50 : 50 
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      delay: 0.2
    }
  }
};

// Animation variants for the content
const contentVariants = {
  hidden: (isEven) => ({ 
    opacity: 0, 
    x: isEven ? 50 : -50 
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      delay: 0.3
    }
  }
};

// Component for each feature item with animations
const FeatureItem = ({ feature, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={featureVariants}
      className={`flex flex-col-reverse ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      } items-start gap-8 md:gap-12`}
    >
      {/* Image Container - 60% width on desktop */}
      <motion.div 
        className="w-full md:w-6/10"
        custom={isEven}
        variants={imageVariants}
      >
        <Image
          src={feature.imageSrc}
          alt={feature.imageAlt}
          width={800}
          height={600}
          className="w-full h-auto object-contain"
          priority={index === 0} // Load first image with priority
        />
      </motion.div>

      {/* Content Container - 40% width on desktop */}
      <motion.div
        className={`w-full md:w-4/10 ${
          index !== 3 ? "md:mt-[30px]" : ""
        }`}
        custom={isEven}
        variants={contentVariants}
      >
        <h3 className="text-2xl md:text-4xl md:leading-[1.3] font-semibold mb-4">
          {feature.title}
        </h3>
        <div className="mb-6 text-gray-600">
          <p className="mb-3">{feature.description_line1}</p>
          <p>{feature?.description_line2}</p>
        </div>

        {feature.hasButton && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-2 rounded-md shadow-md hover:shadow-lg transition-colors cursor-pointer 
              ${feature.buttonColor} ${feature.buttonTextColor} 
              `}
          >
            Show more
          </motion.button>
        )}
      </motion.div>
    </motion.div>
  );
};

/**
 * Features section component
 * Displays alternating left/right layout for features with scroll animations
 */
const Features = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, amount: 0.3 });
  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.3 });

  return (
    <section id="features" className="py-12 md:py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2 
          ref={headerRef}
          initial={{ opacity: 0, y: -20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-medium text-center mb-16"
        >
          Our Key Features
        </motion.h2>

        <div className="space-y-16 md:space-y-24">
          {FEATURES.map((feature, index) => (
            <FeatureItem key={feature.id} feature={feature} index={index} />
          ))}
        </div>

        {/* CTA Button at the bottom */}
        <motion.div 
          ref={ctaRef}
          initial={{ opacity: 0, y: 30 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ 
            duration: 0.8, 
            ease: "easeOut",
            delay: 0.2
          }}
          className="mt-22 flex justify-center"
        >
          <GetAppPrimaryButton bgColor="bg-indigo-400" hoverBgColor="bg-indigo-500" />
        </motion.div>
      </div>
    </section>
  );
};

export default Features; 