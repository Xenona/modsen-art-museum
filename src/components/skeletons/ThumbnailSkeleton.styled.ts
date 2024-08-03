import styled from "styled-components";
import { blinkAnimation } from "./ShortGallerySkeleton.styled";

export const ThumbnailSkeleton = styled.div`
  height: 80px;
  width: auto;
  align-self: center;
  aspect-ratio: 1 / 1;
  background-color: #f0f1f1;
  animation: ${blinkAnimation} 1.5s infinite ease-in-out;
`;
