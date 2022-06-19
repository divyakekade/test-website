import React from "react";
import "./Signup.css";
import Navbar from "../Components/Navbar"
import SignupLogin from "../Components/SignupLogin";

function Signup (){
    return(
        <div className="signup-page">
            <Navbar/>
            <div className="img-div">
                <SignupLogin/>
            </div>
        </div>
    )
}
export default Signup;