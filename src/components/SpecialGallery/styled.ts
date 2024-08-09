import styled from "styled-components";

export const ArtworkContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 45%));
  justify-content: space-between;
  row-gap: 100px;
  column-gap: 5%;
  margin-bottom: 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 45%);
    justify-content: center;
    column-gap: 5%;
  }

  @media screen and (max-width: 820px) {
    grid-template-columns: repeat(1, 100%);
    justify-content: center;
    column-gap: 5%;
  }
`;

export const SelectorContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  align-items: center;
  margin-top: 90px;
  margin-bottom: 32px;

  & button:first-of-type {
    transform: rotateY(180deg);
  }
`;

export const SelectorParam = styled.p`
  width: 150px;
  background-color: ${(props) => props.theme.colors.hoveredButton};
  text-align: center;
`;

export const SelectorButton = styled.button`
  height: 30px;
  width: 30px;
  border-radius: ${(props) => props.theme.borderRadius};
  font-weight: 300;
  display: flex;
  justify-content: center;
  align-items: center;

  &.active {
    background-color: ${(props) => props.theme.colors.strongAccent};
    font-weight: 600 !important;
    color: ${(props) => props.theme.colors.surface};
  }

  &.active:hover,
  &.active:active:hover {
    background-color: ${(props) => props.theme.colors.strongAccent};
  }
`;
