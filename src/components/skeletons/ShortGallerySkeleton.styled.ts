import styled, { css, keyframes } from "styled-components";

export const blinkAnimation = keyframes`
  0% {
    background-color: #f0f1f1;
  }
  50% {
    background-color: #ffffff;
  }
  100% {
    background-color: #f0f1f1;
  }
`;

export const SkeletonCard = styled.div<{ $withImage: boolean }>`
  padding: 16px;
  gap: 16px;
  display: grid;
  align-items: center;
  background-color: #f0f1f1;
  border: 1px solid #e0e0e0;
  ${(props) =>
    props.$withImage
      ? css`
          grid-template-columns: 80px auto 60px;
        `
      : css`
          grid-template-columns: auto 60px;
        `}

  animation: ${blinkAnimation} 1.5s infinite ease-in-out;

  &::before {
    content: "";
    display: block;
    background-color: #e0e0e0;
    height: 80px;
    grid-column: span 1;
  }
`;
