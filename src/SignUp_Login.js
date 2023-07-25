import React, { useState } from "react";
import { Link } from 'react-router-dom'
import $ from 'jquery';

// import Form from "react-bootstrap/Form";

// import Button from "react-bootstrap/Button";
// import { Link } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    function validateForm() {

        return email.length > 0 && password.length > 0;
    }
    function handleSubmit(event) {

        event.preventDefault();

    }

    $(document).ready(function () {
        $("#b_home").click(function () {
            $(".slider_").show();
            $(".head").show();
            $(".product").show();
            $(".footer").show();

        })
    })
    return (
        <div className="SignUp_Login">
            <div className="Light_dark">
                <i class="fa-solid fa-sun fa-fade" ></i>
                <Link to={"/Dark"}><i class="fa-solid fa-moon fa-fade" style={{ color: "black" }}></i></Link>
            </div>
            <div className="contain">

                <button className="SignUp_Login_btn" >
                    <Link to={"/"} id='b_home'>Back To Home</Link>
                </button>
                <button className="Your_Profile_btn">
                    <Link to={"/Yourprofile"}>Your Profile</Link>
                </button>
                <div className="login">
                    <form action="">
                        <h1>Welcome Back!</h1>
                        <small>Login to your account and start connecting with the world. Your journey begins here.</small>
                        <label for="email">Email</label>
                        <input placeholder="Enter Email" type="text" value={email} onChange={(e) => setEmail(e.target.value)}
                            name="" id=""
                        />
                        <label for="pass">Password</label>
                        <input placeholder="Enter Password" type="password" value={password} onChange={(e) =>
                            setPassword(e.target.value)} name="" id="" />
                        <div className="mor">
                            <input className="check" type="checkbox" />
                            <label for="check">Remember Me</label>
                            <a href="">Forgot Password?</a>
                        </div>
                        <input Link to={"/"} className="log" type="submit" name="" disabled={!validateForm()} value="Login" id="" />

                        <div className="container">
                            <div className="line"></div>
                            <p>Or</p>
                            <div className="line"></div>
                        </div>

                        <div className="op">
                            <button >
                                <img src="https://companieslogo.com/img/orig/GOOG-0ed88f7c.png?t=1633218227" alt="Google Logo"
                                    className="Google-logo" />
                                Login with Google
                            </button>
                            <button >
                                <img src="https://seeklogo.com/images/A/apple-logo-5933E519F8-seeklogo.com.png" alt="Apple Logo"
                                    className="Apple-logo" />
                                Login with Apple
                            </button>
                        </div>

                    </form>
                </div>

            </div>
        </div>

    )
}