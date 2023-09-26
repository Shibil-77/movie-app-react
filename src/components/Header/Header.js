import React from 'react';
import { Link } from "react-router-dom";
import user from "../../images/user.png"
import "./Header.scss";
const Header = () => {
    return (
        <div className="header">
            <Link to="/">
                <div className="logo">Movie App</div>
            </Link>
            <div className="user-image">
                <Link> <div className='about'><h2>About</h2></div></Link>
                <Link><div className='about'><h2>Contact</h2></div></Link>
                <img src={user} alt="user" />
            </div>

        </div>
    );
};

export default Header;