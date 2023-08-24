import { ReactComponent as BaseBackground1 } from "assets/BG1.svg";
import { ReactComponent as BaseBackground2 } from "assets/BG2.svg";
import { ReactComponent as BaseBackground3 } from "assets/BG3.svg";
import { ReactComponent as BaseBackground4 } from "assets/BG4.svg";
import styled, { css } from "styled-components";

const BackgroundLayer: React.FC = () => {
  return (
    <BackgroundContainer>
      <Background1 />
      <Background2 />
      <Background3 />
      <Background4 />
    </BackgroundContainer>
  );
};

const BackgroundContainer = styled.div`
  position: relative;
  height: 100%;
`;

const commonBackgroundStyles = css`
  position: absolute;
  height: 100%;
`;

const Background1 = styled(BaseBackground1)`
  ${commonBackgroundStyles};
`;

const Background2 = styled(BaseBackground2)`
  ${commonBackgroundStyles};
`;

const Background3 = styled(BaseBackground3)`
  ${commonBackgroundStyles};
`;

const Background4 = styled(BaseBackground4)`
  ${commonBackgroundStyles};
`;

export default BackgroundLayer;

// Вывести картинку
// Добавить передвижение
// Добавить логику вывода инфы
// Выкатить на vps

// Нет необходимости делать центрирование, потому что другие элементы все равно будут выводиться
