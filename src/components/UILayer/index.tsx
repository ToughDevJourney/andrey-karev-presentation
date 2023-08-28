import styled from "styled-components";

interface UILayerProps {}

const UILayer: React.FC<UILayerProps> = () => {
  return (
    <UILayerContainer>
      <div>hello</div>
    </UILayerContainer>
  );
};

const UILayerContainer = styled.div`
  z-index: 10000;
  position: absolute;
  top: 40px;
  bottom: 300px;
  min-width: 50vw;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 24px;
  color: white;
`;

export default UILayer;
