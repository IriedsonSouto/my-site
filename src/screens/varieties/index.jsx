import React from 'react';
import './style.css';
import myPicture from './media/ucanbaby.png';
import palete from './media/page_construction.png';
import sign from './media/page_construction2.png';
import SectionConstruction from '../../componentes/sectioninconstruction/index'


function VarietiesPag(){

    return (
        <div className="Pag">
            <title>Varieties</title>
            <SectionConstruction>
                <h1 className="font_hello">ALÔOOOOOO POTÊNCIA!!!</h1>
                <div className="contete_section">
                    <div className="imagem">
                        <img className="my_picture" src={myPicture} alt={"Atenção"}/>
                    </div>
                    <div>
                        <div className="imagem">
                            <img className="img_palete" src={palete} alt={"Atenção"}/>
                            <img className="img_sign" src={sign} alt={"Atenção"}/>
                        </div>
                    </div>
                </div>
            </SectionConstruction>
        </div>
    );
}

export default VarietiesPag;


