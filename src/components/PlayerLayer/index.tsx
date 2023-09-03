import playerIdleImage from "assets/playerIdle.gif";
import playerWalkImage from "assets/playerWalkCycle.gif";
import { PlayerStates } from "hooks/usePlayerState";
import styled from "styled-components";

interface PlayerLayerProps {
  playerState: PlayerStates;
}

const PlayerLayer: React.FC<PlayerLayerProps> = ({ playerState }) => {
  if (playerState === "moveRight") return <PlayerImage src={playerWalkImage} alt="" />;
  if (playerState === "moveLeft") return <FlippedPlayerImage src={playerWalkImage} alt="" />;
  if (playerState === "idleLeft") return <FlippedPlayerImage src={playerIdleImage} alt="" />;

  return <PlayerImage src={playerIdleImage} alt="" />;
};

const PlayerImage = styled.img`
  position: fixed;
  bottom: 112px;

  z-index: ${({ theme }) => theme.zIndex.player};
`;

const FlippedPlayerImage = styled(PlayerImage)`
  -moz-transform: scaleX(-1);
  -o-transform: scaleX(-1);
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
`;

export default PlayerLayer;
