import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import throttle from "lodash/throttle";
import Overlay from "../../components/Overlay/Overlay";
import { Flex } from "../../components/Flex";
import { Link } from "../../components/Link";
import { useMatchBreakpoints } from "../../hooks";
import NavDesktop from "./NavDesktop";
import UserBlock from "./UserBlock";
import { NavProps } from "./types";
import Avatar from "./Avatar";

const MobileOnlyOverlay = styled(Overlay)`
  position: fixed;
  height: 100%;

  ${({ theme }) => theme.mediaQueries.nav} {
    display: none;
  }
`;

const Menu: React.FC<NavProps> = ({ account, login, logout, links, profile }) => {
  const { isXl } = useMatchBreakpoints();
  const isMobile = isXl === false;
  const [isPushed, setIsPushed] = useState(!isMobile);
  const [showMenu, setShowMenu] = useState(true);
  const refPrevOffset = useRef(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentOffset = window.pageYOffset;
      const isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight;
      const isTopOfPage = currentOffset === 0;
      // Always show the menu when user reach the top
      if (isTopOfPage) {
        setShowMenu(true);
      }
      // Avoid triggering anything at the bottom because of layout shift
      else if (!isBottomOfPage) {
        if (currentOffset < refPrevOffset.current) {
          // Has scroll up
          setShowMenu(true);
        } else {
          // Has scroll down
          setShowMenu(false);
        }
      }
      refPrevOffset.current = currentOffset;
    };
    const throttledHandleScroll = throttle(handleScroll, 200);

    window.addEventListener("scroll", throttledHandleScroll);
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, []);

  // Find the home link if provided
  const homeLink = links.find((link) => link.label === "Home");

  return (
    <>
      <StyledHeader>
        <LeftRight>
          <Logo>
            <Link href="/">
              <img src="/images/logo.svg" width="170px" alt="Lightening Cash Logo" />
            </Link>
          </Logo>
          <NavDesktop isPushed={isPushed} links={links} />
        </LeftRight>
        <LeftRight>
          <UserBlock account={account} login={login} logout={logout} />
          {profile && <Avatar profile={profile} />}
        </LeftRight>
      </StyledHeader>
    </>
  );
};

export default Menu;

const StyledHeader = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  z-index: 1;
  padding: 10px 15px;
  bottom: 10px;
  justify-content: space-between;
  align-items: center;
  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    background: linear-gradient(to right, #000422 53%, #fff0 20%) repeat-x bottom;
    -webkit-background-size: 1rem 2px;
    background-size: 1rem 2px;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 5px;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 10px 15px;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    padding: 20px 35px;
  }
`;

const LeftRight = styled(Flex)`
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  margin: 0;
  margin-top: 10px;

  ${({ theme }) => theme.mediaQueries.sm} {
    margin: 0;
  }
`;
