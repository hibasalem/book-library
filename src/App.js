import "./App.css";
import { BooksProvider } from "./contexts/BooksContext";
import Books from "./components/Books";
import { BrowserRouter as Router, Routes, Route , Navigate } from "react-router-dom";
import BookDetails from "./components/BookDetails";
import NotFound from "./components/NotFound";
import SecretBooks from "./components/SecretBooks";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <BooksProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Books />} />
            <Route path="/books" element={<Navigate to="/" />} />
            <Route path="/books/:bookId" element={<BookDetails/>} />
            <Route path="/login" element={<Login />} />
            <Route element={<PrivateRoute />}>
              <Route path="/secret" element={<SecretBooks />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </BooksProvider>
    </AuthProvider>
  );
}

export default App;
