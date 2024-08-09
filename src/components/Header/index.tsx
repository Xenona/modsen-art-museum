import menu from "@assets/icons/menu.svg";
import museumLogo from "@assets/logos/museum_logo.svg";
import { useState } from "react";

import { LinkedLogo } from "./LinkedLogo";
import { Menu } from "./Menu";
import {
  DesktopMenu,
  Header,
  MobileMenu,
  MobileMenuButton,
  Overlay,
  TopLine,
} from "./styled";
export function AppHeader() {
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);

  return (
    <Header>
      <TopLine>
        <LinkedLogo
          img={museumLogo}
          link={"/"}
          alt={
            "Logo of the museum, depicts an Ancient Greek temple facade and words - Museum of Art"
          }
        />
        <MobileMenuButton onClick={() => setIsMenuOpened(!isMenuOpened)}>
          <img src={menu} aria-label="Open or close menu" />
        </MobileMenuButton>
      </TopLine>

      {!isMenuOpened && (
        <DesktopMenu>
          <Menu />
        </DesktopMenu>
      )}

      {isMenuOpened && (
        <>
          <MobileMenu>
            <Menu />
          </MobileMenu>
          <Overlay onClick={() => setIsMenuOpened(false)} />
        </>
      )}
    </Header>
  );
}
