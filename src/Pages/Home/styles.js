import styled from "styled-components";
import Bg from "../../assets/bg-intro.jpg";
import BgCite from "../../assets/bg_quote.jpg";

export const Container = styled.div`
    .blue {
      color: #00f;
    }
  .main {
    font-family: "Alice", serif;
    color: #fff;
    font-size: 2em;

    .content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 90px;
      margin-top: -100px;

      @media (max-width: 1096px) {
        flex-direction: column;
        margin-top: -200px;
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
      }
    }
  }

  .conteudo {
    padding: 70px 80px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "image texto"
      "image caracteristicas"
      "image texto2"
      "chegar texto2";
    grid-gap: 0 100px;

    .images {
      grid-area: image;
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

        img {
          margin: 0 20px 0 0;
        }
      }
    }

    .textp2 {
      grid-area: texto2;
    }

    .texto {
      grid-area: texto;

      h1 {
        font-size: 70px;
        line-height: 1;
        font-family: "Alice";
      }
    }

    .image {
      margin-top: -60px;
      margin-left: 20px;
    }
  }

  .planos {
    background-color: #eef4f9;
    text-align:center;

    .gruoup-people{
        font-size:22px;
        
        p:first-child{
            margin-top:30px;
        }
        p:last-child{
            padding-bottom:30px;
        }
    }

    .precos{
        display:flex;
        justify-content:space-around;
        margin-top:30px;
    }
    
    .preco{
        background-color:#fff;
        box-shadow:5px 5px 5px 0 #aaa;
        border-radius:8px;
        padding:0 50px 30px;
        width:30%;

        p, div.blue{
            text-align:left;
        }

        p{
            padding:5px 0;
        }

        .times{
            padding:0 50px;
        }

        .times p:first-child{
            padding:20px 0 5px;
            border-top:2px solid #EFF4F9;
            
        }
        .times p:last-child{
            padding:5px 0px 20px;
            border-bottom:2px solid #EFF4F9;
            
        }

        img{
            margin-top:-30px;
        }

        button{
            width:100%;
            padding:10px 10px;
            font-size:16px;
            font-weight:bold;
            color:#fff;
            background-color:#445566;
            border-radius:5px;
            border:none;
            display:flex;
            justify-content:space-between;
        }
    }

    >img{
        margin-top:-25px;
    }

    >h1{
        font-family:'Alice', serif;
        font-size:80px;
    }
  }

  .citacao{
      text-align:center;
      background-image:url(${BgCite});
      background-size:cover;
      background-repeat:no-repeat;
      padding:50px;
      color:#fff;

      p:first-child{
          font-size:80px;
          font-family:'Alice', serif;
          width:80%;
          margin:0 auto;
      }
      cite{
          font-weight:bolder;
          font-style:normal;
          font-size:1.2em;
      }
  }


  .contato{
      text-align:center;

      h1{
        font-family:'Alice', serif;
        font-size:80px;
    }

    .row-contato{
        display:grid;
        grid-template-columns:2fr 1fr 1fr;
        grid-gap:0 50px;
        padding:50px 0;
    }

    form, label{
        display:flex;
        flex-direction:column;
        text-align:left;
        color:#575F67;
        font-size:18px;
        font-weight:bold;
    }

    form{
        padding:0 80px;

        input, textarea{
            background:#EFF4F9;
            border:none;
            border-radius:8px;
            box-shadow:2px 2px 4px 0 #c6c6ca;
            resize:vertical;
        }

        input{
            font-size:20px;
            padding:8px;
        }

        textarea{
            min-height:50px;
        }

        button{
            margin:20px 0px;
            padding:15px;
            align-self:flex-start;

            padding:10px 10px;
            font-size:16px;
            font-weight:bold;
            color:#fff;
            background-color:#445566;
            border-radius:5px;
            border:none;
        }
    }

    .local{
        text-align:left;
        border-left:2px solid #EFF4F9;
        padding:10px 45px;

        div + div{
            border-top:2px solid #EFF4F9;
        }

        div{
            padding:10px;
        }
    }

    .endereco a{
        font-weight:bold;
        font-size:1.2em;
    }

    .email-telefone a{
        color:#551A9E;
        font-weight:bold;
    }
  }

  .footer{
      display:flex;
      justify-content:space-between;
      align-items:center;

      background:#1188EE;
      padding:20px 90px;
      color:#fff;
      font-weight:bold;
  }
`;
