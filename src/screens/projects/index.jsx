import React from 'react';
import './style.css'
import WarningSpan from '../../componentes/warningspan';
import SectionProject from '../../componentes/sectionproject/index'
import ButtonRef from '../../componentes/buttomgroup';

function ProjectsPag(){

    return (
        <>
            <title>Projects</title>
            <WarningSpan lrefs="https://github.com/IriedsonSouto?tab=repositories"
            text="Nessa seção, selecionei projetos que acho interessante descrever um pouco mais, caso queira ver o repositório com mais projetos click aqui.">
            </WarningSpan>
            <div className="projects">
                <SectionProject title="Goat Medicine Back" linkref="https://www.youtube.com/embed/dRd2jeMIlUc" altname="curriculum logo">
                    <h3>O projeto foi desenvolvido como requisito da disciplina de DAC.</h3>
                    <hr/>
                    <h4>
                        A API utiliza como tecnologias, toda a Stack Spring (Spring JPA, Spring JWT, Spring MVC, Spring WEB)
                        tem como objetivo gerenciar o status de saúde da criação animal de uma propriedade.
                    </h4>
                    <ButtonRef linkref="https://github.com/IriedsonSouto/back-dac-project"></ButtonRef>
                </SectionProject>
                <SectionProject title="Goat Medicine Front" linkref="https://www.youtube.com/embed/0I8sZLzXqhc" altname="curriculum logo">
                    <h3>O projeto foi desenvolvido como requisito da disciplina de DAC.</h3>
                    <hr/>
                    <h4>
                        O front utiliza react e bibliotecas NodeJs para compor as funcionalidades (React-Rout, Axios, Bootstrap)
                        e se propõe consumir a API antes desenvolvida de modo fácil e intuitivo para o cliente.
                    </h4>
                    <ButtonRef linkref="https://github.com/IriedsonSouto/front-dac-project"></ButtonRef>
                </SectionProject>
                <SectionProject title="Orange Evolution Back" linkref="https://www.youtube.com/embed/Q5qvn1_jvTo" altname="curriculum logo">
                    <h3>O projeto é o resultado de um hackathon realizado em grupo durante 15 dias.</h3>
                    <hr/>
                    <h4>
                        Fui o responsável em projetar e organizar o back, do qual foi desenvolvido utilizando JS com NodeJs e bibliotecas
                        tais quais Express, Jsonwebtoken, Bcrypt e Mongoose. O objetivo era em criar uma plataforma de trilhas de estudo
                        referente a conteúdos de tecnologia.
                    </h4>
                    <ButtonRef linkref="https://github.com/Squad-23/orange-evolution-backend"></ButtonRef>
                </SectionProject>
                <SectionProject title="Beauty Salon" linkref="https://www.youtube.com/embed/wHHq33bkrkY" altname="curriculum logo">
                    <h3>O projeto foi desenvolvido como requisito da disciplina de POO.</h3>
                    <hr/>
                    <h4>
                        É uma aplicação simples, que utiliza Java puro com alguns frameworks (Itextpdf, Mailapi, Xstream), apesar de ser simples
                        essa aplicação é um xodó por ter sido meu primeiro projeto, a mesma consiste em gerenciar o atendimento e serviços de um
                        salão de beleza.
                    </h4>
                    <ButtonRef linkref="https://github.com/IriedsonSouto/ProjetoSalao"></ButtonRef>
                </SectionProject>
                <SectionProject title="Sistema de Horários" linkref="https://www.youtube.com/watch?v=nEJjcApwXZw" altname="curriculum logo">
                    <h3>Essa aplicação é um projeto que está sendo desenvolvida e será utilizada pelo IFPB-Monteiro.</h3>
                    <hr/>
                    <h4>
                        É uma aplicação mais elaborada que utiliza padrões de desenvolvimento de mercado como MVC, ideologia DDD e clear code, também
                        faz uso do Java com Spring e suas ferramentas e tem como objetivo facilitar a criação e gerenciamento dos horários das disciplinas
                        do IFPB.
                    </h4>
                    <h6>Como o projeto ainda está em desenvolvimento e passa pela mão de varias pessoas, não disponibilizarei o repositório.</h6>
                </SectionProject>
            </div>
        </>
    );
}

export default ProjectsPag;


