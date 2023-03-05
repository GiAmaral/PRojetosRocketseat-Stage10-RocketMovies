import { createContext, useContext, useState, useEffect } from "react";

import { api } from "../services/api";
import useLocalStorage from "./localStorage";

const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useLocalStorage("@rocketmovies:user");
  const [token, setToken] = useLocalStorage("@rocketmovies:token");

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password });
      const { user: loggedInUser, token: userToken } = response.data;

      setUser(loggedInUser);
      setToken(userToken);
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível entrar");
      }
    }
  }

  function signOut() {
    setUser(null);
    setToken(null);
  }

  async function updateProfile({ user: updatedUser, avatarFile }) {
    try {
      if (avatarFile) {
        const fileUploadForm = new FormData();
        fileUploadForm.append("avatar", avatarFile);

        const response = await api.patch("/users/avatar", fileUploadForm);
        updatedUser.avatar = response.data.avatar;
      }

      await api.put("/users", updatedUser);
      setUser(updatedUser);
      alert("Perfil atualizado!");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível atualizar o perfil.");
      }
    }
  }

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        updateProfile,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
