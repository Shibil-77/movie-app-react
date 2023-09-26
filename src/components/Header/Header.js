import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import user from "../../images/user.png"
import "./Header.scss";
const Header = () => {
    const [userData, setUserData] = useState('')
    const navigate = useNavigate()
    useEffect(() => {
        const userId = localStorage.getItem("userId")
        setUserData(userId)
    }, [])
    const Logout = () => {
        localStorage.removeItem("userId");
        navigate('/login')
    }
    return (
        <div className="header">
            <Link to="/">
                <div className="logo">Movie App</div>
            </Link>
            <div className="user-image">

                <Link to='/about'> <div className='about'><h2>About</h2></div></Link>
                <Link><div className='about'><h2>Contact</h2></div></Link>
                {userData ? (
                    <button className="my-button" onClick={Logout}>
                        Logout
                    </button>
                ) : (
                    <Link to="/signup">
                        <button className="my-button">Signup</button>
                    </Link>
                )}

                <img src={user} alt="user" />

            </div>

        </div>
    );
};

export default Header;