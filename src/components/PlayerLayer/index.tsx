import Konva from "konva";
import * as React from "react";
import { Layer, Stage } from "react-konva";
import { useRef } from "react";
import { initGIF } from "utils/konva";

function PlayerLayer() {
  const layerRef = useRef<Konva.Layer>(null);

  const gifSrc = require("assets/mainCharacter.gif");

  React.useEffect(() => {
    initGIF(gifSrc, layerRef.current!);
  }, [gifSrc, layerRef]);

  return <Layer ref={layerRef} x={window.innerWidth / 2} y={400} />;
}

export default PlayerLayer;

// Вывести картинку
// Добавить передвижение
// Добавить логику вывода инфы
// Выкатить на vps
