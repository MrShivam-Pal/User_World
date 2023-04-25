import React from "react";
import './usercard.css'
function Usercard(props){
    return(
        <>
         <div className="usercard">
            <div className="userimg">
                <img src={props.link}></img>
            </div>
            <div className="username">
                <span>{props.firstname} {props.lastname}</span>
                <button>Read More</button>
            </div>
         </div>
        </>
    );
}

export default Usercard;