import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-[12vh] pb-24">
      <div className="container w-[90%] xl:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-[12.5rem]">
        {/* Left Section */}
        <div>
          <h1 className="text-5xl font-bold text-gray-200">
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
            src="/images/books.png"
            alt="book images"
            height={1000}
            width={1000}
          />
        </div>
      </div>
      <hr className="w-[90%] xl:w-[80%] mx-auto border-t border-gray-600 my-12" />
    </section>
  );
}
