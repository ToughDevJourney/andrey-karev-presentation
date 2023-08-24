import character from "assets/mainCharacter.gif";
import styled from "styled-components";

function PlayerLayer() {
  // const layerRef = useRef<Konva.Layer>(null);
  // const [x, setX] = React.useState(0);

  // // const [imasd] = useImage(gifSrc);

  // const clickHandler = () => {
  //   setX((oldX) => oldX + 5);
  // };

  // useEffect(() => {
  //   initGIF(gifSrc, layerRef.current!);
  // }, [x]);

  return <PlayerImage src={character} alt="" />;
}

const PlayerImage = styled.img`
  position: absolute;
  bottom: 0;

  z-index: 10;
`;

export default PlayerLayer;

// Вывести картинку
// Добавить передвижение
// Добавить логику вывода инфы
// Выкатить на vps
