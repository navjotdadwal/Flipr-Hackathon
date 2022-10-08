import styled from "styled-components";

export const ButtonComponent = styled.div`
    float : right;
    margin-right : 5vw;
    button {
        font-size: 18px;
        height: 65px;
        width: 250px;
        border-radius: 10px;
        border: none;
        box-shadow: 1px 1px 0px 2px rgba (0,0,0,0.3);
        background: rgb(141,217,252);
        cursor: pointer;
    }
`;

export const Header = styled.div`
    margin-left : 5vw;
    margin-top : 2rem;
    h1 {
        font-size: 28px;
        font-weight: 500;
        letter-spacing: 0;
        line-height: 1.5em;
        padding-bottom: 15px;
        position: relative;
    }
    h1:before {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        height: 5px;
        width: 55px;
        background-color: #111;
    }
    h1:after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 2px;
        height: 1px;
        width: 95%;
        max-width: 255px;
        background-color: #333;
    }
`;

export const LoginForm = styled.div`
    max-width: 500px;
    min-width: 300px;
    max-height: 700px;
    width: 30%;
    height: 60%;
    margin: 0px auto;
    background-color: #FFFFFF;
    border-radius: 25px;
`;

export const HeaderTitle = styled.div`
    text-align: center;
    font-family: 'open sans', sans-serif;
    padding: 1rem 0;
    margin: 0;
    font-size: 2rem;
`;

export const RowComponent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 1rem;
    max-width: 100%;
    button{
        border-radius: 25px;
        margin-top : 1rem;
        width: 80%;
        height: 40px;
        font-size: 1.3rem;
        color: white;
        font-weight: 700;
        background: rgb(34,193,195);
        background: linear-gradient(90deg, rgba(34,193,195,1) 0%,     rgba(253,187,45,1) 100%);
        border: 0px;
        cursor: pointer;
        transition: opacity 0.25s ease-out;
    }
    button:hover{
        opacity: 0.8;
    }
    label{
        align-self: start;
        padding-left: 2rem;
        padding-bottom: 0.5rem;
        color: rgba(187,187,187,0.9);
    }
    input{
        width: 80%;
        box-sizing: border-box;
          border: none;
        font-size: 1.3rem;
        padding-left: 0.5rem;
        padding-bottom: 1rem;
        box-shadow: inset 0px -3px 0px 0px rgba(187,187,187,0.2);
        transition: box-shadow 0.2s ease-in;
    }
    input:focus{
        box-shadow: inset 0px -3px 0px 0px rgba(34,193,195,0.7);
        outline: none;
    }
    input::-webkit-input-placeholder{
        opacity: 1;
        transition: opacity 0.25s ease-out;
    }
    input:hover::-webkit-input-placeholder
    input:focus::-webkit-input-placeholder{
        opacity: 0;
    }
`;

export const FormRadio = styled.div`
    text-align: center;
    display: flex;
    justify-content : space-evenly; 
    font-family: 'open sans', sans-serif;
    margin-top: 2.5rem;
    margin-bottom : 0.5rem;
    font-size: 1.5rem;
`;

export const OuterComponent = styled.div`
    height : 85vh;
`;

export const RowSelectComponent = styled.div`
    height : 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 1rem;
    max-width: 100%;
    label{
        align-self: start;
        padding-left: 2rem;
        padding-bottom: 0.5rem;
        color: rgba(187,187,187,0.9);
    }
    .box {
        margin-top:0.4rem;
        margin-left : 12rem;
        transform: translate(-50%, -50%);
      }
      
      .box select {
        background-color: #0563af;
        color: white;
        padding: 12px;
        width: 200px;
        border: none;
        font-size: 20px;
        box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
        -webkit-appearance: button;
        appearance: button;
        outline: none;
      }
      
      .box::before {
        content: "\f13a";
        font-family: FontAwesome;
        width: 20%;
        height: 100%;
        text-align: center;
        font-size: 28px;
        line-height: 45px;
        color: rgba(255, 255, 255, 0.5);
        background-color: rgba(255, 255, 255, 0.1);
        pointer-events: none;
      }
      
      .box:hover::before {
        color: rgba(255, 255, 255, 0.6);
        background-color: rgba(255, 255, 255, 0.2);
      }
      
`;