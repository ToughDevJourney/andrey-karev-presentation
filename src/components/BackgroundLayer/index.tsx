import { Stage, Image, Layer } from "react-konva";
import PlayerLayer from "components/PlayerLayer";
import useImage from "use-image";
import bg2 from "assets/BG2.svg";
import bg1 from "assets/BG1.svg";

function BackgroundLayer() {
  const [bg1Src] = useImage(bg1);
  const [bg2Src] = useImage(bg2);
  //ЗАКОНЧИЛ НА ОФСЕТЕ

  if (!bg1Src) return;

  return (
    <Layer offsetX={(window.innerWidth - bg1Src.width) / 2}>
      <Image image={bg1Src} />
      <Image image={bg2Src} />
    </Layer>
  );
}

export default BackgroundLayer;

// Вывести картинку
// Добавить передвижение
// Добавить логику вывода инфы
// Выкатить на vps
