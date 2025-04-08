import Image from "next/image";
import Navbar from "./Navbar";
import GetAppPrimaryButton from "./common/GetAppPrimaryButton";

// hero image details
const HERO_IMAGE = {
  src: "https://raw.githubusercontent.com/Zegeapps/zege-assets/c2ef49133201e8337580f126383ed3f3a7dd1729/Dual%20Price%20Website%20assets/hero.svg",
  alt: "Dual pricing display visualization",
  width: 440,
  height: 300,
};

// Hero component - Main landing section for the application
export default function Hero() {
  return (
    <section className="border-b border-neutral-300">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-14 md:py-4">
        <div className="flex flex-col md:flex-row items-center gap-10 md:justify-between">
          {/* Content Section */}
          <div className="md:w-3/5 flex flex-col gap-6">
            <header className="text-center md:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium mb-4 tracking-wide leading-tight">
                Transparent
                <span className="text-orange-600 font-semibold">
                  {" "}
                  VAT Pricing{" "}
                </span>
              </h1>
              <p className="text-2xl sm:text-3xl font-medium">
                Missing Strategy for Global Sales
              </p>
            </header>

            <p className="text-gray-600 text-lg text-center md:text-left">
              Instant dual pricing display throughout your store eliminates the{" "}
              <span className="font-semibold text-neutral-900">#1</span> reason
              international customers abandon carts.
            </p>

            <div className="flex justify-center md:justify-start">
              <GetAppPrimaryButton bgColor="bg-orange-600" />
            </div>
          </div>

          {/* Image Section */}
          <div className="md:w-2/5 flex justify-center">
            <Image
              src={HERO_IMAGE.src}
              alt={HERO_IMAGE.alt}
              width={HERO_IMAGE.width}
              height={HERO_IMAGE.height}
              className="rounded-lg max-w-full h-auto object-contain"
              priority // Load this image with priority as it's above the fold
            />
          </div>
        </div>
      </div>
    </section>
  );
}
