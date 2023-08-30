import { contacts } from "constants/contacts";
import { playerSpeed } from "constants/player";
import { contactsTotem } from "constants/totems";
import styled from "styled-components";
import DialogContainer from "uiKit/DialogContainer";
import Link from "uiKit/ExternalLink";
import { checkIsElementsCollide } from "utils/common";

interface ContactsTotemTextProps {
  playerX: number;
}

const contactElementsList = contacts.map((contact) => (
  <div>
    <span>{contact.label}: </span>
    <Link href={contact.link}>{contact.displayName}</Link>
  </div>
));

const ContactsTotemText: React.FC<ContactsTotemTextProps> = ({ playerX }) => {
  //Радиус Вынести в константу
  if (!checkIsElementsCollide(-playerX * playerSpeed, contactsTotem.xPos, 100)) return;

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
