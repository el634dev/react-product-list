// importing data.json
import data from './data.json';

// Grabbing all categories from data.json
const allCategories = data.map(obj => obj.category);

// Make a set from an array all values of the set will be unique!
const categorySet = new Set(allCategories);

// Make an array from a set with Array.from()
const unqiueCategory = Array.from(categorySet);

// -------------------
// Reduce
const categoriesWithCounts = data.reduce((obj, cat) => {
    // check if cat exists as a key on obj
    if (obj[cat]) {
        // If the key exits, increment by 1
        obj[cat] += 1
    } else {
        // set the key to 1 if it does not exist
        obj[cat] = 1
    }
    return obj
}, {}) // Define the initial value as an object

// -------------------
const categoryCount = data.reduce((acc, count) => {
    const category = count.category;
    // setting the key to a value using acc[category]
    // or 0 (default) plus 1
    acc[category] = (acc[category] || 0) + 1;

    return acc;
}, {}); // Defines the intital value as an object

// -------------------
// Maping names and count with a default of 0 or number
const namesAndCategories = unqiueCategory.map(categoryName => ({
    name: categoryName,
    count: categoryCount[categoryCount] || 0
}));

// -------------------
// export the native JS array
export default data; 
export {
    allCategories,
    categorySet, 
    unqiueCategory,
    categoriesWithCounts,
    namesAndCategories
}