import React from "react";
import { MenuEntry } from "./types";
interface Props {
    isPushed?: boolean;
    links: Array<MenuEntry>;
}
declare const NavDesktop: React.FC<Props>;
export default NavDesktop;
