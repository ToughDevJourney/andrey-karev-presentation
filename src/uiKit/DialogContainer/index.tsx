import { ReactNode } from "react";
import styled from "styled-components";

interface DialogContainerProps {
  children: ReactNode;
}

const DialogContainer: React.FC<DialogContainerProps> = ({ children, ...props }) => {
  return <DialogContainerContainer {...props}>{children}</DialogContainerContainer>;
};

const DialogContainerContainer = styled.div`
  z-index: 10000;
  position: absolute;
  top: 40px;
  min-width: 50vw;
  min-height: fit-content;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 32px;
  color: white;
`;

export default DialogContainer;
