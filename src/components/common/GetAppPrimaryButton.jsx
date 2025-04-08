"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const GetAppPrimaryButton = ({
  bgColor = "bg-orange-500",
  hoverBgColor = "hover:bg-orange-500",
  textColor = "text-white",
  shadowColor = "rgba(0, 0, 0, 0.3)",
  className = "",
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Link
      href="/contact"
      className={`flex items-center ${bgColor} ${textColor} ${hoverBgColor} text-lg font-semibold px-6 py-3 rounded-lg transition shadow-lg hover:shadow-xl ${className}`}
      style={{ boxShadow: `0 4px 14px ${shadowColor}` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-8 h-8 mr-3 relative overflow-hidden">
        <motion.div 
          className="w-8 h-8 flex items-center justify-center"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transformOrigin: "center"
          }}
          animate={isHovered ? {
            scale: 1.2,
            rotate: -8,
            transition: { 
              type: "spring", 
              stiffness: 300, 
              duration: 0.3 
            }
          } : {
            scale: 1,
            rotate: 0,
            transition: {
              duration: 0.3
            }
          }}
        >
          <img
            src="https://raw.githubusercontent.com/Zegeapps/zege-assets/main/Dual%20Price%20Website%20assets/shopify_logo_white.svg"
            alt="Shopify Logo"
            className="w-8 h-8"
          />
        </motion.div>
      </div>
      
      <motion.span
        animate={isHovered ? {
          y: [-1, 1, -1],
          transition: { 
            repeat: Infinity, 
            repeatType: "mirror", 
            duration: 1.2,
            ease: "easeInOut" 
          }
        } : {
          y: 0
        }}
      >
        Get Dual Price App
      </motion.span>
    </Link>
  );
};

export default GetAppPrimaryButton;