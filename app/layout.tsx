import React from "react";
import { Stack } from "expo-router";
import styled from "styled-components/native";

export default function RootLayout() {
  return (
    <Container>
      <Stack>
        <Stack.Screen options={{ headerShown: false }} />
      </Stack>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;
