import React from 'react';
import './style.css'

function SectionProject(props){

    return (
        <div className="section_project">
            <header className="title_section">
                <h1>{props.title}</h1>
            </header>
            <div className="content-section">
                <div>
                    <iframe className="midia_description" src={props.linkref}
                    title="Um video" frameborder="0" allow="accelerometer; autoplay; clipboard-write;
                    encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                    </iframe>
                </div>
                <div className="description_project">
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default SectionProject;


