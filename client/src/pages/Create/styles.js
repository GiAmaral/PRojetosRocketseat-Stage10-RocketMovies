import styled from "styled-components";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { TextArea } from "../../components/TextArea";

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
  width: 1137px;

  margin: 40px 0 27px;

  display: flex;
  align-items: center;
  gap: 8px;

  color: ${({ theme }) => theme.COLORS.PINK_500};
`;

export const AddMovie = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  margin: 0 16px 0 0;

  > h1 {
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    font-size: 36px;
    font-weight: 500;
  }
`;

export const Form = styled.form`
  display: grid;
  grid-template-areas:
    "title  score"
    "obs    obs"
    "tags   tags"
    "delete save";

  gap: 40px;
`;

export const TitleInput = styled(Input)`
  grid-area: title;
`;

export const ScoreInput = styled(Input)`
  grid-area: score;
`;

export const ObsTextArea = styled(TextArea)`
  grid-area: obs;
`;

export const DeleteButton = styled(Button)`
  grid-area: delete;

  display: flex;
  justify-content: center;

  color: ${({ theme }) => theme.COLORS.PINK_500};
  background-color: ${({ theme }) => theme.COLORS.GRAY_900};
`;

export const SaveButton = styled(Button)`
  grid-area: save;

  display: flex;
  justify-content: center;
`;

export const TagsFieldSet = styled.div`
  grid-area: tags;

  display: flex;
  flex-direction: column;
  gap: 24px;

  > span {
    font-size: 20px;
    color: ${({ theme }) => theme.COLORS.GRAY_500};
  }
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;

  border-radius: 8px;

  padding: 16px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_900};
`;
