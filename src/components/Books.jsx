import React from "react";
import { BooksContext } from "../contexts/BooksContext";
import { Link } from "react-router-dom";

export default function Books() {
  const { books, loading } = React.useContext(BooksContext);
  const query = new URLSearchParams(window.location.search);
  const search = query.get("search") || "";

  if (loading) return <p>Loading...</p>;

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      All Books
      <ul>
        {filteredBooks.map((book) => (
          <li key={book.id}>
            <Link to={`/books/${book.id}`}>{book.title}</Link> by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}
