import React from "react";
import './style.css';

function ButtonRef(props){

    return(
        <a id="buttom_block" href={props.linkref} target="_blank" rel="external noreferrer">
            <div className="buttom_ref">
                <h5>&gt; Repositório</h5>
            </div>
        </a>
    )
}
export default ButtonRef;
