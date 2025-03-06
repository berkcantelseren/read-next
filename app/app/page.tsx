"use client";

import React, { useState, useEffect } from "react";
import { getBookRecommendations } from "../lib/hugging";
import { FaArrowLeft, FaSearch } from "react-icons/fa";

interface Book {
  volumeInfo: {
    title: string;
    authors: string[];
    description: string;
    imageLinks?: {
      thumbnail: string;
    };
  };
}

interface GoogleBooksResponse {
  items: Book[];
}

export default function App() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [books, setBooks] = useState<Book[]>([]);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [isBookSelected, setIsBookSelected] = useState<boolean>(false);
  const handleBackButtonClick = () => {
    window.location.reload();
  };
  const [recommendations, setRecommendations] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (searchQuery.length >= 3 && !isBookSelected) {
      fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`)
        .then((response) => response.json())
        .then((data: GoogleBooksResponse) => {
          setBooks(data.items || []);
        })
        .catch((error) => console.error("Error fetching books:", error));
    } else if (searchQuery.length < 3) {
      setBooks([]);
    }
  }, [searchQuery, isBookSelected]);

  const handleBookSelect = (book: Book) => {
    setSelectedBook(book);
    setSearchQuery(book.volumeInfo.title);
    setIsBookSelected(true);
    setBooks([]);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    if (isBookSelected) {
      setIsBookSelected(false);
    }
  };

  const handleGetRecommendations = async () => {
    if (!selectedBook) return;

    setLoading(true);
    const response = await getBookRecommendations(
      selectedBook.volumeInfo.title
    );
    setRecommendations(response);
    setLoading(false);
  };

  return (
    <section className="pt-[12vh] pb-24 flex items-center text-center justify-center">
      <div className="container w-[90%] xl:w-[80%]">
        <h1 className="text-white text-4xl pb-5">Search for books</h1>
        <div className="relative">
          <input
            type="text"
            className="text-white border-1 h-10 w-200 text-center rounded-xl"
            placeholder="A Song of Ice and Fire"
            value={searchQuery}
            onChange={handleInputChange}
          />
          <FaSearch className="w-5 h-5 text-white absolute translate-x-56 -translate-y-7.5" />
        </div>

        {/* Show the search results if there are any */}
        {books.length > 0 && !isBookSelected && (
          <div className="mt-5 space-y-4">
            {books.map((book, index) => (
              <div
                key={index}
                className="text-left bg-gray-800 p-4 rounded-xl cursor-pointer"
                onClick={() => handleBookSelect(book)} // Select book on click
              >
                <h3 className="text-orange-500 text-xl font-bold">
                  {book.volumeInfo.title}
                </h3>
                {book.volumeInfo.authors && (
                  <p className="text-blue-300">
                    By {book.volumeInfo.authors.join(", ")}
                  </p>
                )}
                {book.volumeInfo.description && (
                  <p className="text-white mt-2">
                    {book.volumeInfo.description}
                  </p>
                )}
                {book.volumeInfo.imageLinks &&
                  book.volumeInfo.imageLinks.thumbnail && (
                    <img
                      src={book.volumeInfo.imageLinks.thumbnail}
                      alt={book.volumeInfo.title}
                      className="mt-2 rounded-md"
                    />
                  )}
              </div>
            ))}
          </div>
        )}

        {/* Show the selected book details if any */}
        {selectedBook && (
          <div className="mt-8 bg-gray-800 p-4 rounded-xl">
            <button onClick={handleBackButtonClick} className="flex">
              <FaArrowLeft className="text-white w-6 h-6 cursor-pointer" />
            </button>
            <h3 className="text-orange-500 text-xl font-bold">
              {selectedBook.volumeInfo.title}
            </h3>
            {selectedBook.volumeInfo.authors && (
              <p className="text-blue-300">
                By {selectedBook.volumeInfo.authors.join(", ")}
              </p>
            )}
            {selectedBook.volumeInfo.description && (
              <p className="text-white mt-2">
                {selectedBook.volumeInfo.description}
              </p>
            )}
            {selectedBook.volumeInfo.imageLinks &&
              selectedBook.volumeInfo.imageLinks.thumbnail && (
                <img
                  src={selectedBook.volumeInfo.imageLinks.thumbnail}
                  alt={selectedBook.volumeInfo.title}
                  className="mt-15 mx-auto rounded-md "
                />
              )}
            <button
              className="mt-10 mb-10 text-black border-1 rounded-xl p-2 bg-white cursor-pointer"
              onClick={handleGetRecommendations}
              disabled={loading}
            >
              {loading ? "Loading..." : "Get Recommendations"}
            </button>
            {recommendations && (
              <div className="mt-8 bg-gray-800 p-4 rounded-xl">
                <h2 className="text-white text-2xl p-5">Recommended Books</h2>
                <div className="text-white mt-2 tracking-wide leading-relaxed space-y-4">
                  {recommendations.split("\n").map((item, index) => (
                    <p key={index}>{item}</p>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
