const Search = ({search, setSearch}) => {
  return (
    <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="search" class="absolute right-[9999em]">Search Products</label>
      <input
        id="search"
        type="text"
        placeholder="Search Products"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    Search
  </form>
  )
};

export default Search;
