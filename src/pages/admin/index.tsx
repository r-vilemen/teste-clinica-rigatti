import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Container from "@/components/Container";
import Button from "@/components/Button";
import {
  ActionGroup,
  AdminWrapper,
  Label,
  ScheduleItem,
  ScheduleList,
  Status,
  Title,
} from "@/ui/styles/Pages/admin/styles";

interface Agendamento {
  id: string;
  nome: string;
  telefone: string;
  especialidade: string;
  data: string;
  status: "pendente" | "aprovado" | "reprovado";
}

export default function Admin() {
  const router = useRouter();
  const [agendamentos, setAgendamentos] = useState<Agendamento[]>([]);

  useEffect(() => {
    const username = localStorage.getItem("username");
    if (username?.toLowerCase() !== "admin") {
      router.push("/login");
      return;
    }

    const armazenados = JSON.parse(
      localStorage.getItem("agendamentos") || "[]"
    );
    setAgendamentos(armazenados);
  }, [router]);

  const atualizarStatus = (id: string, status: "aprovado" | "reprovado") => {
    const atualizados = agendamentos.map((ag) =>
      ag.id === id ? { ...ag, status } : ag
    );
    localStorage.setItem("agendamentos", JSON.stringify(atualizados));
    setAgendamentos(atualizados);
  };

  return (
    <>
      <Container>
        <AdminWrapper>
          <Title>Todos os agendamentos</Title>

          <ScheduleList>
            {agendamentos.map((ag) => (
              <ScheduleItem key={ag.id}>
                <Label>Paciente:</Label> {ag.nome} <br />
                <Label>Especialidade:</Label> {ag.especialidade} <br />
                <Label>Data:</Label> {ag.data} <br />
                <Label>Status:</Label>{" "}
                <Status status={ag.status}>{ag.status}</Status>
                <ActionGroup>
                  <Button onClick={() => atualizarStatus(ag.id, "aprovado")}>
                    Aprovar
                  </Button>
                  <Button onClick={() => atualizarStatus(ag.id, "reprovado")}>
                    Reprovar
                  </Button>
                </ActionGroup>
              </ScheduleItem>
            ))}
          </ScheduleList>
        </AdminWrapper>
      </Container>
    </>
  );
}
