import { FaSearch } from "react-icons/fa";

export default function App() {
  return (
    <section className="pt-[12vh] pb-24 flex items-center text-center justify-center">
      <div className="container w-[90%] xl:w-[80%]">
        <h1 className="text-white text-4xl pb-5">Search for books</h1>
        <input
          type="text"
          className="text-white border-1 h-10 w-200 text-center rounded-xl"
          placeholder="A Song of Ice and Fire"
        />
        <FaSearch className="w-5 h-5 text-white absolute translate-x-56 -translate-y-7.5" />
      </div>
    </section>
  );
}
