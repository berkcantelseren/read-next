import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-[12vh] pb-24">
      <div className="container w-[90%] xl:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-40">
        {/* Left Section */}
        <div>
          <h1 className="text-5xl font-bold text-[#E19B05]">
            Discover Your Next Favorite Book
          </h1>
          <p className="mt-10 text-lg text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eum,
            ad labore unde dignissimos quidem.
          </p>
          <button className="mt-10 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition">
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
