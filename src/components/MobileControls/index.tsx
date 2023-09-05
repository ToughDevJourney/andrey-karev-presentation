import { PlayerStates } from "hooks/usePlayerState";
import styled, { css } from "styled-components";

interface MobileControlsProps {
  playerState: PlayerStates;
  movePlayerRight: () => void;
  movePlayerLeft: () => void;
  stopPlayerRight: () => void;
  stopPlayerLeft: () => void;
}

const MobileControls: React.FC<MobileControlsProps> = ({
  playerState,
  movePlayerRight,
  movePlayerLeft,
  stopPlayerRight,
  stopPlayerLeft,
}) => {
  const handleStopPlayerLeft = () => {
    if (playerState === "moveLeft") return stopPlayerLeft();
  };

  const handleStopPlayerRight = () => {
    if (playerState === "moveRight") return stopPlayerRight();
  };

  return (
    <MobileControlsContainer>
      <MobileControl onTouchStart={movePlayerLeft} onTouchEnd={handleStopPlayerLeft} onContextMenu={(e) => e.preventDefault()} />
      <MobileControl onTouchStart={movePlayerRight} onTouchEnd={handleStopPlayerRight} onContextMenu={(e) => e.preventDefault()} />
    </MobileControlsContainer>
  );
};

const MobileControlsContainer = styled.div`
  height: 100vh;
  width: 100vw;
  z-index: ${({ theme }) => theme.zIndex.controls};

  display: flex;
`;

const MobileControl = styled.div`
  width: 100%;
  height: 100%;
`;

export default MobileControls;
