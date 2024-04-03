// Display information about a public space
import React from "react";
import { Link } from 'react-router-dom';
// Import styling
import './POPOSSpace.css';

function POPOSSpace(props) {
    const { name, image, address, hours, id } = props;

    return (
        <div className="POPOSSpace">
            <h1>
                <Link 
                    className="POPOSSpace-Title" 
                    to={`/details/${id}`}
                >{name}</Link>
            </h1>
            {/* Image Link */}
            <Link to={`/details/${id}`}>
                    <img src={`${process.env.PUBLIC_URL}images/${image}`} 
                        alt={name}
                        width="300" 
                        height="300" 
            /></Link>
           {/****************/}
           <div className="POPOSSpace-info">
                <div className="POPOSSpace_address">
                    { address }
                </div>
                {/* Hours */}
                <div className="POPOSSpace_hours ">
                    { hours }
                </div>
           </div>
        </div>
    );
}

export default POPOSSpace;
