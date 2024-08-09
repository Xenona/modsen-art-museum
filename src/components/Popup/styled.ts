import { ButtonStyled } from "@components/BookmarkButton/styled";
import styled from "styled-components";

export const StyledDialog = styled.dialog`
  align-self: center;
  justify-self: center;
  overflow: hidden;

  width: 90vw;
  height: 90vh;
  max-width: fit-content;
  max-height: fit-content;
  background: transparent;
  border: none;

  &::backdrop {
    backdrop-filter: blur(1px);
    background-color: #171717b5;
  }

  & > img {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    object-fit: contain;
    display: block;
    margin: auto;
    height: -moz-available;
    height: -webkit-fill-available;
    height: fill-available;
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
