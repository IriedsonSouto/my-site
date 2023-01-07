import React from 'react';
import './style.css'
import { NavLink } from 'react-router-dom';

function SectionGroup(props){

    return (
        <NavLink className="a_ref" to={props.linkref}>
            <div className="page-section">
                <div>
                    <img className="imagem-section" src={props.icon} alt={props.altname} />
                </div>
                <div className="text-section">
                    <div className="son-text-section">
                        <h1>{props.title}</h1>
                        <h4>{props.description}</h4>
                    </div>
                </div>
            </div>
        </NavLink>
    );
}

export default SectionGroup;


