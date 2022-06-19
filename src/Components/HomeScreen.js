import BlueButton from "./BlueButton";
import { Link } from "react-router-dom";
import "./HomeScreen.css";
export default function HomeScreen() {
    // const myStyle={
    //     backgroundImage: "url(/background1.png)",
    //     height:'80vh',
    //     width:'100vw',
    //     marginTop:'0px',
    //     backgroundSize: 'cover',
    //     backgroundRepeat: 'no-repeat',
    // };
    return (       
        <div className="homes">
            <Link to="/signup"><div><BlueButton title="Faculty Login"/></div></Link>
            <Link to="/signup"><div><BlueButton title="Student Login"/></div></Link>
        </div>
 
    )
}