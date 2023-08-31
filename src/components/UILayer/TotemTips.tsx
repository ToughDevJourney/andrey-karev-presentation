import { playerSpeed } from "constants/player";
import { TotemName, techStackTotem } from "constants/totems";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import BaseDialogContainer from "uiKit/DialogContainer";
import leftArrowImage from "assets/arrowLeft.gif";
import rightArrowImage from "assets/arrowRight.gif";
import { checkIsElementsCollide } from "utils/common";

interface TotemTipsProps {
  visitedTotemsNumber: number;
  isOnlyAllLeftTotemsVisited: boolean;
  isOnlyAllRightTotemsVisited: boolean;
}

const TotemTips: React.FC<TotemTipsProps> = ({ visitedTotemsNumber, isOnlyAllLeftTotemsVisited, isOnlyAllRightTotemsVisited }) => {
  const timeoutRef = useRef(null);

  const [isDisplayTotemTips, setIsDisplayTotemTips] = useState(false);

  // в константу
  const isFoundAllTotems = visitedTotemsNumber === 4;

  useEffect(() => {
    if (visitedTotemsNumber === 0) return;

    setIsDisplayTotemTips(true);
    clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => setIsDisplayTotemTips(false), 5000);
  }, [visitedTotemsNumber]);

  if (!isDisplayTotemTips && isOnlyAllLeftTotemsVisited) return <RightArrow src={rightArrowImage} alt="" />;

  if (!isDisplayTotemTips && isOnlyAllRightTotemsVisited) return <LeftArrow src={leftArrowImage} alt="" />;

  if (!isDisplayTotemTips) return;

  return (
    <DialogContainer>
      <TotemTipsContainer>
        {isFoundAllTotems ? <TotemTipSuccessText>FOUND ALL TOTEMS!</TotemTipSuccessText> : <h3>FOUND {visitedTotemsNumber} OF 4 TOTEMS</h3>}
      </TotemTipsContainer>
    </DialogContainer>
  );
};

const DialogContainer = styled(BaseDialogContainer)`
  top: auto;
  bottom: 30px;
  min-width: 360px;
  right: 30px;
`;

const TotemTipsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const TotemTipSuccessText = styled.h3`
  color: #00ff00;
`;

const LeftArrow = styled.img`
  position: absolute;
  left: 70px;
  top: 70px;
  z-index: 1000;
`;

const RightArrow = styled.img`
  position: absolute;
  right: 70px;
  top: 70px;
  z-index: 1000;
`;

export default TotemTips;
