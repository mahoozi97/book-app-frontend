import React, { useState } from "react";
import BookCard from "../books/BookCard.jsx";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import { useFetchAllBooksQuery } from "../../redux/features/books/booksApi.js";

const category = [
  "Choose a genre",
  "Business",
  "Fiction",
  "Horror",
  "Adventure",
];

const TopSellers = () => {
  

  const [selectedCategory, setSelectedCategory] = useState("Choose a genre");

  // fetch books from database.
  const {data: books = []} = useFetchAllBooksQuery()
  //console.log(books);

  const filteredBooks =
    selectedCategory === "Choose a genre"
      ? books
      : books.filter(
          (book) => book.category === selectedCategory.toLocaleLowerCase()
        );
  //console.log(filteredBooks);

  return (
    <div className="py-10 ">
      <h2 className="text-3xl font-semibold mb-6">Top Sellers</h2>

      {/* category filtering */}
      <div className="mb-6 flex items-center">
        <select
          onChange={(e) => setSelectedCategory(e.target.value)}
          name="category"
          id="category"
          className="border bg-[#eaeaea] border-gray-300 rounded-md  px-4 py-2 focus:outline-none"
        >
          {category.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={300}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 1.5,
            spaceBetween: 50,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 60,
          },
          1280: {
            slidesPerView: 2,
            spaceBetween: 70,
          },
          1536: {
            slidesPerView: 4,
            spaceBetween: 80,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {filteredBooks.length > 0 &&
          filteredBooks.map((book, index) => (
            <SwiperSlide key={index}>
              <BookCard book={book} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default TopSellers;
