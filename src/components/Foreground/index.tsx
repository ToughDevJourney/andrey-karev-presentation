import { ReactComponent as BaseRightBorderSVG } from "assets/rightBorder.svg";
import { ReactComponent as BaseLeftBorderSVG } from "assets/leftBorder.svg";
import styled, { css } from "styled-components";
import { playerSpeed } from "constants/player";

interface ForegroundLayerProps {
  playerX: number;
}

const ForegroundLayer: React.FC<ForegroundLayerProps> = ({ playerX }) => {
  return (
    <ForegroundLayerContainer $playerX={playerX * playerSpeed}>
      <LeftBorderSVG />
      <RightBorderSVG />
    </ForegroundLayerContainer>
  );
};

const ForegroundLayerContainer = styled.div.attrs<{ $playerX: number }>(({ $playerX }) => ({
  style: {
    transform: `translateX(${$playerX}px)`,
  },
}))`
  display: flex;
  justify-content: center;
  position: fixed;

  z-index: ${({ theme }) => theme.zIndex.foreground};
  height: 100vh;
`;

const commonLandStyles = css`
  position: absolute;
  height: 100vh;
`;

const RightBorderSVG = styled(BaseRightBorderSVG)`
  ${commonLandStyles};

  transform: translateX(2800px);
`;

const LeftBorderSVG = styled(BaseLeftBorderSVG)`
  ${commonLandStyles};

  transform: translateX(-2800px);
`;

export default ForegroundLayer;
