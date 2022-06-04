import styled from "styled-components";

export const ButtonStyled = styled.button`
color: ${props => props.theme.pallete.typography.primary};
width: 100%;
padding: 9px;
margin: 0 0 22px;
border-radius: 5px;
background-color: ${props => props.theme.pallete.core.primary};
border: 0;
`