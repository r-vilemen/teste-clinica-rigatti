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
import SEO from "@/components/SEO";
import { LoginPageTextsSEO } from "@/components/SEO/seoTexts";

export default function Login() {
  const seoText = LoginPageTextsSEO;
  const [username, setUsername] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (!username.trim()) return alert("Digite um nome");

    if (username.toLowerCase() === "admin") {
      localStorage.setItem("username", "admin");
      router.push("/admin");
    } else {
      localStorage.setItem("username", username);
      router.push("/dashboard");
    }
  };

  return (
    <>
      <Container>
        <SEO
          title={seoText.title}
          description={seoText.description}
          keywords={seoText.keywords}
          author={seoText.author}
          url={seoText.url}
          image={seoText.image}
        />
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
