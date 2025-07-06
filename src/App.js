import data, { allCategories, unqiueCategory, categoriesWithCounts, namesAndCategories } from './data';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Creating a list of the items from data.js using map */}
          {allCategories.map((categoryName, index) => (
            <ProductButton key={index} categoryName={categoryName} />
          ))}
      </header>
      {/* Product Card */}
      <ProductCard />
    </div>
  );
}

export default App;
