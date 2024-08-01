import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  padding: 16px;
  gap: 16px;
  align-items: center;
`;

export const Thumbnail = styled.img`
  height: 80px;
  width: auto;
  align-self: center;
  aspect-ratio: 1 / 1;
  object-fit: cover;
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
`;

export const Title = styled.h3`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  font-family: 'Inter';
  font-weight: 500;
  letter-spacing: -0.5px;
  line-height: 26px;
`;

export const Author = styled.h4`
  letter-spacing: -0.1px;
  line-height: 26px;
`;

export const PublicDomain = styled.p`
  margin-top: 17px;
  line-height: 80%;
  font-weight: 700;
`;
