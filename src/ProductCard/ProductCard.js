import React from "react";
import  { allCategories } from '../data.js';
import "./ProductCard.css";

export default function ProductCard() {
    return (
        <div className="categories-list">
            {allCategories.map((category) => (
                <article key={category.id} className="category-card">
                <h2>{category.name}</h2>
                
                {/* Optional: display category label if different */}
                {category.category && <small className="category-label">{category.category}</small>}
                
                {category.description && <p className="description">{category.description}</p>}

                {category.units && <small className="units">Units available: {category.units}</small>}

                {category.price && (
                    <p className="price">Price: ${category.price.toFixed(2)}</p>
                )}

                {category.rating && (
                    <p className="rating">Rating: {category.rating} / 5</p>
                )}
                </article>
            ))}
        </div>
    )    
}