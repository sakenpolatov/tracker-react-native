import React from "react";
import { View } from "react-native";
import { Team } from "../../types/Match";
import {
  MatchDetailsContainer,
  TeamsContainer,
  TeamStatsContainer,
} from "./MatchDetails.styles"; 
import { TeamStats } from "..";

interface MatchDetailsProps {
  homeTeam: Team;
  awayTeam: Team;
}

export const MatchDetails: React.FC<MatchDetailsProps> = ({
  homeTeam,
  awayTeam,
}) => {
  return (
    <MatchDetailsContainer>
      <TeamsContainer>
        <TeamStatsContainer>
          <TeamStats team={homeTeam} />
        </TeamStatsContainer>

        <TeamStatsContainer>
          <TeamStats team={awayTeam} />
        </TeamStatsContainer>
      </TeamsContainer>
    </MatchDetailsContainer>
  );
};

