import { Title } from '@components/InfoCard/styled';
import { Main } from '@pages/home/styled';
import styled from 'styled-components';

export const Figure = styled.figure`
  position: relative;
  width: 100%;
  flex: 1;

  & img {
    cursor: zoom-in;
  }
`;

export const MainHorizontal = styled(Main)`
  flex-direction: row;

  @media (max-width: 1020px) {
    flex-direction: column;
  }
`;

export const Important = styled.p`
  font-size: 24px;
  margin-bottom: 16px;
  color: var(--weak-accent-color);
`;

export const Key = styled.span`
  font-size: 16px;
  color: var(--weak-accent-color);
`;
export const Article = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 64px;

  flex: 1.6;
`;

export const ArticleTitle = styled(Title)`
  font-size: 32px;
  margin-bottom: 32px;
  white-space: normal;
  line-height: normal;
`;

export const ListItem = styled.li`
  margin-bottom: 16px;
  list-style-type: none;
`;
