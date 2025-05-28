import { useState } from "react";
import { useRouter } from "next/router";
import Container from "@/components/Container";
import Button from "@/components/Button";
import {
  Title,
  AgendarWrapper,
  FormGroup,
  Input,
} from "@/ui/styles/Pages/agendar/styles";
import { Label } from "@/ui/styles/Pages/dashboard/styles";
import SEO from "@/components/SEO";
import { AgendarPageTextsSEO } from "@/components/SEO/seoTexts";

export default function Agendar() {
  const seoText = AgendarPageTextsSEO;
  const router = useRouter();
  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    especialidade: "",
    data: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (
      !form.nome.trim() ||
      !form.telefone.trim() ||
      !form.especialidade.trim() ||
      !form.data.trim()
    ) {
      alert("Preencha todos os campos!");
      return;
    }

    const username = localStorage.getItem("username");

    const novoAgendamento = {
      id: String(Date.now()),
      nome: username,
      telefone: form.telefone,
      especialidade: form.especialidade,
      data: form.data,
      status: "pendente",
    };

    const existentes = JSON.parse(localStorage.getItem("agendamentos") || "[]");
    const atualizados = [...existentes, novoAgendamento];

    localStorage.setItem("agendamentos", JSON.stringify(atualizados));

    alert("Agendamento enviado com sucesso!");
    router.push("/dashboard");
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
        <AgendarWrapper>
          <Title>Agendar nova consulta</Title>

          <FormGroup>
            <Label>Nome</Label>
            <Input
              type="text"
              name="nome"
              value={form.nome}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <Label>Telefone</Label>
            <Input
              type="text"
              name="telefone"
              value={form.telefone}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <Label>Especialidade</Label>
            <Input
              type="text"
              name="especialidade"
              value={form.especialidade}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <Label>Data e hora</Label>
            <Input
              type="datetime-local"
              name="data"
              value={form.data}
              onChange={handleChange}
            />
          </FormGroup>

          <Button onClick={handleSubmit}>Confirmar Agendamento</Button>
        </AgendarWrapper>
      </Container>
    </>
  );
}
