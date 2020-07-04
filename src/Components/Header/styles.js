import styled from "styled-components";

export const Cabecalho = styled.header`
  .header {
    background: #04223c;
    padding:0 90px;

    display: flex;
    justify-content: space-between;

    @media (max-width:550px){
      padding:0 0;
      .open-nav{
        width:100%;
      }
    }

    nav{
        margin:auto 0;
    }

    .none, .open-nav{
      display:flex;
    }

    nav ul {
      display: flex;

      li {
          color: #fff;
          margin-left:20px;
          a {
            color: #fff;
            padding:10px 10px;
            font-size:18px;
        }
      }

      li + li{
          list-style:circle;
          list-style-position:outside;
      }
    }

    .btn-nav{
      display:none;
    }

    @media (max-width:760px){
      .btn-nav{
        display:inline;
        font-size:25px;
        border:2px solid ;
        padding:0 10px;
        border-radius:8px;
        color:#fff;
        margin:auto 0;
        z-index:1000;

        align-self:flex-start;
        background-color:#335D9E;
      }
      
      .none{
        position:absolute;
        right:-500px;
        display:none;
      }

      .head{
        display:flex;
        justify-content:space-between;
        width:100%
      }

      .open-nav{
        display:flex;
        flex-direction:column;
        width:300px;
        background:#04223c;

        position:absolute;
        right:0px;
      }
    }
  }

  @media (max-width:450px){
    .open-nav{
      width:100vw;
    }
  }

  .border-bottom{
      border-bottom:2px solid #f00;
  }

  .subheader {
    background: #1188ee;
    color: #fff;
    padding: 5px 5%;
    font-size: 14px;
  }

  .none{
      display:none;
  }
`;
