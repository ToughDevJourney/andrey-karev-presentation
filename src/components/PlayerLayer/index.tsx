import playerImage from "assets/player.gif";
import styled from "styled-components";

function PlayerLayer() {
  return <PlayerImage src={playerImage} alt="" />;
}

const PlayerImage = styled.img`
  position: fixed;
  bottom: 112px;

  // вынести z-index-ы в константы
  z-index: 100;
`;

export default PlayerLayer;

// Вывести картинку
// Добавить передвижение
// Добавить логику вывода инфы
// Выкатить на vps
