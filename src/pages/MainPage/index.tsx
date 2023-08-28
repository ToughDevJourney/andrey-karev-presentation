import PlayerLayer from "components/PlayerLayer";
import BackgroundLayer from "components/BackgroundLayer";
import styled from "styled-components";
import LandLayer from "components/LandLayer";
import ForegroundLayer from "components/Foreground";
import { useCallback, useEffect, useState } from "react";
import useRequestAnimationFrame from "hooks/useRequestAnimationFrame";
import usePlayerState, { PlayerStates } from "hooks/usePlayerState";
import UILayer from "components/UILayer";

const MainPage: React.FC = () => {
  const { animate, stopAnimation } = useRequestAnimationFrame();

  const [playerX, setPlayerX] = useState(0);
  const playerState = usePlayerState();

  const handlePlayerMovement = useCallback(
    (playerState: PlayerStates) => {
      stopAnimation();

      if (playerState === "moveLeft") animate(() => setPlayerX((oldPlayerX) => (oldPlayerX <= 450 ? oldPlayerX + 1 : oldPlayerX)));
      if (playerState === "moveRight") animate(() => setPlayerX((oldPlayerX) => (oldPlayerX >= -450 ? oldPlayerX - 1 : oldPlayerX)));
    },
    [animate, stopAnimation],
  );

  useEffect(() => {
    handlePlayerMovement(playerState);
  }, [handlePlayerMovement, playerState]);

  return (
    <MainPageContainer>
      {/* <UILayer /> */}
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

// Вывести картинку (Добавить партикли и прозрачный свг сверху)
// Анимировать фон+
// Добавить передвижение+
// Выкатить z-index-ы в константы
// Добавить логику вывода инфы
// Добавить плашку с обучением
// Добавить локализацию
// Выкатить на vps
