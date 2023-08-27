import { useCallback, useEffect, useState } from "react";

type PlayerStates = "idle" | "moveRight" | "moveLeft";

const usePlayerState = () => {
  const [playerState, setPlayerState] = useState<PlayerStates>("idle");

  const movePlayerRight = () => setPlayerState("moveRight");
  const movePlayerLeft = () => setPlayerState("moveLeft");
  const stopPlayer = () => setPlayerState("idle");

  const keyDownHandler = useCallback((event: KeyboardEvent) => {
    if (["KeyA", "ArrowLeft"].includes(event.code)) return movePlayerLeft();
    if (["KeyD", "ArrowRight"].includes(event.code)) return movePlayerRight();
  }, []);

  const keyUpHandler = useCallback(
    (event: KeyboardEvent) => {
      if (["KeyA", "ArrowLeft"].includes(event.code) && playerState === "moveLeft") return stopPlayer();
      if (["KeyD", "ArrowRight"].includes(event.code) && playerState === "moveRight") return stopPlayer();
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
