import React, { useState } from "react";
import "../signup/Signup.css";
import { LoginValidation } from './Loginvalidation'
import { LoginApi } from '../../common/apis/authApi'
import { useNavigate } from "react-router-dom";




const Login = () => {
    const [errorMessage, setErrorMessage] = useState(null)
    const [loginData, setLoginData] = useState('')
    const navigate = useNavigate();

    const handleEdit = async (e) => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });
    };

    async function handleSignUp(e) {
        e.preventDefault();
        const LoginVali = LoginValidation(loginData)
        if (LoginVali) {
            const userData = await LoginApi(loginData)
            console.log(userData, "userData");
            if (userData) {
                if (userData.userId) {
                    localStorage.setItem('userId', userData.userId);
                    navigate('/')
                    setErrorMessage(null)
                } else {
                    setErrorMessage("invalid user")
                }
            } else {
                setErrorMessage("invalid user")
            }
        } else {
            setErrorMessage(LoginVali)
        }
    }

    // }
    return (
        <div className="main-container">
        <div class="container3">

            <div class="title">Registration</div>
            <form action="#">
                <div class="user__details">
                    <div class="input__box">
                        <span class="details">Email</span>
                        <input type="email" name="email" placeholder="johnsmith@hotmail.com" onChange={handleEdit} required />
                    </div>
                    <div class="input__box">
                        <span class="details">Password</span>
                        <input type="password" name="password" placeholder="********" onChange={handleEdit} required />
                    </div>
                </div>

                <div class="button">
                    <input type="submit" value="Login" onClick={handleSignUp} />
                </div>
                <p className="error-p">{errorMessage}</p>
            </form>
        </div>
        </div>
    )

}

export default Login;