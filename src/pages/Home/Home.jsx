import React from "react";
import Banner from "./Banner.jsx";
import TopSellers from "./TopSellers.jsx";
import Recomended from "./Recomended.jsx";
import News from "./News.jsx";

const Home = () => {
  return (
    <>
      <Banner />

      <TopSellers/>

      <Recomended/>

      <News/>
    </>
  );
};

export default Home;
