import GetAppPrimaryButton from "./common/GetAppPrimaryButton";
import Link from "next/link";
import { Linkedin, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="bg-cover bg-center py-12 md:py-12 text-white"
      style={{
        backgroundImage: `url("https://raw.githubusercontent.com/Zegeapps/zege-assets/c2ef49133201e8337580f126383ed3f3a7dd1729/Dual%20Price%20Website%20assets/footer.svg")`,
        backgroundColor: "#FF6B35", // Fallback color matching the image
      }}
    >
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-8 md:mb-0 md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-medium md:leading-[1.] mb-4 text-orange-50">
            Eliminates The #1 Reason International Customers Abandon Carts.
          </h2>

          <div className="mb-6 md:mb-8 flex justify-center md:justify-start">
            <GetAppPrimaryButton
              bgColor="bg-neutral-50"
              hoverBgColor="bg-neutral-100"
              textColor="text-orange-500"
            />
          </div>
        </div>

        <div>
          <div className="flex gap-10 items-center text-xl font-medium  ">
            <div className="flex flex-col gap-4 ">
              <p>Email : </p>
              
              <p>WhatsApp : </p>
              <p>Social Links : </p>
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <a href="mailto:zegeapps@gmail.com" className="hover:underline">
                  zegeapps@gmail.com
                </a>
              </div>
              <div>
                <a
                  href="https://wa.me/+918113081034"
                  className="hover:underline"
                >
                  +91-8113081034
                </a>
              </div>
              <div className="flex space-x-4">
                <Link
                  href="https://www.linkedin.com"
                  target="_blank"
                  className="hover:opacity-75"
                >
                  <Linkedin size={24} />
                </Link>
                <Link
                  href="https://www.instagram.com"
                  target="_blank"
                  className="hover:opacity-75"
                >
                  <Instagram size={24} />
                </Link>
                <Link
                  href="https://www.facebook.com"
                  target="_blank"
                  className="hover:opacity-75"
                >
                  <Facebook size={24} />
                </Link>
                <Link
                  href="https://www.twitter.com"
                  target="_blank"
                  className="hover:opacity-75"
                >
                  <Twitter size={24} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
