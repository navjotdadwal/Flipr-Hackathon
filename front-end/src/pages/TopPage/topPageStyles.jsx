import styled from "styled-components";

export const OuterComponent = styled.div`
    background: linear-gradient(135deg, rgba(34,193,195,1) 0%,rgba(253,187,45,1) 100%);
    font-family: "work sans";
    padding-top:3.5vh;
    padding-bottom:4vh;
`;

export const LoginForm = styled.div`
    max-width: 500px;
    min-width: 300px;
    max-height: 700px;
    width: 30%;
    height: 60%;
    margin: 100px auto;
    background-color: #FFFFFF;
    border-radius: 25px;
`;

export const HeaderTitle = styled.div`
    text-align: center;
    font-family: 'open sans', sans-serif;
    padding: 2rem 0;
    margin: 0;
    font-size: 2rem;
`;

export const RowComponent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 2rem;
    max-width: 100%;
    button{
        border-radius: 25px;
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
        padding-left: 4.5rem;
        padding-bottom: 0.5rem;
        color: rgba(187,187,187,0.9);
    }
    input{
        width: 80%;
        box-sizing: border-box;
          border: none;
        font-size: 1.3rem;
        padding-left: 1.5rem;
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