import React from 'react';
import './style.css';
import github from './icons/github_logo.png';
import lattes from './icons/lattes_logo.png';
import linkedin from './icons/linkedin_logo.png';
import picturi from './icons/my_picturi.jpeg';
import atencao from './icons/atencao.png';

function CurriculumPag(){

    return (
        <>
            <title>Meu Currículo</title>
            <a className="li" href="https://drive.google.com/file/d/1qlkUEtIXYYTRzvEGpB8rtxO_qQZgDt-T/view" target="_blank" rel="external noreferrer">
                <div className="section-curriculum_atencao">
                    <img className="img_atencao" src={atencao} alt={"Atenção"}/>
                    <h4>Atenção o currículo nessa seção é um modelo resumido, para ver o currículo formal click aqui.</h4>
                </div>
            </a>
            <div className="section-curriculum">
                <div className="perfil">
                    <table>
                        <tr>
                            <td>
                                <div>
                                    <img className="my_picturi" src={picturi} alt={"I"}/>
                                </div>
                            </td>
                            <td className="perfil_colum">
                                <div>
                                    <h1>Iriedson Souto Maior de Moraes Vilar</h1>
                                    <nav>
                                        <a className="li" href="https://github.com/IriedsonSouto"
                                        target="_blank" rel="external noreferrer"><img className="icon_social" src={github} alt={"GitHub"}/></a>

                                        <a className="li" href="https://www.linkedin.com/in/iriedson-souto-maior-de-moraes-vilar-457781209/"
                                        target="_blank" rel="external noreferrer"><img className="icon_social" src={linkedin} alt={"LinkedIn"}/></a>

                                        <a className="li" href="https://lattes.cnpq.br/4114667072227676"
                                        target="_blank" rel="external noreferrer"><img className="icon_social" src={lattes} alt={"Lattes"}/></a>
                                    </nav>
                                </div>
                                <h4>Sou proativo, calmo, tenho uma
                                boa capacidade de aprendizagem
                                e gosto de ajudar as demais pessoas. </h4>
                            </td>
                        </tr>
                    </table>
                </div>
                <hr></hr>
                <main className="informacoes">
                    <section>
                        <h2>Dados Pessoais:</h2>
                        <p>Brasileiro, solteiro, 28 anos<br></br>
                        Sítio Corredor. S/N<br></br>
                        Camalaú - PB<br></br>
                        Telefone: (81)9.7908-3171<br></br>
                        E-mail: iriedson.souto@academico.ifpb.edu.br</p>
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
                            <div className="section_tecnologias">
                                <div className="section_tecnologia_img">
                                    <h4>Linguagens</h4>
                                    <img className="img" src={"https://skillicons.dev/icons?i=java,js,ts&theme=light"} alt={"Linguagens"}/>
                                    <img className="img" src={"https://skillicons.dev/icons?i=python,html,css&theme=light"} alt={"Linguagens"}/>
                                </div>
                                <div className="section_tecnologia_img">
                                    <h4>Frameworks</h4>
                                    <img className="img" src={"https://skillicons.dev/icons?i=spring,nodejs,express&theme=light"} alt={"Frameworks"}/>
                                    <img className="img" src={"https://skillicons.dev/icons?i=react&theme=light"} alt={"Frameworks"}/>
                                </div>
                                <div className="section_tecnologia_img">
                                    <h4>Banco de Dados</h4>
                                    <img className="img" src={"https://skillicons.dev/icons?i=mysql,postgres,mongodb&theme=light"} alt={"Banco de Dados"}/>
                                </div>
                                <div className="section_tecnologia_img">
                                    <h4>DevOps</h4>
                                    <img className="img" src={"https://skillicons.dev/icons?i=git,github,gitlab&theme=light"} alt={"Versionamento"}/>
                                    <img className="img" src={"https://skillicons.dev/icons?i=heroku,docker&theme=light"} alt={"DevOps"}/>
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


