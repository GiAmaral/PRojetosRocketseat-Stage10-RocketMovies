import styled from "styled-components";
import { Button } from "../../components/Button";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 637px 1fr;

  max-height: 100vh;
  overflow-y: hidden;
`;

export const SignUpSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-height: 100vh;
  padding: 0 136px;
`;

export const SiteTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  > h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.PINK_500};
  }

  > span {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`;

export const Title = styled.div`
  font-size: 24px;
  font-weight: 500;
  color: ${({ theme }) => theme.COLORS.GRAY_200};

  margin: 48px 0;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const BackLinkContainer = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 42px;
`;

export const StyledButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BackgroundContainer = styled.div`
  > img {
    object-fit: cover;

    width: 100%;
  }
`;
