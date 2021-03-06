import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faTelegram, faMediumM, faGithub } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";
import { FooterProps } from "./types";
import { Link } from "../../components/Link";
import { Text } from "../../components/Text";

const Footer: React.FC<FooterProps> = ({}) => (
  <>
    <Text>&copy; Lightening Cash all Rights Reserved.</Text>
    <FooterSocial>
      <SocialItem href="https://twitter.com/CashLightening">
        <FontAwesomeIcon icon={faTwitter} size="lg" />
      </SocialItem>
      <SocialItem href="https://t.me/lighteningcash">
        <FontAwesomeIcon icon={faTelegram} size="lg" />
      </SocialItem>
      <SocialItem href="https://lightening-cash.medium.com/">
        <FontAwesomeIcon icon={faMediumM} size="lg" />
      </SocialItem>
      <SocialItem href="https://github.com/LighteningCash">
        <FontAwesomeIcon icon={faGithub} size="lg" />
      </SocialItem>
    </FooterSocial>
  </>
);

export default Footer;

const FooterSocial = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  margin-top: 1rem;
  color: ${({ theme }) => theme.colors.text};
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
  @media screen and (min-width: 960px) {
    margin-top: 0;
  }
`;

const SocialItem = styled(Link)`
  margin: 0;
  padding: 0 5px;
  color: ${({ theme }) => theme.colors.text};
  &:hover {
    color: #000;
    color: ${({ theme }) => theme.colors.primary};
  }
  @media screen and (min-width: 960px) {
    margin-left: 10px;
    padding: 0;
  }
`;
