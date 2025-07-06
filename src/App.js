import data, { allCategories, unqiueCategory, categoriesWithCounts, namesAndCategories } from './data';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Creating a list of the items from data.js using map */}
          {allCategories.map((category, index) => (
            <button key={index}>
              {category} 
            </button>
          ))}
      </header>
    </div>
  );
}

export default App;
