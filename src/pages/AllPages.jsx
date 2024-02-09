import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Products from "./pages/Products/Products";
import Product from "./pages/Products/Product/Product";
import Service from "./pages/Services/Service/Service";
import Services from "./pages/Services/Services";
import NotFound from "./pages/NotFound";

const AllPages = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Home />
      <About />
      <Contact />
      <Products />
      <Product />
      <Services />
      <Service />
      <NotFound />
      <Footer />
    </>
  );
};

export default AllPages;
