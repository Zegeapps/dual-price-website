"use client";

import Image from "next/image";
import Navbar from "./Navbar";
import GetAppPrimaryButton from "./common/GetAppPrimaryButton";
import { motion } from "framer-motion";

// hero image details
const HERO_IMAGE = {
  src: "https://raw.githubusercontent.com/Zegeapps/zege-assets/c2ef49133201e8337580f126383ed3f3a7dd1729/Dual%20Price%20Website%20assets/hero.svg",
  alt: "Dual pricing display visualization",
  width: 440,
  height: 300,
};

// Hero component - Main landing section for the application
export default function Hero() {
  // Animation variants for staggered text reveal
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "easeOut",
        duration: 0.6,
      },
    },
  };

  // Subtle floating animation for the hero image
  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  };

  return (
    <section>
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-14 md:py-4">
        <div className="flex flex-col md:flex-row items-center gap-10 md:justify-between">
          {/* Content Section */}
          <motion.div
            className="md:w-3/5 flex flex-col gap-6"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.header className="text-center md:text-left" variants={item}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium mb-4 tracking-wide leading-tight">
                Transparent
                <motion.span
                  className="text-orange-600 font-semibold"
                  initial={{ opacity: 0.9, scale: 0.98 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    transition: {
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    },
                  }}
                >
                  {" "}
                  VAT Pricing{" "}
                </motion.span>
              </h1>
              <p className="text-2xl sm:text-3xl font-medium">
                Missing Strategy for Global Sales
              </p>
            </motion.header>

            <motion.p
              className="text-gray-600 text-lg text-center md:text-left"
              variants={item}
            >
              Instant dual pricing display throughout your store eliminates the{" "}
              <motion.span
                className="font-semibold text-neutral-900"
                initial={{ opacity: 0.8 }}
                animate={{
                  opacity: [0.8, 1, 0.8],
                  scale: [1, 1.05, 1],
                  transition: {
                    duration: 2.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  },
                }}
              >
                #1
              </motion.span>{" "}
              reason international customers abandon carts.
            </motion.p>

            <motion.div
              className="flex justify-center md:justify-start"
              variants={item}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <GetAppPrimaryButton
                  bgColor="bg-orange-600"
                  hoverBgColor="bg-orange-500"
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Image Section with animation */}
          <motion.div
            className="md:w-2/5 flex justify-center relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.8,
                ease: "easeOut",
                delay: 0.5,
              },
            }}
          >
            {/* Animated background accent */}
            <motion.div
              className="absolute -z-10 w-64 h-64 rounded-full bg-orange-100 opacity-20 blur-3xl"
              initial={{ scale: 0.8 }}
              animate={{
                scale: [0.8, 1.1, 0.8],
                transition: {
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                },
              }}
            />

            <motion.div animate={floatingAnimation}>
              <Image
                src={HERO_IMAGE.src}
                alt={HERO_IMAGE.alt}
                width={HERO_IMAGE.width}
                height={HERO_IMAGE.height}
                className="rounded-lg max-w-full h-auto object-contain"
                priority // Load this image with priority as it's above the fold
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
