import styled from "styled-components";

export const Container = styled.button`
  /* width: 100%; */
  background-color: ${({ theme }) => theme.COLORS.PINK_500};
  color: ${({ theme }) => theme.COLORS.PINK_900};

  height: 56px;
  border: 0;
  padding: 0 16px;
  margin-top: 16px;
  border-radius: 10px;
  font-weight: 500;

  display: flex;
  align-items: center;
  gap: 8px;

  &:disabled {
    opacity: 0.5;
  }
`;
