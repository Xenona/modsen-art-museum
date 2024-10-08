import styled from "styled-components";

export const StubImage = styled.div`
  box-sizing: border-box;
  border: 1px solid ${(props) => props.theme.colors.weakAccent};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-height: 80px;
  min-width: 80px;
`;
