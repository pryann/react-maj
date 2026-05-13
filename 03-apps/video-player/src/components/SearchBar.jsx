import { useState } from 'react'

function SearchBar({ onFormSubmit }) {
    const [query, setQuery] = useState('')

    function handleSubmit(event) {
        event.preventDefault()
        onFormSubmit(query)
    }

    return (
        <div className="search-bar my-3">
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-group justify-content-center">
                    <input
                        type="text"
                        id="search"
                        name="search"
                        className="form-control form-control-lg w-50"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search..."
                    />
                </div>
            </form>
        </div>
    )
}

export default SearchBar
