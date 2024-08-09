import styled, { css } from "styled-components";

export const ButtonStyled = styled.button`
  --side: 59px;
  min-width: var(--side);
  min-height: var(--side);
  height: var(--side);
  width: var(--side);
  background-color: ${(props) => props.theme.colors.button};
  border-radius: 100%;
`;

export const BookmarkButtonStyled = styled(ButtonStyled)<{
  $profile?: boolean;
}>`
  ${({ $profile }) =>
    $profile &&
    css`
      background-color: ${(props) => props.theme.colors.surface};
      border: 1px solid ${(props) => props.theme.colors.surfaceStroke};
      position: absolute;
      top: 16px;
      right: 16px;

      &:active:hover {
        background-color: ${(props) => props.theme.colors.hoveredButtonOpaque};
      }

      &:hover {
        background-color: ${(props) => props.theme.colors.surface};
      }
    `}
`;

export const ButtonIcon = styled.img`
  margin: auto;
  display: block;
`;
