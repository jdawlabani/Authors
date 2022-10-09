import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NewAuthor from './Components/NewAuthor';
import AuthorList from './Components/AuthorList';
import EditAuthor from './Components/EditAuthor';

function App() {
  return (
    <div className="App">
      <h2>Favorite Authors</h2>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthorList />} />
          <Route path="/new" element={<NewAuthor />} />
          <Route path="/edit/:id" element={<EditAuthor />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
