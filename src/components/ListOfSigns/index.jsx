import React from "react";
import Title from "../Title";
import ListOfItems from "../ListOfItems";
import aquario from "../../assets/aquario.jpg";
import peixes from "../../assets/peixes.jpg";
import aries from "../../assets/aries.jpg";
import touro from "../../assets/touro.jpg";
import gemeos from "../../assets/gemeos.jpg";
import cancer from "../../assets/cancer.jpg";
import leao from "../../assets/leao.jpg";
import virgem from "../../assets/virgem.jpg";
import libra from "../../assets/libra.jpg";
import escorpiao from "../../assets/escorpiao.jpg";
import sagitario from "../../assets/sagitario.jpg";
import capricornio from "../../assets/capricornio.jpg";
import "./estilo.css";

const ListOfSigns = () => {

    return (
        <main>
            <Title />
            <div className="List">
                <ListOfItems 
                    sign="Aquário"
                    initialDate="21/01"
                    finalDate="19/02"
                    image={aquario}
                />
                <ListOfItems 
                    sign="Peixes"
                    initialDate="20/02"
                    finalDate="20/03"
                    image={peixes}
                />
                <ListOfItems 
                    sign="Áries"
                    initialDate="21/03"
                    finalDate="20/04"
                    image={aries}
                />
                <ListOfItems 
                    sign="Touro"
                    initialDate="21/04"
                    finalDate="21/05"
                    image={touro}
                />
                <ListOfItems 
                    sign="Gêmeos"
                    initialDate="22/05"
                    finalDate="20/06"
                    image={gemeos}
                />
                <ListOfItems 
                    sign="Câncer"
                    initialDate="21/06"
                    finalDate="22/07"
                    image={cancer}
                />
                <ListOfItems 
                    sign="Leão"
                    initialDate="24/07"
                    finalDate="23/08"
                    image={leao}
                />
                <ListOfItems 
                    sign="Virgem"
                    initialDate="24/08"
                    finalDate="23/09"
                    image={virgem}
                />
                <ListOfItems 
                    sign="Libra"
                    initialDate="24/09"
                    finalDate="23/10"
                    image={libra}
                />
                <ListOfItems 
                    sign="Escorpião"
                    initialDate="24/10"
                    finalDate="22/11"
                    image={escorpiao}
                />
                <ListOfItems 
                    sign="Sagitário"
                    initialDate="23/11"
                    finalDate="21/12"
                    image={sagitario}
                />
                <ListOfItems 
                    sign="Capricórnio"
                    initialDate="22/12"
                    finalDate="20/01"
                    image={capricornio}
                />
            </div>
        </main>
    );
}

export default ListOfSigns;