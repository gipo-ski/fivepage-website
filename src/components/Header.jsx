import Navbar from "./Navbar";

const Header = ({ title, search, setSearch }) => {
  return (
    <header class="flex flex-1 sticky top-0 justify-between bg-teal-600 w-full p-2 px-12">
      <h1 class="text-center text-4xl text-red-200 p-2">{title}</h1>
      <Navbar search={search} setSearch={setSearch} />
    </header>
  );
};

export default Header;
