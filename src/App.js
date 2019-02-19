import React, { useState } from 'react';
import Unsplash, { toJson } from 'unsplash-js';

import Header from './Header';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

const unsplash = new Unsplash({
  applicationId: process.env.REACT_APP_UNSPLASH_ACCESS_KEY,
  secret: process.env.REACT_APP_UNSPLASH_SECRET_KEY,
  callbackUrl: process.env.REACT_APP_UNSPLASH_CALLBACK_URL
});

const App = () => {
  const [photos, setPhotos] = useState([]);

  const getPhotos = query => {
    unsplash.search
      .photos(query, 1, 20)
      .then(toJson)
      .then(response => {
        setPhotos(response);
      });
  };

  return (
    <div className="App">
      <Header />
      <SearchBar doSearch={getPhotos} />
      <SearchResults photos={photos} />
    </div>
  );
};

export default App;
