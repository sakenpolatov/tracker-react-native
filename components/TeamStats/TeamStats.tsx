import React from "react";
import { Team } from "../../types/Match";
import {
  TeamStatsContainer,
  PlayersContainerScrollView,
  StatsContainer,
  StatItemContainer,
  StatLabelText,
  StatValueText,
} from "./TeamStats.styles";
import { PlayerInfo } from "..";

interface TeamStatsProps {
  team: Team;
}

export const TeamStats: React.FC<TeamStatsProps> = ({ team }) => {
  return (
    <TeamStatsContainer>
      <PlayersContainerScrollView horizontal>
        {team.players.map((player) => (
          <PlayerInfo key={player.username} player={player} />
        ))}
      </PlayersContainerScrollView>
      <StatsContainer>
        <StatItemContainer>
          <StatLabelText>Points:</StatLabelText>
          <StatValueText>{team.points}</StatValueText>
        </StatItemContainer>
        <StatItemContainer>
          <StatLabelText>Место:</StatLabelText>
          <StatValueText>{team.place}</StatValueText>
        </StatItemContainer>
        <StatItemContainer>
          <StatLabelText>Всего убийств:</StatLabelText>
          <StatValueText>{team.total_kills}</StatValueText>
        </StatItemContainer>
      </StatsContainer>
    </TeamStatsContainer>
  );
};

