import styled from 'styled-components';

export const MainButton = styled.button`
  --side: 59px;
  min-width: var(--side);
  min-height: var(--side);
  height: var(--side);
  width: var(--side);
  background-color: var(--button-color);
  border-radius: 100%;
  position: relative;
  z-index: 1;
`;

export const ProfileButton = styled(MainButton)`
  background-color: var(--surface-color);
  border: 1px solid var(--surface-stroke-color);
`;

export const ButtonIcon = styled.img`
  margin: auto;
  display: block;
`;
