import './Dashboard.css';
import Navbar2 from '../Components/Navbar2';
import {Link, useLocation} from 'react-router-dom';
import {ReactComponent as LiveExamIcon} from "../Icons/live-exam-icon.svg";
import {ReactComponent as UpcomingExamsIcon} from "../Icons/upcoming-exam-icon.svg";
import {ReactComponent as NotesIcon} from "../Icons/note-icon-blue.svg";
import {ReactComponent as ListIcon} from "../Icons/list-icon.svg";
function DashboardStundent(){
    return(
    <>
    <div className='page'>
    <Navbar2 role="Student"/>
    <div className='outer-box'>
        <div className='option'><LiveExamIcon className="option-icon"/><p className='option-name'>Live Exam</p></div>
        <div className='option'><UpcomingExamsIcon className="option-icon"/><p className='option-name'>Upcoming Exams</p></div>
        <Link to="/viewpdf"><div className='option'><NotesIcon className="option-icon"/><p className='option-name'>Recently Uploaded Notes</p></div></Link>
        <div className='option'><ListIcon className="option-icon"/><p className='option-name'>Your Courses</p></div>
    </div>
    </div>
    </>
    )
}
export default DashboardStundent;