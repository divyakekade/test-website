import React from "react";
import "./ProfilePage2.css";
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
                        <OptionBoxWhite name="Profile"> </OptionBoxWhite>
                        <OptionBoxBlue name="Edit-Profile"></OptionBoxBlue>

                    </div>
                    <div className="mainPart">

                        <form>

                        <div className="col1">
                            <div >
                                <h1>Name</h1>
                            </div>
                            <div className="colIn">
                                <label>
                                    <input type="text" name="name" />
                                </label>
                            </div>
                        </div>
                        <div className="col1">
                            <div >
                                <h1>Photo</h1>
                            </div>
                            <div className="colIn Photo">
                                <input type="file" />
                            </div>
                        </div>
                        <div className="col1">
                            <div >
                                <h1>Signature</h1>
                            </div>
                            <div className="colIn">
                                <input type="file" />
                            </div>
                        </div>
                        <div className="col1">
                            <div >
                                <h1>E-mail</h1>
                            </div>
                            <div className="colIn">
                                <input type="email" />
                            </div>
                        </div>
                        <div className="col1">
                            <div >
                                <h1>PRN</h1>
                            </div>
                            <div className="colIn">
                            <input type="text" />
                            </div>
                        </div>
                        <div className="col1">
                            <div >
                                <h1>Branch</h1>
                            </div>
                            <div className="colIn">
                            <input type="text" />
                            </div>
                        </div>
                        <div className="col1">
                            <div >
                                <h1>Year</h1>
                            </div>
                            <div className="colIn">
                            <input type="number" />
                            </div>
                        </div>
                        <div className="col1">
                            <div >
                                <h1>Date Of Birth</h1>
                            </div>
                            <div className="colIn">

                            </div>
                        </div>

                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfilePage1;
;