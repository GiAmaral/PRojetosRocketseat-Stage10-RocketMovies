import { RiArrowLeftLine, RiChatSettingsFill } from "react-icons/ri";
import { HiOutlineClock } from "react-icons/hi2";

import {
  Container,
  ActionsContainer,
  Info,
  MovieInfo,
  UserInfo,
  TagsContainer,
  Tag,
  Text,
} from "./styles";

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Section } from "../../components/Section";
import { Score } from "../../components/Score";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useParams, useNavigate } from "react-router-dom";

export function Preview() {
  const { id } = useParams();
  const [movieNote, setMovieNote] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchMovieNote() {
      const response = await api.get(`/movie_notes/${id}`);
      setMovieNote(response.data);
    }

    fetchMovieNote();
  }, []);

  return (
    <Container>
      <Header />

      <ActionsContainer>
        <ButtonText to="/" title="Voltar" icon={RiArrowLeftLine} />
        <ButtonText
          title="Excluir nota"
          onClick={async () => {
            try {
              await api.delete(`/movie_notes/${id}`);
              alert("Nota excluida com sucesso!");
              navigate("/");
            } catch {
              alert("Não foi possível excluir a nota!");
            }
          }}
        />
      </ActionsContainer>

      <Section>
        <Info>
          <MovieInfo>
            <h1>{movieNote.title}</h1>
            <Score score={movieNote.rating} />
          </MovieInfo>

          <UserInfo>
            <img
              src={
                movieNote.user
                  ? `${api.defaults.baseURL}/files/${movieNote.user?.avatar}`
                  : ""
              }
              alt="Foto do usuário"
            />
            <span>Por {movieNote.user?.name}</span>
            <HiOutlineClock />
            <span>{movieNote.updated_at}</span>
          </UserInfo>
        </Info>

        <TagsContainer>
          {movieNote.tags?.map((tag) => {
            return <Tag key={tag.id} title={tag.name_tag} />;
          })}
        </TagsContainer>

        {movieNote.description?.split("\n").map((paragraph) => {
          return <Text key={paragraph.slice(10)}> {paragraph} </Text>;
        })}
      </Section>
    </Container>
  );
}
