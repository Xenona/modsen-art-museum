import styled from "styled-components";

import { blinkAnimation } from "./ShortGallerySkeleton.styled";

export const SelectorContainerSkeleton = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  align-items: center;
  margin-top: 90px;
  margin-bottom: 32px;
  width: fit-content;
  margin-left: auto;
  animation: ${blinkAnimation} 1.5s infinite;
`;

export const SelectorButtonSkeleton = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 4px;
  background-color: #f0f1f1;
`;
