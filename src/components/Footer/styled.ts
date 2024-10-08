import styled from "styled-components";

export const Footer = styled.footer`
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 8%;
  background-color: ${(props) => props.theme.colors.surface};
  margin-top: 120px;
`;
