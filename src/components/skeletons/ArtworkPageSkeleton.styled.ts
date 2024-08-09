import styled from "styled-components";

import { blinkAnimation } from "./ShortGallerySkeleton.styled";

export const SkeletonMainHorizontal = styled.div`
  display: flex;
  flex-direction: row;
  gap: 120px;
  padding: 16px;
  animation: ${blinkAnimation} 1.5s infinite;

  @media (max-width: 1020px) {
    flex-direction: column;
  }
`;

export const SkeletonFigure = styled.div`
  width: 100%;
  flex: 1;
  background-color: #f0f1f1;
  height: 500px;
`;

export const SkeletonArticle = styled.div`
  flex: 1.6;
  display: flex;
  flex-direction: column;
  gap: 32px;
  background-color: #f0f1f1;
  padding: 16px;
`;

export const SkeletonTitle = styled.div`
  height: 32px;
  background-color: #f0f1f1;
  margin-bottom: 16px;
`;

export const SkeletonParagraph = styled.div`
  height: 24px;
  background-color: #f0f1f1;
  margin-bottom: 16px;
`;

export const SkeletonListItem = styled.div`
  height: 24px;
  background-color: #f0f1f1;
  margin-bottom: 16px;
`;
