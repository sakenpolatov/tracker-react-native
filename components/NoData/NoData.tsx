import React from "react";
import { NoDataContainer, NoDataText } from "./NoData.styles"; 
interface NoDataProps {
  message?: string;
}

export const NoData: React.FC<NoDataProps> = ({ message }) => {
  return (
    <NoDataContainer>
      <NoDataText>{message || "Нет данных"}</NoDataText>
    </NoDataContainer>
  );
};

