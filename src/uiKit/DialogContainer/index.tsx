import { ReactNode } from "react";
import styled, { css } from "styled-components";
import { isMobile } from "react-device-detect";

interface DialogContainerProps {
  children: ReactNode;
}

const DialogContainer: React.FC<DialogContainerProps> = ({ children, ...props }) => {
  return <DialogContainerContainer {...props}>{children}</DialogContainerContainer>;
};

const dialogContainerContainerMobileStyled = css`
  width: 100vw;
  height: 100vh;
  top: 0;

  background-color: rgba(0, 0, 0, 0.5);
  padding: 48px 32px;
`;

const DialogContainerContainer = styled.div`
  z-index: ${({ theme }) => theme.zIndex.ui};
  position: absolute;
  top: 40px;
  min-width: 50vw;
  min-height: fit-content;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 32px;
  color: white;

  ${isMobile && dialogContainerContainerMobileStyled}
`;

export default DialogContainer;
