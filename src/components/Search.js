import React, { useState } from "react";
import {
  InstantSearch,
  SearchBox,
  Hits,
  Highlight,
  Pagination,
  Stats
} from "react-instantsearch-dom";
import algoliasearch from "algoliasearch/lite";

function CustomHitsComponent({ hit }) {
  return (
    <div>
      <h2>
        <Highlight hit={hit} attribute="title" tagName="mark" />
      </h2>
      <p>
        <Highlight hit={hit} attribute="description" tagName="mark" />
      </p>
      <p>
        <Highlight hit={hit} attribute="date" tagName="mark" />
      </p>
      <p>
      <Highlight hit={hit} attribute="excerpt" tagName="mark" />
      </p>
    </div>
  );
}

function NoResultsComponent() {
  return <div>No results found</div>;
}

const AlgoliaSearch = () => {
  const [query, setQuery] = useState("");
  const [hasResults, setHasResults] = useState(true);

  const searchClient = algoliasearch(
    "S2KLHJSUYP",
    "01732baee44cb401944822d5371aa2f6"
  );

  const handleSearchStateChange = (searchState) => {
    setHasResults(searchState.nbHits > 0);
  };

  const handleInputChange = (event) => {
    const inputValue = event.currentTarget.value;
    setQuery(inputValue);
    setHasResults(true);
  };

  return (
    <InstantSearch
      searchClient={searchClient}
      indexName="Blog"
      onSearchStateChange={handleSearchStateChange}
    >
      <SearchBox
        onChange={handleInputChange}
        value={query}
        placeholder="Search posts..."
        style={{ width: '500px', height: '90px' }}
      />
      <br/>
      <Stats />
      <Hits
        hitComponent={CustomHitsComponent}
        empty={hasResults ? null : <NoResultsComponent />}
      />
     
    </InstantSearch>
  );
};

export default AlgoliaSearch;
