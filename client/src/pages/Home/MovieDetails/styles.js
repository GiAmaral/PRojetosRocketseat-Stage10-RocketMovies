import styled from "styled-components";

export const Container = styled.div`
  border-radius: 16px;
  background-color: ${({ theme }) => theme.COLORS.PINK_TRANSPARANTY};

  padding: 32px;

  margin: 0 8px 24px 0;

  h1 {
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    font-size: 24px;
    font-weight: 700;
    line-height: 31px;

    margin-bottom: 8px;
  }
`;
