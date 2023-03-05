import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 16px;

  background-color: ${({ theme, isNew }) =>
    isNew ? "transparent" : theme.COLORS.GRAY_700};

  border-radius: 10px;
  border: ${({ theme, isNew }) =>
    isNew ? `2px dashed ${theme.COLORS.GRAY_400}` : "none"};

  padding: 16px;

  > button {
    border: none;
    background: none;
    color: ${({ theme }) => theme.COLORS.PINK_500};
  }

  > input {
    all: unset;

    font-family: "Roboto", sans-serif;
    color: ${({ theme, isNew }) =>
      isNew ? theme.COLORS.GRAY_400 : theme.COLORS.WHITE};
    background-color: transparent;

    &::placeholder {
      font-family: "Roboto", sans-serif;
      color: ${({ theme }) => theme.COLORS.GRAY_400};
    }
  }
`;
