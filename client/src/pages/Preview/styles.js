import styled from "styled-components";
import { Tag as TagComponent } from "../../components/Tag";

export const Container = styled.div`
  height: 100vh;
  margin: 0 auto;

  padding-bottom: 80px;

  display: grid;
  grid-template-rows: 116px auto 1fr;
  grid-template-areas:
    "header"
    "actions"
    "content";
`;

export const ActionsContainer = styled.div`
  grid-area: actions;
  justify-self: center;
  justify-content: space-between;
  width: 1137px;

  margin: 40px 0 27px;

  display: flex;
  align-items: center;
  gap: 8px;

  color: ${({ theme }) => theme.COLORS.PINK_500};
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;

  margin-bottom: 40px;
`;

export const MovieInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 19px;

  > h1 {
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  > img {
    width: 16px;
    height: 16px;
    border: 1px;
    border-style: solid;
    border-radius: 50%;
    color: ${({ theme }) => theme.COLORS.GRAY_600};
  }

  > span {
    font-family: "Roboto", sans-serif;

    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }

  > svg {
    color: ${({ theme }) => theme.COLORS.PINK_500};
  }
`;

export const TagsContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 40px;
`;

export const Tag = styled(TagComponent)`
  background-color: ${({ theme }) => theme.COLORS.PINK_800};
`;

export const Text = styled.p`
  text-align: justify;
  color: ${({ theme }) => theme.COLORS.GRAY_200};

  margin: 0 16px 24px 0;
`;
