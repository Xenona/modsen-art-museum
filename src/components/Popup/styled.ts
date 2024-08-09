import { ButtonStyled } from "@components/BookmarkButton/styled";
import styled from "styled-components";

export const StyledDialog = styled.dialog`
  max-width: 84%;
  max-height: 80%;
  align-self: center;
  justify-self: center;
  position: relative;
  overflow: hidden;

  &::backdrop {
    backdrop-filter: blur(1px);
    background-color: #171717b5;
  }

  & > * {
    max-width: 100%;
    max-height: 100%;
  }
`;

export const CloseCross = styled(ButtonStyled)`
  position: fixed;
  top: 20px;
  right: 20px;
  width: 20px;
  height: 20px;
  display: flex;
  font-size: 30px;
  color: ${(props) => props.theme.colors.weakAccent};
  justify-content: center;
  align-items: center;
`;
