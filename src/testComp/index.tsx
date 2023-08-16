import Konva from "konva";
import * as React from "react";
import gifuct from "./gifuct";
import { Layer, Stage, Image } from "react-konva";
import { useRef } from "react";

function App() {
  const layerRef = useRef(null);

  const gifSrc = require("../assets/mainCharacter.gif");

  React.useEffect(() => {
    const init = async () => {
      const canvas1 = await gifuct(gifSrc, layerRef.current);
      const image1 = new Konva.Image({
        image: canvas1,
      });

      layerRef.current.add(image1);

      layerRef.current.batchDraw();
    };

    init();
  }, [gifSrc, layerRef]);

  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer ref={layerRef}></Layer>
    </Stage>
  );
}

export default App;

// Вывести картинку
// Добавить передвижение
// Добавить логику вывода инфы
// Выкатить на vps
