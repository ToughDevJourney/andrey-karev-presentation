import { playerRadius, playerSpeed } from "constants/player";
import { TotemName, experienceTotem } from "constants/totems";
import { useEffect } from "react";
import { isMobile } from "react-device-detect";
import styled from "styled-components";
import DialogContainer from "uiKit/DialogContainer";
import { checkIsElementsCollide } from "utils/common";

interface ExperienceTotemTextProps {
  playerX: number;
  handleVisitTotem: (totemName: TotemName) => void;
}

const ExperienceTotemText: React.FC<ExperienceTotemTextProps> = ({ playerX, handleVisitTotem }) => {
  const isDiplayTotemText = checkIsElementsCollide(-playerX * playerSpeed, experienceTotem.xPos, playerRadius);

  useEffect(() => {
    if (isDiplayTotemText) handleVisitTotem(experienceTotem.name);
  }, [handleVisitTotem, isDiplayTotemText]);

  if (!isDiplayTotemText) return;

  return (
    <DialogContainer>
      <ExperienceTotemTextContainer>
        <TextHeader>MY EXPERIENCE</TextHeader>
        <p>I have 4+ years experience with React.</p>
        <ExperienceTextWrapper>
          <ExperienceTextContainer>
            <h4>JANUARY 2023 — JULY 2023</h4>
            <p>Role: Frontend Developer</p>
            <p>Project: A startup company. Creation of a streaming platform with the possibility of monetization through cryptocurrency.</p>
          </ExperienceTextContainer>
          <ExperienceTextContainer>
            <h4>JUNE 2022 — DECEMBER 2022</h4>
            <p>Role: Frontend Developer</p>
            <p>Project: Delivery service for meals and flowers. Separate applications for restaurants and orders-couriers management.</p>
          </ExperienceTextContainer>
          <ExperienceTextContainer>
            <h4>JUNE 2019 — MAY 2022</h4>
            <p>Role: Frontend Developer</p>
            <p>Project: Outsorce company, The largest Russian banks with innovative ideas and tasks.</p>
          </ExperienceTextContainer>
        </ExperienceTextWrapper>
      </ExperienceTotemTextContainer>
    </DialogContainer>
  );
};

const ExperienceTotemTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: 100%;
`;

const TextHeader = styled.h1`
  align-self: ${isMobile ? "center" : "left"};
`;
const ExperienceTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const ExperienceTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export default ExperienceTotemText;
