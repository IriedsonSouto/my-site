import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import iconhome from '../../icons/iconhome.png';
import curriculum from '../../icons/curriculum_logo.png'
import project from '../../icons/project_logo.png'
import favicon from '../../icons/personal_logo_white2.png';
import IconGroup from '../icongroup/index';
import './style.css';
import icon from '../../icons/personal_logo_white.png';
import {FaBars} from "react-icons/fa";

const Sidebar = ({children}) => {

    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);

    const menuItem=[
        {
            path:"/",
            name:"Home",
            icon:<IconGroup icon ={iconhome}/>
        },
        {
            path:"/my-resume",
            name:"My Resume",
            icon:<IconGroup icon ={curriculum}/>
        },
        {
            path:"/projects",
            name:"Projects",
            icon:<IconGroup icon ={project}/>
        },
        {
            path:"/varieties",
            name:"Varieties",
            icon:<IconGroup icon ={favicon}/>
        }
    ]


    return(
        <>
             <header>
                <div className="top_section">
                    <FaBars className="top-faicon" onClick={toggle}/>
                </div>
                <a href="/my-site" className="navbar-brand">
                    <img className="iconhome" title = "Home Pag" src={icon} alt={"home"}/>
                </a>
            </header>
            <div className="container-side">
                <div style={{width: isOpen ? "300px" : "50px"}} className="sidebar">
                    {
                        menuItem.map((item, index)=>(
                            <NavLink to={item.path} key={index} className="link" activeclassName="active">
                                <div className="icon">{item.icon}</div>
                                <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                            </NavLink>
                        ))
                    }
                </div>
                <main>{children}</main>
            </div>
        </>
    );
};

export default Sidebar;
