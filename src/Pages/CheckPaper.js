import './SetExamPaper.css';
import { Link } from 'react-router-dom';
import Navbar2 from '../Components/Navbar2';
import OptionBoxBlue from '../Components/OptionBoxBlue';
import OptionBoxWhite from '../Components/OptionBoxWhite';
export default function CheckPaper(){
    return(
    <>
    <div className='set-exam-page'>
    <Navbar2/>
    <div className='set-exam-outer-box'>
        <select className="course-choice">
        <option>Select Subject</option>
        <option>Mathematics</option>
        <option>English</option>
        </select>
    <div className="set-exam-options-box">
        <Link to="/answersheetslist">
                <span>
                    <div><OptionBoxBlue name="Answersheets"/></div>
                </span>
                </Link>
                <Link to="/absentstudents">
                <span>
                    <div><OptionBoxWhite name="Absent students"/></div>
                </span>
                </Link>
            </div>
    </div>
    </div>
    </>
    )
}