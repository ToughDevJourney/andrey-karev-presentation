import { ReactComponent as BaseBackgroundSVG1 } from "assets/background1.svg";
import { ReactComponent as BaseBackgroundSVG2 } from "assets/background2.svg";
import { ReactComponent as BaseBackgroundSVG3 } from "assets/background3.svg";
import { ReactComponent as BaseBackgroundSVG4 } from "assets/background4.svg";
import styled, { css } from "styled-components";

interface BackgroundLayerProps {
  playerX: number;
}

const BackgroundLayer: React.FC<BackgroundLayerProps> = ({ playerX }) => {
  return (
    <BackgroundLayerContainer>
      <BackgroundContainer $playerX={playerX}>
        <BackgroundSVG1 />
      </BackgroundContainer>
      <BackgroundContainer $playerX={playerX * 2}>
        <BackgroundSVG2 />
      </BackgroundContainer>
      <BackgroundContainer $playerX={playerX * 3}>
        <BackgroundSVG3 />
      </BackgroundContainer>
      <BackgroundContainer $playerX={playerX * 4}>
        <BackgroundSVG4 />
      </BackgroundContainer>
    </BackgroundLayerContainer>
  );
};

const BackgroundLayerContainer = styled.div``;

// wrapping svg images with transparency in divs highly improves performance
const BackgroundContainer = styled.div.attrs<{ $playerX: number }>(({ $playerX }) => ({
  style: {
    transform: `translateX(${$playerX}px)`,
  },
}))`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;

  height: 100vh;
`;

const commonBackgroundStyles = css`
  position: absolute;
  height: 100%;
`;

const BackgroundSVG1 = styled(BaseBackgroundSVG1)`
  ${commonBackgroundStyles};
`;

const BackgroundSVG2 = styled(BaseBackgroundSVG2)`
  ${commonBackgroundStyles};
`;

const BackgroundSVG3 = styled(BaseBackgroundSVG3)`
  ${commonBackgroundStyles};
`;

const BackgroundSVG4 = styled(BaseBackgroundSVG4)`
  ${commonBackgroundStyles};
`;

export default BackgroundLayer;
