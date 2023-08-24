import { Stage, Image, Layer } from "react-konva";
import PlayerLayer from "components/PlayerLayer";
import useImage from "use-image";
import bg2 from "assets/BG2.svg";
import bg1 from "assets/BG1.svg";
import { useEffect, useRef, useState } from "react";

const BackgroundLayer: React.FC = () => {
  // const layerRef = useRef(null);
  const scale = 18;

  // const [layerOffset, setLayerOffset] = useState(0);

  const [bg1Src] = useImage(bg1);
  const [bg2Src] = useImage(bg2);
  // //ЗАКОНЧИЛ НА ОФСЕТЕ

  // // if (!bg1Src) return;

  // useEffect(() => {
  //   // console.log(layerRef.current.getWidth());

  //   if (layerRef?.current?.getWidth() && bg2Src?.width) {
  //     setLayerOffset(
  //       (layerRef?.current?.getWidth() - bg2Src.width) / (2 * scale)
  //     );
  //     console.log();
  //   }
  // }, [layerRef, bg2Src?.width]);

  return (
    <Layer
      scaleX={scale}
      scaleY={scale}
      y={-bg1Src?.height * scale}
      x={(-bg1Src?.width * scale) / 2}
    >
      <Image image={bg1Src} />
      <Image image={bg2Src} />
    </Layer>
  );
};

export default BackgroundLayer;

// Вывести картинку
// Добавить передвижение
// Добавить логику вывода инфы
// Выкатить на vps

// Нет необходимости делать центрирование, потому что другие элементы все равно будут выводиться
