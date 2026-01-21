import { Link } from "react-router";
import "../index.css";
const Card = ({ title , path}) => {
    return (
        <div className="card">
            
            <div className="card-body">
                <h3>{title}</h3><br/><br/>
                <center><Link to={`${window.location.href}${path}`} className="card-link">
                 <span className="card-title">{"view"}</span>
                </Link></center>    

            </div>
        </div>
    );
}

export default Card;