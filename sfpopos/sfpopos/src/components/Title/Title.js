// src/Title/Title.js
import React from 'react'
import { NavLink } from 'react-router-dom'
// RandomSpace Component
import RandomSpace from '../RandomSpace/RandomSpace';
// Import styling
import './Title.css';
import SignUp from '../Newsletter/SignUp';

// ---------------------
function Title() {
    return (
        <div className='Title'>
           <header>
                <h1>SFPOPOS</h1>
                <div className='Title-Subtitle'>
                    <small>San Francisco Privately Owned Public Spaces</small>
                </div>
                {/************/}
                <div className='Title-Nav'>
                    <NavLink className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" } to="/">
                        List
                    </NavLink>
                    {/********/}
                    <NavLink className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" } to="/about">
                        About
                    </NavLink>
                    {/*************/}
                    <RandomSpace />
                    <SignUp />
                </div>
           </header>
        </div>
    );
}

export default Title;
