import museumLogoDark from '@assets/logos/museum_logo_dark.svg';
import modsenLogo from '@assets/logos/modsen_logo.svg';
import { LinkedLogo } from '@components/Header/LinkedLogo';
import { Footer as StyledFooter } from './styled';

export function Footer() {
  return (
    <StyledFooter>
      <LinkedLogo
        img={museumLogoDark}
        link={'/'}
        alt={
          'Logo of the museum, depicts an Ancient Greek temple facade and words - Museum of Art'
        }
      />
      <LinkedLogo
        img={modsenLogo}
        link={'https://www.modsen-software.com'}
        alt={
          "Logo of Modsen company. Deptics word 'MODSEN' with an orange hexagon joining M and O letters"
        }
      ></LinkedLogo>
    </StyledFooter>
  );
}
