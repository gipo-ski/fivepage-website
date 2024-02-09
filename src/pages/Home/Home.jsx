// import Feed from "../Feed"

const Home = ({ products }) => {
  return (
    <main className="home" class="flex flex-1 flex-col">
      <h1 class="text-center text-teal-400 text-8xl mt-12">Hello HomePage!</h1>
      {/* <div>{products.length ? (
      <Feed products={products} />
      ) : (
          <p>No Products To Display</p>
      ) }</div> */}
    </main>
  );
};

export default Home;
