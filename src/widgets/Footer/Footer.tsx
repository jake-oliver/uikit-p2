import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faTelegram, faMediumM, faGithub } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";
import Flex from "../../components/Flex/Flex";
import { ArrowBackIcon, CloseIcon } from "../../components/Svg";
import { IconButton } from "../../components/Button";
import { FooterProps } from "./types";
import { Link } from "../../components/Link";
import { Text } from "../../components/Text";

const Footer: React.FC<FooterProps> = ({}) => (
  <StyledFooter>
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
  </StyledFooter>
);

export default Footer;

const StyledFooter = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  z-index: ${({ theme }) => theme.zIndices.modal};
  background-color: #151935;
  margin-top: 24px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px 2rem;
  width: calc(100% - 131px);
  border-radius: 30px 30px 0 0;
  justify-content: space-between;
  @media (max-width: 767px) {
    flex-direction: column;
    margin-top: 24px;
    width: calc(100% - 20px);
  }
  @media (max-width: 400px) {
    flex-direction: column;
    margin-top: 20px;
    width: calc(100% - 20px);
  }
`;

const FooterSocial = styled.div`
  position: relative;
  display: flex;
  margin-left: auto;
  align-items: flex-start;
  color: ${({ theme }) => theme.colors.text};
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const SocialItem = styled(Link)`
  margin-left: 10px;
  color: ${({ theme }) => theme.colors.text};
  &:hover {
    color: #000;
    color: ${({ theme }) => theme.colors.primary};
  }
`;
