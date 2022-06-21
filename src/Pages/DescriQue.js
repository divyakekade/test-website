import "./DescriQue.css";
import Navbar2 from "../Components/Navbar2";
import QueNo from "../Components/QueNo";
import BlueButton from "../Components/BlueButton"

function DescriQue()
{
    return(
        <>
        <Navbar2/>
        <div className="box1">
            <div className="box2">
            <div className="first-box">
                <div className="block1">
                    Que no.
                </div>
                <div className="block2">
                    Question Description
                </div>
                <div className="options">
                    <input className="fileIn" type="file"></input>   
                    <input className="fileIn" type="file"/>
                </div>
                <div className="options">
                    <input className="fileIn" type="file"/>
                          
                    
                    <input className="fileIn" type="file"/>
                </div>
                Text editor
                    <input type="text" placeholder="Type the answer/code here........" className="textin"></input>
                <div className="submitButton">
                    <div className="submitButtonIn">
                <BlueButton title="Previous Question"/></div>
                <div className="submitButtonIn">
            <BlueButton title="Next Question"/></div>
            </div>
            </div>

            <div className="second-box">
                <BlueButton title="All Questions"/>
                <div className="queNumber">
                <QueNo/>
                <QueNo/>
                <QueNo/>
                <QueNo/>
                <QueNo/>
                </div>
                <div className="queNumber">
                
                <QueNo/>
                <QueNo/>
                <QueNo/>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}

export default DescriQue;
;
   
