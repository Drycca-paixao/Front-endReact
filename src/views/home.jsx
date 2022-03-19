import React from "react";

export default function Home() {
    return (
        <>
            <div className="conteudo">
                <h1>CAMAÇARI-BAHIA</h1>
                <div className="principal d-flex justify-content-center">            
                    <div className="linha">
                        <h2>Arembepe</h2>
                        <img className="m-2" src= "..//img/Arembepe1.jpeg"alt=""/>
                        <img className="m-2" src= "..//img/Arembepe2.jpeg"alt=""/>
                    </div>
                    <div className="linha">
                        <h2>Barra do Jacuípe</h2>
                        <img className="m-2" src="..//img/BarraJacuipe1.jpeg"alt=""/>
                        <img className="m-2" src="..//img/BarraJacuipe6.jpeg"alt=""/>
                    </div>
                    <div className="linha">
                        <h2>Itacimirim</h2>
                        <img className="m-2" src="..//img/Itacimirim5.jpg"alt=""/>
                        <img className="m-2" src="..//img/Itacimirim6.jpg"alt=""/>
                    </div>
                </div>
            </div>
        </>
    );
}