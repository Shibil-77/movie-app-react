import React, { useState } from "react";
import "./Signup.css";
import { SignUpValidation } from './validation'
import { signUp } from '../../common/apis/authApi'
import { useNavigate } from "react-router-dom";




const Signup = () => {
    const [errorMessage, setErrorMessage] = useState(null)
    const [successMessage, setSuccessMessage] = useState(null)
    const [registerData, setRegisterData] = useState('')
    const navigate = useNavigate();

    const handleEdit = async (e) => {
        const { name, value } = e.target;
        setRegisterData({ ...registerData, [name]: value });
    };

    async function handleSignUp(e) {
        console.log("haiiiiiiiiiiiiiiiiii");
        e.preventDefault();
        const SignUpVali = SignUpValidation(registerData)
        if (SignUpVali === 'success') {
            setSuccessMessage(null)
            const userData = await signUp(registerData)
            console.log(userData, "userData");
            if (userData.userId) {
                localStorage.setItem('userId', userData.userId);
                navigate('/')
                setErrorMessage(null)


                setSuccessMessage("check user email")
            } else {
                setErrorMessage(userData.message)
            }
        } else {
            setErrorMessage(SignUpVali)
            console.log(SignUpVali);
        }
    }


    return (
        <div className="main-container">
        <div className="container3">

            <div className="title">Registration</div>
            <form action="#">
                <div className="user__details">
                    <div className="input__box">
                        <span className="details">Full Name</span>
                        <input type="text" placeholder="E.g: John Smith" name="fullName" onChange={handleEdit} required />
                    </div>
                    <div className="input__box">
                        <span className="details">Username</span>
                        <input type="text" placeholder="johnWC98" name="Username" onChange={handleEdit} required />
                    </div>
                    <div className="input__box">
                        <span className="details">Email</span>
                        <input type="email" name="email" placeholder="johnsmith@hotmail.com" onChange={handleEdit} required />
                    </div>
                    <div className="input__box">
                        <span className="details">Phone Number</span>
                        <input type="tel" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" onChange={handleEdit} placeholder="012-345-6789" required />
                    </div>
                    <div className="input__box">
                        <span className="details">Password</span>
                        <input type="password" name="password" placeholder="********" onChange={handleEdit} required />
                    </div>
                    <div className="input__box">
                        <span className="details">Confirm Password</span>
                        <input type="password" name='confirmPassword' placeholder="********" onChange={handleEdit} required />
                    </div>

                </div>

                <div className="button">
                    <input type="submit" value="signup" onClick={handleSignUp} />
                </div>
                <p>{ }</p>
            </form>
        </div>
        </div>
    )

}

export default Signup;