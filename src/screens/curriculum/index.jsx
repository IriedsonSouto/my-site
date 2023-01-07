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
            <WarningSpan lrefs="https://drive.google.com/file/d/1qlkUEtIXYYTRzvEGpB8rtxO_qQZgDt-T/view"
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
                        <p>Brasileiro, solteiro, 28 anos<br></br>
                        Sítio Corredor - S/N<br></br>
                        Camalaú - PB<br></br>
                        Telefone: (81)9.7908-3171<br></br></p>
                        <p className="text_sensitive">E-mail: iriedson.souto@academico.ifpb.edu.br</p>
                    </section>
                    <hr></hr>
                    <section>
                        <h2>Principais Interesses:</h2>
                        <p>Desenvolvimento Full-Stack, Arquitetura de Software, Gerenciamento de Projeto, Qualidade de software,<br></br>
                        Automação de processos, Ciência de dados e Segurança da informação</p>
                    </section>
                    <hr></hr>
                    <section>
                        <h2>Formação:</h2>
                        <p>Análise e Desenvolvimento de Sistemas. Instituto Federal da Paraíba - IFPB
                        , previsão de conclusão em 2023.<br></br>
                        Licenciatura Plena em Matemática. Universidade Estadual da Paraíba - UEPB
                        , conclusão em 2019.</p>
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
                                                <img className="img" src={"https://skillicons.dev/icons?i=heroku&theme=light"} alt={"Heroku"}/>
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


