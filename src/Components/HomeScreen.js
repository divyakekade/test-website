import BlueButton from "./BlueButton";
import "./HomeScreen.css";
export default function HomeScreen(){
    return(
        <div className="home">
            <div><BlueButton title="Faculty Login"/></div>
            <div><BlueButton title="Student Login"/></div>
        </div>
    )
}