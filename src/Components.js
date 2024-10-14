import styled, { css } from "styled-components";
export const Title = styled.h1`

  font-size: 3rem;
  font-weight: 600;
  text-decoration: underline;
    ${props => props.theme == 'dark' && css`
        background-color: #000000;
        color: #ffffff;
        &:hover{
            background-color: blue;
        }    
    `}
  `