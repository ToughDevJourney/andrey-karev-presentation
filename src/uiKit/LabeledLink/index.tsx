import styled from "styled-components";
import Link from "uiKit/ExternalLink";

interface LabeledLinkProps {
  label: string;
  link: string;
  displayName?: string;
}

const LabeledLink: React.FC<LabeledLinkProps> = ({ label, link, displayName }) => {
  return (
    <LabeledLinkContainer>
      <span>{label}: </span>
      <Link href={link}>{displayName}</Link>
    </LabeledLinkContainer>
  );
};

const LabeledLinkContainer = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export default LabeledLink;
