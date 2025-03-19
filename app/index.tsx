import React from "react";
import styled from "styled-components/native";

export default function HomeScreen() {
  return (
    <Container>
      <Title>Главная страница</Title>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;
