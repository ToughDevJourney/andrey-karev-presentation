import { contacts } from "constants/contacts";
import { playerRadius, playerSpeed } from "constants/player";
import { TotemName, contactsTotem } from "constants/totems";
import { useEffect } from "react";
import { isMobile } from "react-device-detect";
import styled from "styled-components";
import DialogContainer from "uiKit/DialogContainer";
import Link from "uiKit/ExternalLink";
import LabeledLink from "uiKit/LabeledLink";
import { checkIsElementsCollide } from "utils/common";

interface ContactsTotemTextProps {
  playerX: number;
  handleVisitTotem: (totemName: TotemName) => void;
}

const contactElementsList = contacts.map((contact) => <LabeledLink key={contact.label} {...contact} />);

const ContactsTotemText: React.FC<ContactsTotemTextProps> = ({ playerX, handleVisitTotem }) => {
  const isDiplayTotemText = checkIsElementsCollide(-playerX * playerSpeed, contactsTotem.xPos, playerRadius);

  useEffect(() => {
    if (isDiplayTotemText) handleVisitTotem(contactsTotem.name);
  }, [handleVisitTotem, isDiplayTotemText]);

  if (!isDiplayTotemText) return;

  return (
    <DialogContainer>
      <ContactsTotemTextContainer>
        <TextHeader>MY CONTACTS</TextHeader>
        <LinksContainer>{contactElementsList}</LinksContainer>
      </ContactsTotemTextContainer>
    </DialogContainer>
  );
};

const ContactsTotemTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: 100%;
`;

const TextHeader = styled.h1`
  align-self: ${isMobile ? "center" : "left"};
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default ContactsTotemText;
