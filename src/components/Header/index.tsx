import menu from '@assets/icons/menu.svg';
import { useState } from 'react';
import { Menu } from './Menu';
import museumLogo from '@assets/logos/museum_logo.svg';
import {
  DesktopMenu,
  Header,
  MobileMenu,
  MobileMenuButton,
  TopLine,
} from './styled';
import { LinkedLogo } from './LinkedLogo';
export function AppHeader() {
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);

  return (
    <Header>
      <TopLine>
        <LinkedLogo
          img={museumLogo}
          link={'/'}
          alt={
            'Logo of the museum, depicts an Ancient Greek temple facade and words - Museum of Art'
          }
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
