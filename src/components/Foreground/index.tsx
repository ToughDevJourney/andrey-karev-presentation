import { ReactComponent as BaseRightBorderSVG } from "assets/rightBorder.svg";
import { ReactComponent as BaseLeftBorderSVG } from "assets/leftBorder.svg";
import styled, { css } from "styled-components";
import { useEffect } from "react";

interface ForegroundLayerProps {
  playerX: number;
}

const ForegroundLayer: React.FC<ForegroundLayerProps> = ({ playerX }) => {
  useEffect(() => {
    console.log("asdadad");
  }, [playerX]);

  return (
    <ForegroundLayerContainer $playerX={playerX}>
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

  // Вынести в константу
  z-index: 1000;
  height: 100vh;
`;

// возможно, стоит заменить это на константы
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

// Вывести картинку
// Не забыть про лианы
// Добавить передвижение
// Добавить логику вывода инфы
// Добавить музыку и звуки
// Выкатить на vps

// Нет необходимости делать центрирование, потому что другие элементы все равно будут выводиться
