import { playerRadius, playerSpeed } from "constants/player";
import { TotemName, aboutTotem } from "constants/totems";
import { useEffect } from "react";
import styled from "styled-components";
import DialogContainer from "uiKit/DialogContainer";
import { checkIsElementsCollide } from "utils/common";

interface AboutTotemTextProps {
  playerX: number;
  handleVisitTotem: (totemName: TotemName) => void;
}

const AboutTotemText: React.FC<AboutTotemTextProps> = ({ playerX, handleVisitTotem }) => {
  const isDiplayTotemText = checkIsElementsCollide(-playerX * playerSpeed, aboutTotem.xPos, playerRadius);

  useEffect(() => {
    if (isDiplayTotemText) handleVisitTotem(aboutTotem.name);
  }, [handleVisitTotem, isDiplayTotemText]);

  if (!isDiplayTotemText) return;

  return (
    <DialogContainer>
      <AboutTotemTextContainer>
        <h1>ABOUT ME</h1>
        <p>Hi! My name is Andrey (aka "Cool Guy to drink a Beer with"). I'm a Frontend Developer .</p>
        <p>I play HARD ROCK on guitar, piano and drums (But mostly songs that girls like).</p>
        <p>I do Boxing, also tried Muai Thai and MMA. Would love to try Aikido, because I like its traditions.</p>
        <p>I like table top games (to humilate friends) and everything related to water (to humilate friends in water).</p>
        <p>I like video games (Probably you have already noticed), everything on this site drawn and coded by me.</p>
        <p>Currently I live in Serbia.</p>
        <p>If you have something to tell me, please, contact me (Contact info is in the totem on the right).</p>
      </AboutTotemTextContainer>
    </DialogContainer>
  );
};

const AboutTotemTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: 100%;
`;

export default AboutTotemText;
