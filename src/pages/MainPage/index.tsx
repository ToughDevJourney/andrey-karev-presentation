import PlayerLayer from "components/PlayerLayer";
import BackgroundLayer from "components/BackgroundLayer";
import styled from "styled-components";
import LandLayer from "components/LandLayer";
import ForegroundLayer from "components/Foreground";
import { useEffect, useState } from "react";
import useRequestAnimationFrame from "hooks/useRequestAnimationFrame";
import usePlayerState from "hooks/usePlayerState";

const MainPage: React.FC = () => {
  const { animate, stopAnimation } = useRequestAnimationFrame();

  const [playerX, setPlayerX] = useState(0);
  const playerState = usePlayerState();

  useEffect(() => {
    stopAnimation();

    // вынести скорость в константы
    if (playerState === "moveLeft") animate(() => setPlayerX((oldPlayerX) => oldPlayerX + 1));
    if (playerState === "moveRight") animate(() => setPlayerX((oldPlayerX) => oldPlayerX - 1));
  }, [animate, playerState, stopAnimation]);

  return (
    <MainPageContainer>
      <ForegroundLayer playerX={playerX} />
      <PlayerLayer playerState={playerState} />
      <LandLayer playerX={playerX} />
      <BackgroundLayer playerX={playerX} />
    </MainPageContainer>
  );
};

export default MainPage;

const MainPageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

// Вывести картинку
// Анимировать фон
// Добавить передвижение
// Добавить логику вывода инфы
// Добавить плашку с обучением
// Добавить локализацию
// Выкатить на vps
