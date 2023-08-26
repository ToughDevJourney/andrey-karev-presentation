import PlayerLayer from "components/PlayerLayer";
import BackgroundLayer from "components/BackgroundLayer";
import styled from "styled-components";
import LandLayer from "components/LandLayer";
import ForegroundLayer from "components/Foreground";
import { useEffect, useRef, useState } from "react";

const MainPage: React.FC = () => {
  const [playerX, setPlayerX] = useState(0);

  return (
    <MainPageContainer>
      <ForegroundLayer playerX={playerX} />
      <PlayerLayer />
      <LandLayer playerX={playerX} />
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
