import styled from "styled-components/native";

interface TitleTextProps {
  size: number;
  style?: any; 
}

export const TitleContainer = styled.View`
`;

export const TitleText = styled.Text<TitleTextProps>`
  font-size: ${(props) => props.size}px;
  color: white;
  font-weight: bold;
  /* ${props => props.style} */
`;

