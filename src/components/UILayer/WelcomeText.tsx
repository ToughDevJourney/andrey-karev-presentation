import { useEffect } from "react";
import styled from "styled-components";
import DialogContainer from "uiKit/DialogContainer";

interface WelcomeTextProps {
  playerDidWalk: boolean;
  hideWelcomeText: () => void;
}

const WelcomeText: React.FC<WelcomeTextProps> = ({ playerDidWalk, hideWelcomeText }) => {
  useEffect(() => {
    if (playerDidWalk) setTimeout(hideWelcomeText, 2000);
  }, [hideWelcomeText, playerDidWalk]);

  return (
    <DialogContainer>
      <WelcomeTextContainer>
        <h1>HELLO!</h1>
        <TextInfoContainer>
          <p>My name is Andrey Karev, I am Frontend Developer</p>
          <p>This is my presentation website, feel free to walk around</p>
        </TextInfoContainer>
        <TipsContainer>
          <HiglightingTip $isHighlighted={playerDidWalk}>PRESS "A" TO WALK LEFT</HiglightingTip>
          <HiglightingTip $isHighlighted={playerDidWalk}>PRESS "D" TO WALK RIGHT</HiglightingTip>
        </TipsContainer>
      </WelcomeTextContainer>
    </DialogContainer>
  );
};

const WelcomeTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-height: 320px;
`;

const HiglightingTip = styled.h2<{ $isHighlighted: boolean }>`
  color: ${({ $isHighlighted }) => ($isHighlighted ? "#00ff00" : "white")};
`;

const TextInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const TipsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: auto;
`;

export default WelcomeText;
