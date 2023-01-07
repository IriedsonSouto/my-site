import React from 'react';
import './style.css'
import warningImg from '../../icons/atencao.png';

function WarningSpan(props){

    return (
        <>
            <a className="li" href={props.lrefs} target="_blank" rel="external noreferrer">
                <div className="section-curriculum_atencao">
                    <div className="table_atencao">
                        <div className="cel_atencao">
                            <img className="img_atencao" src={warningImg} alt={"Atenção"}/>
                        </div>
                    </div>
                    <h4>{props.text}</h4>
                </div>
            </a>
        </>
    );
}

export default WarningSpan;


