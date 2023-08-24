import PlayerLayer from "components/PlayerLayer";
import BackgroundLayer from "components/BackgroundLayer";
import styled from "styled-components";

const MainPage: React.FC = () => {
  return (
    <MainPageContainer>
      <PlayerLayer />
      <BackgroundLayer />
    </MainPageContainer>
  );
};

export default MainPage;

const MainPageContainer = styled.div`
  position: relative;

  height: 100vh;
`;

// Вывести картинку
// Добавить передвижение
// Добавить логику вывода инфы
// Выкатить на vps
