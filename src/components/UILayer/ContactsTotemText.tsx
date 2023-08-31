import { contacts } from "constants/contacts";
import { playerSpeed } from "constants/player";
import { TotemName, contactsTotem } from "constants/totems";
import { useEffect } from "react";
import styled from "styled-components";
import DialogContainer from "uiKit/DialogContainer";
import Link from "uiKit/ExternalLink";
import { checkIsElementsCollide } from "utils/common";

interface ContactsTotemTextProps {
  playerX: number;
  handleVisitTotem: (totemName: TotemName) => void;
}

const contactElementsList = contacts.map((contact) => (
  <div key={contact.label}>
    <span>{contact.label}: </span>
    <Link href={contact.link}>{contact.displayName}</Link>
  </div>
));

const ContactsTotemText: React.FC<ContactsTotemTextProps> = ({ playerX, handleVisitTotem }) => {
  //Радиус Вынести в константу
  const isDiplayTotemText = checkIsElementsCollide(-playerX * playerSpeed, contactsTotem.xPos, 100);

  useEffect(() => {
    if (isDiplayTotemText) handleVisitTotem(contactsTotem.name);
  }, [handleVisitTotem, isDiplayTotemText]);

  if (!isDiplayTotemText) return;

  return (
    <DialogContainer>
      <ContactsTotemTextContainer>
        <h1>MY CONTACTS</h1>
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

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default ContactsTotemText;
