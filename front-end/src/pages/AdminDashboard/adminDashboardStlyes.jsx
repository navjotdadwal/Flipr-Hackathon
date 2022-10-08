import styled from "styled-components";

export const OuterComponent = styled.div`
    margin : auto;
    width : 90vw;
    margin-top : 6rem;
`;

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