import styled from "styled-components";
import { blinkAnimation } from "./ShortGallerySkeleton.styled";

export const ArtworkWrapperSkeleton = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 35%));
  justify-content: space-between;
  row-gap: 32px;
  column-gap: 5%;
  margin-bottom: 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, auto);
    column-gap: 32px;
  }

  @media screen and (max-width: 820px) {
    grid-template-columns: repeat(1, auto);
    justify-content: center;
    column-gap: 32px;
  }
`;

export const ArtworkCardSkeleton = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f0f1f1;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  animation: ${blinkAnimation} 1.5s infinite;
  width: 100%;
  max-width: 300px;
  height: 400px;
`;

export const ImageFigureSkeleton = styled.div`
  background-color: #d0d0d0;
  height: 60%;
  border-radius: 4px;
  margin-bottom: 16px;
  min-width: 250px;
`;

export const TextSkeleton = styled.div`
  height: 40%;
`;

export const InfoCardSkeleton = styled.div`
  background-color: #f0f1f1;
  border-radius: 4px;
  height: 100%;
  width: 100%;
  animation: ${blinkAnimation} 1.5s infinite;
`;
