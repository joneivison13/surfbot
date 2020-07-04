import React, { useState, useEffect } from "react";
import {useHistory} from 'react-router-dom'

import Header from "../../Components/Header";

import Bg from "../../assets/bg-intro.jpg";
import Pranchas from "../../assets/foto_galeria.jpg";
import Mapa from "../../assets/mapa.jpg";
import Sandalia from "../../assets/icon_chinelo.svg";
import AguaCoco from "../../assets/icon_coco.svg";
import Boia from "../../assets/icon_boia.svg";
import Ondas from "../../assets/ondas.svg";
import Prancha from "../../assets/surfbot-icon.svg";
import BgIcons from "../../assets/bg-icones.svg";
import PranchaWhite from "../../assets/surfbot-icon-white.svg";

import api from "../../services/api";

import { Container } from "./styles";

function Home() {
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [emailContato, setEmailContato] = useState(""); 
  const [messege, setMessege] = useState(""); 
  const [matriculas, setMatricula] = useState([]);

  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await api.post("/send-email", { email }).then((messege) => {
        console.log(messege);
        alert("email enviado com sucesso!!");
        setEmail("");
      });
    } catch (err) {
      console.lof(err);
    }
  }

  async function handleSubmitContato(e) { 
    e.preventDefault()
    api.post('/contact', {nome, email:emailContato, messege}).then(() => alert('Email enviado com sucesso!'))
  }

  useEffect(() => {
    try {
      api.get("/matriculas").then((matricula) => setMatricula(matricula.data));
    } catch (err) {
      console.log(err);
    }

  }, []);
  return (
    <>
      <Header />

      <Container>
        <div className="main">
          <img
            src={Bg}
            alt=""
            width="100%"
            height="80%"
            style={{ minHeight: 200 }}
          />
          <div className="content">
            <h1>Escola de Surf</h1>

            <form onSubmit={handleSubmit}>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="Email"
                value={email}
              />
              <button type="submit">MATRICULE-SE→</button>
            </form>
          </div>
        </div>
        <br />
        <br />

        <main className="conteudo">
          <div className="images ordem2">
            <img src={Pranchas} alt="" />
            <img src={Mapa} alt="" className="image" />
          </div>

          <div className="texto">
            <h1>
              <span className="blue">Aula</span> em uma das melhores praia do{" "}
              <span className="blue"> rio</span>.
            </h1>
          </div>

          <div className="caracteristicas">
            <ul>
              <li>
                <img src={Sandalia} alt="" /> 8KM de costa
              </li>
              <li>
                <img src={AguaCoco} alt="" /> Restaurante à beira mar
              </li>
              <li>
                <img src={Boia} alt="" /> Salva vidas a cada 300 metros
              </li>
            </ul>
          </div>

          <div className="texto2">
            <p>
              Como cidade capital, abriga na zona chamada Plateau, promontório à
              beira-mar, edifícios públicos e outras construções de importância,
              como o Palácio Presidencial, construído no fim do século XIX para
              ser a residência do governador português.
            </p>
            <br />
            <p>
              Como cidade capital, abriga na zona chamada Plateau, promontório à
              beira-mar, edifícios públicos e outras construções de importância,
              como o Palácio Presidencial, construído no fim do século XIX para
              ser a residência do governador português.
            </p>
          </div>

          <div className="chegar ordem">
            <p>&#9675;Como chegar</p>

            <p>
              {" "}
              <span className="blue" style={{ color: "#00f" }}>
                →
              </span>{" "}
              Carro <span>pela via Lucio costa sentido Barra</span>
            </p>

            <p>
              {" "}
              <span className="blue" style={{ color: "#00f" }}>
                →
              </span>{" "}
              Ônibus <span>linhas 2333, 168, 138, 189 e 170</span>
            </p>

            <p>
              {" "}
              <span className="blue" style={{ color: "#00f" }}>
                →
              </span>{" "}
              Metrô <span>azul sentido Zona Sul</span>
            </p>
          </div>
        </main>

        <div className="planos">
          <img src={Ondas} alt="" />
          <h1>Aulas</h1>

          <div className="precos">
            {matriculas.map((item, index) => (
              <div className="crianca preco" key={item._id}>
                {item.level === 1 &&(
                  <img src={Prancha} alt="" />
                )}
                {item.level === 2 &&(
                  <>
                  <img src={Prancha} alt="" />
                  <img src={Prancha} alt="" />
                  </>
                )}
                {item.level === 3 &&(
                  <>
                  <img src={Prancha} alt="" />
                  <img src={Prancha} alt="" />
                  <img src={Prancha} alt="" />
                  </>
                )}

                <h1 className="uppercase">{item.tipo}</h1>

                <ul className="times">
                  {item.roles.map(roles => (
                    <li key={item.id}>{roles}</li>
                  ))}
                </ul>

                  <div className="blue">R${item.valor}/Aula</div>

                <br />
                <br />

                <button onClick={() => history.push(`/matricula/${item.level}`)}>
                  <span>MATRICULE-SE</span>
                  <span>→</span>
                </button>
              </div>
            ))}
          </div>
          <span className="gruoup-people">
            <p>Possui um grupo com mais de 3 pessoas?</p>
            <p>Entre em contato para um desconto personalizado</p>
          </span>
        </div>

        <blockquote className="citacao">
          <p>“O surf liberta as ondas de uma vida”</p>
          <cite>Regis Pereira</cite>
        </blockquote>

        <div className="contato">
          <h1>Contato</h1>

          <div className="row-contato">
            <form onSubmit={handleSubmitContato}>
              <label htmlFor="nome">
                Nome
                <input type="text" name="" id="nome" onChange={e => setNome(e.target.value)}/>
              </label>

              <label htmlFor="email">
                Email
                <input type="email" name="" id="email" onChange={e => setEmailContato(e.target.value)}/>
              </label>

              <label htmlFor="mensagem">
                Mensagem
                <textarea name="" id="mensagem" cols="30" rows="10" onChange={e => setMessege(e.target.value)}></textarea>
              </label>

              <button type="submit">ENVIAR MENSAGEM → </button>
            </form>

            <div className="local">
              <div className="endereco">
                <strong>Endereço</strong>
                <p>Praia mansa nº 47</p>
                <p>Rio de Janeiro - RJ</p>
                <p>Procure a barraca vermelha</p>
                <a href="/">VER NO MAPA → </a>
              </div>
              <div className="email-telefone">
                <strong>Email & telefone</strong>
                <p>
                  <a href="mailto:joneivison355@gmail.com">
                    joneivison355@gmail.com
                  </a>
                </p>
                <p>
                  <a href="tel:+557399953301">+55 (73) 99955-3301</a>
                </p>
              </div>
              <div className="horario">
                <strong>Horário</strong>
                <p>De Sexta á Sábado</p>
                <p>Das 06:00 as 14:00hr</p>
              </div>
            </div>

            <img src={BgIcons} alt="" className="none" />
          </div>
        </div>

        <footer className="footer">
          <p>Criado por &copy; joneivison oliveira</p>
          <img src={PranchaWhite} alt="" />
        </footer>
      </Container>
    </>
  );
}

export default Home;
