// components/DualPriceButton.js
import Link from "next/link";

const GetAppPrimaryButton = ({
  bgColor = "bg-orange-500",
  hoverBgColor = "hover:bg-orange-500",
  textColor = "text-white",
  shadowColor = "rgba(0, 0, 0, 0.3)",
  className = "",
}) => {
  return (
    <Link
      href="/contact"
      className={`flex items-center ${bgColor} ${textColor} ${hoverBgColor} text-lg font-semibold px-6 py-3 rounded-lg transition shadow-lg hover:shadow-xl ${className}`}
      style={{ boxShadow: `0 4px 14px ${shadowColor}` }}
    >
      <img
        src="https://raw.githubusercontent.com/Zegeapps/zege-assets/main/Dual%20Price%20Website%20assets/shopify_logo_white.svg"
        alt="Shopify Logo"
        className="w-8 h-8 mr-3"
      />
      Get Dual Price App
    </Link>
  );
};

export default GetAppPrimaryButton;
