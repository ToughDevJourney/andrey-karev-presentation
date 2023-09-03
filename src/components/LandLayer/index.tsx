import { ReactComponent as BaseLandSVG } from "assets/land.svg";
import { ReactComponent as BaseLianasSVG } from "assets/lianas.svg";
import statueImage from "assets/statue.gif";
import TotemsList from "./TotemsList";
import { playerSpeed } from "constants/player";
import styled, { css } from "styled-components";

interface LandLayerProps {
  playerX: number;
}

const LandLayer: React.FC<LandLayerProps> = ({ playerX }) => {
  return (
    <LandLayerContainer $playerX={playerX * playerSpeed}>
      <LianasSVG />
      <StatueImage src={statueImage} alt="" />
      <TotemsList />
      <LandSVG />
    </LandLayerContainer>
  );
};

const LandLayerContainer = styled.div.attrs<{ $playerX: number }>(({ $playerX }) => ({
  style: {
    transform: `translateX(${$playerX}px)`,
  },
}))`
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 0;
  z-index: ${({ theme }) => theme.zIndex.land};
  height: 780px;
`;

const LandSVG = styled(BaseLandSVG)`
  position: absolute;
  height: 780px;
`;

const LianasSVG = styled(BaseLianasSVG)`
  position: absolute;
  height: 740px;
  bottom: 300px;
`;

const commonLandStyles = css`
  position: absolute;
  bottom: 134px;
`;

const StatueImage = styled.img`
  ${commonLandStyles};
`;

export default LandLayer;
