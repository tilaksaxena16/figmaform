import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";


const Footer = () => {

    return (
        <>
            <div className="footer-container">
                <Link to='/registration' className="footer-child">Go to registration page</Link>
            </div>
        </>
    )
}

export { Footer }