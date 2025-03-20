import React from "react";
import { TitleContainer, TitleText } from "./Title.styles";


interface TitleProps {
  text: string;
  size?: number;
  style?: any;
}

export const Title: React.FC<TitleProps> = ({ text, size = 32, style }) => {
  return (
    <TitleContainer>
      <TitleText size={size} style={style}>{text}</TitleText>
    </TitleContainer>
  );
};

