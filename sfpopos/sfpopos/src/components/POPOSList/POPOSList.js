// Display a list of spaces 
import React from "react";
import { useState } from 'react';
// Importing data from JSON file
import data from '../../sfpopos-data.json';
// Adding the spaces
import POPOSSpace from "../POPOSSpace/POPOSSpace";
import './POPOSList.css';

function POPOSList() {
    const [query, setQuery] = useState('');
    // Add properties using deconstruction
    const spaces = data
    .filter(obj => obj.title.includes(query) || obj.address.includes(query))
    .map(({ title, address, images, hours }, i) => {
        return (
            <POPOSSpace 
                //Prop for the Virtual DOM
                id={i}
                key={`${title}-${i}`}
                name={title}
                address={address}
                image={images[0]}
                hours={hours}
            />
        )
    })

    // -------------------------
    // Displaying public spaces
    return (
        <div className="POPOSList">
           <form>
                <input
                    value={query}
                    placeholder="Search"
                    onChange={(e) => setQuery(e.target.value)}
                />
                {/* Submit Button */}
                <button type="submit">Submit</button>
           </form>
           {/* Spaces */}
           { spaces }
        </div>
    );
}
    
export default POPOSList;
