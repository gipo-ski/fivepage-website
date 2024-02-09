import Feed from "../Feed";

const Products = ({ products }) => {
  return (
    <main>
      <h1 class="flex flex-col text-center text-teal-400 text-8xl mt-12">
        Hello ProductsPage!
      </h1>
      <div>
        {products.length ? (
          <Feed products={products} />
        ) : (
          <p>No Products To Display.</p>
        )}
      </div>
    </main>
  );
};

export default Products;
