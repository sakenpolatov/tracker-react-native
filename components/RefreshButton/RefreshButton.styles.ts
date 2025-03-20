import styled from "styled-components/native";

interface StyledButtonProps {
  isFetching: boolean;
}

export const StyledButton = styled.TouchableOpacity<StyledButtonProps>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 204px;
  height: 56px;
  font-weight: bold;
  text-align: center;
  border-radius: 8px;
  background-color: ${({ isFetching }) =>
    isFetching ? "#701328" : "#EB0237"};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  color: white;
  user-select: none;
`;

