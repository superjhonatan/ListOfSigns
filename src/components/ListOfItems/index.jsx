import React from "react";
import "./estilo.css";


const ListOfItems = (props) => {

    return (
        <div className="boxSign">
            <div className="nameSign">
                {props.sign}
            </div>

            <img className="imageSign" src={props.image}/>

            <div className="birthPeriod">
                {props.initialDate} - {props.finalDate}
            </div>
        </div>
    );
}

export default ListOfItems;