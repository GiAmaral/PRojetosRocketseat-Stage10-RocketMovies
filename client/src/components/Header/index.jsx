import { Container, InnerContainer, Profile, Logo, ButtonText } from "./styles";
import avatarPlaceholder from "../../assets/img/avatar_placeholder.svg";

import { Input } from "../Input";
import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Header() {
  const { signOut, user } = useAuth();

  const [search, setSearch] = useState([]);

  const navigate = useNavigate();

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  function handleSearch() {
    navigate(`/?title=${search}`);
  }

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      handleSearch();
    }
  }

  return (
    <Container>
      <InnerContainer>
        <Link to="/">
          <Logo>RocketMovies</Logo>
        </Link>

        <Input
          placeholder="Pesquisar pelo título"
          onKeyDown={handleKeyPress}
          onBlur={handleSearch}
          onChange={(e) => setSearch(e.target.value)}
        />

        <Profile>
          <div>
            <Link to="/profile">
              <strong>{user.name}</strong>
            </Link>

            <ButtonText to="/sign-in" title="Sair" onClick={signOut} />
          </div>

          <Link to="/profile">
            <img src={avatarUrl} alt={user.name} />
          </Link>
        </Profile>
      </InnerContainer>
    </Container>
  );
}
