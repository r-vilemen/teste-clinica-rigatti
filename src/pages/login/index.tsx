import { useState } from "react";
import { useRouter } from "next/router";
import {
  Container,
  LoginBox,
  LoginInput,
  LoginTitle,
  LoginWrapper,
} from "@/ui/styles/Pages/login/styles";
import Button from "@/components/Button";

export default function Login() {
  const [username, setUsername] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (!username.trim()) return alert("Digite um nome");

    if (username.toLowerCase() === "admin") {
      router.push("/admin");
    } else {
      localStorage.setItem("username", username);
      router.push("/dashboard");
    }
  };

  return (
    <>
      <Container>
        <LoginWrapper>
          <LoginBox>
            <LoginTitle>Entrar no sistema</LoginTitle>
            <LoginInput
              type="text"
              placeholder="Digite seu nome"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Button onClick={handleLogin}>Entrar</Button>
          </LoginBox>
        </LoginWrapper>
      </Container>
    </>
  );
}
