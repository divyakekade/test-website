import BlueButton from "./BlueButton";
import "./HomeScreen.css";
export default function HomeScreen(){
    // const myStyle={
    //     backgroundImage: "url(/background1.png)",
    //     height:'80vh',
    //     width:'100vw',
    //     marginTop:'0px',
    //     backgroundSize: 'cover',
    //     backgroundRepeat: 'no-repeat',
    // };
    return(
        <div className="home">
            <div><BlueButton title="Faculty Login"/></div>
            <div><BlueButton title="Student Login"/></div>
        </div>
    )
}