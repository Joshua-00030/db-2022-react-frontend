const SearchForm = ({searchText, setSearchText, getData}) => (
    <div className="ms-2 ps-1 mb-2">
      <p>
        Search:
      </p>
      <form onSubmit={getData}>
        <div>
          Title
          <input
            type="text"
            value={searchText}
            name="newTitle"
            placeholder='Video Title'
            onChange={({ target }) => setSearchText(target.value)}
            />
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
)
export default SearchForm