import styled from "styled-components";

export const Container = styled.span`
  padding: 5px 16px;

  border-radius: 8px;

  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  background-color: ${({ theme }) => theme.COLORS.PINK_900};
`;
