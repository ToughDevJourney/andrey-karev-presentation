import { playerRadius, playerSpeed } from "constants/player";
import { TotemName, techStackTotem } from "constants/totems";
import { useEffect } from "react";
import styled from "styled-components";
import DialogContainer from "uiKit/DialogContainer";
import { checkIsElementsCollide } from "utils/common";

interface MyTechStackTotemTextProps {
  playerX: number;
  handleVisitTotem: (totemName: TotemName) => void;
}

const MyTechStackTotemText: React.FC<MyTechStackTotemTextProps> = ({ playerX, handleVisitTotem }) => {
  const isDiplayTotemText = checkIsElementsCollide(-playerX * playerSpeed, techStackTotem.xPos, playerRadius);

  useEffect(() => {
    if (isDiplayTotemText) handleVisitTotem(techStackTotem.name);
  }, [handleVisitTotem, isDiplayTotemText]);

  if (!isDiplayTotemText) return;

  return (
    <DialogContainer>
      <MyTechStackTotemTextContainer>
        <h1>MY TECH STACK</h1>
        <TextInfoContainer>
          <p>Libraries and Frameworks: React / NextJS</p>
          <p>Web Development: SCSS / Styled Components / vanilla-extract / Tailwind / Bootstrap</p>
          <p>Languages: JavaScript / TypeScript</p>
          <p>State management: Redux / MobX / RTK / Thunk / Saga</p>
          <p>Project configuration: Webpack / Babel / ESLint / Prettier</p>
          <p>Version control: Git / GitHub / BitBucket / GitLab</p>
          <p>Localization: i18n</p>
          <p>Testing: TDD / Jest / Cypress</p>
          <p>Good soft skills</p>
          <p>Skill of mentoring, I have trained junior developers from complete zero to first employment</p>
        </TextInfoContainer>
      </MyTechStackTotemTextContainer>
    </DialogContainer>
  );
};

const MyTechStackTotemTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: 100%;
`;

const TextInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export default MyTechStackTotemText;
