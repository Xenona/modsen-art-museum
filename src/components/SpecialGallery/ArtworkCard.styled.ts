import styled from "styled-components";

export const ArtworkCard = styled.div`
  width: 100%;
  position: relative;
`;

export const ImageFigure = styled.div`
  width: 100%;
  height: auto;
  aspect-ratio: 1 / 1.2;
`;

export const BigImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Text = styled.div`
  width: 80%;
  position: absolute;
  bottom: -50px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
`;
