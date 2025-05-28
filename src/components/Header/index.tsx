import React from "react";
import { useRouter } from "next/router";
import {
  HeaderWrapper,
  Title,
  LogoutButton,
} from "@/ui/styles/Components/Header/styles";

const Header = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("username");
    router.push("/login");
  };

  return (
    <HeaderWrapper>
      <Title>Clínica Rigatti — Agendamentos</Title>
      <LogoutButton onClick={handleLogout}>Sair</LogoutButton>
    </HeaderWrapper>
  );
};

export default Header;
