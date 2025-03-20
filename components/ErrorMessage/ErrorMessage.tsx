
import React from "react";
import {
  StyledContainer,
  StyledIcon,
  StyledText,
} from "./ErrorMessage.styles"; 

import { ViewStyle } from 'react-native';

interface ErrorMessageProps {
  message: string;
  style?: ViewStyle;
}




export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, style }) => {
  return (
    <StyledContainer style={style}>
      <StyledIcon name="alert-circle" size={26} color="white" />
      <StyledText>{message}</StyledText>
    </StyledContainer>
  );
};

