import styled from "styled-components";

import { blinkAnimation } from "./ShortGallerySkeleton.styled";

export const BigImageSkeleton = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f0f1f1;
  animation: ${blinkAnimation} 1.5s infinite ease-in-out;
`;
