import Konva from "konva";
import gifuct from "./gifuct";

export const initGIF = async (gifSrc: string, layer: Konva.Layer) => {
  const canvas1 = await gifuct(gifSrc, layer);
  const image1 = new Konva.Image({
    image: canvas1,
  });

  layer.add(image1);

  layer.batchDraw();
};

// export const initSVG = async (svgSrc: string, layer: Konva.Layer) => {
//   const canvas1 = await gifuct(gifSrc, layer);
//   const image1 = new Konva.Image({
//     image: canvas1,
//   });

//   layer.add(image1);

//   layer.batchDraw();
// };
