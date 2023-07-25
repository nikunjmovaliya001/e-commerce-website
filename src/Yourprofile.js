import React from 'react'
import { Link } from 'react-router-dom'
import $ from 'jquery';
export default function Yourprofile() {

    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#imagePreview').css('background-image', 'url(' + e.target.result + ')');
                $('#imagePreview').hide();
                $('#imagePreview').fadeIn(650);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    $("#imageUpload").change(function () {
        readURL(this);
    });
    const password = document.getElementById('password');
    const togglePassword = document.querySelector('.input__icon');

    function showHide() {
        if (password.type === 'password') {
            password.setAttribute('type', 'text');
            togglePassword.setAttribute('name', 'eye-off-outline');
        } else {
            password.setAttribute('type', 'password');
            togglePassword.setAttribute('name', 'eye-outline');
        }
    }
    $(document).ready(function () {
        $("#back").click(function () {
            $(".head").show();
            $(".slider_").show();
            $(".footer").show();

        })
    })


    return (
        <>
            <div className="wrap">
                <div className='Profile'>
                    <div className="box"></div>
                    <div className="edit_profile">
                        <Link to={"/"} className="back" id='back'>
                            <div></div>
                            <h4>Product </h4>
                            <span>Back   to   home</span>
                        </Link>
                        <h2 >
                            Your Profile
                        </h2>
                    </div>
                    <div className="shadow"></div>

                    <div className="avatar-upload">
                        <div className="avatar-edit">
                            <input type='file' id="imageUpload" accept=".png, .jpg, .jpeg" />
                            <label for="imageUpload"></label>
                        </div>
                        <div className="avatar-preview">
                            <div id="imagePreview" >
                            </div>
                        </div>
                    </div>
                    <div className="detail">
                        <span>Name</span>
                        <br />
                        <input type="text" />
                        <span>Nick Name</span>
                        <br />
                        <input type="text" />
                        <span>Email Address</span>
                        <br />
                        <input type="email" id="email" name="email" />
                        {/* <span>Password</span> */}
                        <br />
                        <div className="password">
                            <div className="input__box">
                                <input className="input__input" type="password" id="password" required />
                                <label className="input__label" for="password">Password</label>
                                <ion-icon
                                    className="input__icon"
                                    name="eye-outline"
                                    onclick="showHide()"
                                ></ion-icon>
                                <i class="fa-solid fa-eye"></i>
                            </div>
                        </div>
                        <div className="Contact">
                            <span> Contact</span>
                            <br />
                            <i class="fa-solid fa-phone"></i>
                            <input type="text" />
                        </div>
                    </div>
                    <div class="update_btn">
                        <button class="btn-hover color-1">Upadate Profile</button>
                    </div>
                </div>
            </div>
        </>
    )
}
