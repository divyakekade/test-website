import React from "react";
import "./ProfilePage1.css";
import OptionBoxBlue from "../Components/OptionBoxBlue";
import OptionBoxWhite from "../Components/OptionBoxWhite";
import Navbar2 from "../Components/Navbar2";

function ProfilePage1() {
    const pro = "Profile";
    return (
        <>
            <Navbar2 />
            <div className="box">
                <div className="outer">
                    <div className="profile-button">
                        <OptionBoxBlue name="Profile"> </OptionBoxBlue>
                        <OptionBoxWhite name="Edit-Profile"></OptionBoxWhite>

                    </div>
                    <div className="mainPart">
                        <div className="col1">
                            <div >
                                <h1>Name</h1>
                            </div>
                            <div className="colIn">

                            </div>
                        </div>
                        <div className="col1">
                            <div >
                                <h1>Photo</h1>
                            </div>
                            <div className="colIn Photo">

                            </div>
                        </div>
                        <div className="col1">
                            <div >
                                <h1>Signature</h1>
                            </div>
                            <div className="colIn">

                            </div>
                        </div>
                        <div className="col1">
                            <div >
                                <h1>E-mail</h1>
                            </div>
                            <div className="colIn">

                            </div>
                        </div>
                        <div className="col1">
                            <div >
                                <h1>PRN</h1>
                            </div>
                            <div className="colIn">

                            </div>
                        </div>
                        <div className="col1">
                            <div >
                                <h1>Branch</h1>
                            </div>
                            <div className="colIn">

                            </div>
                        </div>
                        <div className="col1">
                            <div >
                                <h1>Year</h1>
                            </div>
                            <div className="colIn">

                            </div>
                        </div>
                        <div className="col1">
                            <div >
                                <h1>Date Of Birth</h1>
                            </div>
                            <div className="colIn">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfilePage1;
;