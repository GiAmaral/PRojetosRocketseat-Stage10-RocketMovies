import { useState } from "react";
import { RiArrowLeftLine } from "react-icons/ri";
import { FiMail, FiLock, FiUser } from "react-icons/fi";

import BackgroundImg from "../../assets/img/backgroundImg.png";

import { api } from "../../services/api";

import { Input } from "../../components/Input";
import { ButtonText } from "../../components/ButtonText";

import { useNavigate } from "react-router-dom";

import {
  Container,
  SignUpSection,
  SiteTitle,
  Title,
  Form,
  InputsContainer,
  BackLinkContainer,
  StyledButton,
  BackgroundContainer,
} from "./styles";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos!");
    }

    api
      .post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso!");
        navigate(-1);
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível cadastrar");
        }
      });
  }

  return (
    <Container>
      <SignUpSection>
        <SiteTitle>
          <h1>RocketMovies</h1>
          <span>Aplicação para acompanhar tudo que assitir.</span>
        </SiteTitle>

        <Title>Crie sua conta</Title>

        <Form>
          <InputsContainer>
            <Input
              placeholder="Nome"
              type="text"
              icon={FiUser}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              placeholder="E-mail"
              type="text"
              icon={FiMail}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="Senha"
              type="password"
              icon={FiLock}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputsContainer>

          <StyledButton
            title="Cadastrar"
            type="button"
            onClick={handleSignUp}
          />
        </Form>

        <BackLinkContainer>
          <ButtonText
            to="/sign-in"
            icon={RiArrowLeftLine}
            title="Voltar para o login"
          />
        </BackLinkContainer>
      </SignUpSection>

      <BackgroundContainer>
        <img
          src={BackgroundImg}
          alt="Imagem de uma sala de cinema, com escada, e várias poltronas vermelhas."
        />
      </BackgroundContainer>
    </Container>
  );
}
