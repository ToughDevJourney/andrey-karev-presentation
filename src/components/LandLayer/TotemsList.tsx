import { totemsList } from "constants/totems";
import styled from "styled-components";

interface TotemsListProps {}

const TotemsList: React.FC<TotemsListProps> = () => {
  const totemElementsList = totemsList.map((totem) => <Totem key={totem.imageSrc} src={totem.imageSrc} $xPos={totem.xPos} />);

  return <>{totemElementsList}</>;
};

const Totem = styled.img<{ $xPos: number }>`
  position: absolute;
  bottom: 134px;

  transform: translateX(${({ $xPos }) => $xPos}px);
`;

export default TotemsList;
