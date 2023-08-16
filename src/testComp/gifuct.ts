import { parseGIF, decompressFrames, ParsedFrame } from "gifuct-js";
import Konva from "konva";

// user canvas
const c = document.createElement("canvas");
const ctx = c.getContext("2d");
// gif patch canvas
const tempCanvas = document.createElement("canvas");
const tempCtx = tempCanvas.getContext("2d");
// full gif canvas
const gifCanvas = document.createElement("canvas");
const gifCtx = gifCanvas.getContext("2d");

const loadGIF = async (gifURL: string) => {
  const resp = await fetch(gifURL);
  const arrayBuffer = await resp.arrayBuffer();

  const gif = parseGIF(arrayBuffer);
  const frames = decompressFrames(gif, true);

  return { gif, frames };
};

let loadedFrames: ParsedFrame[] = [];
let frameIndex = 1;
let playing = true;
// let bEdgeDetect = false
// let bInvert = false
// let bGrayscale = false
const pixelPercent = 100;
// let loadedFrames
// let frameIndex
let frameImageData: ImageData;

const renderGIF = (frames: ParsedFrame[]) => {
  loadedFrames = frames;
  frameIndex = 0;

  c.width = frames[0].dims.width;
  c.height = frames[0].dims.height;

  gifCanvas.width = c.width;
  gifCanvas.height = c.height;
};

const drawPatch = (frame: ParsedFrame) => {
  if (gifCtx && tempCtx) {
    const dims = frame.dims;

    if (
      !frameImageData ||
      dims.width != frameImageData.width ||
      dims.height != frameImageData.height
    ) {
      tempCanvas.width = dims.width;
      tempCanvas.height = dims.height;
      frameImageData = tempCtx.createImageData(dims.width, dims.height);
    }

    // set the patch data as an override
    frameImageData.data.set(frame.patch);

    // draw the patch back over the canvas
    tempCtx.putImageData(frameImageData, 0, 0);

    gifCtx.drawImage(tempCanvas, dims.left, dims.top);
  } else {
    console.error("drawPatch error ctx not defined", ctx, gifCtx);
  }
};

const manipulate = () => {
  if (ctx && gifCtx) {
    const imageData = gifCtx.getImageData(
      0,
      0,
      gifCanvas.width,
      gifCanvas.height
    );
    const other = gifCtx.createImageData(gifCanvas.width, gifCanvas.height);

    // if (bEdgeDetect) {
    //   imageData = edge(imageData.data, other)
    // }

    // if (bInvert) {
    //   invert(imageData.data)
    // }

    // if (bGrayscale) {
    //   grayscale(imageData.data)
    // }

    // do pixelation
    const pixelsX = 5 + Math.floor((pixelPercent / 100) * (c.width - 5));
    const pixelsY = (pixelsX * c.height) / c.width;

    if (pixelPercent != 100) {
      // ctx.mozImageSmoothingEnabled = false
      // ctx.webkitImageSmoothingEnabled = false
      ctx.imageSmoothingEnabled = false;
    }

    ctx.putImageData(imageData, 0, 0);
    ctx.drawImage(c, 0, 0, c.width, c.height, 0, 0, pixelsX, pixelsY);
    ctx.drawImage(c, 0, 0, pixelsX, pixelsY, 0, 0, c.width, c.height);
  } else {
    console.error("manipulate error ctx not defined", ctx, gifCtx);
  }
};

const renderFrame = (layer: Konva.Layer) => {
  // get the frame
  const frame = loadedFrames[frameIndex];

  const start = new Date().getTime();

  if (frame.disposalType === 2 && gifCtx) {
    // gifCtx.clearRect(0, 0, c.width, c.height)
    // see: https://github.com/matt-way/gifuct-js/issues/35
    const prevFrame = loadedFrames[frameIndex - 1];
    const { width, height, left, top } = prevFrame.dims;
    gifCtx.clearRect(left, top, width, height);
  }

  // draw the patch
  drawPatch(frame);

  // perform manipulation
  manipulate();

  // update the frame index
  frameIndex++;
  if (frameIndex >= loadedFrames.length) {
    frameIndex = 0;
  }

  const end = new Date().getTime();
  const diff = end - start;

  layer.draw();

  if (playing) {
    // delay the next gif frame
    setTimeout(function () {
      requestAnimationFrame(() => renderFrame(layer));
      //renderFrame();
    }, Math.max(0, Math.floor(frame.delay - diff)));
  }
};

const gifuct = async (gifURL: string, layer: Konva.Layer) => {
  try {
    const { gif, frames } = await loadGIF(gifURL);

    renderGIF(frames);

    renderFrame(layer);

    return c;
  } catch (error) {
    console.log("gifuct try/catch", error);
  }
};

export default gifuct;
