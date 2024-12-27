import React from 'react';
import './bookshelf.css';
import books_list from '../../data/books/books.json';

const Bookshelf = () => {
  const firstNineBooks = books_list.slice(0, 9);
  const remainingBooks = books_list.length > 9 ? books_list.slice(9) : [];

  return (
    <div id='bookshelf' className="bookshelf">
      <div className="bookshelf-title">
        <h1>Bookshelf</h1>
        <h2>Here's what I've been reading recently</h2>
      </div>
      <div className="book-content">
        {firstNineBooks.map((book) => (
          <div className="book-item" key={book.title}>
            {book.image && <img src={book.image} alt={book.title} className="book-cover" />}
            <div className="book-details">
              <h3>{book.title}</h3>
              <h4>{book.author}</h4>
              {book.rating && <div className="book-rating">Rating: {book.rating}/5</div>}
              {book.review && <p className="book-review">{book.review}</p>}
            </div>
          </div>
        ))}
        {remainingBooks.length > 0 && (
          <div className="view-more-container"> {/* Wrap button in a container */}
            <a
              href="https://www.goodreads.com/user/show/165459238-vandan-shah"
              target="_blank"
              rel="noreferrer noopener"
            >
              <button className="view-more-button">Check Out More Reads</button>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bookshelf;
