import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Products from "../pages/Products/Products";
import Product from "../pages/Products/Product/Product";
import Service from "../pages/Services/Service/Service";
import Services from "../pages/Services/Services";
import NotFound from "../pages/NotFound";

export const EasyRoutes =(routes) => {
    return routes = [
    {
      path: "/",
      navigate: <Home />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/products",
      element: <Products />,
      children: [{ path: "/products", element: <Product /> }],
    },
    {
      path: "/services",
      element: <Services />,
      children: [{ path: "/services", element: <Service /> }],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ];
    
} 
