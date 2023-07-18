import styled, { keyframes } from "styled-components";

const animateContainer = keyframes`
    0%{
        border-radius: 0 0 0 0;
        transform:  rotate(0deg);
    }
    25%{
        border-radius: 25%;
        transform:  rotate(45deg);
    }
    50%{
        border-radius: 50%;
        transform:  rotate(90deg);
    }
    75%{
        border-radius: 75%;
        transform:  rotate(180deg);
    }
    100%{
        
    }
`;
export const LoginContainer= styled.div`
 &.animate {
    animation: ${animateContainer} 1s linear;
    transform: rotate(180deg) translateY(400px);
    transition: 1s linear;
  }
`
const animateLogo = keyframes`
    0%{
        border-radius: 0 0 0 0;
        transform:  rotate(0deg);
    }
    25%{
        border-radius: 25%;
        transform:  rotate(45deg);
    }
    50%{
        border-radius: 50%;
        transform:  rotate(90deg);
    }
    75%{
        border-radius: 75%;
        transform:  rotate(180deg);
    }
    100%{
        transform: scale(0);
    }
`;
export const FormAnimation = styled.div`
  background: ${props=>props.background ||`url("https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60")
center/cover`};
  width: 350px;
  height: 350px;
  border: 10px solid ${(props) => props.borderColor || "#333"};
  margin: 0 auto;
  text-align: center;
  border-radius: 5px;
  box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.2);
  &.animate {
    animation: ${animateLogo} 1s linear;
    transform: rotate(180deg);
    border-radius: 50%;
    transform: scale(0);
    transition: 1s linear;
  }
`;
