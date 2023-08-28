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
      <BackgroundSVG1 $playerX={playerX} />
      <BackgroundSVG2 $playerX={playerX} />
      <BackgroundSVG3 $playerX={playerX} />
      <BackgroundSVG4 $playerX={playerX} />
    </BackgroundLayerContainer>
  );
};

const BackgroundLayerContainer = styled.div`
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

// паровозы из одинаковых из аттрибутов можно вынести в функцию
const BackgroundSVG1 = styled(BaseBackgroundSVG1).attrs<{ $playerX: number }>(({ $playerX }) => ({
  style: {
    transform: `translateX(${$playerX}px)`,
  },
}))`
  ${commonBackgroundStyles};
`;

const BackgroundSVG2 = styled(BaseBackgroundSVG2).attrs<{ $playerX: number }>(({ $playerX }) => ({
  style: {
    transform: `translateX(${$playerX}px)`,
  },
}))`
  ${commonBackgroundStyles};
`;

const BackgroundSVG3 = styled(BaseBackgroundSVG3).attrs<{ $playerX: number }>(({ $playerX }) => ({
  style: {
    transform: `translateX(${$playerX}px)`,
  },
}))`
  ${commonBackgroundStyles};
`;

const BackgroundSVG4 = styled(BaseBackgroundSVG4).attrs<{ $playerX: number }>(({ $playerX }) => ({
  style: {
    transform: `translateX(${$playerX}px)`,
  },
}))`
  ${commonBackgroundStyles};
`;

export default BackgroundLayer;

// Вывести картинку
// Добавить передвижение
// Добавить логику вывода инфы
// Выкатить на vps

// Нет необходимости делать центрирование, потому что другие элементы все равно будут выводиться
