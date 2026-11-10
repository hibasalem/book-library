import { useState, createContext, useEffect } from "react";

export const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(
      "https://openlibrary.org/search.json?subject=fiction&limit=30&fields=key,title,author_name,first_sentence,first_publish_year",
    )
      .then((response) => {
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return response.json();
      })
      .then((data) =>
        setBooks(
          data.docs.map((book) => ({
            id: parseInt(book.key.replace(/\D/g, "")),
            title: book.title,
            author: book.author_name?.join(", ") || "Unknown",
            first_publish_year: book.first_publish_year,
            description: book.first_sentence?.[0],
          })),
        ),
      )
      .catch((error) => console.error("Error loading books:", error));
  }, []);

  return (
    <BooksContext.Provider value={{ books, setBooks }}>
      {children}
    </BooksContext.Provider>
  );
};
