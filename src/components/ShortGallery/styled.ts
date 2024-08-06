import styled from "styled-components";
export const ShortGalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(auto, 35%));
  gap: 16px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, auto);
  }

  @media screen and (max-width: 820px) {
    grid-template-columns: repeat(1, auto);
  }
`;
