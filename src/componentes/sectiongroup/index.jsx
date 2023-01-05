import React from 'react';
import './style.css'
import { NavLink } from 'react-router-dom';

function SectionGroup(props){

    return (
        <NavLink className="a_ref" to={props.linkref}>
            <div className="page-section">
                <table>
                    <tr>
                        <td>
                            <div>
                                <img className="imagem-section" src={props.icon} alt={props.altname} />
                            </div>
                        </td>
                        <td>
                            <div>
                                <h1>{props.title}</h1>
                                <h4>{props.description}</h4>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        </NavLink>
    );
}

export default SectionGroup;


