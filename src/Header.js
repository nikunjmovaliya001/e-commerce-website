import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import $ from 'jquery';


export default function Header(props) {
    const [searchVal, setSearchval] = useState("")
    $(document).ready(function () {
        $("#profile").click(function () {
            $(".slider_").hide();
            $(".head").hide();
            $(".footer").hide();

        })
    });
    $(document).ready(function () {
        $("#login").click(function () {
            $(".slider_").hide();
            $(".head").hide();
            $(".footer").hide();

        })
    })

    props.val(searchVal)

    return (
        <div>
            <div className="head">
                <div className="app_header">
                    <nav>
                        <span className='logo'> <Link to={"/"}>
                            <img src="https://i.postimg.cc/wT6Stj9P/Black-White-Minimalist-Business-Logo-removebg-preview.png" alt="logo" /></Link></span>
                        <div className="list">
                            <ul>
                                <li><Link to="/Electronics">Electronic</Link></li>
                                <li className='#Clothes'>
                                    <div className="dropdown">
                                        <div className='dropdown' >
                                            <Link to="/Clothes">Clothes</Link>
                                        </div>
                                        <div className="dropdowm-content">
                                            <Link to="/Clothes">Men's</Link>
                                            <Link to="/Clothes">Women's</Link>
                                        </div>
                                    </div>
                                </li>
                                <li><Link to="/Jewellery">Jewelery</Link></li>
                            </ul>
                        </div>
                        <div class="search-box">
                            <input type="text" placeholder="Search anything" onChange={(e) => setSearchval(e.target.value)} class="search-input">
                            </input>
                            <a href="#" class="search-btn">
                                <i class="fas fa-search"></i>
                            </a>
                        </div>
                        <div className="select">
                            <div className='position_relative'>
                                <div className="dropdown_menu">
                                    <i className="fa fa-user"></i>
                                </div>
                                <div className="dropdown_menu_content">
                                    {/* <a href="SignUp_Login"> */}
                                    {/* </a> */}
                                    <Link to="/Yourprofile" id='profile'>Your Profile</Link>
                                    <a href="#">Your Orders</a>
                                    <a href="#">Rewards</a>
                                    <Link to="/SignUp_Login" id='login'>SignUp/Login</Link>
                                </div>
                            </div>
                            <div className="heart-icon">&#10084;</div>
                            <Link to={'/Addtocard'}><i className="fa-solid fa-cart-plus" > </i></Link>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}


