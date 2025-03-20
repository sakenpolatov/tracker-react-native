import React from "react";
import styled from "styled-components/native";
import { Header } from "../components/Header/Header";
import { MatchList } from "../components/MatchList/MatchList"; 

export default function Home() {
  return (
    <Container>
      <Header />
      <MatchList /> 
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #06080c;
  width: 100%;
`;
