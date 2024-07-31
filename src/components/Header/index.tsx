import museumLogo from '@assets/logos/museum_logo.svg';
import menu from '@assets/icons/menu.svg';
import { useState } from 'react';
import { Menu } from './Menu';
import {
  DesktopMenu,
  Header,
  Logo,
  MobileMenu,
  MobileMenuButton,
  TopLine,
} from './styled';

export function AppHeader() {
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);

  return (
    <Header>
      <TopLine>
        <Logo
          src={museumLogo}
          alt="Logo of the museum, depicts an Ancient Greek temple facade and words - Museum of Art"
        />
        <MobileMenuButton onClick={() => setIsMenuOpened(!isMenuOpened)}>
          <img src={menu} alt="Menu icon" />
        </MobileMenuButton>
      </TopLine>

      {!isMenuOpened && (
        <DesktopMenu>
          <Menu />
        </DesktopMenu>
      )}

      {isMenuOpened && (
        <MobileMenu>
          <Menu />
        </MobileMenu>
      )}
    </Header>
  );
}
