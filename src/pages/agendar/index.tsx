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

export default function Agendar() {
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

    console.log("Dados do agendamento:", form);
    alert("Agendamento enviado com sucesso!");
    router.push("/dashboard");
  };

  return (
    <>
      <Container>
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
