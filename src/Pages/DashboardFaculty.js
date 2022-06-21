import './Dashboard.css';
import {Link, useLocation} from 'react-router-dom';
import Navbar2 from '../Components/Navbar2';
import {ReactComponent as LiveExamIcon} from "../Icons/live-exam-icon.svg";
import {ReactComponent as UpcomingExamsIcon} from "../Icons/upcoming-exam-icon.svg";
import {ReactComponent as CalendarIcon} from "../Icons/calendar-icon.svg";
import {ReactComponent as ListIcon} from "../Icons/list-icon.svg";
function DashboardFaculty(){
    
    return(
    <>
    <div className='page'>
    <Navbar2 role="Faculty"/>
    <div className='outer-box'>
        <Link to="/enroll"><div className='option'><LiveExamIcon className="option-icon"/><p className='option-name'>Enroll student to course</p></div></Link>
        <div className='option'><LiveExamIcon className="option-icon"/><p className='option-name'>Live Exam</p></div>
        <div className='option'><UpcomingExamsIcon className="option-icon"/><p className='option-name'>Upcoming Exams</p></div>
        <div className='option'><CalendarIcon className="option-icon"/><p className='option-name'>Set Exam Time</p></div>
        <div className='option'><ListIcon className="option-icon"/><p className='option-name'>Your Courses</p></div>
    </div>
    </div>
    </>
    )
}
export default DashboardFaculty;