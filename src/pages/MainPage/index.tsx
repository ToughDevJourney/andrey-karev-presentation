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
  const playerState = usePlayerState();

  const [playerX, setPlayerX] = useState(0);
  const [playerDidWalk, setPlayerDidWalk] = useState(false);

  const handlePlayerMovement = useCallback(
    (playerState: PlayerStates) => {
      stopAnimation();

      if (playerState === "moveLeft" || playerState === "moveRight") setPlayerDidWalk(true);

      if (playerState === "moveLeft") animate(() => setPlayerX((oldPlayerX) => (oldPlayerX <= 300 ? oldPlayerX + 1 : oldPlayerX)));
      if (playerState === "moveRight") animate(() => setPlayerX((oldPlayerX) => (oldPlayerX >= -300 ? oldPlayerX - 1 : oldPlayerX)));
    },
    [animate, stopAnimation],
  );

  useEffect(() => {
    handlePlayerMovement(playerState);
  }, [handlePlayerMovement, playerState]);

  return (
    <MainPageContainer>
      <UILayer playerX={playerX} playerDidWalk={playerDidWalk} />
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
