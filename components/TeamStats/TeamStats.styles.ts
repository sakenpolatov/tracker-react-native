import styled from "styled-components/native";

export const TeamStatsContainer = styled.View`
  background-color: #0b0e12;
  padding: 12px;
  border-radius: 8px;
  width: 100%;
`;

export const PlayersContainerScrollView = styled.ScrollView`
  flex-direction: row;
  padding-bottom: 12px;
`;

export const StatsContainer = styled.View`
  background-color: #101318;
  flex-direction: row;
  justify-content: space-between;
  padding-vertical: 12px;
  padding-horizontal: 24px;
  border-radius: 8px;
  margin-top: 16px;
`;

export const StatItemContainer = styled.View`
  flex: 1;
  align-items: center;
`;

export const StatLabelText = styled.Text`
  font-size: 14px;
  color: #fafafa66;
`;

export const StatValueText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #f2f6f6;
`;

