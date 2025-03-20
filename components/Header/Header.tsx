import React from "react";
import { HeaderContainer, HeaderInner, ButtonContainer } from "./Header.styles";
import { ErrorMessage, RefreshButton, Title } from "..";




export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderInner>
        <Title
          text="Match Tracker"
          size={24}
          style={{ fontStyle: "italic" }}
        />
        <ButtonContainer>
          {false && (
            <ErrorMessage message="Ошибка: не удалось загрузить информацию" />
          )}
          <RefreshButton />
        </ButtonContainer>
      </HeaderInner>
    </HeaderContainer>
  );
};


