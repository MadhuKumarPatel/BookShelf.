import React, { useState } from "react";
import axios from "axios";
import "./BookSearch.scss"

const BookSearch = () => {
    const [query,setQuery] = useState("")
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (e) => {
    setQuery(e.target.value)
     if(query===""){
      return
     }
     else{
      try {
        const response = await axios.get( `https://openlibrary.org/search.json?q=${query}&limit=10&page=1`);
        setSearchResults(response.data.docs);
        console.log(response.data.docs);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
     }
  };

  const addToBookshelf = (book) => {
    const bookshelf = JSON.parse(localStorage.getItem("bookshelf")) || [];
    bookshelf.push(book);
    localStorage.setItem("bookshelf", JSON.stringify(bookshelf));
  };


  return (
    <div className="search-container">
      <div className="form-field">
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          autoFocus
          placeholder="Search for books"
        />
      </div>
      <div className="search-result-content">
        <div className="search-results">
          {searchResults.map((item) => (
             <div className="product-card" key={item.last_modified_i}>
                 <div className="prod-details">
                 <span className="name">{item.title}</span>
                 <span className="author">Author name :  <span>{item.author_name}</span></span>
                 <span className="first-publish-year">First publish year : <span>{item.first_publish_year}</span></span>
                 <span className="language">Language: <span>{item.language ? item.language.join(' . ') : 'N/A'}</span></span>
                 <button onClick={() => addToBookshelf(item)}>Add to bookshelf</button>
                </div>
         </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookSearch;
