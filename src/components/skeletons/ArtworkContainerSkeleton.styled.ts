import styled from "styled-components";

import { blinkAnimation } from "./ShortGallerySkeleton.styled";

export const ArtworkWrapperSkeleton = styled.div`
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

export const ArtworkCardSkeleton = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f0f1f1;
  border-radius: 8px;
  padding: 16px;
  animation: ${blinkAnimation} 1.5s infinite;
  width: 90%;
  height: 400px;
`;

export const ImageFigureSkeleton = styled.div`
  background-color: #ffffff;
  height: 60%;
  border-radius: 4px;
  margin-bottom: 16px;
  min-width: 250px;
  animation: ${blinkAnimation} 3s infinite;
`;
