import styled from "styled-components";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderProfile = styled.div`
  height: 144px;

  display: flex;
  align-items: center;
  justify-content: start;

  padding-left: 144px;

  background-color: ${({ theme }) => theme.COLORS.PINK_TRANSPARANTY};
`;

export const ProfilePictureContainer = styled.div`
  margin-top: calc(-186px / 2);

  position: relative;

  > img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
    object-fit: cover;
  }

  input {
    display: none;
  }

  label {
    width: 48px;
    height: 48px;
    position: absolute;
    bottom: 8px;
    right: 8px;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    color: ${({ theme }) => theme.COLORS.PINK_900};
    background-color: ${({ theme }) => theme.COLORS.PINK_500};

    cursor: pointer;
  }
`;

export const ProfileContent = styled.div`
  margin-top: 64px;

  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const UsersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const PasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StyledInput = styled(Input)`
  color: ${({ theme }) => theme.COLORS.GRAY_200};

  & input::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }
`;

export const StyledButton = styled(Button)`
  display: flex;
  justify-content: center;
`;
