// Sign up button in navbar component
import React from 'react';
import { useNavigate } from "react-router-dom";
import './SignUp.css';
import data from "../../sfpopos-data.json";

function SignUp() {
    const navigate = useNavigate();

    return (
        <button
            className='SignUp-Button'
            onClick={(e) => {
                const id = Math.floor(Math.random() * data.length)
                navigate(`/details/${id}`)
            }}
        >
        Sign Up
        </button>
    );
}

export default SignUp;
