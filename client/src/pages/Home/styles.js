import styled from "styled-components";

export const Container = styled.main`
  height: 100vh;
  margin: 0 auto;

  padding-bottom: 80px;

  overflow: hidden;

  display: grid;
  grid-template-rows: 116px auto 1fr;
  grid-template-areas:
    "header"
    "actions"
    "content";
`;

export const ActionsContainer = styled.div`
  grid-area: actions;
  width: 1137px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-self: center;
  margin: 48px 0 37px;
`;

export const TagsContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;
