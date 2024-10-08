import styled from "styled-components";

export const SearchSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 72px;
`;

export const Main = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 120px;
`;

export const StyledH1 = styled.h1`
  font-weight: 700;
  font-size: 64px;
  color: ${(props) => props.theme.colors.regularText};
  text-align: center;

  span {
    color: ${(props) => props.theme.colors.strongAccent};
  }
`;
