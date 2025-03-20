import styled from "styled-components/native";

interface StatusProps {
  status: string;
}

const getBackgroundColor = (status: string) => {
  switch (status) {
    case "Live":
      return "#43AD28";
    case "Finished":
      return "#EB0237";
    case "Match preparing":
      return "#EB6402";
    default:
      return "gray"; 
  }
};

export const StatusContainer = styled.View<StatusProps>`
  width: ${(props) => (props.status === "Match preparing" ? "112px" : "92px")}; 
  height: 27px; 
  border-radius: 4px;
  background-color: ${(props) => getBackgroundColor(props.status)};
  padding: 6px;

  justify-content: center; 
  align-items: center; 
`;

export const StatusText = styled.Text`
  font-size: 12px;
  font-weight: 600; 
  line-height: 12px; 
  letter-spacing: 0px; 
  color: white;
  user-select: none;
  cursor: default;
  pointer-events: none;
text-align: center;
`;
