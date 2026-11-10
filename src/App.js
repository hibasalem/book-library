import "./App.css";
import { BooksProvider } from "./contexts/BooksContext";

function App() {
  return (
    <BooksProvider>
      <div className="App">Book Library </div>
    </BooksProvider>
  );
}

export default App;
