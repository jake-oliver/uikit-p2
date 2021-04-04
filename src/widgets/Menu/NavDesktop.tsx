import React from "react";
import styled from "styled-components";
import MenuLink from "./MenuLink";
import { MenuEntry } from "./types";

interface Props {
  isPushed?: boolean;
  links: Array<MenuEntry>;
}

const NavDesktop: React.FC<Props> = (props) => {
  const { links } = props;
  return (
    <NavWrapper>
      {links.map((entry) => {
        return (
          <NavDesktopItem key={entry.label}>
            <MenuLink href={entry.href} onClick={() => void 0}>
              {entry.label}
            </MenuLink>
          </NavDesktopItem>
        );
      })}
    </NavWrapper>
  );
};

export default NavDesktop;

const NavWrapper = styled.div`
  position: relative;
  display: flex;
  margin-top: 4px;
  margin-left: 1.5rem;
  padding-bottom: 8px;
  align-items: flex-start;
  font-size: 0.875rem;
  font-weight: 700;

  @media (max-width: 767px) {
    font-size: 0.75rem;
    margin-left: 1rem;
  }
  @media (max-width: 400px) {
    display: none;
  }
`;

const NavDesktopItem = styled.div`
  margin-right: 14px;
  color: ${({ theme }) => theme.colors.text};
  padding: 14px 8px;
  border-radius: 5px;
  transition: 0.5s all ease;
  &:hover {
    color: #000;
    background: ${({ theme }) => theme.colors.primary};
    transition: 0.1s all ease;
  }
`;
