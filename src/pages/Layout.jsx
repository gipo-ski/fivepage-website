// Layout.js
import { Outlet } from "react-router-dom";
// import { useState, useEffect } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = ({
  search,
  setSearch,
  searchResults,
  setSearchResults,
  products,
  setProducts,
}) => {
  // const [search, setSearch] = useState("");
  // const [searchResults, setSearchResults] = useState([]);
  // const [products, setProducts] = useState([
  //   {
  //     id: 1,
  //     title: "my first product",
  //     datetime: {},
  //     body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum ex dolores culpa, aliquid accusantium, architecto incidunt reprehenderit ducimus magni. Quod distinctio expedita quo?",
  //   },
  //   {
  //     id: 2,
  //     title: "my second product",
  //     datetime: {},
  //     body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum ex dolores culpa, aliquid accusantium, architecto incidunt reprehenderit ducimus magni. Quod distinctio expedita quo?",
  //   },
  //   {
  //     id: 3,
  //     title: "my third product",
  //     datetime: {},
  //     body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum ex dolores culpa, aliquid accusantium, architecto incidunt reprehenderit ducimus magni. Quod distinctio expedita quo?",
  //   },
  // ]);

  return (
    <>
      <Header title="Header" search={search} setSearch={setSearch} />
      <Outlet products={products} />
      <Footer />
    </>
  );
};

export default Layout;
