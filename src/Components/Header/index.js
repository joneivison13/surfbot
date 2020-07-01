import React from "react";

import { Cabecalho } from "./styles";

import Logo from "../../assets/surfbot-logo.svg";

function Header({notmostsubheader}) {
  return (
    <Cabecalho>
      <div className={!notmostsubheader ? ("subheader") : ('none')}>
        <p>Aulas na Praia Mansa de Sexta á Domingo das 6:00 ás 14:00</p>
      </div>
      
      <div className="header">
        <a href="/">
          <img src={Logo} alt="" />
        </a>

        <nav>
          <ul>
            <li>
              <a href="/">Praia</a>
            </li>
            <li>
              <a href="/">Aulas</a>
            </li>
            <li>
              <a href="/">Contato</a>
            </li>
            <li className="border-bottom">
              <a href="/">Matricula-se</a>
            </li>
          </ul>
        </nav>
      </div>
    </Cabecalho>
  );
}

export default Header;
