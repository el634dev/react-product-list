// Footer Component
import React from "react";
import './Footer.css';

function Footer() {
    return (
        <div className="Footer_Content">
            <small className="Footer_Name">SFPOPOS </small>
            {/* Footer Links */}
            <small className="Footer_Link">Home </small>
            <small className="Footer_Link">About </small>
            <small className="Footer_Link">List </small>
            {/* Copyright */}
            <small className="Footer_Year">&copy;{new Date().getFullYear()}</small>
        </div>
    );
}

export default Footer;
