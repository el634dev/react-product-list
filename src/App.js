import data, { allCategories, unqiueCategory, categoriesWithCounts, namesAndCategories } from './data';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
         {/* Creating a button and card component from data.js using map */}
          {allCategories.map((categoryName, index) => (
            <>
              <ProductButton key={index} categoryName={categoryName} />
              <ProductCard />
            </>
          ))}
      </header>
      {/* Product Card */}
      <ProductCard />
    </div>
  );
}

export default App;
