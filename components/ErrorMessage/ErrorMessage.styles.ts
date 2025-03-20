import styled from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const StyledContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 12px;
  width: 480px;
  height: 56px;
  background-color: #0f1318;
  border-radius: 8px;
  padding-horizontal: 16px;
`;
export const StyledIcon = styled(MaterialCommunityIcons)`
transition: transform 0.2s ease-in-out;
&:hover {
	transform: rotate(30deg); 
}
`;



export const StyledText = styled.Text`
  font-size: 18px;
  font-weight: 500;
  color: white;
`;

