import { FaBook } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="h-[8vh] mt-5">
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        {/* {ReadNext Logo} */}
        <div className="flex items-center space-x-2">
          <div className="w-12 h-12 rounded-full flex items-center justify-center">
            <FaBook className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-xl hidden sm:block md:text-2xl text-gray-200 font-bold">
            ReadNext
          </h1>
        </div>
      </div>
    </div>
  );
}
