import React from 'react'

import BookCard from '../books/BookCard.jsx';


// import required modules
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';

import { useFetchAllBooksQuery } from '../../redux/features/books/booksApi.js';

const Recomended = () => {

  // fetch books from database.
    const {data: books = []} = useFetchAllBooksQuery()
    //console.log(books);

  return (
    <div>
      <h2 className="text-3xl font-semibold mb-6">Recomended for you</h2>

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
        {books.length > 0 &&
          books.slice(8, 18).map((book, index) => (
            <SwiperSlide key={index}>
              <BookCard book={book} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  )
}

export default Recomended