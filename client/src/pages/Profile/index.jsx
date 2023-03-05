import { useState } from "react";
import { RiArrowLeftLine } from "react-icons/ri";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { useAuth } from "../../hooks/auth";
import avatarPlaceholder from "../../assets/img/avatar_placeholder.svg";
import { api } from "../../services/api";

import {
  Container,
  ProfilePictureContainer,
  HeaderProfile,
  ProfileContent,
  UsersContainer,
  PasswordContainer,
  StyledInput,
  StyledButton,
} from "./styles";

import { Input } from "../../components/Input";
import { ButtonText } from "../../components/ButtonText";

export function Profile() {
  const { user, updateProfile } = useAuth();
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState();
  const [passwordNew, setPasswordNew] = useState();

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;
  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);

  async function handleUpdate() {
    const updatedUser = {
      ...user,
      name,
      email,
      password: passwordNew,
      old_password: passwordOld,
    };

    await updateProfile({ user: updatedUser, avatarFile });
  }

  function handleFileChange(e) {
    const { files } = e.target;
    setAvatarFile(files[0]);

    const preview = URL.createObjectURL(files[0]);
    setAvatar(preview);
  }

  return (
    <>
      <HeaderProfile>
        <ButtonText to="/" title="Voltar" icon={RiArrowLeftLine} />
      </HeaderProfile>

      <Container>
        <ProfilePictureContainer>
          <img src={avatar} alt="Foto do usuário" />

          <label htmlFor="avatar">
            <MdOutlinePhotoCamera />
          </label>

          <input id="avatar" type="file" onChange={handleFileChange} />
        </ProfilePictureContainer>

        <ProfileContent>
          <UsersContainer>
            <StyledInput
              placeholder="Gisele Amaral"
              type="text"
              icon={FiUser}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <StyledInput
              placeholder="gisele.gfa89@gmail.com"
              type="text"
              icon={FiMail}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </UsersContainer>

          <PasswordContainer>
            <Input
              placeholder="Senha atual"
              type="password"
              icon={FiLock}
              onChange={(e) => setPasswordOld(e.target.value)}
            />
            <Input
              placeholder="Nova senha"
              type="password"
              icon={FiLock}
              onChange={(e) => setPasswordNew(e.target.value)}
            />
          </PasswordContainer>

          <StyledButton title="Salvar" type="button" onClick={handleUpdate} />
        </ProfileContent>
      </Container>
    </>
  );
}
