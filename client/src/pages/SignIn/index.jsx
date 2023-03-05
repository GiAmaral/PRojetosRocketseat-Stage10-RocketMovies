import { useState } from "react";
import { FiMail, FiLock } from "react-icons/fi";

import { useAuth } from "../../hooks/auth";

import BackgroundImg from "../../assets/img/backgroundImg.png";

import {
  Container,
  SignInSection,
  SiteTitle,
  Title,
  Form,
  InputsContainer,
  BackLinkContainer,
  StyledButton,
  BackgroundContainer,
} from "./styles";

import { Input } from "../../components/Input";
import { ButtonText } from "../../components/ButtonText";
import { useNavigate } from "react-router-dom";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password });
  }

  const navigate = useNavigate();

  return (
    <Container>
      <SignInSection>
        <SiteTitle>
          <h1>RocketMovies</h1>
          <span>Aplicação para acompanhar tudo que assitir.</span>
        </SiteTitle>

        <Title>Faça seu login</Title>

        <Form>
          <InputsContainer>
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

          <StyledButton title="Entrar" type="button" onClick={handleSignIn} />
        </Form>

        <BackLinkContainer>
          <ButtonText to="/sign-up" title="Criar conta" />
        </BackLinkContainer>
      </SignInSection>

      <BackgroundContainer>
        <img
          src={BackgroundImg}
          alt="Imagem de uma sala de cinema, com escada, e várias poltronas vermelhas."
        />
      </BackgroundContainer>
    </Container>
  );
}
