import styled, { css } from "styled-components";

export const ButtonStyled = styled.button`
  --side: 59px;
  min-width: var(--side);
  min-height: var(--side);
  height: var(--side);
  width: var(--side);
  background-color: var(--button-color);
  border-radius: 100%;
`;

export const BookmarkButtonStyled = styled(ButtonStyled)<{
  $profile?: boolean;
}>`
  ${({ $profile }) =>
    $profile &&
    css`
      background-color: var(--surface-color);
      border: 1px solid var(--surface-stroke-color);
      position: absolute;
      top: 16px;
      right: 16px;

      &:active:hover {
        background-color: var(--hovered-button-color-opaque);
      }

      &:hover {
        background-color: var(--surface-color);
      }
    `}
`;

export const ButtonIcon = styled.img`
  margin: auto;
  display: block;
`;
