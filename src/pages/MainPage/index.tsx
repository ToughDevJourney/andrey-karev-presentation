import { Stage } from "react-konva";
import PlayerLayer from "components/PlayerLayer";
import useImage from "use-image";
import bg1 from "assets/BG1.svg";
import BackgroundLayer from "components/BackgroundLayer";

const MainPage: React.FC = () => {
  // навесить ивент лисенеры для ресайза
  // сделать фиксированный размер канваса и приклеить его к низу страницы

  return (
    <Stage
      width={window.innerWidth}
      height={window.innerHeight}
      y={window.innerHeight}
      x={window.innerWidth / 2}
    >
      <BackgroundLayer />
      <PlayerLayer />
    </Stage>
  );
};

export default MainPage;

// Вывести картинку
// Добавить передвижение
// Добавить логику вывода инфы
// Выкатить на vps
