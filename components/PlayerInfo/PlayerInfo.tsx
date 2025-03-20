import React from "react";
import { Player } from "../../types/Match";
import {
  PlayerInfoContainer,
  AvatarIcon,
  InfoContainer,
  UsernameText,
  StatsContainer,
  StatsLabelText,
  StatsValueText,
} from "./PlayerInfo.styles"; 

interface PlayerInfoProps {
  player: Player;
}

export const PlayerInfo: React.FC<PlayerInfoProps> = ({ player }) => {
  return (
    <PlayerInfoContainer>
      <AvatarIcon name="account" size={36} color="white" />
      <InfoContainer>
        <UsernameText>{player.username}</UsernameText>
        <StatsContainer>
          <StatsLabelText>Убийств:</StatsLabelText>
          <StatsValueText>{player.kills}</StatsValueText>
        </StatsContainer>
      </InfoContainer>
    </PlayerInfoContainer>
  );
};

