import React from "react";
import { StatusContainer, StatusText } from "./MatchStatus.styles"; 

interface MatchStatusProps {
    status: string;
}

export const MatchStatus: React.FC<MatchStatusProps> = ({ status }) => {

    const normalizedStatus =
        status === "Ongoing" ? "Live" : status === "Scheduled" ? "Match preparing" : status;

    return (
        <StatusContainer status={normalizedStatus}>
            <StatusText>{normalizedStatus}</StatusText>
        </StatusContainer>
    );
};
