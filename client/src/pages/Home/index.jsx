import { FiPlus } from "react-icons/fi";

import { Container, TagsContainer, ActionsContainer } from "./styles";

import { api } from "../../services/api";
import { useState, useEffect } from "react";

import { Tag } from "../../components/Tag";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { MoviesDetails } from "./MovieDetails";
import { Paragraph } from "../../components/Paragraph";
import { Score } from "../../components/Score";
import { Link } from "../../components/Link";
import { useNavigate, useSearchParams } from "react-router-dom";

export function Home() {
  const [movieNotes, setMovieNotes] = useState([]);

  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const title = searchParams.get("title") || "";

  async function fetchMovieNotes() {
    const response = await api.get(`/movie_notes?title=${title}`);
    setMovieNotes(response.data);
  }

  function handlePreview(id) {
    navigate(`/preview/${id}`);
  }

  useEffect(() => {
    fetchMovieNotes();
  }, [title]);

  return (
    <Container>
      <Header />
      <ActionsContainer>
        <h1>Meus filmes</h1>
        <Link to="/create" title="Adicionar filme" Icon={FiPlus} />
      </ActionsContainer>

      <Section>
        {movieNotes.map((movieNote) => {
          return (
            <MoviesDetails
              key={movieNote.id}
              id={movieNote.id}
              title={movieNote.title}
              onClick={() => handlePreview(id)}
            >
              <Score score={movieNote.rating} />
              {movieNote.description.split("\n").map((paragraph) => {
                return (
                  <Paragraph key={paragraph.slice(10)}> {paragraph} </Paragraph>
                );
              })}

              <TagsContainer>
                {movieNote.tags.map((tag) => {
                  return <Tag key={tag.id} title={tag.name_tag} />;
                })}
              </TagsContainer>
            </MoviesDetails>
          );
        })}
      </Section>
    </Container>
  );
}
