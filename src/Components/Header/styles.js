import styled from "styled-components";

export const Cabecalho = styled.header`
  .header {
    background: #04223c;
    padding:0 90px;

    display: flex;
    justify-content: space-between;

    nav{
        margin:auto 0;
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
