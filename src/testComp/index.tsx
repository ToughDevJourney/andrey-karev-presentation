import Konva from "konva";
import * as React from "react";
import { Layer, Stage } from "react-konva";
import { useRef } from "react";
import { initGIF } from "../utils/konva";

function App() {
  const layerRef = useRef<Konva.Layer>(null);

  const gifSrc = require("../assets/mainCharacter.gif");

  React.useEffect(() => {
    initGIF(gifSrc, layerRef.current!);
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
