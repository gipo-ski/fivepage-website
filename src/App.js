import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useHistory } from "react-router-dom";

import Layout from "./pages/Layout";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Products from "./pages/Products/Products";
import Product from "./pages/Products/Product/Product";
import Service from "./pages/Services/Service/Service";
import Services from "./pages/Services/Services";
import NotFound from "./pages/NotFound";
import "./App.css";
// import Home from "./pages/Home";
// import Blogs from "./pages/Blogs";
// import Contact from "./pages/Contact";
// import NoPage from "./pages/NoPage";

export default function App() {

  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "my first product",
      datetime: "10:00 am",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum ex dolores culpa, aliquid accusantium, architecto incidunt reprehenderit ducimus magni. Quod distinctio expedita quo?",
    },
    {
      id: 2,
      title: "my second product",
      datetime: "11:00 am",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum ex dolores culpa, aliquid accusantium, architecto incidunt reprehenderit ducimus magni. Quod distinctio expedita quo?",
    },
    {
      id: 3,
      title: "my third product",
      datetime: "12:00 noon",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum ex dolores culpa, aliquid accusantium, architecto incidunt reprehenderit ducimus magni. Quod distinctio expedita quo?",
    },
  ]);



  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Layout
              search={search}
              setSearch={setSearch}
              products={products}
              setProducts={setProducts}
              searchResults={searchResults}
              setSearchResults={setSearchResults}
            />
          }
        >
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route
            exact
            path="products"
            element={<Products products={products} />}
          >
            {/* <Route path=":id" element={<Product />} /> */}
          </Route>
          <Route exact path="services" element={<Services />}>
            <Route path=":id" element={<Service />} />
          </Route>
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// import { Header, Navbar, Footer } from "./pages/AllPages";

// function App() {
//   return (
//     <div className="App">
//       <h1 class="flex flex-col text-center text-teal-400 text-8xl mt-12">
//         Hello HomePage!
//       </h1>
//       <Header />
//       <Navbar />
//       <Home />
//       <About />
//       <Contact />
//       <Products />
//       <Product />
//       <Services />
//       <Service />
//       <NotFound />
//       {/* <Routes>
//         <Route path="/" element={Home} />
//         <Route path="/about" element={About} />
//         <Route path="/contact" element={Contact} />
//         <Route path="/products" element={Products} />
//         <Route path="/services" element={Services} />
//         <Route path="*"  element={NotFound} />
//       </Routes> */}
//       <Footer />
//     </div>
//   );
// }

// export default App;
