import Image from "next/image";

import { Saira } from "next/font/google";
import { FaArrowDown, FaBook } from "react-icons/fa";

const DancingFont = Saira({
  weight: "400",
  subsets: ["latin"],
});
export default function Hero() {
  return (
    <section className="pt-[12vh] pb-24">
      <div className="container w-[90%] xl:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-[12.5rem]">
        {/* Left Section */}
        <div>
          <h1
            className={`${DancingFont.className} text-5xl font-bold text-gray-200`}
          >
            Find What To Read Next
          </h1>
          <p className={`${DancingFont.className} mt-10 text-lg text-gray-300`}>
            Stuck on what to read next? We've got you covered with great
            recommendations to keep your bookshelf full.
          </p>
          <button
            className={`${DancingFont.className} mt-10 px-6 py-3 bg-blue-800 hover:bg-blue-700 text-white font-semibold rounded-lg transition cursor-pointer`}
          >
            Get Started
          </button>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center space-y-6">
          {/* First Box */}
          <div
            className={`${DancingFont.className} border border-gray-300 px-6 py-3 text-white w-60 h-[73.6px] flex items-center justify-center text-center rounded-lg`}
          >
            Type the book you love
          </div>

          {/* Downward Arrow */}
          <FaArrowDown className="text-white" />
          {/* Second Box */}
          <div
            className={`${DancingFont.className} border border-gray-300 px-6 py-3 text-white w-60 text-center rounded-lg`}
          >
            We analyze similar books for you
          </div>

          {/* Downward Arrow */}
          <FaArrowDown className="text-white" />

          {/* Third Box */}
          <div className="flex -space-x-4">
            <div
              className={`${DancingFont.className} border border-gray-300 px-6 py-3 text-white w-60 text-center rounded-lg mb-10`}
            >
              Find best books we think you'll love
            </div>
          </div>
          <div className="flex space-x-3">
            <FaBook className="w-8 h-8 text-[#F28D8D] animate-rotate" />
            <FaBook className="w-8 h-8 text-[#A0C4FF] animate-rotate" />
            <FaBook className="w-8 h-8 text-[#D4A6F7] animate-rotate" />
            <FaBook className="w-8 h-8 text-[#F9E4A1] animate-rotate" />
            <FaBook className="w-8 h-8 text-[#A4E1A1] animate-rotate" />
            <FaBook className="w-8 h-8 text-[#FFABAB] animate-rotate" />
          </div>
        </div>
      </div>
      <hr className="w-[90%] xl:w-[80%] mx-auto border-t border-gray-600 my-12" />
    </section>
  );
}
