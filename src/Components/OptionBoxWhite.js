import "./OptionBoxWhite.css";
export default function OptionBoxWhite(props){
    return(
        <div className="outer-box-white">
            <div className="inner-box-white">
                <h4>{props.name}</h4>
            </div>
        </div>
    )
}