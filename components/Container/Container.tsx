import React from "react";
import { StyledContainer } from "./Container.styles"; 
import { ViewStyle } from 'react-native'; 

interface Props {
  style?: ViewStyle; 
  children: React.ReactNode;
}

export const Container: React.FC<Props> = ({ style, children }) => {
  return <StyledContainer style={style}>{children}</StyledContainer>;
};

