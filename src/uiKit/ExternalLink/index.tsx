import styled from "styled-components";

type HTMLExternalLinkProps = JSX.IntrinsicElements["a"];

const ExternalLink: React.FC<HTMLExternalLinkProps> = ({ href, children, ...props }) => {
  return (
    <CutsomLink target="_blank" rel="noopener noreferrer" href={href} {...props}>
      {children ? children : href}
    </CutsomLink>
  );
};

const CutsomLink = styled.a`
  color: white;
`;

export default ExternalLink;
