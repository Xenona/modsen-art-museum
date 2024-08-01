import styled from 'styled-components';

export const Header = styled.header`
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 8%;
  background: linear-gradient(
    90deg,
    rgba(52, 51, 51, 1) 17%,
    rgba(72, 72, 72, 1) 59%,
    rgba(40, 40, 40, 1) 99%
  );

  @media screen and (max-width: 720px) {
    flex-direction: column;
    height: fit-content;
    gap: 30px;
    padding: 10px 30px 30px;
  }
`;

export const MobileMenuButton = styled.button`
  display: none;

  @media screen and (max-width: 720px) {
    display: block;
    justify-self: baseline;
    border-radius: 100%;
    aspect-ratio: 1 / 1;
    height: 44px;
    width: 44px;
    padding: 10px;
    background: none;
    border: none;
  }
`;

export const TopLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const DesktopMenu = styled.div`
  display: block;

  @media screen and (max-width: 720px) {
    display: none;
  }
`;

export const MobileMenu = styled.div`
  display: none;

  @media screen and (max-width: 720px) {
    display: block;
  }
`;

export const Nav = styled.nav`
  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 16px;
    padding: 0;
    margin: 0;
    list-style-type: none;
  }

  li {
    font-family: 'Inter';

    a {
      color: var(--surface-color);
      text-decoration: none;
      white-space: nowrap;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 4px;
    }

    img {
      fill: var(--weak-accent-color);
    }
  }

  @media screen and (max-width: 720px) {
    ul {
      flex-direction: column;
      align-items: center;
    }
  }
`;
