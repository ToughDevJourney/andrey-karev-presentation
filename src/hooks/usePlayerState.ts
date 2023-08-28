import { useCallback, useEffect, useState } from "react";

export type PlayerStates = "idleRight" | "idleLeft" | "moveRight" | "moveLeft";

const usePlayerState = () => {
  const [playerState, setPlayerState] = useState<PlayerStates>("idleRight");

  const movePlayerRight = () => setPlayerState("moveRight");
  const movePlayerLeft = () => setPlayerState("moveLeft");
  const stopPlayerRight = () => setPlayerState("idleRight");
  const stopPlayerLeft = () => setPlayerState("idleLeft");

  const keyDownHandler = useCallback((event: KeyboardEvent) => {
    if (["KeyA", "ArrowLeft"].includes(event.code)) return movePlayerLeft();
    if (["KeyD", "ArrowRight"].includes(event.code)) return movePlayerRight();
  }, []);

  const keyUpHandler = useCallback(
    (event: KeyboardEvent) => {
      if (["KeyA", "ArrowLeft"].includes(event.code) && playerState === "moveLeft") return stopPlayerLeft();
      if (["KeyD", "ArrowRight"].includes(event.code) && playerState === "moveRight") return stopPlayerRight();
    },
    [playerState],
  );

  useEffect(() => {
    window.addEventListener("keydown", keyDownHandler);
    window.addEventListener("keyup", keyUpHandler);
  }, [keyDownHandler, keyUpHandler]);

  return playerState;
};

export default usePlayerState;
