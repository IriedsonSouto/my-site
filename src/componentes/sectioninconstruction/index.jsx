import React from 'react';
import './style.css';
import media from '../../screens/varieties/media/elevator_song.mp3';

function SectionConstruction(props){

    return (
        <div className="construction_section">
            <header className="header_section">
                <audio preload="auto" autoplay="true" controls>
                    <source src={media} type="audio/mpeg"></source>
                </audio>
            </header>
            <div>{props.children}</div>
        </div>
    );
}

export default SectionConstruction;


