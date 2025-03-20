    import styled from 'styled-components/native';
    import { Animated } from 'react-native';

    export const CardContainer = styled.View`
      width: 100%;
      background-color: #0B0E12;
      margin-vertical: 8px;
      border-radius: 8px;
      overflow: hidden;
    `;

    export const CardHeader = styled.TouchableOpacity`
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 16px;
    `;

    export const TeamContainer = styled.View`
      flex-direction: row;
      align-items: center;
      gap: 12px;
    `;

    export const TeamLogo = styled.Text`
      font-size: 16px;
      color: white;
      width: 48px;
      height: 48px;
      text-align: center;
      line-height: 48px;
      background-color: #333;
      border-radius: 24px;
    `;

    export const TeamName = styled.Text`
      font-size: 16px;
      color: white;
    `;

    export const ScoreContainer = styled.View`
      justify-content: center;
      align-items: center;
    `;

    export const ScoreText = styled.Text`
      font-size: 20px;
      font-weight: bold;
      color: white;
    `;

    export const ChevronIcon = styled.Text`
      width: 20px;
      height: 20px;
      color: white;
    `;

    export const RotatedChevron = styled(ChevronIcon)`
      transform: rotate(180deg);
    `;

    export const AnimatedDetails = styled(Animated.View)`
      overflow: hidden;
      background-color: #1c1f23;
    `;
