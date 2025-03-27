import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <div className="bg-orange-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 pt-10 flex flex-col md:flex-row items-center gap-10 md:justify-between">
        <div className="md:w-3/5 mb-8 md:mb-0 md:pr-8">
          <h1 className="text-5xl lg:text-6xl hero-heading font-medium mb-4 tracking-wide leading-14 lg:leading-16 text-center md:text-left">
            Transparent{" "}
            <span className="text-orange-500 font-semibold"> VAT Pricing </span>{" "}
            Missing Strategy for Global Sales
          </h1>
          <p className=" text-gray-600  text-lg text-center md:text-left">
            Instant dual pricing display throughout your store eliminates the{" "}
            <span className="font-semibold text-neutral-900">#1</span> reason
            international customers abandon carts.{" "}
          </p>
          <div className="flex justify-center md:justify-start md:mb-6">
            <Link
              href="/contact"
              className="bg-orange-600 text-white text-lg font-medium px-6 py-3 mt-10  rounded hover:bg-orange-500 transition"
            >
              Get Dual Price App
            </Link>
          </div>
        </div>
        <div className="md:w-2/5 flex justify-center">
          <Image
            src="/hero-image.svg"
            alt="Hero image description"
            width={360}
            height={300}
            className="rounded-lg max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
