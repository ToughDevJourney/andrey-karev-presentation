import { ReactComponent as BaseBackgroundSVG1 } from "assets/background1.svg";
import { ReactComponent as BaseBackgroundSVG2 } from "assets/background2.svg";
import { ReactComponent as BaseBackgroundSVG3 } from "assets/background3.svg";
import { ReactComponent as BaseBackgroundSVG4 } from "assets/background4.svg";
import styled, { css } from "styled-components";

const BackgroundLayer: React.FC = () => {
  return (
    <BackgroundLayerContainer>
      <BackgroundSVG1 />
      <BackgroundSVG2 />
      <BackgroundSVG3 />
      <BackgroundSVG4 />
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

// Вывести картинку
// Добавить передвижение
// Добавить логику вывода инфы
// Выкатить на vps

// Нет необходимости делать центрирование, потому что другие элементы все равно будут выводиться
