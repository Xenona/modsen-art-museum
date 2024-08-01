import styled, { css } from 'styled-components';

export const MainButton = styled.button<{ $profile?: boolean }>`
  --side: 59px;
  min-width: var(--side);
  min-height: var(--side);
  height: var(--side);
  width: var(--side);
  background-color: var(--button-color);
  border-radius: 100%;

  ${({ $profile }) =>
    $profile &&
    css`
      background-color: var(--surface-color);
      border: 1px solid var(--surface-stroke-color);
      position: absolute;
      top: 16px;
      right: 16px;
    `}
`;

export const ButtonIcon = styled.img`
  margin: auto;
  display: block;
`;
