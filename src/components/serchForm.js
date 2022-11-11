const SearchForm = ({searchText, setSearchText, getData}) => (
    <div>
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