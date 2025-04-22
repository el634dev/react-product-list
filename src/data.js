// importing data.json
import data from './data.json';

// Grabbing all categories from data.json
const allCategories = data.map(obj => obj.category);

// Make a set from an array all values of the set will be unique!
const categorySet = new Set(allCategories);
// Make an array from a set with Array.from()
const unqiueCategory = Array.from(categorySet);

const categoriesWithCounts = data.reduce((obj, cat) => {
    // check if cat exists as a key on obj
    if (cat === obj[cat]) {
        obj[cat] = 0 
    }
    // if category key does not exist
    if (!obj[cat]) {
        // add that key with a value of 1
        obj[cat] += 1
    } else {
        // add 1 to the current value of that key
        obj += 1
    }
    return obj
}, {}) // Define the initial value as an object

const namesAndCategories = unqiueCategory.map(name => {
    // Acculmator
    const count = data.filter(units => units.category === name).length
    
    // return an object with the name and count
    return {
        name: name,
        count: count
    }
})

// export the native JS array
export default data; 
export {
    allCategories,
    categorySet, 
    unqiueCategory,
    categoriesWithCounts,
    namesAndCategories
}