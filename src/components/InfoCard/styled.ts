import styled, { css } from "styled-components";

export const Card = styled.div<{ $withImage: boolean }>`
  padding: ${(props) => props.theme.spacing.medium};
  gap: ${(props) => props.theme.spacing.medium};
  display: grid;
  align-items: center;
  background-color: ${(props) => props.theme.colors.surface};
  border: 1px solid ${(props) => props.theme.colors.surfaceStroke};
  ${(props) =>
    props.$withImage
      ? css`
          grid-template-columns: 80px auto 60px;
        `
      : css`
          grid-template-columns: auto 60px;
        `}
`;

export const Thumbnail = styled.img`
  height: 80px;
  width: auto;
  align-self: center;
  aspect-ratio: 1 / 1;
  object-fit: cover;
`;

export const Content = styled.div`
  max-width: 100%;
  overflow: hidden;
  min-width: 100%;
`;

export const Title = styled.h2`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  font-family: "Inter";
  font-weight: 500;
  letter-spacing: -0.5px;
  line-height: 26px;
  font-size: 18px;

  @media screen and (max-width: 720px) {
    font-size: 14px;
  }
`;

export const Author = styled.h4`
  letter-spacing: -0.1px;
  line-height: 26px;
  font-family: "Inter";
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const PublicDomain = styled.p`
  margin-top: 17px;
  line-height: 80%;
  font-weight: 700;
`;
