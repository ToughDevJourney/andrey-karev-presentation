import Konva from "konva";
import * as React from "react";
import { Layer, Stage } from "react-konva";
import { useEffect, useRef } from "react";
import { initGIF } from "utils/konva";
import gifSrc from "assets/mainCharacter.gif";
import useImage from "use-image";

function PlayerLayer() {
  const layerRef = useRef<Konva.Layer>(null);
  const [x, setX] = React.useState(0);

  // const [imasd] = useImage(gifSrc);

  const clickHandler = () => {
    setX((oldX) => oldX + 5);
  };

  useEffect(() => {
    initGIF(gifSrc, layerRef.current!);
  }, [x]);

  React.useEffect(() => {
    console.log(layerRef?.current?.getHeight());
  }, [layerRef]);

  return <Layer ref={layerRef} onClick={clickHandler} />;
}

export default PlayerLayer;

// Вывести картинку
// Добавить передвижение
// Добавить логику вывода инфы
// Выкатить на vps
