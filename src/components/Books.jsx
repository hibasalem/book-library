import React from "react";
import { BooksContext } from "../contexts/BooksContext";
import { Link } from "react-router-dom";

export default function Books() {
  const { books } = React.useContext(BooksContext);
  return (
    <div>
      All Books
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <Link to={`/books/${book.id}`}>{book.title}</Link> by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}
