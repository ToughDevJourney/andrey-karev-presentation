import { ReactComponent as BaseLand } from "assets/land.svg";
import statue from "assets/statue.gif";
import styled, { css } from "styled-components";

const LandLayer: React.FC = () => {
  return (
    <LandContainer>
      <Statue src={statue} alt="" />
      <Land />
    </LandContainer>
  );
};

const LandContainer = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 0;
  z-index: 10;
  height: 780px;
`;

const commonBackgroundStyles = css`
  position: absolute;
  /* height: 100%; */
`;

const Land = styled(BaseLand)`
  ${commonBackgroundStyles};
  height: 780px;
`;

const Statue = styled.img`
  ${commonBackgroundStyles};
  bottom: 12px;
`;

export default LandLayer;

// Вывести картинку
// Добавить передвижение
// Добавить логику вывода инфы
// Выкатить на vps

// Нет необходимости делать центрирование, потому что другие элементы все равно будут выводиться
