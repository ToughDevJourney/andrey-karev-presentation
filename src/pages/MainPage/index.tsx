import PlayerLayer from "components/PlayerLayer";
import BackgroundLayer from "components/BackgroundLayer";
import styled from "styled-components";
import LandLayer from "components/LandLayer";

const MainPage: React.FC = () => {
  return (
    <MainPageContainer>
      <PlayerLayer />
      <LandLayer />
      <BackgroundLayer />
    </MainPageContainer>
  );
};

export default MainPage;

const MainPageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

// Вывести картинку
// Добавить передвижение
// Добавить логику вывода инфы
// Выкатить на vps
