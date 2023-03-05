import styled from "styled-components";

export const Container = styled.p`
  margin: 15px 0;

  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 18px;
  text-align: justify;
  color: ${({ theme }) => theme.COLORS.GRAY_500};
`;
