# Book Library

A small React app that lists books from the [Open Library API](https://openlibrary.org/developers/api), using the Context API for state and React Router for navigation.

## How it works

- `BooksContext` – fetches books and provides `books` and `loading`.
- `AuthContext` – fake login saved in `localStorage`; `useAuth()` gives `isAuthenticated`, `login`, `logout`.
- `PrivateRoute` – protects `/secret`, redirects to `/login` if not logged in.

## Routes

| Path             | Page                                         |
| ---------------- | -------------------------------------------- |
| `/`              | All books (supports `?search=` by title)     |
| `/books`         | Redirects to `/`                             |
| `/books/:bookId` | Book details (falls back to Not Found)       |
| `/login`         | Fake login, redirects back after logging in  |
| `/secret`        | Secret books – private route                 |
| `*`              | Not Found                                    |