import styled from 'styled-components';

export const ArtworkContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 35%));
  justify-content: space-between;
  row-gap: 50px;
  column-gap: 5%;
  margin-bottom: 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, auto);
    justify-content: center;
    column-gap: 5%;
  }

  @media screen and (max-width: 820px) {
    grid-template-columns: repeat(1, auto);
    justify-content: center;
    column-gap: 5%;
  }
`;

export const PaginatorContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  align-items: center;
`;

export const PaginatorButton = styled.button`
  height: 30px;
  width: 30px;
  padding: auto;
  border-radius: 4px;
  font-weight: 300;
  display: flex;
  justify-content: center;
  align-items: center;

  &.active {
    background-color: var(--strong-accent-color);
    font-weight: 600 !important;
    color: var(--surface-color);
  }

  &.active:hover,
  &.active:active:hover {
    background-color: var(--strong-accent-color);
  }

  &:first-child {
    transform: rotateY(180deg);
  }
`;
