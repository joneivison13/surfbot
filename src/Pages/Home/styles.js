import styled from "styled-components";
import BgLocal from "../../assets/bg-icones.svg";
import BgCite from "../../assets/bg_quote.jpg";

export const Container = styled.div`
  .blue {
    color: #00f;
  }

  .uppercase{
    text-transform:uppercase;
  }

  textarea{
    font-family: "Nunito", sans-serif;
    font-size:20px;
  }
  .main {
    color: #fff;
    font-size: 2em;

    .content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 90px;
      margin-top: -100px;

      @media (max-width: 660px) {
        padding:0;
        h1 {
          margin-top: 50px;
          font-size: 30px;
        }
      }

      @media (max-width: 1096px) {
        width: 80%;
        flex-direction: column;
        margin: -200px auto 0;
        font-size: 20px;
      }

      form {
        input {
          font-size: 22px;
          padding: 10px;
          border-radius: 5px 0 0 5px;
          border: none;
        }

        button {
          font-size: 20px;
          padding: 12px 12px 11px;
          border-radius: 0px 5px 5px 0px;
          border: none;
          background-color: #f00;
          color: #fff;
          font-weight: bold;
        }

        @media (max-width: 840px) {
          display: flex;
          flex-direction: column;
          width: 100%;

          input {
            border-radius: 5px 5px 0 0px;
            font-size: 15px;
          }

          button {
            border-radius: 0 0 5px 5px;
            font-size: 18px;
          }
        }
      }
    }
  }

  .conteudo {
    padding: 70px 80px;
    display: grid;
    grid-template-columns: minmax(300px, 1fr) 1fr;
    grid-template-areas:
      "image texto"
      "image caracteristicas"
      "chegar texto2"
      "chegar texto2";
    grid-gap: 50px 8%;

    @media (max-width: 660px) {
        padding:0;
      }

    .images {
      grid-area: image;

      img {
        width: 100%;
      }
    }

    .chegar {
      grid-area: chegar;
      grid-gap: 0;

      p > span {
        color: #c9d7e4;
      }
    }

    .caracteristicas {
      grid-area: caracteristicas;

      ul li:first-child {
        border-top: 2px solid #eff4f9;
      }

      ul li {
        border-bottom: 2px solid #eff4f9;
        color: #5b636b;
        font-size: 25px;
        padding: 30px;

        display: flex;
        align-items: center;
        flex-wrap:wrap;

        img {
          margin: 0 20px 0 0;
        }
      }
    }

    .texto2 {
      grid-area: texto2;
    }

    .texto {
      grid-area: texto;

      @media (max-width: 660px) {
        padding:0;
      }
      
      h1 {
        font-size: 70px;
        line-height: 1;
        font-family: "Alice";
          @media (max-width: 660px) {
            font-size: 30px;
            width:100%;
            text-align:center;
          }
        
      }
    }

    .image {
      margin-top: -60px;
      margin-left: 20px;
    }

    @media (max-width: 1000px) {
      display: flex;
      flex-direction: column;
      max-width: 80%;
      margin: 0 auto;

      .texto2 {
        padding: 20px 0px;
      }

      .texto {
        text-align: center;
        padding: 25px;
      }
    }
  }

  .planos {
    background-color: #eef4f9;
    text-align: center;

    @media (max-width:660px){
      margin:100px 0 0;
    }

    .gruoup-people {
      font-size: 22px;

      p:first-child {
        margin-top: 30px;
      }
      p:last-child {
        padding-bottom: 30px;
      }
    }

    .precos {
      display: flex;
      justify-content: space-around;
      margin-top: 30px;
      flex-wrap:wrap;
    }

    .preco {
      min-width:300px;
      background-color: #fff;
      box-shadow: 5px 5px 5px 0 #aaa;
      border-radius: 8px;
      padding: 0 50px 30px;
      width: 30%;
      flex-grow:1;
      margin:20px;

      p,
      div.blue {
        text-align: left;
      }

      p {
        padding: 5px 0;
      }

      .times {
        padding: 0 50px;

        li{
          text-align:left;
          list-style:circle;
        }
      }

      .times li:first-child {
        padding: 20px 0 5px;
        border-top: 2px solid #eff4f9;
      }
      .times li:last-child {
        padding: 5px 0px 20px;
        border-bottom: 2px solid #eff4f9;
      }

      img {
        margin-top: -30px;
      }

      button {
        width: 100%;
        padding: 10px 10px;
        font-size: 16px;
        font-weight: bold;
        color: #fff;
        background-color: #445566;
        border-radius: 5px;
        border: none;
        display: flex;
        justify-content: space-between;
      }
    }

    > img {
      margin-top: -25px;
    }

    > h1 {
      font-family: "Alice", serif;
      font-size: 80px;
    }
  }

  .citacao {
    text-align: center;
    background-image: url(${BgCite});
    background-size: cover;
    background-repeat: no-repeat;
    padding: 50px;
    color: #fff;


    p:first-child {
      font-size: 80px;
      font-family: "Alice", serif;
      width: 80%;
      margin: 0 auto;
      @media (max-width:700px){
        font-size:50px
      }
      @media (max-width:500px){
        font-size:30px
      }
      @media (max-width:300px){
        font-size:20px
      }
    }
    cite {
      font-weight: bolder;
      font-style: normal;
      font-size: 1.2em;
    }
  }

  .contato {
    text-align: center;

    @media (max-width: 778px) {
      max-width: 50%;
      margin: 0 auto;
    }

    h1 {
      font-family: "Alice", serif;
      font-size: 80px;
      @media (max-width: 660px) {
            font-size: 50px;
          }
    }

    .row-contato {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr;
      grid-gap: 0 50px;
      padding: 50px 0;

      @media (max-width: 778px) {
        display: flex;
        flex-direction: column;
      }
    }

    form,
    label {
      display: flex;
      flex-direction: column;
      text-align: left;
      color: #575f67;
      font-size: 18px;
      font-weight: bold;
    }

    form {
      padding: 0 80px;

      @media (max-width: 778px) {
        padding: 0;
      }

      input,
      textarea {
        background: #eff4f9;
        border: none;
        border-radius: 8px;
        box-shadow: 2px 2px 4px 0 #c6c6ca;
        resize: vertical;
      }

      input {
        font-size: 20px;
        padding: 8px;
      }

      textarea {
        min-height: 50px;
      }

      button {
        margin: 20px 0px;
        padding: 15px;
        align-self: flex-start;

        padding: 10px 10px;
        font-size: 16px;
        font-weight: bold;
        color: #fff;
        background-color: #445566;
        border-radius: 5px;
        border: none;
      }
    }

    .local {
      text-align: left;
      border-left: 2px solid #eff4f9;
      padding: 10px 45px;

      @media (max-width: 778px) {
        border: none;
        padding: 0;
        background-image: url(${BgLocal});
      }

      div + div {
        border-top: 2px solid #eff4f9;
      }

      div {
        padding: 10px;
      }
    }

    .endereco a {
      font-weight: bold;
      font-size: 1.2em;
    }

    .email-telefone a {
      color: #551a9e;
      font-weight: bold;
    }

    @media (max-width: 1020px) {
      .none {
        display: none;
      }
    }
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    background: #1188ee;
    padding: 20px 90px;
    color: #fff;
    font-weight: bold;
  }
`;
