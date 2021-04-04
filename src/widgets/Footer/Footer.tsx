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
  align-items: center;
  @media (max-width: 767px) {
    & > * {
      font-size: 14px;
    }
    flex-direction: column;
    margin-top: 24px;
    padding: 20px;
    width: calc(100% - 20px);
    justify-content: center;
  }
  @media (max-width: 400px) {
    & > * {
      font-size: 13px;
    }
    flex-direction: column;
    margin-top: 20px;
    padding: 20px;
    width: calc(100% - 20px);
    justify-content: center;
  }
`;

const FooterSocial = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  color: ${({ theme }) => theme.colors.text};
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
  @media (max-width: 767px) {
    margin-top: 20px;
  }
`;

const SocialItem = styled(Link)`
  margin-left: 10px;
  color: ${({ theme }) => theme.colors.text};
  &:hover {
    color: #000;
    color: ${({ theme }) => theme.colors.primary};
  }
  @media (max-width: 767px) {
    margin: 0;
    padding: 0 5px;
  }
`;
