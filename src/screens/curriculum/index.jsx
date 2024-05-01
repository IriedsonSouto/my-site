import React from 'react';
import './style.css';
import WarningSpan from '../../componentes/warningspan';
import github from './icons/github_logo.png';
import lattes from './icons/lattes_logo.png';
import linkedin from './icons/linkedin_logo.png';
import picturi from './icons/my_picturi.jpeg';


function CurriculumPag(){

    return (
        <>
            <title>Meu Currículo</title>
            <WarningSpan lrefs="https://drive.google.com/file/d/1p3DHQMPCGeoh7Tlt_7EyOqXq0HJgJCmX/view"
            text="Atenção o currículo nessa seção é um modelo resumido, para ter acesso ao currículo formal click aqui.">
            </WarningSpan>
            <div className="section-curriculum">
                <div className="perfil">
                    <div>
                        <img className="my_picturi" src={picturi} alt={"I"}/>
                    </div>
                    <div className="perfil_colum">
                        <h1>Iriedson Souto Maior de Moraes Vilar</h1>
                        <nav>
                            <a className="li" href="https://github.com/IriedsonSouto"
                            target="_blank" rel="external noreferrer"><img className="icon_social" src={github} alt={"GitHub"}/></a>

                            <a className="li" href="https://www.linkedin.com/in/iriedson-souto-maior-de-moraes-vilar-457781209/"
                            target="_blank" rel="external noreferrer"><img className="icon_social" src={linkedin} alt={"LinkedIn"}/></a>

                            <a className="li" href="https://lattes.cnpq.br/4114667072227676"
                            target="_blank" rel="external noreferrer"><img className="icon_social" src={lattes} alt={"Lattes"}/></a>
                        </nav>
                        <h4>Sou proativo, calmo, tenho uma
                        boa capacidade de aprendizagem
                        e gosto de ajudar as demais pessoas. </h4>
                    </div>
                </div>
                <hr></hr>
                <main className="informacoes">
                    <section>
                        <h2>Dados Pessoais:</h2>
                        <p>Brasileiro, solteiro, 29 anos<br></br>
                        Campina Grande - PB<br></br>
                        Telefone: (81)9.7908-3171<br></br></p>
                        <p className="text_sensitive">E-mail: iriedsonsouto@outlook.com</p>
                    </section>
                    <hr></hr>
                    <section>
                        <h2>Principais Interesses:</h2>
                        <p>
                            Desenvolvimento Full-Stack;<br></br>
                            Arquitetura de Software;<br></br>
                            Gerenciamento de Projeto;<br></br>
                            Inteligência Artificial;<br></br>
                            Qualidade de software;<br></br>
                            Automação de processos;<br></br>
                            Ciência de dados;<br></br>
                            Segurança da informação.
                        </p>
                    </section>
                    <hr></hr>
                    <section>
                        <h2>Formação:</h2>
                        <p>
                            <b>Mestrado em Ciências da Computação.</b><br></br>
                            Universidade Federal de Campina Grande - UFCG, previsão de conclusão em 2026.<br></br>
                            <b>Análise e Desenvolvimento de Sistemas.</b><br></br>
                            Instituto Federal da Paraíba - IFPB, conclusão em 2023.<br></br>
                            <b>Licenciatura Plena em Matemática.</b><br></br>
                            Universidade Estadual da Paraíba - UEPB, conclusão em 2019.
                        </p>
                    </section>
                    <hr></hr>
                    <section>
                        <h2>Competencias e habilidades:</h2>
                        <div className="section_competencias">
                            <h4>Experiencias</h4>
                            <p>Conhecimento de metodologias ágeis, experiencia de trabalho em equipe, organização de ambiente, monitor na faculdade, tutor em projeto de extensão e volutuário em projeto de pesquisa com BI.</p>
                            <div className="section_technology_block">
                                <div className="section_technology_pair">
                                    <div id="section_lang"  className="section_technology_single">
                                        <h4 className="technology_font">Linguagens</h4>
                                        <div className="img_block_one">
                                            <div className="img_block_two">
                                                <img className="img" src={"https://skillicons.dev/icons?i=java&theme=light"} alt={"Java"}/>
                                                <img className="img" src={"https://skillicons.dev/icons?i=js&theme=light"} alt={"JavaScript"}/>
                                                <img className="img" src={"https://skillicons.dev/icons?i=ts&theme=light"} alt={"TypeScript"}/>
                                            </div>
                                            <div className="img_block_two">
                                                <img className="img" src={"https://skillicons.dev/icons?i=python&theme=light"} alt={"Python"}/>
                                                <img className="img" src={"https://skillicons.dev/icons?i=html&theme=light"} alt={"HTML"}/>
                                                <img className="img" src={"https://skillicons.dev/icons?i=css&theme=light"} alt={"CSS"}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="section_framworks" className="section_technology_single">
                                        <h4 className="technology_font">Frameworks</h4>
                                        <div className="img_block_one">
                                            <div className="img_block_two">
                                                <img className="img" src={"https://skillicons.dev/icons?i=spring&theme=light"} alt={"Spring"}/>
                                                <img className="img" src={"https://skillicons.dev/icons?i=nodejs&theme=light"} alt={"NodeJs"}/>
                                                <img className="img" src={"https://skillicons.dev/icons?i=express&theme=light"} alt={"Express"}/>
                                            </div>
                                            <div className="img_block_two">
                                                <img className="img" src={"https://skillicons.dev/icons?i=react&theme=light"} alt={"React"}/>
                                                <img className="img" src={"https://skillicons.dev/icons?i=angular&theme=light"} alt={"Angular"}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="section_technology_pair">
                                    <div id="section_bd" className="section_technology_single">
                                        <h4 className="technology_font">Banco de Dados</h4>
                                        <div className="img_block_one">
                                            <div className="img_block_two">
                                            <img className="img" src={"https://skillicons.dev/icons?i=mysql&theme=light"} alt={"MySql"}/>
                                            <img className="img" src={"https://skillicons.dev/icons?i=postgres&theme=light"} alt={"Postgres"}/>
                                            <img className="img" src={"https://skillicons.dev/icons?i=mongodb&theme=light"} alt={"MongoDB"}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="section_devops" className="section_technology_single">
                                        <h4 className="technology_font">DevOps</h4>
                                        <div className="img_block_one">
                                            <div className="img_block_two">
                                                <img className="img" src={"https://skillicons.dev/icons?i=git&theme=light"} alt={"Git"}/>
                                                <img className="img" src={"https://skillicons.dev/icons?i=github&theme=light"} alt={"GitHub"}/>
                                                <img className="img" src={"https://skillicons.dev/icons?i=gitlab&theme=light"} alt={"GitLab"}/>
                                            </div>
                                            <div className="img_block_two">
                                                <img className="img" src={"https://skillicons.dev/icons?i=docker&theme=light"} alt={"Docker"}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
}

export default CurriculumPag;


