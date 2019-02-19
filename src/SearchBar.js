import React, { useState } from 'react';

const SearchBar = props => {
  const [query, setQuery] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    if (query.length > 0) {
      props.doSearch(query);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={query} onChange={event => setQuery(event.target.value)} />
      <button type="submit">Search</button>
    </form>
  )
}

export default SearchBar;
