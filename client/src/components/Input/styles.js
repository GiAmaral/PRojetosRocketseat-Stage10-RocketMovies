import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 16px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  color: ${({ theme }) => theme.COLORS.GRAY_400};

  border-radius: 10px;

  padding: 16px;

  > input {
    all: unset;

    width: 100%;

    font-size: 16px;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_400};
    }

    > svg {
      margin-left: 12px;
    }
  }
`;
