import { Stage, Image, Layer } from "react-konva";
import PlayerLayer from "components/PlayerLayer";
import useImage from "use-image";
import bg1 from "assets/BG1.svg";

function BackgroundLayer() {
  const [srcImg] = useImage(bg1);

  return (
    <Layer>
      <Image
        image={srcImg}
        width={window.innerWidth}
        height={window.innerHeight}
      />
    </Layer>
  );
}

export default BackgroundLayer;

// Вывести картинку
// Добавить передвижение
// Добавить логику вывода инфы
// Выкатить на vps
