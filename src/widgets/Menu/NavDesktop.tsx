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
  display: none;

  ${({ theme }) => theme.mediaQueries.lg} {
    display: block;
    position: relative;
    display: flex;
    margin-left: 1rem;
    align-items: flex-start;
    font-size: 0.875rem;
  }
  ${({ theme }) => theme.mediaQueries.xl} {
    margin-top: 5px;
    margin-left: 1.5rem;
    padding-bottom: 8px;
    font-weight: 700;
    font-size: 1rem;
  }
  ${({ theme }) => theme.mediaQueries.xxxl} {
    font-size: 18px;
  }
`;

const NavDesktopItem = styled.div`
  margin-right: 14px;
  padding: 12px 6px;
  color: ${({ theme }) => theme.colors.text};
  border-radius: 5px;
  transition: 0.5s all ease;
  &:hover {
    color: #000;
    background: ${({ theme }) => theme.colors.primary};
    transition: 0.1s all ease;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 14px 8px;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    padding: 12px 20px;
  }
`;
