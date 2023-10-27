import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import '../styles/webfont.css';
import { commonColors } from './commonColors';

const GlobalStyles = createGlobalStyle`
  ${reset}
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    html, body, div, span, h1, h2, h3, h4, h5, h6, p, hr, 
    a, dl, dt, dd, ol, ul, li, form, label, table{
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 16px;
        vertical-align: baseline;
        letter-spacing: 1px;
        color: ${commonColors.black};
    }
    body{
        line-height: 1;
        font-family: 'Noto Sans KR', sans-serif;
        margin-bottom: 100px;
    }
    ol, ul{
        list-style: none;
    }
    button {
        border: 0;
        cursor: pointer;
        background-color: inherit;
    }
    .main-title{
      font-weight: 900;
      color: ${commonColors.primaryMain};
      font-family: "EF_Diary", "Sans-serif";
    }
    .error-msg{
      color: ${commonColors.priceRed};
      font-size: 14px;
    }
    .success-msg{
      color: ${commonColors.success};
      font-size: 14px;
    }
`;

export default GlobalStyles;
