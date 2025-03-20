
    import React, { useState } from "react";
    import { Feather } from "@expo/vector-icons";
    import { Match } from "../../types/Match";
		import { Animated } from "react-native";
    import {
      CardContainer,
      CardHeader,
      TeamContainer,
      TeamLogo,
      TeamName,
      ScoreContainer,
      ScoreText,
      AnimatedDetails,
			ScoreStatusContainer,
    } from "./MatchCard.styles";
import { MatchDetails ,MatchStatus } from "..";

    interface MatchCardProps {
      match: Match;
    }

    export const MatchCard: React.FC<MatchCardProps> = ({ match }) => {
      const [isOpen, setIsOpen] = useState(false);
      const [heightAnim] = useState(new Animated.Value(0));

      const toggleOpen = () => {
        setIsOpen(!isOpen);

        Animated.timing(heightAnim, {
          toValue: isOpen ? 0 : 1,
          duration: 300,
          useNativeDriver: false,
        }).start();
      };

      return (
        <CardContainer>
          <CardHeader onPress={toggleOpen}>
            <TeamContainer>
              <TeamLogo>[Team Logo]</TeamLogo>
              <TeamName>{match.homeTeam.name}</TeamName>
            </TeamContainer>

						<ScoreContainer>
            <ScoreStatusContainer>
                <ScoreText>
                    {match.homeScore} : {match.awayScore}
                </ScoreText>
                <MatchStatus status={match.status} /> 
            </ScoreStatusContainer>
        </ScoreContainer>

            <TeamContainer>
              <TeamName>{match.awayTeam.name}</TeamName>
              <Feather
                name="chevron-down"
                size={24}
                color="white"
              
              />
            </TeamContainer>
          </CardHeader>

          <AnimatedDetails
            style={{
              height: heightAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 215],
              }),
            }}
          >
            {isOpen && (
              <MatchDetails homeTeam={match.homeTeam} awayTeam={match.awayTeam} />
            )}
          </AnimatedDetails>
        </CardContainer>
      );
    };
