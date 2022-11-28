import { useState } from 'react'

const SearchForm = ({searchText, setSearchText, getData}) => {
  const [titleCheck, setTitleCheck] = useState(false);
  const [descriptionCheck, setDescriptionCheck] = useState(false);

  const handleDescriptionChange = () => {
    setDescriptionCheck(!descriptionCheck)
  }

  const handleTitleChange = () => {
    setTitleCheck(!titleCheck)
  }

  return(
    <div className="ms-2 ps-1 mb-2">
      <p>
        Search:
      </p>
      <form onSubmit={getData}>
        <div>
          <span>
          Title
          </span>
          <input
            type="text"
            value={searchText}
            name="newTitle"
            placeholder='Video Title'
            onChange={({ target }) => setSearchText(target.value)}
            />
            <span className='mx-1'>
              Search Title
            </span>
            <input
          type="checkbox"
          checked={titleCheck}
          onChange={handleTitleChange}
        />
        <span className='mx-1'>
          Search Description
        </span>
        <input
      type="checkbox"
      checked={descriptionCheck}
      onChange={handleDescriptionChange}
    />
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
)}
export default SearchForm