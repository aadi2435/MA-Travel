import { useRef, useState } from "react";

import Login from "../Login/Login";
import SignUp from "../Signup/Signup";

// importing its css
import "./LoginSignupContainer.css";

const LoginSignupContainer = () => {
    // defining state to make sure if login or signup is clicked or visible or active
    const [login, setLogin] = useState(true);

    // creating refrence for login-signup-container
    const LoginSignupContainerRef = useRef(null);

    const handleclick = () => {
        setLogin(!login);

        // using useRef we can do DOM manipulation
        LoginSignupContainerRef.current.classList.toggle("active");
    };

    return (
        <div className="login-signup-container" ref={LoginSignupContainerRef}>
            <Login />
            <div className="side-div">
                <button type="button" onClick={handleclick}>
                    {" "}
                    {login ? "Signup" : "Login"}
                </button>
            </div>
            <SignUp />
        </div>
    );
};

export default LoginSignupContainer;