import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[#212121] text-white pt-[12vh] pb-24">
      <div className="container w-[90%] xl:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Left Section */}
        <div>
          <h1 className="text-5xl font-bold text-orange-500 leading-tight">
            Discover Your Next Favorite Book
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Get personalized book recommendations tailored just for you.
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition">
            Get Started
          </button>
        </div>

        {/* Right Section */}
        <div className="flex justify-center">
          <Image
            src="/images/file_search.png"
            alt="test"
            height={900}
            width={900}
          />
        </div>
      </div>
    </section>
  );
}
