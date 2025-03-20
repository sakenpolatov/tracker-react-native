import React from "react";
import { useWebSocket } from "../../hooks/useWebSocket";
import {
  LoadingText,
  ListContainer,
} from "./MatchList.styles"; 
import { Match } from "../../types/Match"; 
import { Container, MatchCard, NoData } from "..";

export const MatchList = () => {
  const { matches, error } = useWebSocket();

  if (error) {
    return (
      <Container>
        <NoData message="Ошибка соединения с WebSocket" />
      </Container>
    );
  }

  if (!matches) {
    return (
      <Container>
        <LoadingText>Загрузка...</LoadingText>
      </Container>
    );
  }

  return (
    <Container>
      <ListContainer
        data={matches}
        keyExtractor={(item: Match) => item.title}
        renderItem={({ item }) => {
          return <MatchCard match={item as Match} />;
        }}
        contentContainerStyle={{ paddingHorizontal: 12 }}
      />
    </Container>
  );
};

