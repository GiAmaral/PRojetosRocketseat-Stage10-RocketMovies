import { RiArrowLeftLine } from "react-icons/ri";

import {
  Container,
  ActionsContainer,
  AddMovie,
  Form,
  TagsFieldSet,
  TagsContainer,
  ObsTextArea,
  ScoreInput,
  TitleInput,
  DeleteButton,
  SaveButton,
} from "./styles";

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Section } from "../../components/Section";
import { AddTag } from "../../components/AddTag";
import { useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export function Create() {
  const [title, setTitle] = useState("");
  const [score, setScore] = useState("");
  const [comments, setComments] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  async function handleNewMovieNotes() {
    if (!title || !comments) {
      return alert("O campo título e/ou o campo observações estão em branco.");
    }

    if (score > 5 || score < 0) {
      return alert("Os pontos vão de 0 a 5");
    }

    if (newTag) {
      return alert(
        "Você deixou um marcador no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio."
      );
    }

    await api.post("/movie_notes", {
      title,
      rating: score,
      description: comments,
      tags,
    });

    alert("Nota de filme criada com sucesso!");
    console.log("aqui");
    navigate(-1);
  }

  function resetFields() {
    setTitle("");
    setScore("");
    setComments("");
    setTags([]);
    setNewTag("");
  }

  function handleAddTags() {
    setTags((prevState) => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTags(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }

  return (
    <Container>
      <Header />

      <ActionsContainer>
        <ButtonText to="/" title="Voltar" icon={RiArrowLeftLine} />
      </ActionsContainer>

      <Section>
        <AddMovie>
          <h1>Novo filme</h1>

          <Form>
            <TitleInput
              placeholder="Título"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <ScoreInput
              placeholder="Sua nota (de 0 a 5)"
              type="text"
              value={score}
              onChange={(e) => setScore(e.target.value)}
            />
            <ObsTextArea
              placeholder="Observações"
              type="text"
              rows="5"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
            />

            <TagsFieldSet>
              <span>Marcadores</span>

              <TagsContainer>
                {tags.map((tag, index) => (
                  <AddTag
                    key={String(index)}
                    value={tag}
                    onClick={() => {
                      handleRemoveTags(tag);
                    }}
                  />
                ))}
                <AddTag
                  isNew
                  placeholder="Novo marcador"
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  onClick={handleAddTags}
                />
              </TagsContainer>
            </TagsFieldSet>

            <DeleteButton
              title="Limpar todos os campos"
              onClick={resetFields}
            />
            <SaveButton
              title="Salvar alterações"
              type="button"
              onClick={handleNewMovieNotes}
            />
          </Form>
        </AddMovie>
      </Section>
    </Container>
  );
}
