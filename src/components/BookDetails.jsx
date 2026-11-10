import React from "react";
import { useParams } from "react-router-dom";
import { BooksContext } from "../contexts/BooksContext";
import NotFound from "./NotFound";

export default function BookDetails() {
  const { bookId } = useParams();
  const { books } = React.useContext(BooksContext);

  if (!books || books.length === 0) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  const book = books.find((book) => book.id === parseInt(bookId));

  if (!book) return <NotFound />;

  return (
    <div>
      <h1>{book.title}</h1>
      <h2>by {book.author}</h2>
      <p>First published in {book.first_publish_year}</p>
      {book.description && <blockquote> {book.description}....</blockquote>}
    </div>
  );
}
