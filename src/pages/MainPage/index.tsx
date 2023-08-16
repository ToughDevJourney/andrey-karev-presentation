import { Stage } from "react-konva";
import PlayerLayer from "components/PlayerLayer";

function App() {
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <PlayerLayer />
    </Stage>
  );
}

export default App;

// Вывести картинку
// Добавить передвижение
// Добавить логику вывода инфы
// Выкатить на vps
