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

  > textarea {
    all: unset;

    text-align: justify;

    width: 100%;

    font-size: 16px;

    padding-right: 16px;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_400};
    }

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

    > svg {
      margin-left: 12px;
    }
  }
`;
