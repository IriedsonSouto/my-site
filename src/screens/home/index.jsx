import React from 'react';
import './style.css';
import SectionGroup from '../../componentes/sectiongroup/index'
import Curriculum from '../../icons/curriculum_logo2.png';
import Project from '../../icons/project_logo_black.png';
import Mylogo from '../../icons/personal_logo_black3.png';

function HomePag(){

    return (
        <>
            <title>Inicío</title>
            <div className="sections">
                <SectionGroup linkref="/my-resume" icon={Curriculum} altname="curriculum logo" title="Meu Currículo" description="Breve resumo de habilidades e competências."></SectionGroup>
                <SectionGroup linkref="/projects" icon={Project} altname="project logo" title="Projetos" description="Repositório de projetos."></SectionGroup>
                <SectionGroup linkref="/varieties" icon={Mylogo} altname="curriculum logo" title="Variedades" description="Em breve assuntos variados relacionado a tecnologia."></SectionGroup>
            </div>
        </>
    );
}

export default HomePag;


