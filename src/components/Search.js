import React from 'react';
import algoliasearch from 'algoliasearch';
import { InstantSearch, SearchBox, Hits, Stats, Pagination } from 'react-instantsearch-dom';

const searchClient = algoliasearch("1JRKYQ7HJX", "b52d2e73fce169891a76b4d087572d9c");
console.log(searchClient)

function Search() {
  return (
    <InstantSearch searchClient={searchClient} indexName="to-do" >
      <Header />
      <Content />
    </InstantSearch>
  );
}

const Header = () => (
  <header className="header">
    <SearchBox
      className="search-bar"
      translations={{ placeholder: 'Search for person detail' }}
    />
  </header>
);

const Hit = ({ hit }) => (
  
  <a href="/">
    <div className="card">
      <div className="card-contents">
   {/* <div> name:{hit.name}</div>
   <div> age:{hit.age}</div>
   <div> city:{hit.city}</div>
   <div> country:{hit.country}</div> */}
     <div> firstname: {hit.firstname}</div>
   <div> lastname:  {hit.lastname}</div>
   <div> zip_code:  {hit.zip_code}</div>
 
       
      </div>
    </div>
  </a>
);

const Content = () => (
  <main>
    <div className="information">
      <div className="stats">
        <Stats />
      </div>
    
    </div>
    <Hits hitComponent={Hit} />
    <div>
      <Pagination />
    </div>
  </main>
);

export default Search;
