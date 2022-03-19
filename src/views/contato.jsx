import React from "react";

export default function Contato() {
    return (
        <>
            <div className="conteudo">
                <div className="w3-section">
                    <p>
                        <i className="fa fa-map-marker fa-fw w3-text-white w3-xxlarge w3-margin-right"></i> <font color="00008B">Camaçari-Bahia, Brasil</font>   
                    </p>
                    <p>
                        <i className="fa fa-phone fa-fw w3-text-white w3-xxlarge w3-margin-right"></i><font color="00008B">Telefone: 11 9999-8088</font> 
                    </p>
                    <p>
                        <i className="fa fa-envelope fa-fw w3-text-white w3-xxlarge w3-margin-right"> </i><font color="00008B"> Email: agenciadry@gmail.com</font>
                    </p>
                </div>
                <br/>
                <p><font color="00008B"> Entre em contato:</font></p>
                <form action="/pagina-processa-dados-do-form" method="get">
                    <div>
                        <label htmlFor="name">Nome:</label>
                        <input type="text" id="name" />
                    </div>
                    <div>
                        <label htmlFor="mail">E-mail:</label>
                        <input type="email" id="mail" />
                    </div>
                    <div>
                        <label htmlFor="msg">Mensagem:</label>
                        <textarea id="msg"></textarea>
                    </div>
                    <div className="button">
                        <button type="submit">Enviar sua mensagem</button>
                    </div>
                </form>
            </div>
        </>
    );
}