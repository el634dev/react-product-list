import React from "react";

export default function ProductButton({ categoryName }) {
    return (
        <button class="product-button">
            { categoryName }
        </button>
    )
}