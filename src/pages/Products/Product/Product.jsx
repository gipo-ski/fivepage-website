import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <article class="flex flex-col m-5 w-1/2 rounded-xl p-5 gap-2 bg-slate-400 text-2xl mx-auto h-svh">
      {/* <h1 class="flex flex-col text-center text-teal-400 text-8xl mt-12">
        Hello ProductPage!
      </h1> */}
      <Link to={`../Product/Product/${product.id}`}>
        <h2>{product.title}</h2>
        <p>{product.datetime}</p>
      </Link>
      <p>
        {product.body.length <= 25
          ? product.body
          : `${product.body.slice(0, 50)}...`}
      </p>
    </article>
  );
};

export default Product;
