import styled from "styled-components";

export const Container = styled.section`
  width: 1137px;
  justify-self: center;
  grid-area: content;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: none;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PINK_500};
    border-radius: 8px;
  }
`;
