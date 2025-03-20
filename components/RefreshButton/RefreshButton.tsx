import React from "react";
import {
  StyledButton,
  ButtonText,
} from "./RefreshButton.styles"; 

const useMatches = () => {
  return { refetch: () => {}, isFetching: false };
};

export const RefreshButton = () => {
  const { refetch, isFetching } = useMatches();

  return (
    <StyledButton
      onPress={() => refetch()}
      disabled={isFetching}
      isFetching={isFetching}
    >
      <ButtonText>Обновить</ButtonText>
    </StyledButton>
  );
};

