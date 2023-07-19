import styled, { keyframes } from "styled-components";


export const BudgetStyle = styled.h3`
display: flex; justify-content: end;
align-items: center ;
color:#fff;
gap: 20px;
span{
    font-weight: bold;
}
 input{
    outline: none;
    border: none;
    background:inherit;
    text-align: right;
    width: 100px;
    border-bottom: 1px solid #9999;
    font-size: 1.3rem;
    font-weight:bold;
    padding: 0.1rem .5rem;
    color: inherit;
    &:focus{
        background: #fff;
        color:#000
    }
 }
`;
