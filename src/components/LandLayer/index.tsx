import { ReactComponent as BaseLandSVG } from "assets/land.svg";
import { ReactComponent as BaseLianasSVG } from "assets/lianas.svg";
import statueImage from "assets/statue.gif";
import totemAboutImage from "assets/totemAbout.gif";
import totemContactsImage from "assets/totemContacts.gif";
import totemExperienceImage from "assets/totemExperience.gif";
import totemStackImage from "assets/totemStack.gif";
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
      <TotemAboutImage src={totemAboutImage} alt="" />
      <TotemContactsImage src={totemContactsImage} alt="" />
      <TotemExperienceImage src={totemExperienceImage} alt="" />
      <TotemStackImage src={totemStackImage} alt="" />
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
  z-index: 10;
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

const TotemAboutImage = styled.img`
  ${commonLandStyles};

  transform: translateX(-1794px);
`;

const TotemContactsImage = styled.img`
  ${commonLandStyles};

  transform: translateX(-1120px);
`;

const TotemExperienceImage = styled.img`
  ${commonLandStyles};

  transform: translateX(1020px);
`;

const TotemStackImage = styled.img`
  ${commonLandStyles};

  transform: translateX(1900px);
`;

export default LandLayer;

// Вывести картинку
// Не забыть про лианы
// Добавить передвижение
// Добавить логику вывода инфы
// Добавить музыку и звуки
// Выкатить на vps

// Нет необходимости делать центрирование, потому что другие элементы все равно будут выводиться
