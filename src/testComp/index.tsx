// import { Group, Image, Layer, Stage } from "react-konva";
// import useImage from "use-image";
// import char from "../assets/mainCharacter.gif";
// import "gifler";
// import { useState, useRef, useMemo, useEffect } from "react";

// function TestComp() {
//   const [img] = useImage(char);

//   let src = require("../assets/mainCharacter.gif");
//   let [YShift, setYShift] = useState(780);

//   const imageRef: any = useRef(null);
//   const canvas = useMemo(() => {
//     const node = document.createElement("canvas");
//     return node;
//   }, []);

//   useEffect(() => {
//     let anim: any;
//     //@ts-ignore
//     window.gifler(src)?.get((a: any) => {
//       // gifler(src).get((a: any) => {
//       anim = a;
//       anim.animateInCanvas(canvas);
//       setYShift(780 - canvas.height);
//       anim.onDrawFrame = (ctx: any, frame: any) => {
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//         ctx.drawImage(frame.buffer, frame.x, frame.y);
//         imageRef?.current?.getLayer().draw();
//       };
//     });
//     return () => anim?.stop();
//   }, [src, canvas]);

//   // КАК УВЕЛИЧИТЬ ГИФКУ (в фотошопе экспортить в хорошем расширении)
//   // КАК ПРОИГРЫВАТЬ ЕЕ БЕЗ ЛИБЫ (ЛИБО С НЕЙ, НО НАДО ПОЧИНИТЬ)

//   return (
//     <Stage width={500} height={500}>
//       <Layer>
//         <Group>
//           <Image
//             image={canvas}
//             // scaleX={15}
//             // scaleY={15}

//             ref={imageRef}
//             // offsetX={canvas.width / 2}
//           />
//         </Group>
//       </Layer>
//     </Stage>
//   );

//   return (
//     <Stage width={window.innerWidth} height={window.innerHeight}>
//       <Layer>
//         <Image image={img} height={720} width={1280} x={150} y={150} />
//       </Layer>
//     </Stage>
//   );
// }

// export default TestComp;

import Konva from "konva";
import * as React from "react";
import gifuct from "./gifuct";

function App() {
  const gif2Url = "https://media.giphy.com/media/vVzH2XY3Y0Ar6/giphy.gif";

  React.useEffect(() => {
    const init = async () => {
      var konvaStage = new Konva.Stage({
        container: "container",
        width: 600,
        height: 600,
        _multiplier: 0.5,
        _output: { width: 1200, height: 1200 },
      });

      var layer = new Konva.Layer();

      const canvas1 = await gifuct(gif2Url, layer);
      const image1 = new Konva.Image({
        image: canvas1,
      });

      layer.add(image1);

      konvaStage.add(layer);

      layer.batchDraw();
    };

    init();
  }, []);

  return (
    <div className="App">
      <div id="container"></div>
    </div>
  );
}
export default App;
