import styled from "styled-components/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"; 

export const PlayerInfoContainer = styled.View`
  background-color: #101318;
  padding-horizontal: 16px;
  padding-vertical: 12px;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  width: 286px;
  height: 52px;
  gap: 8px;
`;

export const AvatarIcon = styled(Icon)`
  width: 36px;
  height: 36px;
  border-radius: 18px;
`;

export const InfoContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const UsernameText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  flex-shrink: 1;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StatsContainer = styled.View`
  flex-direction: row;
  gap: 8px;
  align-items: center;
  min-width: 80px;
`;

export const StatsLabelText = styled.Text`
  color: rgba(255, 255, 255, 0.75);
  font-size: 14px;
`;

export const StatsValueText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: 600;
`;

