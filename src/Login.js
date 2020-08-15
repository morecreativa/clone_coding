import React from 'react'
import "./Login.css";
import {Link, userHistory} from "react-router-dom";

function Login() {
    return (
        <div className="login">
            <Link to="/">
                <img 
                className="longin_logo"
                src="https://i2.wp.com/indiaeducationdiary.in/wp-content/uploads/2020/05/Amazon2.jpg?w=400&ssl=1"
                alt=""
                />
            </Link>

            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5><input type="text"/>
                    <h5>password</h5><input type="text"/>
                    <button>Sign In</button>
                </form>

                <p>
                By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                </p>

                <button>Crete your Amazone Account</button>
            </div>
        </div>
    )
}

export default Login;
