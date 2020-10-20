import React from 'react'
import './Lobby.css'

export default function Lobby() {
    return (
        <div className="container">

            <div className="forms-wrapper">

                <form className="form" id="sign-up-form">
                    <h1>Register</h1>
                    <div className="form-control">
                        <label>Full name</label>
                        <input type="text" placeholder="Name..." id="fullname" />
                        <div className="icon">
                            <i className="fas fa-check-circle"></i>
                            <i className="fas fa-exclamation-circle"></i>
                        </div>
                        <small>Error message</small>
                    </div>

                    <div className="form-control">
                        <label for="">Email</label>
                        <input type="text" placeholder="Email adress..." id="email" />
                        <div className="icon">
                            <i className="fas fa-check-circle"></i>
                            <i className="fas fa-exclamation-circle"></i>
                        </div>
                        <small>Error message</small>
                    </div>
                    <div className="form-control">
                        <label for="">Username</label>
                        <input type="text" placeholder="Username..." id="username" />
                        <div className="icon">
                            <i className="fas fa-check-circle"></i>
                            <i className="fas fa-exclamation-circle"></i>
                        </div>
                        <small>Error message</small>
                    </div>

                    <div className="form-control">
                        <label for="">Password</label>
                        <input type="password" placeholder="********" id="password" />
                        <div className="icon">
                            <i className="fas fa-check-circle"></i>
                            <i className="fas fa-exclamation-circle"></i>
                        </div>
                        <small>Error message</small>
                    </div>

                    <div className="form-control">
                        <label for="">Repeat Password</label>
                        <input type="password" placeholder="********" id="password-check" />
                        <div className="icon">
                            <i className="fas fa-check-circle"></i>
                            <i className="fas fa-exclamation-circle"></i>
                        </div>
                        <small>Error message</small>
                    </div>

                    <div className="form-buttons">
                        <button className="btn1">Sign up</button>
                        <button type="button" className="btn2" onclick="showLoginForm()">Sign in &#10141; </button>
                    </div>
                </form>

                {/* Login form */}
                <form id="sign-in-form" hidden>
                    <h1>Sign In</h1>
                    <div className="form-control">
                        <label for="">Username</label>
                        <input type="text" placeholder="Username..." id="sign-in-username" />
                        <div className="icon">
                            <i className="fas fa-check-circle"></i>
                            <i className="fas fa-exclamation-circle"></i>
                        </div>
                        <small>Error message</small>
                    </div>
                    <div className="form-control">
                        <label for="">Password</label>
                        <input type="password" placeholder="********" id="sign-in-password" />
                        <div className="icon">
                            <i className="fas fa-check-circle"></i>
                            <i className="fas fa-exclamation-circle"></i>
                        </div>
                        <small>Error message</small>
                    </div>
                    <div className="form-buttons">
                        <button type="button" className="btn2" onclick="showSignUpForm()">&#8592; Sign Up</button>
                        <button className="btn1">Sign in</button>
                    </div>
                </form>
            </div>

            <div className="content">
                <div className="about-us">
                    <p>About us</p>
                </div>
                <div className="news">
                    <p>News</p>
                </div>
            </div>

        </div>
    )
}
