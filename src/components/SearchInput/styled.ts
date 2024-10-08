import searchIcon from "@assets/icons/search.svg";
import styled from "styled-components";

export const SearchContainer = styled.label`
  width: 80%;
  display: flex;
  justify-content: space-between;
  border-radius: 16px;
  background-color: #3939390c;
  align-items: center;
  padding: 16px;
  margin: 0 auto;
`;

export const SearchInput = styled.input`
  background: none;
  border: none;
  font-size: 14px;
  font-family: "Inter";
  height: 100%;
  outline: none;
  flex: 1;

  &::placeholder {
    color: #3939397f;
  }
`;

export const SearchIcon = styled.img.attrs({
  src: searchIcon,
  alt: "Search icon",
})`
  height: 32px;
  width: 32px;
  padding-left: 16px;
`;
