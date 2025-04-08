"use client";

import GetAppPrimaryButton from "./common/GetAppPrimaryButton";
import Link from "next/link";
import { Linkedin, Instagram, Facebook, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Footer = () => {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, amount: 0.3 });

  // Main container animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  // Text content animations
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Contact info animations
  const contactVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // Social icons animation variants
  const socialIconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.6 + i * 0.1,
      },
    }),
  };

  // Button animation variants
  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.3,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
  };

  // Floating animation for background elements
  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  };

  // Social media platforms data
  const socialPlatforms = [
    { icon: Linkedin, href: "https://www.linkedin.com", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com", label: "Instagram" },
    { icon: Facebook, href: "https://www.facebook.com", label: "Facebook" },
    { icon: Twitter, href: "https://www.twitter.com", label: "Twitter" },
  ];

  return (
    <footer
      className="bg-cover bg-center py-12 md:py-12 text-white relative overflow-hidden"
      style={{
        backgroundImage: `url("https://raw.githubusercontent.com/Zegeapps/zege-assets/c2ef49133201e8337580f126383ed3f3a7dd1729/Dual%20Price%20Website%20assets/footer.svg")`,
        backgroundColor: "#FF6B35", // Fallback color matching the image
      }}
      ref={footerRef}
    >
      {/* Animated floating elements */}
      <motion.div
        className="absolute top-10 right-10 w-16 h-16 rounded-full bg-white opacity-5"
        animate={floatingAnimation}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-20 h-20 rounded-full bg-white opacity-5"
        animate={{
          y: [0, -15, 0],
          transition: {
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 1,
          },
        }}
      />

      <motion.div
        className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="text-center md:text-left mb-8 md:mb-0 md:w-1/2">
          <motion.h2
            className="text-3xl md:text-4xl font-medium md:leading-[1.] mb-4 text-orange-50"
            variants={textVariants}
          >
            Eliminates The #1 Reason International Customers Abandon Carts.
          </motion.h2>

          <motion.div
            className="mb-6 md:mb-8 flex justify-center md:justify-start"
            variants={buttonVariants}
            whileHover="hover"
          >
            <GetAppPrimaryButton
              bgColor="bg-neutral-50"
              hoverBgColor="bg-neutral-100"
              textColor="text-orange-500"
            />
          </motion.div>
        </div>

        <motion.div variants={contactVariants}>
          <div className="flex gap-10 items-center text-xl font-medium">
            <motion.div
              className="flex flex-col gap-4"
              variants={textVariants}
            >
              <motion.p variants={textVariants}>Email : </motion.p>
              <motion.p variants={textVariants}>WhatsApp : </motion.p>
              <motion.p variants={textVariants}>Social Links : </motion.p>
            </motion.div>
            <div className="flex flex-col gap-4">
              <motion.div variants={textVariants}>
                <a
                  href="mailto:zegeapps@gmail.com"
                  className="hover:underline transition-all duration-200"
                >
                  zegeapps@gmail.com
                </a>
              </motion.div>
              <motion.div variants={textVariants}>
                <a
                  href="https://wa.me/+918113081034"
                  className="hover:underline transition-all duration-200"
                >
                  +91-8113081034
                </a>
              </motion.div>
              <div className="flex space-x-4">
                {socialPlatforms.map((platform, index) => (
                  <motion.div
                    key={platform.label}
                    custom={index}
                    variants={socialIconVariants}
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: [0, -10, 10, -5, 0],
                      transition: { duration: 0.3 } 
                    }}
                  >
                    <Link
                      href={platform.href}
                      target="_blank"
                      className="hover:opacity-75 transition-all duration-200"
                      aria-label={platform.label}
                    >
                      <platform.icon size={24} />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;