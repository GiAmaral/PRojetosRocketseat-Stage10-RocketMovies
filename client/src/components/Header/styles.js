import styled from "styled-components";

import { ButtonText as LogOutButton } from "../ButtonText";

export const Container = styled.header`
  grid-area: header;

  display: flex;
  align-items: center;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const InnerContainer = styled.div`
  width: 1137px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 64px;

  > a {
    display: flex;
    align-self: center;
  }
`;

export const Logo = styled.h1`
  width: 164px;
  display: flex;
  align-items: center;
  text-align: start;
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.COLORS.PINK_500};
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;

  img {
    width: 64px;
    height: 64px;
    border: 1px;
    border-style: solid;
    border-radius: 50%;
    color: ${({ theme }) => theme.COLORS.GRAY_600};
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    line-height: 18px;

    strong {
      white-space: nowrap;
      font-size: 14px;
      font-weight: 700;
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
  }
`;

export const ButtonText = styled(LogOutButton)`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.COLORS.GRAY_400};

  text-align: end;
`;
