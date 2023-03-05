import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled(Link)`
  background: none;
  color: ${({ theme }) => theme.COLORS.PINK_500};

  border: none;

  font-size: 16px;
  font-weight: 400;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  color: ${({ theme }) => theme.COLORS.PINK_500};

  > svg {
    margin: 0;
  }
`;
