import React, { useEffect, useState } from "react";
import "./BookShelf.scss"

const Bookshelf = () => {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem("bookshelf")) || [];
    setBookshelf(storedBooks);
  }, []);

  return (
    <div className="bookshelf-container">
      <h2>My Bookshelf</h2>
      <div className="search-result-content">
        <div className="search-results">
          {bookshelf.map((item) => (
             <div className="product-card" key={item.last_modified_i}>
                 <div className="prod-details">
                 <span className="name">{item.title}</span>
                 <span className="author">Author name :  <span>{item.author_name}</span></span>
                 <span className="first-publish-year">First publish year : <span>{item.first_publish_year}</span></span>
                 <span className="language">Language: <span>{item.language ? item.language.join(' . ') : 'N/A'}</span></span>
                </div>
         </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bookshelf;
