import React from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import OptionBoxBlue from "./OptionBoxBlue";
import OptionBoxWhite from "./OptionBoxWhite";
import BlueButton from "./BlueButton";
import "./SignupLogin.css";
export default function SignUpLogin({role}){
    const [formData1,setFormData1]=React.useState({
        "name":"",
        "prn":"",
        "email":"",
        "mobile":"",
        "password":""
    })
    const [formData2,setFormData2]=React.useState({
        "email":"",
        "password":""
    })
    function handleChangeS(e){
        const newFormData1={...formData1}
        newFormData1[e.target.id]=e.target.value
        setFormData1(newFormData1)
        console.log(newFormData1)
    }
    function handleChangeL(e){
        const newFormData2={...formData2}
        newFormData2[e.target.id]=e.target.value
        setFormData2(newFormData2)
        console.log(newFormData2)
    }
    function getData(e){
    // e.preventDefault();
    console.log("Clicked")
    axios
      .get("TestData.json")
      .then(function (response) {
        console.log(response);
        console.log(response.data);
        console.log(response.data.name);
        console.log(response.data.college);
        console.log(response.data.marks);
        console.log(response.data.marks.m1);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
    }

    const [choice,setChoice]=React.useState("Sign up")
    function toggleToLogin(){
        setChoice("Log in")
    }
    function toggleToSignup(){
        setChoice("Sign up")
    }
    if(choice==="Sign up"){
        if(role==="Student"){
    return(
        <>
        <div className="component-box">
            <div className="options-box">
                <span>
                    <div><OptionBoxBlue name="Sign up"/></div>
                </span>
                <span onClick={toggleToLogin}>
                    <div><OptionBoxWhite name="Log in"/></div>
                </span>
            </div>
            <form className="form">
            <input type="text" id="name" onChange={(e)=>handleChangeS(e)} placeholder="name" className="login-input"></input>
            <input type="text" id="prn" onChange={(e)=>handleChangeS(e)} placeholder="PRN" className="login-input"></input>
            <input type="email" id="email" onChange={(e)=>handleChangeS(e)} placeholder="email" className="login-input"></input>
            <input type="text" id="mobile" onChange={(e)=>handleChangeS(e)} placeholder="mobile number" className="login-input"></input>
            <input type="password" id="password" onChange={(e)=>handleChangeS(e)} placeholder="password" className="login-input"></input>
            <Link to="/studentDashboard" ><div onClick={getData} type="submit"><BlueButton className="button" title={choice} /></div></Link>
            </form>
        </div>
        </>
    )}
    else if(role==="Faculty")
    return(
        <>
        <div className="component-box">
            <div className="options-box">
                <span>
                    <div><OptionBoxBlue name="Sign up"/></div>
                </span>
                <span onClick={toggleToLogin}>
                    <div><OptionBoxWhite name="Log in"/></div>
                </span>
            </div>
            <form className="form">
            <input type="text" id="name" onChange={(e)=>handleChangeS(e)} placeholder="name" className="login-input"></input>
            <input type="email" id="email" onChange={(e)=>handleChangeS(e)} placeholder="email" className="login-input"></input>
            <input type="text" id="mobile" onChange={(e)=>handleChangeS(e)} placeholder="mobile number" className="login-input"></input>
            <input type="password" id="password" onChange={(e)=>handleChangeS(e)} placeholder="password" className="login-input"></input>
            <Link to="/facultyDashboard" ><div type="submit" onClick={getData}><BlueButton className="button" title={choice} /></div></Link>
            </form>
        </div>
        </>
    )
}
    else
    {
       return(
        <>
        <div className="component-box">
        <div className="options-box">
            <span>
                <div onClick={toggleToSignup}><OptionBoxWhite name="Sign up"/></div>
            </span>
            <span>
                <div><OptionBoxBlue name="Log in"/></div>
            </span>
        </div>
        <form className="form">
        <input type="text" id="email" onChange={(e)=>handleChangeL(e)} placeholder="email" className="login-input"></input>
        <input type="password" id="password" onChange={(e)=>handleChangeL(e)} placeholder="password" className="login-input"></input>
        <Link to={role==="Faculty"?"/facultyDashboard":"/studentDashboard"} state={{role:{role}}}>
            <div type="submit" onClick={getData}><BlueButton className="button" title={choice} /></div>
            </Link>
        </form>
        <a href="" className="forgot-pasword">Forgot Password?</a>
    </div>
    </>
       )
    }
}