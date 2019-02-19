import React from 'react';

const SearchResults = props => {
  const photos =
    props.photos.results && props.photos.results.length > 0 ? props.photos.results : [];

  return (
    <div className="SearchResults">
      {photos.length > 0 ? (
        <>
          {photos.map(photo => (
            <div key={photo.id} className="SearchResultsPhoto">
              <img src={photo.urls.small} alt={photo.description} />
            </div>
          ))}
        </>
      ) : (
        <>No results</>
      )}
    </div>
  );
};

export default SearchResults;
